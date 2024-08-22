import leaderBoard from "../assets/images/leaderboard1.png";
import { Alert, Tabs, Typography } from "antd";
import { FaBus, FaPlane } from "react-icons/fa";
import CustomSearchInput from "./customSearchInput";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";
import icon11 from "../assets/images/icon11.png";
import icon12 from "../assets/images/icon12.png";
import icon13 from "../assets/images/icon13.png";
import icon14 from "../assets/images/icon14.png";
import imgCard1 from "../assets/images/img_card1.png";
import imgCard2 from "../assets/images/img_card2.png";
import imgCard3 from "../assets/images/img_card3.png";
import imgCard11 from "../assets/images/img_card11.png";
import imgCard12 from "../assets/images/img_card12.png";
import imgCard13 from "../assets/images/img_card13.png";
import logo1 from "../assets/images/logo-vne1.png";
import logo2 from "../assets/images/logo-cesti.png";
import logo3 from "../assets/images/logo-dantri.png";
import logo4 from "../assets/images/logo-fbnc.png";
import logo5 from "../assets/images/logo-tuoitre.png";
import logo6 from "../assets/images/logo-vtv.png";
import Slider from "react-slick";
import { getBusPopulor } from "./../apis/configApi";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
  };
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
          <div className="bg-white w-full px-4 pb-4 rounded-2xl ">
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
      <div className="custom-container">
        <div className="mt-10">
          <Title level={3} className="pl-2">
            Tuyến đường phổ biến
          </Title>
          <div className="slider-container mt-4">
            <Slider {...settings}>
              {getBusPopulor().map((item, index) => (
                <Link to="/booking">
                  <div
                    key={index}
                    className="h-[211px] rounded-md bg-[#8a9bb4] mx-2"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-[116px] object-cover rounded-t-md"
                    />
                    <div className="p-3 ">
                      <Title level={4} className="!mb-0 !text-white">
                        {item.desc}
                      </Title>
                      <Text className="!text-white">{item.price}</Text>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>

        <div className="mt-10">
          <Title level={3} className="pl-2">
            Ưu đãi nổi bật
          </Title>
          <div className="flex flex-row gap-4">
            <div className="border-[1px] border-solid border-gray-200 shadow-lg rounded-md w-1/3">
              <img
                src={imgCard1}
                alt="flash sale"
                className="h-[157px] w-full object-cover rounded-t-md"
              />
              <Title level={5} className="line-clamp-3 p-3 !text-lg">
                Giảm đến 50% tối đa 100K khi đặt dịch vụ xe Hải Phòng Travel tại
                Vexere
              </Title>
            </div>
            <div className="border-[1px] border-solid border-gray-200 shadow-lg rounded-md w-1/3">
              <img
                src={imgCard2}
                alt="flash sale"
                className="h-[157px] w-full object-cover rounded-t-md"
              />
              <Title level={5} className="line-clamp-3 p-3 !text-lg">
                Giảm đến 25% dành cho khách hàng lần đầu đặt dịch vụ của nhà xe
                tại Vexere
              </Title>
            </div>
            <div className="border-[1px] border-solid border-gray-200 shadow-lg rounded-md w-1/3">
              <img
                src={imgCard3}
                alt="flash sale"
                className="h-[157px] w-full object-cover rounded-t-md"
              />
              <Title level={5} className="line-clamp-3 p-3 !text-lg">
                Nhận ưu đãi x2 khi đặt dịch vụ xe khách khứ hồi
              </Title>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Title level={3} className="pl-2">
            Nền tảng kết nối người dùng và nhà xe
          </Title>
          <div className="flex flex-row gap-2">
            <div className="border-[1px] border-solid border-gray-200 rounded-md w-1/4 p-3 flex flex-row gap-2">
              <img
                src={icon11}
                alt="img icon"
                className="w-12 h-12 object-cover"
              />
              <div>
                <Title
                  level={4}
                  className="!font-bold line-clamp-2 !text-lg !leading-6"
                >
                  2000+ nhà xe chất lượng cao
                </Title>
                <Text className="line-clamp-4">
                  5000+ tuyến đường trên toàn quốc, chủ động và đa dạng lựa
                  chọn.
                </Text>
              </div>
            </div>
            <div className="border-[1px] border-solid border-gray-200 rounded-md w-1/4 p-3 flex flex-row gap-2">
              <img
                src={icon12}
                alt="img icon"
                className="w-12 h-12 object-cover"
              />
              <div>
                <Title
                  level={4}
                  className="!font-bold line-clamp-2 !text-lg !leading-6"
                >
                  Đặt vé dễ dàng
                </Title>
                <Text className="line-clamp-4">
                  Đặt vé chỉ với 60s. Chọn xe yêu thích cực nhanh và thuận tiện.
                </Text>
              </div>
            </div>
            <div className="border-[1px] border-solid border-gray-200 rounded-md w-1/4 p-3 flex flex-row gap-2">
              <img
                src={icon13}
                alt="img icon"
                className="w-12 h-12 object-cover"
              />
              <div>
                <Title
                  level={4}
                  className="!font-bold line-clamp-2 !text-lg !leading-6"
                >
                  Chắc chắn có chỗ
                </Title>
                <Text className="line-clamp-4">
                  Hoàn ngay 150% nếu nhà xe không cung cấp dịch vụ vận chuyển,
                  mang đến hành trình trọn vẹn.
                </Text>
              </div>
            </div>
            <div className="border-[1px] border-solid border-gray-200 rounded-md w-1/4 p-3 flex flex-row gap-2">
              <img
                src={icon14}
                alt="img icon"
                className="w-12 h-12 object-cover"
              />
              <div>
                <Title
                  level={4}
                  className="!font-bold line-clamp-2 !text-lg !leading-6"
                >
                  Nhiều ưu đãi
                </Title>
                <Text className="line-clamp-4">
                  Hàng ngàn ưu đãi cực chất độc quyền tại Vexere.
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Title level={3} className="pl-2">
            Địa điểm du lịch nổi bật
          </Title>
          <div className="flex flex-row gap-4">
            <div className="border-[1px] border-solid border-gray-200 shadow-lg rounded-md w-1/3">
              <img
                src={imgCard11}
                alt="flash sale"
                className="h-[157px] w-full object-cover rounded-t-md"
              />
              <Title level={5} className="line-clamp-3 p-3 !text-lg">
                Đà Lạt
              </Title>
            </div>
            <div className="border-[1px] border-solid border-gray-200 shadow-lg rounded-md w-1/3">
              <img
                src={imgCard12}
                alt="flash sale"
                className="h-[157px] w-full object-cover rounded-t-md"
              />
              <Title level={5} className="line-clamp-3 p-3 !text-lg">
                Vũng Tàu
              </Title>
            </div>
            <div className="border-[1px] border-solid border-gray-200 shadow-lg rounded-md w-1/3">
              <img
                src={imgCard13}
                alt="flash sale"
                className="h-[157px] w-full object-cover rounded-t-md"
              />
              <Title level={5} className="line-clamp-3 p-3 !text-lg">
                Đảo Bình Hưng
              </Title>
            </div>
          </div>
        </div>

        <div className="my-10">
          <Title level={3} className="pl-2">
            Vexere đã được nhắc đến trên
          </Title>
          <div className="flex flex-row items-center justify-between h-[44px]">
            <img
              src={logo1}
              alt="img logo company"
              className="w-full h-full object-contain"
            />
            <img
              src={logo2}
              alt="img logo company"
              className="w-full h-full object-contain"
            />
            <img
              src={logo3}
              alt="img logo company"
              className="w-full h-full object-contain"
            />
            <img
              src={logo4}
              alt="img logo company"
              className="w-full h-full object-contain"
            />
            <img
              src={logo5}
              alt="img logo company"
              className="w-full h-full object-contain"
            />
            <img
              src={logo6}
              alt="img logo company"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
