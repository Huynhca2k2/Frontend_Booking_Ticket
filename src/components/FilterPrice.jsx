import { Slider } from "antd";
import React, { useState } from "react";

const FilterPrice = ({ setRangePrice, rangePrice }) => {
  const handleChange = (value) => {
    setRangePrice(value);
  };

  return (
    <div>
      <Slider
        min={0}
        max={1000}
        range
        defaultValue={[0, 1000]}
        value={rangePrice}
        onChange={handleChange}
        marks={{
          0: "0",
          1000: "1tr",
        }}
      />
      <div>
        Từ: {rangePrice[0] * 1000} đ Đến: {rangePrice[1] * 1000} đ
      </div>
    </div>
  );
};

export default FilterPrice;
