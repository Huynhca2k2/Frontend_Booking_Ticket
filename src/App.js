import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import InfoUser from "./components/infoUser";
import Booking from "./components/booking";
import BookingConfirm from "./components/bookingConfirm";
import PaymentMethod from "./components/paymentMethod";
import MyTicket from "./components/myTicket";
import Login from "./components/login";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-ticket" element={<MyTicket />} />
          <Route path="/login" element={<Login />} />
          <Route path="/info-user" element={<InfoUser />} />
          <Route path="/booking/:slug" element={<Booking />} />
          <Route path="/booking-confirm" element={<BookingConfirm />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
