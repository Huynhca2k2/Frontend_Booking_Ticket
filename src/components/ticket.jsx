import { useState } from "react";
import { StarOutlined } from "@ant-design/icons";
import imgBus from "../assets/images/imgbus.jpeg";
import { Badge, Button, Divider, Modal, Timeline } from "antd";
import { Alert, Tabs, Typography } from "antd";
import { AiOutlineEnvironment } from "react-icons/ai";
import { message, Steps, theme } from "antd";
import SelectChair from "./selectChair";
const steps = [
  {
    title: "Chỗ mong muốn",
    content: <SelectChair />,
  },
  {
    title: "Điểm đón trả",
    content: "Second-content",
  },
];

const { Title, Text } = Typography;

function Ticket() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <div className="flex flex-row gap-4 p-4 bg-white rounded-lg">
      <div className="w-1/4 h-full bg-gray-900">
        <Badge.Ribbon
          text="Xác nhận tức thì"
          color="green"
          placement="start"
          className="w-max"
        >
          <img
            src={imgBus}
            alt="img bus"
            className="w-full h-[152px] object-contain"
          />
        </Badge.Ribbon>
      </div>

      <div className="w-3/4 flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center">
            <Title level={5} className="!font-bold !mb-0">
              An Anh Limousine
            </Title>
            <Button
              icon={<StarOutlined />}
              type="primary"
              className="h-[21px] px-2 gap-1"
            >
              4.7
            </Button>
          </div>
          <Text>Limousine 24 Phòng Đôi</Text>
          <div className="relative">
            <Timeline
              items={[
                {
                  color: "#484848",
                  children: "13:00 • 116 Quốc lộ 13",
                },
                {
                  dot: <AiOutlineEnvironment />,
                  color: "#707070",
                  children: "19:45 • Vp Đà Lạt",
                },
              ]}
            />
            <Text className="absolute left-0 bottom-0" type="secondary">
              Thời gian: 6h45p
            </Text>
          </div>
        </div>

        <div className="flex flex-col justify-between items-end">
          <Title level={4} className="!font-bold !text-[#2474e5]">
            Từ 350.000đ
          </Title>
          <div className="border-[1px] border-[#27ae60] px-2 py-1 rounded w-max relative flash-sale">
            <Text>Giảm 25%</Text>
          </div>
          <Title level={5} className="!font-normal">
            Còn 12 chỗ trống
          </Title>
          <div className="flex flex-row items-end gap-2">
            <Button type="link" className="underline font-medium">
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
              title="Chọn chuyến - An Anh Limousine"
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
                      <span className="!font-bold !text-[#2474e5]">G3</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <span className="!font-normal">Tổng cộng:</span>
                      <span className="!font-bold !text-[#2474e5]">
                        280,000 đ
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
                  <Button
                    type="primary"
                    onClick={() => message.success("Processing complete!")}
                    style={{ marginLeft: "auto" }}
                  >
                    Tiếp tục
                  </Button>
                )}
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
