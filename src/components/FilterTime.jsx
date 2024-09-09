import { Slider } from "antd";
import React, { useState } from "react";

const FilterTime = ({ setRange, range }) => {
  const handleChange = (value) => {
    setRange(value);
  };

  return (
    <div>
      <Slider
        min={0}
        max={24}
        range
        defaultValue={[0, 24]}
        value={range}
        onChange={handleChange}
        marks={{
          0: "0",
          24: "24",
        }}
      />
      <div>
        Khung giờ: {range[0]} giờ - {range[1]} giờ
      </div>
    </div>
  );
};

export default FilterTime;
