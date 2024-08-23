import { Alert, Divider, Input, Radio, Space, Tabs, Typography } from "antd";
import { useState } from "react";
import { AiOutlineEnvironment } from "react-icons/ai";

const { Title, Text } = Typography;

function SelectLocation() {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <div className="p-4 bg-[#f7f7f7] flex flex-col gap-2 items-start ">
          <Title level={4} className="!text-black !font-bold !mb-0">
            Điểm đón
          </Title>
          <Text>Xem điểm đón gần bạn nhất?</Text>
        </div>
        <div className="p-4">
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value={1}>
                <Title level={5} className="!text-[#0060c4] !font-bold !mb-0">
                  23:20 - VP Tân Bình
                </Title>
                <div className="flex flex-row items-start gap-1">
                  <div>
                    <AiOutlineEnvironment className="w-3 h-3 mt-1" />
                  </div>
                  <Text>266 Đồng Đen, Phường 10, Tân Bình, Hồ Chí Minh</Text>
                </div>
              </Radio>
              <Radio value={2}>
                <Title level={5} className="!text-[#0060c4] !font-bold !mb-0">
                  23:30 - Lăng Cha Cả
                </Title>
                <div className="flex flex-row items-start gap-1">
                  <div>
                    <AiOutlineEnvironment className="w-3 h-3 mt-1" />
                  </div>
                  <Text>
                    315 Hoàng văn Thụ, Phường 2, Quận Tân Bình, Phường 2, Tân
                    Bình, Hồ Chí Minh
                  </Text>
                </div>
              </Radio>
            </Space>
          </Radio.Group>
        </div>
      </div>
      <div>
        <Divider type="vertical" className="h-full" />
      </div>

      <div className="w-1/2">
        <div className="p-4 bg-[#f7f7f7] flex flex-col gap-2 items-end ">
          <Title level={4} className="!text-black !font-bold !mb-0">
            Điểm trả
          </Title>
          <Text>Xem điểm trả gần bạn nhất?</Text>
        </div>
        <div className="p-4">
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value={1}>
                <Title level={5} className="!text-[#0060c4] !font-bold !mb-0">
                  03:20 (25/08) - Ngã 3 Madagui
                </Title>
                <div className="flex flex-row items-start gap-1">
                  <div>
                    <AiOutlineEnvironment className="w-3 h-3 mt-1" />
                  </div>
                  <Text>
                    Quốc Lộ 20, thị trấn Madagui, Thị trấn Ma Đa Guôi, Đạ Huoai,
                    Lâm Đồng
                  </Text>
                </div>
              </Radio>
              <Radio value={2}>
                <Title level={5} className="!text-[#0060c4] !font-bold !mb-0">
                  04:20 (25/08) - Siêu thị Coop Mart Bảo Lộc
                </Title>
                <div className="flex flex-row items-start gap-1">
                  <div>
                    <AiOutlineEnvironment className="w-3 h-3 mt-1" />
                  </div>
                  <Text>803 Trần Phú, Phường 2, Bảo Lộc, Lâm Đồng</Text>
                </div>
              </Radio>
            </Space>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
}

export default SelectLocation;
