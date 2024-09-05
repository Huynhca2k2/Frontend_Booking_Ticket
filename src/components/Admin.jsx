import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../services/localStorageService";
import Header from "./header";
import { Box, Card, CircularProgress, Typography } from "@mui/material";
import AdminMenu from "./AdminMenu";

export default function Admin() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});

  const getUserDetails = async (accessToken) => {
    const response = await fetch(
      "http://localhost:8080/identity/users/my-info",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`, // Set Authorization header
        },
      }
    );

    const data = await response.json();

    console.log(data);

    setUserDetails(data.result);
  };

  useEffect(() => {
    const accessToken = getToken();

    if (!accessToken) {
      navigate("/login");
    } else {
      getUserDetails(accessToken);
    }
  }, [navigate]);

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        <AdminMenu />
        {/* <div className="flex-1 p-6">{children}</div> */}
      </div>
    </>
  );
}
