import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { TicketProvider } from "./context/TicketContext";
import { UserProvider, useUser } from "./context/UserContext";
import Home from "./components/Home";
import MyTicket from "./components/MyTicket";
import InfoUser from "./components/InfoUser";
import Booking from "./components/Booking";
import BookingConfirm from "./components/BookingConfirm";
import PaymentMethod from "./components/PaymentMethod";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { fetchUserInfo } from "./services/auth";


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const { user, setUser } = useUser();

  useEffect(() => {
    user === null ? setIsLogin(false) : setIsLogin(true);
  }, [user]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const getUserInfo = async () => {
        const userInfo = await fetchUserInfo();
        if (userInfo.status === 401) {
          //nếu token hết hạn thì cho người dùng đăng nhập lại
          localStorage.removeItem("token");
          setIsLogin(false);
        } else {
          setUser(userInfo);
        }
      };
      getUserInfo();
    }
  }, [setUser]);

  return (
    <TicketProvider>
      <Router>
        <Header isLogin={isLogin} setIsLogin={setIsLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-ticket" element={<MyTicket />} />
          <Route path="/info-user" element={<InfoUser />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking-confirm" element={<BookingConfirm />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
        </Routes>
        <Footer />
      </Router>
    </TicketProvider>
  );
}

export default App;
