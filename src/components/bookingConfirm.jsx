import { AimOutlined, LeftOutlined } from "@ant-design/icons";
import {
  Alert,
  Button,
  Checkbox,
  Divider,
  Drawer,
  Radio,
  Timeline,
} from "antd";
import { Typography } from "antd";
import { Form, Input, Select } from "antd";
import iconProtect from "../assets/images/icon_protect_trip.png";
import { FaBus } from "react-icons/fa";
import Test from "./test";
import { AiOutlineEnvironment } from "react-icons/ai";
import { useState } from "react";

const { Option } = Select;

const { Title, Text } = Typography;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

function BookingConfirm() {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="84">+84</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="bg-[#f2f2f2]">
      <div className="custom-container pt-4">
        <Button
          icon={<LeftOutlined />}
          type="link"
          className="!font-semibold !pl-0"
        >
          Quay lại
        </Button>
        <div className="flex flex-row gap-4 mt-4">
          <div className="w-7/12 flex flex-col gap-4">
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <Title level={4} className="!font-bold">
                Thông tin liên hệ
              </Title>
              <Form
                {...formItemLayout}
                form={form}
                name="register"
                initialValues={{
                  residence: ["zhejiang", "hangzhou", "xihu"],
                  prefix: "84",
                }}
                style={{
                  maxWidth: 600,
                }}
                scrollToFirstError
              >
                <Form.Item
                  name="email"
                  label="Email"
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
                  <Input />
                </Form.Item>

                <Form.Item
                  name="Tên người đi"
                  label="Tên người đi"
                  rules={[
                    {
                      required: true,
                      message: "Nhập tên người đi!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Số điện thoại"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    addonBefore={prefixSelector}
                    style={{
                      width: "100%",
                    }}
                  />
                </Form.Item>
              </Form>
              <Alert
                message="Số điện thoại và email được sử dụng để gửi thông tin đơn hàng và liên hệ khi cần thiết."
                type="success"
                showIcon
              />
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <Title level={4} className="!font-bold">
                Tiện ích
              </Title>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row items-center gap-2">
                    <img src={iconProtect} alt="img icon" />
                    <Text className="!font-semibold !text-base">
                      Bảo hiểm chuyến đi (+20.000đ/ghế)
                    </Text>
                  </div>
                  <Text className="!text-sm" type="secondary">
                    Được bồi thường lên đến 400.000.000đ/ghế.
                  </Text>
                  <Text className="!text-sm" type="secondary">
                    Được cung cấp bởi Bảo Việt x Saladin
                  </Text>
                </div>
                <Checkbox onChange={onChange}></Checkbox>
              </div>
              <div className="mt-4 border-[1px] border-[#27ae60] p-4 rounded-lg flex flex-col gap-2">
                <div className="flex flex-col">
                  <Text className="!font-semibold !text-base">
                    Bảo hiểm tai nạn
                  </Text>
                  <Text className="!text-sm" type="secondary">
                    Quyền lợi bảo hiểm lên đến 400 triệu đồng khi xảy ra tai nạn
                  </Text>
                </div>
                <div className="flex flex-col">
                  <Text className="!font-semibold !text-base">
                    Bảo hiểm hủy chuyến
                  </Text>
                  <Text className="!text-sm" type="secondary">
                    Bồi thường 100% tiền vé nếu chuyến đi bị hủy bởi các lí do
                    khách quan hoặc bất khả kháng về sức khỏe.
                  </Text>
                </div>
              </div>
              <Alert
                message="Bồi thường trực tuyến nhanh chóng, dễ dàng"
                type="success"
                showIcon
              />
            </div>
          </div>
          <div className="w-5/12 flex flex-col gap-4">
            <div className="bg-white p-4 rounded-xl  border border-gray-200">
              <div className="flex flex-row justify-between">
                <Title level={4} className="!font-bold !my-0 !text-lg">
                  Tạm tính
                </Title>
                <Title level={4} className="!font-bold !my-0 !text-lg">
                  360.000đ
                </Title>
              </div>
              <div className="flex flex-row justify-between items-start mt-3">
                <Text className="!text-base">Giá vé</Text>
                <div className="flex flex-col items-end">
                  <Text className="!font-semibold !text-base">
                    180.000đ x 2
                  </Text>
                  <Text className="!text-sm" type="secondary">
                    Mã ghế/giường: B51, B52
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl  border border-gray-200">
              <Title level={4} className="!font-bold !my-0 !text-lg">
                Thông tin chuyến đi
              </Title>
              <div className="p-4 rounded-xl  border border-gray-200">
                <Button
                  onClick={showDrawer}
                  type="link"
                  className="!flex flex-row justify-between items-end w-full px-0"
                >
                  <div className="flex flex-row items-center gap-2">
                    <FaBus />
                    <Text className="!text-sm !font-bold" type="secondary">
                      CN, 25/08/2024
                    </Text>
                  </div>
                  <Text className="!text-sm !font-bold text-[#2474e5] underline">
                    Chi tiết
                  </Text>
                </Button>
                <Drawer
                  title="Thông tin chuyến xe"
                  onClose={onClose}
                  open={open}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row justify-between items-center">
                      <Text className="!text-sm" type="secondary">
                        Tuyến
                      </Text>
                      <Text className="!font-semibold !text-sm">
                        Sài Gòn - Đà Lạt
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <Text className="!text-sm" type="secondary">
                        Nhà xe
                      </Text>
                      <Text className="!font-semibold !text-sm">
                        An Anh Limousine
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <Text className="!text-sm" type="secondary">
                        Chuyến
                      </Text>
                      <Text className="!font-semibold !text-sm">
                        23:45 • CN, 25/08/2024
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <Text className="!text-sm" type="secondary">
                        Loại xe
                      </Text>
                      <Text className="!font-semibold !text-sm">
                        Limousine 24 Phòng Đôi
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <Text className="!text-sm" type="secondary">
                        Số lượng
                      </Text>
                      <Text className="!font-semibold !text-sm">1 vé</Text>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <Text className="!text-sm" type="secondary">
                        Mã ghế/ giường
                      </Text>
                      <Text className="!font-semibold !text-sm">11</Text>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <Text className="!text-sm" type="secondary">
                        Tạm tính
                      </Text>
                      <Text className="!font-semibold !text-sm">450.000đ</Text>
                    </div>
                    <div>
                      <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row gap-2 items-center">
                          <AimOutlined className="text-[#2474e5]" />
                          <Text className="!font-bold !text-sm">Điểm đón</Text>
                        </div>
                        <div>
                          <Button type="link" className="px-0">
                            <Text className="!text-sm !font-bold text-[#2474e5] underline">
                              Thay đổi
                            </Text>
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Text className=" !text-sm">95 Nguyễn Duy Dương</Text>
                        <Text className="!text-xs" type="secondary">
                          95 Nguyễn Duy Dương, Phường 09, Quận 5, Hồ Chí Minh
                        </Text>
                        <Text className="!font-semibold !text-sm">
                          Dự kiến đón lúc: 23:30 25/08/2024
                        </Text>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row gap-2 items-center">
                          <AiOutlineEnvironment className="text-[#eb5757]" />
                          <Text className="!font-bold !text-sm">Điểm trả</Text>
                        </div>
                        <div>
                          <Button type="link" className="px-0">
                            <Text className="!text-sm !font-bold text-[#2474e5] underline">
                              Thay đổi
                            </Text>
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Text className=" !text-sm">Vp Đà Lạt</Text>
                        <Text className="!text-xs" type="secondary">
                          Đầu đường KQH Phạm Hồng Thái, Phường 10, Tp.Đà Lạt,
                          Lâm Đồng, Phường 10, Đà Lạt, Lâm Đồng
                        </Text>
                        <Text className="!font-semibold !text-sm">
                          Dự kiến trả lúc: 06:30 26/08/2024
                        </Text>
                      </div>
                    </div>
                  </div>
                </Drawer>
                <Divider className="mt-2 mb-6" />
                <Timeline
                  mode="left"
                  items={[
                    {
                      label: <Text className="!font-bold !text-xl">23:20</Text>,
                      children: (
                        <div className="flex flex-col">
                          <Text className="!font-semibold !text-sm">
                            95 Nguyễn Duy Dương
                          </Text>
                          <Text className="!text-xs" type="secondary">
                            95 Nguyễn Duy Dương, Phường 09, Quận 5, Hồ Chí Minh
                          </Text>
                        </div>
                      ),
                    },
                    {
                      label: (
                        <Text className="!font-bold !text-xl">
                          06:30
                          <br />
                          (26/08)
                        </Text>
                      ),
                      dot: <AiOutlineEnvironment className="text-[#eb5757]" />,
                      color: "#707070",
                      children: (
                        <div className="flex flex-col">
                          <Text className="!font-semibold !text-sm">
                            Vp Đà Lạt
                          </Text>
                          <Text className="!text-xs" type="secondary">
                            Đầu đường KQH Phạm Hồng Thái, Phường 10, Tp.Đà Lạt,
                            Lâm Đồng, Phường 10, Đà Lạt, Lâm Đồng
                          </Text>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirm;
