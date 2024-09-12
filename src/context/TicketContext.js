import React, { createContext, useState, useContext } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [ticket, setTicket] = useState({
    price: 0.0,
    creationDate: "",
    discount: 0.0,
    status: true,
    userId: "",
    tripId: 0,
    busSelectedId: 0,
    pickupLocationId: 0,
    dropoffLocationId: 0,
    seatIds: [],
  });

  return (
    <TicketContext.Provider value={{ ticket, setTicket }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicket = () => useContext(TicketContext);

export default TicketProvider;
