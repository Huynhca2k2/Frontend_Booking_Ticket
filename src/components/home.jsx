import leaderBoard from "../assets/images/leaderboard.png";
import { Alert, Tabs, Typography } from "antd";
import { FaBus, FaPlane } from "react-icons/fa";
import CustomSearchInput from "./customSearchInput";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";

const { Title, Text } = Typography;

function Home() {
  return (
    <>
      <div className="h-[480px] relative">
        <img
          src={leaderBoard}
          alt="pic banner"
          className="w-full h-full object-cover"
        />
        <div className="custom-container absolute top-0 left-0 right-0 bottom-[64px] flex flex-col gap-4 items-center justify-center">
          <Title level={3} className="!text-white">
            Vexere - Cam kết hoàn 150% nếu nhà xe không cung cấp dịch vụ vận
            chuyển (<span className="text-yellow-500 font-bold">*</span>)
          </Title>
          <div className="bg-white w-full p-4 rounded-2xl min-h-[148px]">
            <Tabs
              defaultActiveKey="1"
              centered
              items={[
                {
                  label: (
                    <span className="flex items-center gap-2 px-6 text-base font-semibold">
                      <FaBus />
                      Xe Khách
                    </span>
                  ),
                  key: "1",
                  children: <CustomSearchInput />,
                },
                {
                  label: (
                    <span className="flex items-center gap-2 px-6 text-base font-semibold">
                      <FaPlane />
                      Máy Bay
                    </span>
                  ),
                  key: "2",
                  children: (
                    <Alert
                      message="The function will be developed in the future."
                      type="warning"
                      showIcon
                    />
                  ),
                },
              ]}
            />
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-[64px] bg-[#00000080] flex flex-row gap-16 justify-center">
          <div className="flex flex-row gap-2 items-center">
            <img src={icon1} alt="icon img" className="h-6 w-6 object-cover" />
            <span className="font-semibold text-[16px] text-white">
              Chắc chắn có chỗ
            </span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <img src={icon2} alt="icon img" className="h-6 w-6 object-cover" />
            <span className="font-semibold text-[16px] text-white">
              Hỗ trợ 24/7
            </span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <img src={icon3} alt="icon img" className="h-6 w-6 object-cover" />
            <span className="font-semibold text-[16px] text-white">
              Nhiều ưu đãi
            </span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <img src={icon4} alt="icon img" className="h-6 w-6 object-cover" />
            <span className="font-semibold text-[16px] text-white">
              Thanh toán đa dạng
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
