import React, { createContext, useState, useContext } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tripsContext, setTripsContext] = useState(null);
  const [tripCurrent, setTripCurrent] = useState(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        tripsContext,
        setTripsContext,
        tripCurrent,
        setTripCurrent,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
