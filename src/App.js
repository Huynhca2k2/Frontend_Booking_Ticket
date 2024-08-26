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
import { TicketProvider } from "./context/TicketContext";

function App() {
  return (
    <>
      <TicketProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-ticket" element={<MyTicket />} />
            <Route path="/login" element={<Login />} />
            <Route path="/info-user" element={<InfoUser />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking-confirm" element={<BookingConfirm />} />
            <Route path="/payment-method" element={<PaymentMethod />} />
          </Routes>
          <Footer />
        </Router>
      </TicketProvider>
    </>
  );
}

export default App;
