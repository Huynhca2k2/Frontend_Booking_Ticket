import BookingBox from "./bookingBox";
import CustomSearchInput from "./customSearchInput";
import { Carousel } from "antd";
import Ticket from "./ticket";
import { Alert, Tabs, Typography } from "antd";
import { Input, Radio, Space } from "antd";
import { useState } from "react";
import { Collapse } from "antd";
import banner1 from "../assets/images/banner-pc_1.jpg";
import banner2 from "../assets/images/banner-pc_2.jpg";
import banner3 from "../assets/images/banner-pc_3.jpg";
import banner4 from "../assets/images/banner-pc_4.jpg";

const { Title, Text } = Typography;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: <Title level={5}>Giờ đi</Title>,
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: <Title level={5}>Nhà xe</Title>,
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: <Title level={5}>Giá vé</Title>,
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: <Title level={5}>Điểm đón</Title>,
    children: <p>{text}</p>,
  },
  {
    key: "5",
    label: <Title level={5}>Điểm trả</Title>,
    children: <p>{text}</p>,
  },
  {
    key: "6",
    label: <Title level={5}>Vị trí ghế</Title>,
    children: <p>{text}</p>,
  },
];

function Booking() {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="bg-[#f2f2f2]">
      <div className="custom-container pt-4">
        <BookingBox />
      </div>
      <div className="flex flex-row !mt-4 gap-4 custom-container">
        <div className="flex flex-col gap-4 w-1/4 ">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <Title level={4} className="!text-black !font-bold">
              Sắp xếp
            </Title>
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio value={1}>Mặc định</Radio>
                <Radio value={2}>Giờ đi sớm nhất</Radio>
                <Radio value={3}>Giờ đi muộn nhất</Radio>
                <Radio value={4}>Giá tăng dần</Radio>
                <Radio value={5}>Giá giảm dần</Radio>

                <Radio value={6}>
                  More...
                  {value === 7 ? (
                    <Input
                      style={{
                        width: 100,
                        marginInlineStart: 10,
                      }}
                    />
                  ) : null}
                </Radio>
              </Space>
            </Radio.Group>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <Title level={4} className="!text-black px-4 pt-4">
              Lọc
            </Title>
            <Collapse
              items={items}
              defaultActiveKey={["1"]}
              ghost
              expandIconPosition={"end"}
            />
          </div>
        </div>
        <div className="w-3/4 flex flex-col gap-4">
          <Carousel dots={false} autoplay>
            <div className="h-[100px]">
              <img
                src={banner1}
                alt="banner qc"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            <div className="h-[100px]">
              <img
                src={banner2}
                alt="banner qc"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            <div className="h-[100px]">
              <img
                src={banner3}
                alt="banner qc"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            <div className="h-[100px]">
              <img
                src={banner4}
                alt="banner qc"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          </Carousel>
          <div className="flex flex-col gap-4">
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
