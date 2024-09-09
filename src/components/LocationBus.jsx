import React from "react";
import { Typography } from "antd";
import { addHoursToDateTime } from "../services/api";
const { Title, Text } = Typography;

const LocationBus = ({
  departureTime,
  pickupLocations = [],
  dropoffLocations = [],
}) => {
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
          {pickupLocations?.map((item, index) => {
            return (
              <div className="mb-4" key={index}>
                <Text className="!font-medium">
                  {addHoursToDateTime(departureTime, index)} • {item?.name}
                </Text>
                <br />
                <Text italic>{item?.address}</Text>
              </div>
            );
          })}
        </div>
        <div className="w-1/2">
          <Title level={4}>Điểm trả</Title>
          {dropoffLocations?.map((item, index) => {
            return (
              <div className="mb-4" key={index}>
                <Text className="!font-medium">
                  {addHoursToDateTime(departureTime, index)} • {item?.name}
                </Text>
                <br />
                <Text italic>{item?.address}</Text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LocationBus;
