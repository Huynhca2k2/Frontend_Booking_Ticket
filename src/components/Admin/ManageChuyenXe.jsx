import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../services/localStorageService";
import AdminMenu from "../AdminMenu";
import Select from "react-select";
import { toast } from "react-toastify";

const ManageChuyenXe = () => {
  const navigate = useNavigate();
  const [allcodes, setAllcodes] = useState([]);
  const [selectedValueFrom, setSelectedValueFrom] = useState(null);
  const [selectedValueEnd, setSelectedValueEnd] = useState(null);

  const getallCodes = async (accessToken) => {
    try {
      const response = await fetch(
        "http://localhost:8080/identity/allCodes/type?type=DiaDiem",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await response.json();
      console.log(data);

      // Chuyển đổi dữ liệu thành định dạng phù hợp cho react-select
      const result = data.map((item) => ({
        label: item.value, // Hiển thị trong dropdown
        value: item.keyMap, // Giá trị thực tế khi được chọn
      }));

      console.log("Formatted Data for Select:", result);
      setAllcodes(result);
    } catch (error) {
      console.error("Error fetching item details:", error);
      setAllcodes([]);
    }
  };

  useEffect(() => {
    const accessToken = getToken();

    if (!accessToken) {
      navigate("/login");
    } else {
      getallCodes(accessToken);
    }
  }, [navigate]);

  const handleChangeFrom = (selectedOption) => {
    setSelectedValueFrom(selectedOption);
    console.log("Selected value from:", selectedOption); // Xử lý giá trị được chọn
  };
  const handleChangeEnd = (selectedOption) => {
    setSelectedValueEnd(selectedOption);
    console.log("Selected value end:", selectedOption); // Xử lý giá trị được chọn
  };

  return (
    <>
      <AdminMenu />
      <h1>Chọn điểm đón</h1>
      <Select
        value={selectedValueFrom}
        onChange={handleChangeFrom}
        options={allcodes} // Truyền dữ liệu vào react-select
      />
      <h1>Chọn điểm đến</h1>
      <Select
        value={selectedValueEnd}
        onChange={handleChangeEnd}
        options={allcodes} // Truyền dữ liệu vào react-select
      />
      {/* {selectedValue && <div>Bạn đã chọn: {selectedValue.label}</div>} */}
    </>
  );
};

export default ManageChuyenXe;
