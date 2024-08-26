import { Typography } from "antd";
const { Title, Text } = Typography;

function Footer() {
  return (
    <div className="w-full">
      <div className="bg-[#f2f2f2]">
        <div className="custom-container flex flex-col gap-6 py-8">
          <div className="flex flex-row gap-6 ">
            <div className="w-4/12">
              <Title level={3} className="!font-bold">
                Tuyến đường
              </Title>
              <ul className="flex flex-col gap-4 mt-6">
                <li>Xe đi Buôn Mê Thuột từ Sài Gòn</li>
                <li>Xe đi Vũng Tàu từ Sài Gòn</li>
                <li>Xe đi Nha Trang từ Sài Gòn</li>
                <li>Xe đi Đà Lạt từ Sài Gòn</li>
                <li>Xe đi Sapa từ Hà Nội</li>
                <li>Xe đi Hải Phòng từ Hà Nội</li>
                <li>Xe đi Vinh từ Hà Nội</li>
              </ul>
            </div>
            <div className="w-4/12">
              <Title level={3} className="!font-bold">
                Xe Limousine
              </Title>

              <ul className="flex flex-col gap-4 mt-6">
                <li>Xe Limousine đi Đà Lạt từ Sài Gòn</li>
                <li>Xe Limousine đi Nha Trang từ Sài Gòn</li>
                <li>Xe Limousine đi Hải Phòng từ Hà Nội</li>
                <li>Xe Limousine đi Hạ Long từ Hà Nội</li>
                <li>Xe Limousine đi Sapa Từ Hà Nội</li>
                <li>Xe Limousine đi Quảng Ninh từ Hà Nội</li>
              </ul>
            </div>
            <div className="w-4/12">
              <Title level={3} className="!font-bold">
                Tin tức
              </Title>
              <ul className="flex flex-col gap-4 mt-6">
                <li>
                  Xe giường nằm Limousine – đỉnh cao mới của ngành xe khách
                </li>
                <li>
                  Xe limousine đi Vũng Tàu: Tổng hợp top 6 xe chất lượng cao
                </li>
                <li>Review xe limousine đi Đà Lạt: những câu hỏi thường gặp</li>
                <li>
                  Xe limousine đi Sapa: Tổng hợp top các hãng xe chất lượng cao
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="w-4/12">
              <Title level={3} className="!font-bold">
                Bến xe
              </Title>
              <ul className="flex flex-col gap-4 mt-6">
                <li>Bến xe Miền Đông</li>
                <li>Bến xe Trung tâm Đà Nẵng</li>
                <li>Bến xe Gia Lâm</li>
                <li>Bến xe Mỹ Đình</li>
                <li>Bến xe An Sương</li>
                <li>Bến xe Nước Ngầm</li>
                <li>Bến xe Miền Tây</li>
              </ul>
            </div>
            <div className="w-8/12">
              <Title level={3} className="!font-bold">
                Nhà xe
              </Title>
              <div className="flex flex-row gap-6 mt-6">
                <div className="w-4/12">
                  <ul className="flex flex-col gap-4 ">
                    <li>Xe Liên Hưng</li>
                    <li>Xe Long Vân Limousine</li>
                    <li>Xe Vie Limousine</li>
                    <li>Xe Cúc Tùng</li>
                    <li>Xe An Phú Buslines</li>
                    <li>Xe Bằng Phấn</li>
                    <li>Xe Hà Lan</li>
                    <li>Xe 36 Limousine</li>
                  </ul>
                </div>
                <div className="w-4/12">
                  <ul className="flex flex-col gap-4">
                    <li>Xe Thuận Tiến</li>
                    <li>Xe Khanh Phong</li>
                    <li>Xe Tiến Oanh</li>
                    <li>Xe Hạnh Cafe</li>
                    <li>Xe Tân Kim Chi</li>
                    <li>Xe Quang Nghị</li>
                    <li>Xe Cúc Tùng</li>
                  </ul>
                </div>
                <div className="w-4/12">
                  <ul className="flex flex-col gap-4">
                    <li>Xe Liên Hưng</li>
                    <li>Xe Long Vân Limousine</li>
                    <li>Xe Vie Limousine</li>
                    <li>Xe Cúc Tùng</li>
                    <li>Xe An Phú Buslines</li>
                    <li>Xe Bằng Phấn</li>
                    <li>Xe Hà Lan</li>
                  </ul>
                </div>
                <div className="w-4/12">
                  <ul className="flex flex-col gap-4">
                    <li>Xe Thuận Tiến</li>
                    <li>Xe Khanh Phong</li>
                    <li>Xe Tiến Oanh</li>
                    <li>Xe Hạnh Cafe</li>
                    <li>Xe Tân Kim Chi</li>
                    <li>Xe Quang Nghị</li>
                    <li>Xe Nam Cường Limousine</li>
                    <li>Xe Phúc Xuyên</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-container flex flex-col items-center p-6">
        <Title level={4} className="!font-bold">
          Công ty TNHH Thương Mại Dịch Vụ BAOKHANG
        </Title>
        <Text type="secondary" className="text-center">
          Địa chỉ đăng ký kinh doanh: 8C Chữ Đồng Tử, Phường 7, Quận Tân Bình,
          Thành Phố Hồ Chí Minh, Việt Nam <br />
          Địa chỉ: Lầu 2, tòa nhà H3 Circo Hoàng Diệu, 384 Hoàng Diệu, Phường 6,
          Quận 4, Tp. Hồ Chí Minh, Việt Nam <br />
          Tầng 3, Toà nhà 101 Láng Hạ, Phường Láng Hạ, Quận Đống Đa, Hà Nội,
          Việt Nam
          <br />
          Giấy chứng nhận ĐKKD số 031****726 do Sở KH và ĐT TP. Hồ Chí Minh cấp
          lần đầu ngày 27/6/2018 <br />
          Bản quyền © 2024 thuộc về KHANG DANG
        </Text>
      </div>
    </div>
  );
}

export default Footer;
