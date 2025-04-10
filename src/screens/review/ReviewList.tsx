import React from "react";
import "../../styles/review/ReviewList.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { renderStars } from "../../utils/renderStars";
import Button from "../../components/Button";

const ReviewList: React.FC = () => {
  const navigation = useNavigate();
  return (
    <div className="review-list-container">
      <div className="review-list-title-wrap">
        <IoIosArrowBack onClick={() => navigation(-1)} />
        <p>나의 리뷰 내역</p>
      </div>
      <div className="review-list-wrap">
        <div className="review-list-cnt-filter">
          <p>총 n건</p>
          <select>
            <option>최신순</option>
          </select>
        </div>
        <div className="review-list-box">
          <div className="review-store-date">
            <p>댕글댕글 1호점</p>
            <p>2025.02.07</p>
          </div>
          <p className="review-list-designer-grooming">원장 김수현 | 기본 가위컷 3mm</p>
          <div>{renderStars(5)}</div>
          <img src="./image/review1.jpg" />
          <div className="review-list-bottom">
            <p className="review-list-content">
              우리 별이가 노견이라 걱정이 많았는데 스트레스 안받고 예약 잘 마무리한 것 같아요 :)
              원장님 감사합니다 다음에 또 예약할게요! ❤️
            </p>
            <div className="review-list-btn">
              <Button text="수정" className="white-button-s" />
              <Button text="삭제" className="white-button-s" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
