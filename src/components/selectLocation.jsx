import { Alert, Divider, Input, Radio, Space, Tabs, Typography } from "antd";
import { useEffect, useState } from "react";
import { AiOutlineEnvironment } from "react-icons/ai";
import { useTicket } from "../context/TicketContext";

const { Title, Text } = Typography;

function SelectLocation({
  time,
  placeStart = [],
  placeEnd = [],
  valueStartItem = 0,
  valueEndItem = 0,
}) {
  const [valueStart, setValueStart] = useState(0);
  const [valueEnd, setValueEnd] = useState(0);
  const { ticket, setTicket } = useTicket();

  useEffect(() => {
    console.log("gia tri nhan vao", valueEndItem, valueEndItem);
    setValueStart(valueStartItem);
    setValueEnd(valueEndItem);
    setTicket((prevTicket) => ({
      ...prevTicket,
      placeStart: placeStart[valueStartItem],
      placeEnd: placeEnd[valueEndItem],
    }));
  }, [valueStartItem, valueEndItem]);

  const onChangeStart = (e) => {
    console.log("radio checked", placeStart[e.target.value]);
    setValueStart(e.target.value);
    setTicket((prevTicket) => ({
      ...prevTicket,
      placeStart: placeStart[e.target.value],
    }));
  };
  const onChangeEnd = (e) => {
    console.log("radio checked", placeEnd[e.target.value]);
    setValueEnd(e.target.value);
    setTicket((prevTicket) => ({
      ...prevTicket,
      placeEnd: placeEnd[e.target.value],
    }));
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
          <Radio.Group onChange={onChangeStart} value={valueStart}>
            <Space direction="vertical">
              {placeStart &&
                placeStart.map((item, index) => {
                  return (
                    <Radio value={index} key={index}>
                      <Title
                        level={5}
                        className="!text-[#0060c4] !font-bold !mb-0"
                      >
                        {time?.hourStart} - {item?.name}
                      </Title>
                      <div className="flex flex-row items-start gap-1">
                        <div>
                          <AiOutlineEnvironment className="w-3 h-3 mt-1" />
                        </div>
                        <Text>{item?.location}</Text>
                      </div>
                    </Radio>
                  );
                })}
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
          <Radio.Group onChange={onChangeEnd} value={valueEnd}>
            <Space direction="vertical">
              {placeEnd &&
                placeEnd.map((item, index) => {
                  return (
                    <Radio value={index} key={index}>
                      <Title
                        level={5}
                        className="!text-[#0060c4] !font-bold !mb-0"
                      >
                        {time?.hourEnd} - {item?.name}
                      </Title>
                      <div className="flex flex-row items-start gap-1">
                        <div>
                          <AiOutlineEnvironment className="w-3 h-3 mt-1" />
                        </div>
                        <Text>{item?.location}</Text>
                      </div>
                    </Radio>
                  );
                })}
            </Space>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
}

export default SelectLocation;
