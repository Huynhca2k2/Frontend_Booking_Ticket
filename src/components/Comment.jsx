import { Avatar, Divider, Rate, Tag } from "antd";
import React from "react";
import { Typography } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

const Comment = ({ comments }) => {
  return (
    <>
      {comments &&
        comments.map((item, index) => {
          return (
            <div key={index}>
              <Divider className="my-4" />
              <div className="flex flex-row gap-2">
                <Avatar
                  size="large"
                  style={{
                    backgroundColor: "#fde3cf",
                    color: "#f56a00",
                  }}
                >
                  {item?.firstName}
                </Avatar>
                <div className="relative w-full">
                  <Title level={5} className="!font-normal !mb-0">
                    {item?.lastName + " " + item?.firstName}
                  </Title>
                  <Rate
                    disabled
                    defaultValue={item?.rate}
                    className="small-rate absolute bottom-0 left-0"
                  />
                </div>
              </div>
              <div className="mt-2">
                <Text>{item?.contentComment}</Text>
              </div>
              <div className="mt-2">
                <Text type="secondary" className="!font-medium mr-2 !text-xs">
                  Đi ngày {item?.pickupDate}
                </Text>
                <Tag icon={<CheckCircleOutlined />} color="success">
                  Đã mua vé
                </Tag>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Comment;
