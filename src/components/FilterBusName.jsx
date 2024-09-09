import React, { useEffect, useState } from "react";
import { Checkbox, message } from "antd";
import { getAllBuses } from "../services/bus";

const FilterBusName = ({ onFilterChange }) => {
  const [buses, setBuses] = useState([]);
  const [checkedBuses, setCheckedBuses] = useState([]);

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const busData = await getAllBuses();
        const uniqueBuses = busData.filter(
          (bus, index, self) =>
            index === self.findIndex((b) => b.name === bus.name)
        );
        setBuses(uniqueBuses);
      } catch (error) {
        message.error("Có lỗi xảy ra khi lấy danh sách xe");
      }
    };
    fetchBuses();
  }, []);

  const onChange = (e, bus) => {
    const checked = e.target.checked;
    const updatedCheckedBuses = checked
      ? [...checkedBuses, bus.name]
      : checkedBuses.filter((name) => name !== bus.name);
    setCheckedBuses(updatedCheckedBuses);
    onFilterChange(updatedCheckedBuses);
  };

  return (
    <div>
      {buses.length > 0 ? (
        buses.map((bus) => (
          <div key={bus.id} className="mt-2">
            <Checkbox
              onChange={(e) => onChange(e, bus)}
              checked={checkedBuses.includes(bus.name)}
            >
              {bus.name}
            </Checkbox>
          </div>
        ))
      ) : (
        <p>Đang tải danh sách xe...</p>
      )}
    </div>
  );
};

export default FilterBusName;
