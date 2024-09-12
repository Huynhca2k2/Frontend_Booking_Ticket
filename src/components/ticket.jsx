import { useEffect, useState } from "react";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  StarOutlined,
} from "@ant-design/icons";

import { Badge, Button, Divider, Modal, Timeline } from "antd";
import { Alert, Tabs, Typography } from "antd";
import { AiOutlineEnvironment } from "react-icons/ai";
import { message, Steps, theme } from "antd";
import SelectChair from "./SelectChair";
import SelectLocation from "./SelectLocation";
import { Link } from "react-router-dom";
import { useTicket } from "../context/TicketContext";
import LocationBus from "./LocationBus";
import GatingBus from "./GatingBus";
import PictureBus from "./PictureBus";
import PolicyBus from "./PolicyBus";
import {
  addHoursToDateTime,
  getCurrentDate,
  getHourFromDateTime,
} from "../services/api";
import { useUser } from "../context/UserContext";

const { Title, Text } = Typography;
const calculateDuration = (startTime, endTime) => {
  const start = new Date(`1970-01-01T${startTime}:00`);
  const end = new Date(`1970-01-01T${endTime}:00`);
  const duration = new Date(end - start);

  const hours = duration.getUTCHours();
  const minutes = duration.getUTCMinutes();

  return `${hours}h${minutes}p`;
};

function Ticket({ busesCustom }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTabOpen, setIsTabOpen] = useState(false);
  const [selectedChairs, setSelectedChairs] = useState([]);
  const [current, setCurrent] = useState(0);
  const [tripItem, setTripItem] = useState(null);
  const { ticket, setTicket } = useTicket();
  const { tripsContext } = useUser();

  useEffect(() => {
    const tripOfBus = tripsContext.find(
      (booking) => Number(booking?.id) === Number(busesCustom?.tripId)
    );
    setTripItem(tripOfBus);
  }, [tripItem]);

  const handleAddTime = () => {
    setTicket((prevTicket) => ({
      ...prevTicket,
      creationDate: getCurrentDate(),
      discount: 20.0,
      status: true,
      price: selectedChairs.length * busesCustom?.priceReal,
      tripId: tripItem?.id,
      busSelectedId: Number(busesCustom?.id),
      seatIds: selectedChairs,
    }));
  };

  const steps = [
    {
      title: "Chỗ mong muốn",
      content: (
        <SelectChair
          onChairSelect={(selectedChairs) => setSelectedChairs(selectedChairs)}
          chairList={busesCustom?.seats}
        />
      ),
    },
    {
      title: "Điểm đón trả",
      content: (
        <SelectLocation
          time={tripItem?.departureTime}
          travelTime={tripItem?.travelTime}
          placeStart={tripItem?.pickupLocations}
          placeEnd={tripItem?.dropoffLocations}
        />
      ),
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const next = () => {
    if (selectedChairs.length === 0) {
      message.warning("Vui lòng chọn ít nhất một chổ ngồi");
      return;
    }

    setCurrent(current + 1);
  };
  const prev = () => {
    setSelectedChairs([]);
    setCurrent(current - 1);
  };

  const toggleShowTab = () => {
    setIsTabOpen(!isTabOpen);
  };

  const availableChairCount = busesCustom?.seats?.filter(
    (chair) => chair.status !== "UNAVAILABLE"
  ).length;

  const tabItems = [
    {
      label: "Điểm đón, trả",
      key: "1",
      children: (
        <LocationBus
          departureTime={tripItem?.departureTime}
          pickupLocations={tripItem?.pickupLocations}
          dropoffLocations={tripItem?.dropoffLocations}
        />
      ),
    },
    {
      label: "Đánh giá",
      key: "2",
      children: <GatingBus rating={busesCustom?.rating} />,
    },
    {
      label: "Hình ảnh",
      key: "3",
      children: <PictureBus />,
    },
    {
      label: "Chính sách",
      key: "4",
      children: <PolicyBus />,
    },
  ];

  return (
    <div className="bg-white rounded-lg hover:shadow-lg p-4 ">
      <div className="flex flex-row gap-4">
        <div className="w-1/4 h-full bg-gray-900">
          <Badge.Ribbon
            text="Xác nhận tức thì"
            color="green"
            placement="start"
            className="w-max"
          >
            <img
              src={busesCustom?.image}
              alt={busesCustom?.descBus}
              className="w-full h-[152px] object-contain"
            />
          </Badge.Ribbon>
        </div>

        <div className="w-3/4 flex flex-row justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
              <Title level={5} className="!font-bold !mb-0">
                {busesCustom?.name}
              </Title>
              <Button
                icon={<StarOutlined />}
                type="primary"
                className="h-[21px] px-2 gap-1"
              >
                {busesCustom?.rating}
              </Button>
            </div>
            <Text>Loại xe: {busesCustom?.type}</Text>
            <div className="relative">
              <Timeline
                items={[
                  {
                    color: "#484848",
                    children: (
                      <>{`${addHoursToDateTime(busesCustom?.departureTime)} • ${
                        tripItem?.pickupLocations[0]?.name
                      }`}</>
                    ),
                  },
                  {
                    dot: <AiOutlineEnvironment />,
                    color: "#707070",
                    children: (
                      <>{`${addHoursToDateTime(
                        tripItem?.departureTime,
                        tripItem?.travelTime
                      )} • ${tripItem?.dropoffLocations[0]?.name}`}</>
                    ),
                  },
                ]}
              />
              <Text className="absolute left-0 bottom-0" type="secondary">
                Thời gian: {tripItem?.travelTime} Giờ
              </Text>
            </div>
          </div>

          <div className="flex flex-col justify-between items-end">
            <Title level={4} className="!font-bold !text-[#2474e5]">
              Từ {new Intl.NumberFormat("en-US").format(busesCustom?.priceReal)}{" "}
              đ
            </Title>
            <div className="border-[1px] border-[#27ae60] px-2 py-1 rounded w-max relative flash-sale">
              <Text>Giảm 20 %</Text>
            </div>
            <Title level={5} className="!font-normal">
              Còn {availableChairCount} chỗ trống
            </Title>
            <div className="flex flex-row items-end gap-2">
              <Button
                type="link"
                className="underline font-medium"
                icon={isTabOpen ? <CaretUpOutlined /> : <CaretDownOutlined />}
                iconPosition={"end"}
                onClick={toggleShowTab}
              >
                Thông tin chi tiết
              </Button>
              <Button
                type="primary"
                className="!bg-[#ffc700] text-[#484848] font-medium"
                onClick={showModal}
              >
                Chọn chuyến
              </Button>
              <Modal
                title={`Chuyến: ${tripItem?.departureLocation} : ${tripItem?.arrivalLocation} - ${busesCustom?.name}`}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
              >
                <Steps current={current}>
                  {steps.map((item, index) => (
                    <Steps key={index} title={item.title} />
                  ))}
                </Steps>
                <div style={{ marginTop: 24 }}>{steps[current].content}</div>
                <Divider className="my-4" />
                <div className=" flex flex-row justify-between">
                  {current > 0 && (
                    <Button onClick={prev} style={{ marginRight: "auto" }}>
                      Quay lại
                    </Button>
                  )}
                  {current < steps.length - 1 && (
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex fle-row gap-1">
                        <span className="!font-normal ">Ghế:</span>
                        <span className="!font-bold !text-[#2474e5]">
                          {selectedChairs.join(", ")}
                        </span>
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <span className="!font-normal">Tổng cộng:</span>
                        <span className="!font-bold !text-[#2474e5]">
                          {new Intl.NumberFormat("en-US").format(
                            selectedChairs.length * busesCustom?.priceReal
                          )}{" "}
                          đ
                        </span>

                        <Button
                          type="primary"
                          onClick={next}
                          style={{ marginLeft: "auto" }}
                        >
                          Tiếp tục
                        </Button>
                      </div>
                    </div>
                  )}
                  {current === steps.length - 1 && (
                    <Link to="/booking-confirm" className="block ml-auto">
                      <Button type="primary" onClick={handleAddTime}>
                        Tiếp tục
                      </Button>
                    </Link>
                  )}
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>

      {isTabOpen && (
        <div className="">
          <Divider className="mb-0 border-gray-400" />
          <Tabs defaultActiveKey="1" centered items={tabItems} />
        </div>
      )}
    </div>
  );
}

export default Ticket;
