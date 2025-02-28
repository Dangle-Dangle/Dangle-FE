import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

// 리뷰 별점
const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0; //반쪽별이 필요한지 유무판단

  // 기본 별
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} />);
  }
  // 반쪽 별
  if (hasHalfStar) {
    stars.push(<FaStarHalf key={fullStars} />);
  }
  //빈자리 빈 별로 채우기
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={fullStars + i} style={{ color: "#ffb703" }} />);
  }

  return stars;
};

export default renderStars;
