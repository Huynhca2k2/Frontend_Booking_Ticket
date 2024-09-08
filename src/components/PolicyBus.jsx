import React from "react";
import { Divider, Typography } from "antd";

const { Title, Text, Paragraph } = Typography;

const PolicyBus = () => {
  return (
    <div>
      <div>
        <Title level={4} className="!font-bold">
          Chính sách hủy đơn hàng
        </Title>
        <Paragraph className="leading-3 text-[#000000a6]">
          <Title level={5} className="!font-semibold !w-max !inline-block ">
            Ghi Chú :
          </Title>{" "}
          Phí huỷ sẽ được tính trên giá gốc, không giảm trừ khuyến mãi hoặc giảm
          giá; đồng thời không vượt quá số tiền quý khách đã thanh toán.
        </Paragraph>
      </div>
      <Divider />
      <div>
        <Title level={4} className="!font-bold">
          Chính sách nhà xe
        </Title>
        <div>
          <Title level={5} className="!font-bold !text-gray-600">
            Yêu cầu khi lên xe
          </Title>
          <Paragraph className="pl-4">
            <ul>
              <li>
                <Text type="secondary">
                  Có mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ
                  tục lên xe
                </Text>
              </li>
              <li>
                <Text type="secondary">
                  Xuất trình SMS/Email đặt vé trước khi lên xe
                </Text>
              </li>
              <li>
                <Text type="secondary">
                  Không mang đồ ăn, thức ăn có mùi lên xe
                </Text>
              </li>
              <li>
                <Text type="secondary">
                  Không hút thuốc, uống rượu, sử dụng chất kích thích trên xe
                </Text>
              </li>
              <li>
                <Text type="secondary">
                  Không mang các vật dễ cháy nổ lên xe
                </Text>
              </li>
              <li>
                <Text type="secondary">Không vứt rác trên xe</Text>
              </li>
              <li>
                <Text type="secondary">
                  Không làm ồn, gây mất trật tự trên xe
                </Text>
              </li>
              <li>
                <Text type="secondary">Không mang giày, dép trên xe</Text>
              </li>
            </ul>
          </Paragraph>
        </div>
        <Divider dashed />
        <div>
          <Title level={5} className="!font-bold !text-gray-600">
            Hành lý xách tay
          </Title>
          <Paragraph className="pl-4">
            <ul>
              <li>
                <Text type="secondary">
                  Tổng trọng lượng hành lý không vượt quá 10 kg
                </Text>
              </li>
              <li>
                <Text type="secondary">
                  Không vận chuyển hàng hóa cồng kềnh
                </Text>
              </li>
              <li>
                <Text type="secondary">
                  Không hoàn tiền trong trường hợp huỷ đơn hàng do vi phạm các
                  quy định về hành lý
                </Text>
              </li>
            </ul>
          </Paragraph>
        </div>
        <Divider dashed />
        <div>
          <Title level={5} className="!font-bold !text-gray-600">
            Trẻ em và phụ nữ có thai
          </Title>
          <Paragraph className="pl-4">
            <ul>
              <li>
                <Text type="secondary">
                  Phụ nữ có thai cần đảm bảo sức khỏe trong suốt quá trình di
                  chuyển
                </Text>
              </li>
              <li>
                <Text type="secondary">
                  Nhà xe có quyền từ chối phục vụ nếu hành khách không tuân thủ
                  quy định về trẻ em và phụ nữ có thai
                </Text>
              </li>
              <li>
                <Text type="secondary">
                  Trẻ em dưới 6 tuổi được miễn phí vé nếu ngồi cùng ghế/giường
                  với bố mẹ
                </Text>
              </li>
              <li>
                <Text type="secondary">
                  Trẻ em từ 6 tuổi trở lên mua vé như người lớn
                </Text>
              </li>
              <li>
                <Text type="secondary">
                  Không áp dụng chính sách trẻ em đối với 2 ghế cạnh tài xế, mỗi
                  ghế chỉ 1 người bất kể độ tuổi hoặc kích thước
                </Text>
              </li>
            </ul>
          </Paragraph>
        </div>
        <Divider dashed />
        <div>
          <Title level={5} className="!font-bold !text-gray-600">
            Động vật cảnh/Thú cưng
          </Title>
          <Paragraph className="pl-4">
            <ul>
              <li>
                <Text type="secondary">
                  Hành khách có động vật đi cùng vui lòng báo trước khi khởi
                  hành và có mặt trước giờ khởi hành ít nhất 60 phút
                </Text>
              </li>
              <li>
                <Text type="secondary">
                  Động vật cảnh phải đảm bảo có sức khỏe tốt, thân thiện với con
                  người, đã được tiêm phòng đầy đủ, không có mùi khó chịu, không
                  gây ảnh hưởng đến hành khách và tài sản của họ
                </Text>
              </li>
              <li>
                <Text type="secondary">
                  Thú cưng cần phải được đeo rọ mõm, nhốt trong lồng, túi, balo
                  phi hành gia để đảm bảo cho việc vận chuyển an toàn, phòng
                  tránh việc thú cưng chạy ra ngoài
                </Text>
              </li>
              <li>
                <Text type="secondary">
                  Nhiệt độ thời tiết trong quá trình vận chuyển đôi khi ảnh
                  hưởng đến sức khỏe của động vật cảnh, nhà xe không chịu trách
                  nhiệm về sức khỏe động vật trong suốt chuyến đi
                </Text>
              </li>
            </ul>
          </Paragraph>
        </div>
        <Divider dashed />
        <div>
          <Title level={5} className="!font-bold !text-gray-600">
            Xuất hóa đơn GTGT
          </Title>
          <Paragraph className="pl-4">
            <ul>
              <li>
                <Text type="secondary">
                  Nhà xe có cung cấp hóa đơn GTGT cho dịch vụ xe khách, phí xuất
                  hóa đơn là 0 % trên giá dịch vụ quý khách đã mua
                </Text>
              </li>
            </ul>
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default PolicyBus;
