import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import SearchAccount from "./screens/searchAccount/SearchAccount";
import FoundId from "./screens/searchAccount/FoundId";
import Login from "./screens/login/Login";
import Home from "./screens/mainHome/Home";
import Footer from "./common/Footer";
import Header from "./common/Header";
import FoundPw from "./screens/searchAccount/FoundPw";
import ResetPw from "./screens/searchAccount/ResetPw";
import JoinAgree from "./screens/join/JoinAgree";
import JoinForm from "./screens/join/JoinForm";
import JoinComplete from "./screens/join/JoinComplete";
import SearchStore from "./screens/store/SearchStore";
import StoreInfo from "./screens/store/StoreInfo";
import ReservationList from "./screens/reservation/ReservationList";
import ReservationDetail from "./screens/reservation/ReservationDetail";
import ReservationForm from "./screens/reservation/ReservationForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/searchAccount" element={<SearchAccount />} />
        <Route path="/foundId" element={<FoundId />} />
        <Route path="/foundPw" element={<FoundPw />} />
        <Route path="/resetPw" element={<ResetPw />} />
        <Route path="/searchStore" element={<SearchStore />} />
        <Route path="/storeInfo" element={<StoreInfo />} />
        <Route path="/reservationList" element={<ReservationList />} />
        <Route path="/reservationDetail" element={<ReservationDetail />} />
        <Route path="/reservationForm" element={<ReservationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/joinAgree" element={<JoinAgree />} />
        <Route path="/joinForm" element={<JoinForm />} />
        <Route path="/joinComplete" element={<JoinComplete />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
