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
import Admin from "./components/Admin";
import UsersPage from "./components/Admin/UsersPage"
import BusPage from "./components/Admin/BusPage";
import ManageChuyenXe from "./components/Admin/ManageChuyenXe";
import ManageTicket from "./components/Admin/ManageTicket";

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
            <Route path="/admin" element={<Admin />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking-confirm" element={<BookingConfirm />} />
            <Route path="/payment-method" element={<PaymentMethod />} />


            <Route path="/admin/users" element={<UsersPage />} />
            <Route path="/admin/buses" element={<BusPage />} />
            <Route path="/admin/routes" element={<ManageChuyenXe />} />
            <Route path="/admin/tickets" element={<ManageTicket />} />

            {/* <Route path="/admin/settings" element={<SettingsPage />} /> */}
          </Routes>
          <Footer />
        </Router>
      </TicketProvider>
    </>
  );
}

export default App;
