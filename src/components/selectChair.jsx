import React, { useState } from "react";
import Chair from "./chair";

const listChair = [
  { id: 0, codeChair: "A1", status: "available" },
  { id: 1, codeChair: "A2", status: "available" },
  { id: 2, codeChair: "A3", status: "available" },
  { id: 3, codeChair: "A4", status: "available" },
  { id: 4, codeChair: "A5", status: "unavailable" },
  { id: 5, codeChair: "A6", status: "selected" },
];

const SelectChair = () => {
  const [chairs, setChairs] = useState(listChair);

  const handleClick = (clickedChair) => {
    console.log(
      `CodeChar: ${clickedChair.codeChair}, Status: ${clickedChair.status}`
    );

    const updatedChairs = chairs.map((chair) =>
      chair.codeChair === clickedChair.codeChair
        ? {
            ...chair,
            status: chair.status === "available" ? "selected" : "available",
          }
        : chair
    );
    setChairs(updatedChairs);
  };

  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.305 24h-.61c-.035-.004-.07-.01-.105-.012a11.783 11.783 0 0 1-2.117-.261 12.027 12.027 0 0 1-6.958-4.394A11.933 11.933 0 0 1 .027 12.78L0 12.411v-.822c.005-.042.013-.084.014-.127a11.845 11.845 0 0 1 1.102-4.508 12.007 12.007 0 0 1 2.847-3.852A11.935 11.935 0 0 1 11.728.003c.947-.022 1.883.07 2.81.27 1.22.265 2.369.71 3.447 1.335a11.991 11.991 0 0 1 3.579 3.164 11.876 11.876 0 0 1 2.073 4.317c.178.712.292 1.434.334 2.168.008.146.02.292.029.439v.609c-.004.03-.011.06-.012.089a11.81 11.81 0 0 1-1.05 4.521 12.02 12.02 0 0 1-1.92 2.979 12.046 12.046 0 0 1-6.395 3.812c-.616.139-1.24.23-1.872.265-.149.008-.297.02-.446.03zm8.799-13.416c-.527-3.976-4.078-7.808-9.1-7.811-5.02-.003-8.583 3.823-9.11 7.809h.09c.64-.035 1.278-.092 1.912-.195.815-.131 1.614-.326 2.378-.639.625-.255 1.239-.54 1.855-.816.82-.368 1.673-.593 2.575-.62a7.123 7.123 0 0 1 1.947.187c.585.146 1.136.382 1.68.634.57.264 1.14.526 1.733.736 1.2.424 2.442.62 3.706.7.11.006.222.01.334.015zm-10.95 10.471v-.094c0-1.437 0-2.873-.002-4.31 0-.141-.011-.284-.035-.423a2.787 2.787 0 0 0-.775-1.495c-.564-.582-1.244-.896-2.067-.892-1.414.007-2.827.002-4.24.002h-.09a9.153 9.153 0 0 0 3.125 5.256 9.15 9.15 0 0 0 4.083 1.956zm3.689.001c1.738-.36 3.25-1.137 4.528-2.355 1.4-1.334 2.287-2.956 2.685-4.855l-.077-.003h-4.362c-.237 0-.47.038-.695.112-.667.22-1.188.635-1.588 1.206a2.673 2.673 0 0 0-.494 1.59c.008 1.4.003 2.801.003 4.202v.103zM12.05 14.22c1.215-.035 2.204-1.083 2.165-2.275-.039-1.223-1.095-2.215-2.29-2.166-1.211.05-2.2 1.108-2.15 2.302.051 1.191 1.108 2.186 2.275 2.139z"
          fill="#858585"
        ></path>
      </svg>
      {chairs.map((chair) => (
        <Chair
          key={chair.codeChair}
          status={chair.status}
          codeChair={chair.codeChair}
          onClick={() => handleClick(chair)}
        />
      ))}
    </div>
  );
};

export default SelectChair;
