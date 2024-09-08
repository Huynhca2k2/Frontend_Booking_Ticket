import React, { createContext, useState, useContext } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [ticket, setTicket] = useState({
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
