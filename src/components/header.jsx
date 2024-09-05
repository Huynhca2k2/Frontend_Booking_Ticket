import {
  CaretDownOutlined,
  DownOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import imgLogo from "../assets/images/logo-main.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const items = [
  {
    key: "1",
    label: <div>Phần mềm nhà xe baokhang</div>,
  },
  {
    key: "2",
    label: <div>Phần mềm đại lý baokhang</div>,
  },
];

function Header() {
  const navigate = useNavigate();
  return (
    <div className="px-5 py-2 flex flex-row items-center justify-between bg-white border-b border-sky-400">
      <Link to="/" className="w-[148px] h-[60px] block">
        <img
          src={imgLogo}
          alt="pic logo"
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="flex flex-row items-center">
        <Button type="link" className="font-semibold text-[#2474e5]">
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
            className="font-semibold text-[#2474e5]"
          >
            Trở thành đối tác
          </Button>
        </Dropdown>
        <Button type="link" className="font-semibold text-[#2474e5]">
          Mở bán vé trên BAOKHANG
        </Button>
        <div className="flex gap-3">
          <Button
            type="primary"
            icon={<PhoneOutlined />}
            iconPosition="start"
            className="font-semibold"
          >
            Hotline 24/7
          </Button>
          <Button type="primary" className="font-semibold">
            <Link to="/login">Đăng nhập</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
