import React, { createContext, useState, useContext } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [ticket, setTicket] = useState({
    id: 0,
    user: {
      name: "",
      email: "",
      numberPhone: "",
    },
    time: {
      hourStart: "",
      dateStart: "",
      hourEnd: "",
      dateEnd: "",
    },
    placeStart: {},
    placeEnd: {},
    chairs: [],
  });

  return (
    <TicketContext.Provider value={{ ticket, setTicket }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicket = () => useContext(TicketContext);

export default TicketProvider;
