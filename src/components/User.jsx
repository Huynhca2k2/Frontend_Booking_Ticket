import React from "react";
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, message } from "antd";
import { useUser } from "../context/UserContext";
import { logout } from "../services/auth";

const User = ({ setIsLogin }) => {
  const { user, setUser } = useUser();

  const handleLogOut = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        await logout(token);

        localStorage.removeItem("token");
        setUser(null);
        setIsLogin(false);
        message.success("Đăng xuất thành công!");
        console.log("Logout successful");
      } catch (error) {
        console.error("Error during logout:", error);
      }
    } else {
      console.warn("No token found");
    }
  };

  const items = [
    {
      key: "1",
      label: (
        <Button type="link" icon={<UserOutlined />} className="text-gray-800">
          Hồ sơ của tôi
        </Button>
      ),
    },
    {
      key: "2",
      label: (
        <Button
          type="link"
          icon={<SettingOutlined />}
          className="text-gray-800"
        >
          Cài đặt
        </Button>
      ),
    },
    {
      key: "3",
      label: (
        <Button
          type="link"
          icon={<LogoutOutlined />}
          className="text-gray-800"
          onClick={handleLogOut}
        >
          Log out
        </Button>
      ),
    },
  ];

  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
      >
        <Avatar
          style={{
            backgroundColor: "#fde3cf",
            color: "#f56a00",
          }}
        >
          {user?.firstName}
        </Avatar>
      </Dropdown>
    </>
  );
};

export default User;
