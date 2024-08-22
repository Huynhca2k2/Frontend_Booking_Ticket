import { Button, Divider, Typography } from "antd";
import { AutoComplete, Input } from "antd";
import { useState } from "react";
import { DatePicker, Space } from "antd";
import toImg from "../assets/images/to.png";
import fromImg from "../assets/images/from.png";
import dateImg from "../assets/images/date.png";
import { SwapOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const provinces = ["Hà Nội", "Hồ Chí Minh", "Cần Thơ", "Đà Nẵng", "Hải Phòng"];

function CustomSearchInput() {
  const [options, setOptions] = useState([]);

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleSearch = (value) => {
    const filteredOptions = provinces
      .filter((province) =>
        province.toLowerCase().includes(value.toLowerCase())
      )
      .map((province) => ({ value: province }));
    setOptions(filteredOptions);
  };

  return (
    <div className="flex flex-row gap-4 justify-between">
      <div className="flex flex-row flex-1 h-[54px] border border-gray-300 rounded-lg justify-around">
        <div className="flex flex-row items-center">
          <img
            src={toImg}
            alt="toImg"
            className="h-[24px] w-[24px] object-cover"
          />
          <div className="flex flex-col items-start">
            <Text type="secondary" className="text-center ml-[10px]">
              Nơi xuất phát
            </Text>
            <AutoComplete
              options={options}
              onSearch={handleSearch}
              placeholder="Nhập tên tỉnh thành"
            >
              <Input className="border-none focus:border-none focus:shadow-none" />
            </AutoComplete>
          </div>
        </div>
        <div className="relative">
          <Divider type="vertical" className="h-full"></Divider>
          <Button
            type="primary"
            shape="circle"
            className="absolute top-[10px] -left-2 bg-slate-300 text-[#484848]"
            icon={<SwapOutlined />}
          />
        </div>

        <div className="flex flex-row items-center">
          <img
            src={fromImg}
            alt="fromImg"
            className="h-[24px] w-[24px] object-cover"
          />
          <div className="flex flex-col items-start">
            <Text type="secondary" className="text-center ml-[10px]">
              Nơi đến
            </Text>
            <AutoComplete
              options={options}
              onSearch={handleSearch}
              placeholder="Nhập tên tỉnh thành"
            >
              <Input className="border-none focus:border-none focus:shadow-none" />
            </AutoComplete>
          </div>
        </div>

        <div className="flex flex-row  items-center">
          <Divider type="vertical" className="h-full" />
          <img
            src={dateImg}
            alt="dateImg"
            className="h-[24px] w-[24px] object-cover"
          />
          <div className="flex flex-col items-start">
            <Text type="secondary" className="text-center ml-[10px]">
              Ngày đi
            </Text>
            <DatePicker
              onChange={onChange}
              className="border-none focus-within:border-none focus-within:shadow-none"
            />
          </div>
        </div>
      </div>
      <div>
        <Button
          type="primary"
          className="h-full font-medium text-lg text-[#141414] bg-[#ffd333] w-[148px] hover:!bg-yellow-300 hover:!border-[#ffd333] hover:!text-gray-600"
        >
          Tìm Kiếm
        </Button>
      </div>
    </div>
  );
}

export default CustomSearchInput;
