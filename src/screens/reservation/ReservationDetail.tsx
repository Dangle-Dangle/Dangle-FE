import React from "react";
import "../../styles/reservation/ReservationDetail.css";
import { IoIosArrowBack } from "react-icons/io";
import { Reservation } from "./ReservationList";
import { useLocation } from "react-router-dom";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";

interface ReservationDetail extends Reservation {
  memberName: string; // 예약자
  memberPhone: string; // 예약자 연락처
  petName: string; // 반려동물 이름
  request: string; // 요청사항
  menuPrice: number; // 메뉴가격
  totalPrice: number; // 총 결제금액
  payMethod: string; // 결제방식
}

const ReservationDetail: React.FC = () => {
  const location = useLocation();
  const reservation = location.state?.reservation as Reservation;

  // const reservationDetail: ReservationDetail = [
  //   {
  //     ...reservation,
  //     memberName: "김수현",
  //     memberPhone: "010-1111-2222",
  //     petName: "별이",
  //     request: "노령견이라서 조심히 미용 부탁드려요!",
  //     menuPrice: 50000,
  //     totalPrice: 50000,
  //     payMethod: "카드결제",
  //   },
  // ];

  return (
    <div className="reservation-detail-container">
      <div className="reservation-title">
        <IoIosArrowBack />
        <p>예약 상세</p>
      </div>
      <div className="detail-box">
        <div className="reservation-name-status">
          <p>{reservation.name}</p>
          {reservation.status === "완료" ? (
            <FaRegCircleCheck />
          ) : reservation.status === "대기" ? (
            <p>D-</p>
          ) : (
            <FaRegCircleXmark />
          )}
        </div>

        {/* 예약정보 */}
        <div className="detail-info-wrap">
          <p>예약정보</p>
          <div className="detail-border"></div>
          <div className="rv-info-box">
            <p>예약일시</p>
            <p>{reservation.date.toLocaleDateString()}</p>
          </div>
          <div className="rv-info-box">
            <p>예약번호</p>
            <p>{reservation.no}</p>
          </div>
          <div className="rv-info-box">
            <p>예약메뉴</p>
            <p>{reservation.menu}</p>
          </div>
          <div className="rv-info-box">
            <p>시술담당</p>
            <p>
              {reservation.designerName} {reservation.designerRole}
            </p>
          </div>
          <div className="rv-info-box">
            <p>예약자</p>
            {/* <p>{reservationDetail.}</p> */}
          </div>
          <div className="rv-info-box">
            <p>연락처</p>
            <p>{reservation.menu}</p>
          </div>
          <div className="rv-info-box">
            <p>반려동물</p>
            <p>{reservation.menu}</p>
          </div>
          <div className="rv-info-box">
            <p>요청사항</p>
            <p>{reservation.menu}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationDetail;
