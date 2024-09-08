import React from "react";
import { Typography } from "antd";
const { Title, Text } = Typography;

const LocationBus = () => {
  return (
    <div className="pb-8">
      <Title level={5} className="!text-blue-600 !font-bold">
        Lưu ý
      </Title>
      <Text type="secondary" className="!font-medium">
        Các mốc thời gian đón, trả bên dưới là thời gian dự kiến.
        <br /> Lịch này có thể thay đổi tùy tình hình thưc tế.
      </Text>
      <div className="flex flex-row gap-4 mt-6">
        <div className="w-1/2">
          <Title level={4}>Điểm đón</Title>
          <Text className="!font-medium">13:00 • 116 Quốc lộ 13</Text>
          <br />
          <Text italic>
            Đc: 116 Quốc lộ 13 (Gần BX Miền Đông cũ) - 116 Quốc lộ 13
          </Text>
        </div>
        <div className="w-1/2">
          <Title level={4}>Điểm trả</Title>
          <Text className="!font-medium">19:45 • Vp Đà Lạt</Text>
          <br />
          <Text italic>
            Đc: Đầu đường KQH Phạm Hồng Thái, Phường 10, Tp.Đà Lạt, Lâm Đồng -
            Vp Đà Lạt
          </Text>
        </div>
      </div>
    </div>
  );
};

export default LocationBus;
