import { AimOutlined, LeftOutlined } from "@ant-design/icons";
import {
  Alert,
  Button,
  Checkbox,
  Divider,
  Drawer,
  message,
  Modal,
  Radio,
  Timeline,
} from "antd";
import { Typography } from "antd";
import { Form, Input, Select } from "antd";
import iconProtect from "../assets/images/icon_protect_trip.png";
import { FaBus } from "react-icons/fa";
import { AiOutlineEnvironment } from "react-icons/ai";
import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { useTicket } from "../context/TicketContext";

import SelectLocation from "./SelectLocation";
import { addHoursToDateTime, bookings } from "../services/api";
import { useUser } from "../context/UserContext";
import LoginRegister from "./LoginRegister";

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
  const [modal2Open, setModal2Open] = useState(false);
  const [busCurrent, setBusCurrent] = useState(null);
  const [open, setOpen] = useState(false);
  const { ticket, setTicket } = useTicket();
  const { tripCurrent, setTripCurrent, tripsContext, user } = useUser();

  const navigate = useNavigate();

  const [form] = Form.useForm();

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        email: user.email || "",
        username: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
        phone: user.phoneNumber || "",
      });
    } else {
      form.setFieldsValue({
        email: "",
        username: "",
        phone: "",
      });
    }
  }, [user, form]);

  useEffect(() => {
    if (tripsContext) {
      const myTrip = tripsContext.find(
        (booking) => booking?.id === ticket?.tripId
      );

      const myBus = myTrip?.buses?.find(
        (item) => Number(item?.id) === ticket?.busId
      );

      setTripCurrent(myTrip);
      setBusCurrent(myBus);
    }
    if (tripsContext === null) navigate("/");
  }, [tripCurrent, busCurrent]);

  const handleChangeEmail = (e) => {
    form.setFieldsValue({ email: e.target.value });
  };

  const handleChangeFullName = (e) => {
    form.setFieldsValue({ username: e.target.value });
  };

  const handleChangeNumberPhone = (e) => {
    form.setFieldsValue({ phone: e.target.value });
  };

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

  const handleSubmit = () => {
    const formValues = form.getFieldsValue();

    if (!formValues.email) {
      message.warning("Bạn chưa nhập Email");
      return;
    }
    if (!formValues.username) {
      message.warning("Bạn chưa nhập Họ và tên");
      return;
    }
    if (!formValues.phone) {
      message.warning("Bạn chưa nhập số điện thoại");
      return;
    }

    setTicket((prevTicket) => ({
      ...prevTicket,
      userId: user?.id,
    }));

    message.success("Mua vé thành công!!!");
  };
  console.log(ticket);

  return (
    <div className="bg-[#f2f2f2]">
      <div className="custom-container pt-4">
        <Button
          icon={<LeftOutlined />}
          type="link"
          className="!font-semibold !pl-0"
          onClick={() => navigate(-1)}
        >
          Quay lại
        </Button>
        <div className="flex flex-row gap-4 mt-4">
          <div className="w-7/12 flex flex-col gap-4">
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              {!user && (
                <div className="flex flex-row gap-4 items-center rounded-lg border mb-4 border-gray-600 p-2 justify-between">
                  <Title level={5} className="!text-sm !mb-0">
                    Đăng nhập để tự điền thông tin và nhận điểm khi đặt vé
                  </Title>
                  <LoginRegister />
                </div>
              )}

              <Title level={4} className="!font-bold">
                Thông tin liên hệ
              </Title>
              <Form
                {...formItemLayout}
                form={form}
                name="register"
                initialValues={{
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
                  <Input onChange={handleChangeEmail} />
                </Form.Item>

                <Form.Item
                  name="username"
                  label="Tên người đi"
                  rules={[
                    {
                      required: true,
                      message: "Nhập tên người đi!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input onChange={handleChangeFullName} />
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
                    onChange={handleChangeNumberPhone}
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
            <Button
              type="primary"
              onClick={handleSubmit}
              className="h-full p-2 font-medium text-base text-[#141414] bg-[#ffd333]  hover:!bg-yellow-400 hover:!border-[#ffd333] hover:!text-gray-600"
            >
              Xác nhận đặt vé
            </Button>
          </div>
          <div className="w-5/12 flex flex-col gap-4">
            <div className="bg-white p-4 rounded-xl  border border-gray-200">
              <div className="flex flex-row justify-between">
                <Title level={4} className="!font-bold !my-0 !text-lg">
                  Tạm tính
                </Title>
                <Title level={4} className="!font-bold !my-0 !text-lg">
                  {ticket?.price} đ
                </Title>
              </div>
              <div className="flex flex-row justify-between items-start mt-3">
                <Text className="!text-base">Giá vé</Text>
                <div className="flex flex-col items-end">
                  <Text className="!font-semibold !text-base">
                    {busCurrent?.priceReal} x {ticket?.seatIds?.length}
                  </Text>
                  <Text className="!text-sm" type="secondary">
                    Mã ghế/giường: {ticket?.seatIds?.join(" , ")}
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl  border border-gray-200">
              <Title level={4} className="!font-bold !my-0 !text-lg">
                Thông tin chuyến đi
              </Title>
              <div className="p-4 mt-2 rounded-xl  border border-gray-200">
                <Button
                  onClick={showDrawer}
                  type="link"
                  className="!flex flex-row justify-between items-end w-full px-0"
                >
                  <div className="flex flex-row items-center gap-2">
                    <FaBus />
                    <Text className="!text-sm !font-bold" type="secondary">
                      {tripCurrent?.creationDate}
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
                        {tripCurrent?.departureLocation} -{" "}
                        {tripCurrent?.arrivalLocation}
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <Text className="!text-sm" type="secondary">
                        Nhà xe
                      </Text>
                      <Text className="!font-semibold !text-sm">
                        {busCurrent?.name}
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <Text className="!text-sm" type="secondary">
                        Chuyến
                      </Text>
                      <Text className="!font-semibold !text-sm">
                        {addHoursToDateTime(tripCurrent?.departureTime)} •{" "}
                        {addHoursToDateTime(
                          tripCurrent?.departureTime,
                          tripCurrent?.travelTime
                        )}
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <Text className="!text-sm" type="secondary">
                        Loại xe
                      </Text>
                      <Text className="!font-semibold !text-sm">
                        {busCurrent?.type}
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <Text className="!text-sm" type="secondary">
                        Số lượng
                      </Text>
                      <Text className="!font-semibold !text-sm">
                        {ticket?.seatIds?.length} vé
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <Text className="!text-sm" type="secondary">
                        Mã ghế/ giường
                      </Text>
                      <Text className="!font-semibold !text-sm">
                        {ticket?.seatIds?.join(" , ")}
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <Text className="!text-sm" type="secondary">
                        Tạm tính
                      </Text>
                      <Text className="!font-semibold !text-sm">
                        {ticket?.price} đ
                      </Text>
                    </div>
                    <div>
                      <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row gap-2 items-center">
                          <AimOutlined className="text-[#2474e5]" />
                          <Text className="!font-bold !text-sm">Điểm đón</Text>
                        </div>
                        <div>
                          <Button
                            type="link"
                            className="px-0"
                            onClick={() => setModal2Open(true)}
                          >
                            <Text className="!text-sm !font-bold text-[#2474e5] underline">
                              Thay đổi
                            </Text>
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Text className=" !text-sm">
                          {
                            tripCurrent?.pickupLocations[
                              ticket?.pickupLocationId - 1
                            ]?.name
                          }
                        </Text>
                        <Text className="!text-xs" type="secondary">
                          {
                            tripCurrent?.pickupLocations[
                              ticket?.pickupLocationId - 1
                            ]?.address
                          }
                        </Text>
                        <Text className="!font-semibold !text-sm">
                          Dự kiến đón lúc:{" "}
                          {addHoursToDateTime(tripCurrent?.departureTime)} •
                          {tripCurrent?.creationDate}
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
                          <Button
                            type="link"
                            className="px-0"
                            onClick={() => setModal2Open(true)}
                          >
                            <Text className="!text-sm !font-bold text-[#2474e5] underline">
                              Thay đổi
                            </Text>
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Text className="!text-sm">
                          {
                            tripCurrent?.dropoffLocations[
                              ticket?.pickupLocationId - 1
                            ]?.name
                          }
                        </Text>
                        <Text className="!text-xs" type="secondary">
                          {
                            tripCurrent?.dropoffLocations[
                              ticket?.dropoffLocationId - 1
                            ]?.address
                          }
                        </Text>
                        <Text className="!font-semibold !text-sm">
                          Dự kiến trả lúc:{" "}
                          {addHoursToDateTime(
                            tripCurrent?.departureTime,
                            tripCurrent?.travelTime
                          )}{" "}
                          •{tripCurrent?.creationDate}
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
                      label: (
                        <Text className="!font-bold !text-xl">
                          {addHoursToDateTime(tripCurrent?.departureTime)}
                        </Text>
                      ),
                      children: (
                        <div className="flex flex-col">
                          <Text className="!font-semibold !text-sm">
                            {
                              tripCurrent?.pickupLocations[
                                ticket?.pickupLocationId - 1
                              ]?.name
                            }
                          </Text>
                          <Text className="!text-xs" type="secondary">
                            {
                              tripCurrent?.pickupLocations[
                                ticket?.pickupLocationId - 1
                              ]?.address
                            }
                          </Text>
                        </div>
                      ),
                    },
                    {
                      label: (
                        <Text className="!font-bold !text-xl">
                          {addHoursToDateTime(
                            tripCurrent?.departureTime,
                            tripCurrent?.travelTime
                          )}
                        </Text>
                      ),
                      dot: <AiOutlineEnvironment className="text-[#eb5757]" />,
                      color: "#707070",
                      children: (
                        <div className="flex flex-col">
                          <Text className="!font-semibold !text-sm">
                            {
                              tripCurrent?.dropoffLocations[
                                ticket?.dropoffLocationId - 1
                              ]?.name
                            }
                          </Text>
                          <Text className="!text-xs" type="secondary">
                            {
                              tripCurrent?.dropoffLocations[
                                ticket?.dropoffLocationId - 1
                              ]?.address
                            }
                          </Text>
                        </div>
                      ),
                    },
                  ]}
                />
                <Modal
                  title="Thay đổi điểm đón/chờ"
                  centered
                  open={modal2Open}
                  onOk={() => setModal2Open(false)}
                  onCancel={() => setModal2Open(false)}
                >
                  <SelectLocation
                    time={tripCurrent?.departureTime}
                    travelTime={tripCurrent?.travelTime}
                    placeStart={tripCurrent?.pickupLocations}
                    placeEnd={tripCurrent?.dropoffLocations}
                    valueStartItem={ticket?.pickupLocationId - 1}
                    valueEndItem={ticket?.dropoffLocationId - 1}
                  />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirm;
