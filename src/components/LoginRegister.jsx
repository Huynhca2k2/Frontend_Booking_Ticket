import React, { useState } from "react";
import {
  Modal,
  Button,
  Form,
  Input,
  Divider,
  Select,
  DatePicker,
  message,
} from "antd";
import dayjs from "dayjs";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { fetchUserInfo, loginUser, registerUser } from "../services/auth";
import { useUser } from "../context/UserContext";

const MINIMUM_AGE = 12;

const LoginRegister = () => {
  const { Option } = Select;
  const [date, setDate] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const { setUser } = useUser();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const onChangeDate = (dateValue) => {
    if (dateValue) {
      const age = dayjs().diff(dateValue, "year");
      if (age < MINIMUM_AGE) {
        message.error("Bạn phải ít nhất 12 tuổi để đăng ký.");
        setDate(null);
      } else {
        setDate(dateValue);
      }
    } else {
      setDate(null);
    }
  };

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const response = await loginUser(values.username, values.password);
      if (response?.status === 200) {
        const userInfo = await fetchUserInfo();
        if (userInfo) {
          setUser(userInfo);
        }
        message.success("Đăng nhập thành công!");
        setIsModalVisible(false);
      } else {
        message.error("Tên đăng nhập hoặc mật khẩu không chính xác!");
      }
    } catch (error) {
      message.error("Đăng nhập thất bại!");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (values) => {
    if (date) {
      const userResquest = {
        username: values.username,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        dob: date,
        email: values.email,
        phoneNumber: values.phoneNumber,
      };

      setLoading(true);

      try {
        const response = await registerUser(userResquest);
        if (response?.status === 200) {
          message.success("Đăng ký thành công, tự động đăng nhập...");

          await handleLogin({
            username: values.username,
            password: values.password,
          });
        } else {
          if (response?.status === 400) {
            message.warning("Tên người dùng đã tồn tại!");
          }
        }
      } catch (error) {
        message.error("Đăng ký thất bại!");
      } finally {
        setLoading(false); // Tắt loading khi API hoàn tất
      }
    } else {
      message.error("Bạn phải ít nhất 12 tuổi để đăng ký.");
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <div>+84</div>
    </Form.Item>
  );

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Đăng nhập
      </Button>
      <Modal
        title={isLogin ? "Đăng nhập" : "Đăng ký"}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name={isLogin ? "login" : "register"}
          initialValues={{ remember: true }}
          onFinish={isLogin ? handleLogin : handleRegister}
          className="mt-6"
        >
          {!isLogin && (
            <>
              <div className="flex flex-row gap-2">
                <Form.Item
                  className="w-1/2"
                  name="firstName"
                  rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
                >
                  <Input size="large" placeholder="Tên của bạn" />
                </Form.Item>
                <Form.Item
                  className="w-1/2"
                  name="lastName"
                  rules={[
                    { required: true, message: "Vui lòng nhập họ và chữ lót!" },
                  ]}
                >
                  <Input size="large" placeholder="Họ và chữ lót" />
                </Form.Item>
              </div>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "Định dạng Email không hợp lệ",
                  },
                  {
                    required: true,
                    message: "Vui lòng nhập Email của bạn",
                  },
                ]}
              >
                <Input size="large" placeholder="Nhập Email" />
              </Form.Item>
              <div className="flex flex-row gap-2">
                <Form.Item
                  className="w-1/2"
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập số điện thoại!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    addonBefore={prefixSelector}
                    style={{
                      width: "100%",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  className="w-1/2"
                  name="dob"
                  label="Ngày Sinh"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập ngày sinh của bạn!",
                    },
                  ]}
                >
                  <DatePicker
                    value={date ? dayjs(date) : null}
                    onChange={onChangeDate}
                    size="large"
                  />
                </Form.Item>
              </div>
            </>
          )}

          <Form.Item
            name="username"
            rules={[
              { required: true, message: "Vui lòng nhập tên đăng nhập!" },
            ]}
          >
            <Input size="large" placeholder="Tên đăng nhập" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password size="large" placeholder="Mật khẩu" />
          </Form.Item>
          <Form.Item className="!mb-0">
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              block
              loading={loading}
            >
              {isLogin ? "Đăng nhập" : "Đăng ký"}
            </Button>
          </Form.Item>
        </Form>
        <Divider className=" !text-gray-400 !font-normal !text-xs">
          hoặc
        </Divider>
        <Button
          size="large"
          icon={<GoogleOutlined />}
          block
          style={{ marginBottom: "10px" }}
        >
          Tiếp tục với Google
        </Button>
        <Button size="large" icon={<FacebookOutlined />} block>
          Tiếp tục với Facebook
        </Button>

        <div className="mt-4">
          {isLogin ? "Bạn chưa có tài khoản?" : "Bạn đã có tài khoản?"}{" "}
          <Button type="link" onClick={toggleForm} className="!pl-0">
            {isLogin ? "Đăng ký" : "Đăng nhập"}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default LoginRegister;
