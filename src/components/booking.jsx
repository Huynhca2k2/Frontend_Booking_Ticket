import BookingBox from "./BookingBox";
import { Carousel, Empty, Pagination } from "antd";
import { Alert, Tabs, Typography } from "antd";
import { Input, Radio, Space } from "antd";
import { useEffect, useState } from "react";
import { Collapse } from "antd";
import banner1 from "../assets/images/banner-pc_1.jpg";
import banner2 from "../assets/images/banner-pc_2.jpg";
import banner3 from "../assets/images/banner-pc_3.jpg";
import banner4 from "../assets/images/banner-pc_4.jpg";

import { useLocation } from "react-router-dom";
import { bookings, items } from "../services/api";
import Ticket from "./Ticket";

const { Title, Text } = Typography;

function Booking() {
  const location = useLocation();
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const from = params.get("from");
    const to = params.get("to");
    const date = params.get("date");

    const filtered = bookings.filter(
      (booking) =>
        booking.from === from &&
        booking.to === to &&
        booking.time.dateStart === date
    );

    setFilteredBookings(filtered);
  }, [location.search]);

  return (
    <div className="bg-[#f2f2f2]">
      <div className="custom-container pt-4">
        <BookingBox />
      </div>
      <div className="flex flex-row !mt-4 gap-4 custom-container">
        <div className="flex flex-col gap-4 w-1/4">
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
            {[banner1, banner2, banner3, banner4].map((banner, idx) => (
              <div key={idx} className="h-[100px]">
                <img
                  src={banner}
                  alt="banner qc"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            ))}
          </Carousel>
          <div className="flex flex-col gap-4">
            {filteredBookings.length !== 0 ? (
              filteredBookings.map((itemBoo, index) => (
                <Ticket bookingItem={itemBoo} key={index} />
              ))
            ) : (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                  <Typography.Text>
                    Không tìm thấy kết quả phù hợp
                  </Typography.Text>
                }
              />
            )}
            <Pagination align="center" defaultCurrent={1} total={12} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
