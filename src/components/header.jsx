import {
  CaretDownOutlined,
  DownOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import imgLogo from "../assets/images/logoBooking.png";

const items = [
  {
    key: "1",
    label: <div>1st menu item</div>,
  },
  {
    key: "2",
    label: <div>2st menu item</div>,
  },
];

function Header() {
  return (
    <div className="px-5 py-5 flex flex-row items-center justify-between bg-[#2474e5] border-b border-sky-400">
      <div className="w-[148px] h-[40px]">
        <img
          src={imgLogo}
          alt="pic logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-row items-center">
        <Button type="link" className="font-semibold text-white">
          Đơn hàng của tôi
        </Button>
        <Dropdown
          menu={{
            items,
          }}
        >
          <Button
            type="link"
            icon={<CaretDownOutlined />}
            iconPosition="end"
            className="font-semibold text-white"
          >
            Trở thành đối tác
          </Button>
        </Dropdown>
        <Button type="link" className="font-semibold text-white">
          Mở bán vé trên Vexere
        </Button>
        <div className="flex gap-3">
          <Button
            icon={<PhoneOutlined />}
            iconPosition="start"
            className="font-semibold"
          >
            Hotline 24/7
          </Button>
          <Button className="font-semibold">Đăng nhập</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
