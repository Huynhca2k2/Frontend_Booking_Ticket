import { StarOutlined } from "@ant-design/icons";
import { Button, Pagination, Progress, Rate } from "antd";
import React from "react";
import { Typography } from "antd";
import Comment from "./Comment";

const { Title, Text } = Typography;

const comments = [
  {
    firstName: "Nicholas",
    lastName: "Tan Shell",
    rate: 5,
    contentComment:
      "Comfy bus and generous lounge at destination for guests arriving too early for check-in/coffee shop opening, but would reccomend getting on at ticket office instead of tao dan park pickup.",
    pickupDate: "04/09/2024",
  },
  {
    firstName: "Emma",
    lastName: "Aslanyan",
    rate: 5,
    contentComment:
      "The shuttle bus picked me up from the designated location, the bus sleeper was more than convenient to have a good and pleasant sleep. The driver was extremely helpful. I'm really satisfied with their service. Thank you very much for providing the best service possible 🇦🇲",
    pickupDate: "05/09/2024",
  },
  {
    firstName: "NGA",
    lastName: "NGUYỄN",
    rate: 1,
    contentComment:
      "Mua vé xe giờ về là 12h tới nơi là 7h30 tối mà tới 9h30 mới tới nơi , đáng lẽ là trả khách ở bình thạnh mà bỏ khách ở bến thủ đức không nói một câu nào . Văn phòng ở đà lạt ổn cỡ nào mà về tới sg thì tệ bấy nhiêu",
    pickupDate: "04/09/2024",
  },
  {
    firstName: "Duy",
    lastName: "Đặng Nguyễn Anh",
    rate: 4,
    contentComment:
      "Tuy nhiên trạm xe dừng để trung chuyển lại thu 20k tiền khi khách có nhu cầu tự đi xe về mà không cần dùng ze trung chuyển về bx miền đông.",
    pickupDate: "03/09/2024",
  },
  {
    firstName: "Ý",
    lastName: "Lê Ngọc Như",
    rate: 4,
    contentComment:
      "nhà xe chu đáo lắm lun, chăm sóc nhiệt tình, chuyến mình đi có bác tài siu dễ thương nữa mà mình ko bt tên😢 có dịp đi sẽ ủng hộ An Anh típ",
    pickupDate: "01/09/2024",
  },
];

const GatingBus = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Button
          icon={<StarOutlined />}
          type="primary"
          className="h-[24px] rounded-none px-2 gap-1"
        >
          4.7
        </Button>
        <Rate disabled defaultValue={4} />
        <Text className="!font-medium !text-gray-600"> • (20 đánh giá)</Text>
      </div>
      <div className="mt-4">
        <div className="flex flex-row gap-4">
          <div className="w-1/3">
            <Text>Chất lượng dịch vụ</Text>
            <Progress percent={86} size="small" />
          </div>
          <div className="w-1/3">
            <Text>An toàn</Text>
            <Progress percent={84} size="small" />
          </div>
          <div className="w-1/3">
            <Text>Thông tin đầy đủ</Text>
            <Progress percent={80} size="small" />
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="w-1/3">
            <Text>Thông tin chính xác</Text>
            <Progress percent={82} size="small" />
          </div>
          <div className="w-1/3">
            <Text>Thái độ nhân viên</Text>
            <Progress percent={88} size="small" />
          </div>
          <div className="w-1/3">
            <Text>Tiện nghi & thoải mái</Text>
            <Progress percent={90} size="small" />
          </div>
        </div>
      </div>
      <Comment comments={comments} />
      <Pagination align="center" defaultCurrent={1} total={12} />
    </div>
  );
};

export default GatingBus;
