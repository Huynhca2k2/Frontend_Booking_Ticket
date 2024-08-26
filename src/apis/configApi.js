import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.png";
import hero4 from "../assets/images/hero4.png";
import { Alert, Tabs, Typography } from "antd";

const { Title, Text } = Typography;

export const getBusPopulor = () => {
  const response = [
    {
      id: 0,
      src: hero1,
      alt: "hinh anh tuyen xe pho bien",
      desc: "Sài Gòn - Nha Trang ",
      price: "Từ 200.000đ",
    },
    {
      id: 1,
      src: hero2,
      alt: "hinh anh tuyen xe pho bien",
      desc: "Hà Nội - Hải Phòng ",
      price: "Từ 300.000đ",
    },
    {
      id: 2,
      src: hero3,
      alt: "hinh anh tuyen xe pho bien",
      desc: "Sài Gòn - Đà Lạt ",
      price: "Từ 400.000đ",
    },
    {
      id: 3,
      src: hero4,
      alt: "hinh anh tuyen xe pho bien",
      desc: "Sài Gòn - Phan Thiết ",
      price: "Từ 500.000đ",
    },
    {
      id: 4,
      src: hero1,
      alt: "hinh anh tuyen xe pho bien",
      desc: "Sài Gòn - Phan Rang",
      price: "Từ 600.000đ",
    },
    {
      id: 5,
      src: hero2,
      alt: "hinh anh tuyen xe pho bien",
      desc: "Sài Gòn - Vũng Tàu ",
      price: "Từ 700.000đ",
    },
    {
      id: 6,
      src: hero3,
      alt: "hinh anh tuyen xe pho bien",
      desc: "Nha Trang  - Sài Gòn",
      price: "Từ 800.000đ",
    },
    {
      id: 7,
      src: hero4,
      alt: "hinh anh tuyen xe pho bien",
      desc: "Sài Gòn - Phú Quốc ",
      price: "Từ 900.000đ",
    },
  ];
  return response;
};

export const provinces = [
  { name: "An Giang", slug: "an-giang" },
  { name: "Bà Rịa - Vũng Tàu", slug: "ba-ria-vung-tau" },
  { name: "Bắc Giang", slug: "bac-giang" },
  { name: "Bắc Kạn", slug: "bac-kan" },
  { name: "Bạc Liêu", slug: "bac-lieu" },
  { name: "Bắc Ninh", slug: "bac-ninh" },
  { name: "Bến Tre", slug: "ben-tre" },
  { name: "Bình Định", slug: "binh-dinh" },
  { name: "Bình Dương", slug: "binh-duong" },
  { name: "Bình Phước", slug: "binh-phuoc" },
  { name: "Bình Thuận", slug: "binh-thuan" },
  { name: "Cà Mau", slug: "ca-mau" },
  { name: "Cần Thơ", slug: "can-tho" },
  { name: "Cao Bằng", slug: "cao-bang" },
  { name: "Đà Nẵng", slug: "da-nang" },
  { name: "Đắk Lắk", slug: "dak-lak" },
  { name: "Đắk Nông", slug: "dak-nong" },
  { name: "Điện Biên", slug: "dien-bien" },
  { name: "Đồng Nai", slug: "dong-nai" },
  { name: "Đồng Tháp", slug: "dong-thap" },
  { name: "Gia Lai", slug: "gia-lai" },
  { name: "Hà Giang", slug: "ha-giang" },
  { name: "Hà Nam", slug: "ha-nam" },
  { name: "Hà Nội", slug: "ha-noi" },
  { name: "Hà Tĩnh", slug: "ha-tinh" },
  { name: "Hải Dương", slug: "hai-duong" },
  { name: "Hải Phòng", slug: "hai-phong" },
  { name: "Hậu Giang", slug: "hau-giang" },
  { name: "Hòa Bình", slug: "hoa-binh" },
  { name: "Hồ Chí Minh", slug: "ho-chi-minh" },
  { name: "Hưng Yên", slug: "hung-yen" },
  { name: "Khánh Hòa", slug: "khanh-hoa" },
  { name: "Kiên Giang", slug: "kien-giang" },
  { name: "Kon Tum", slug: "kon-tum" },
  { name: "Lai Châu", slug: "lai-chau" },
  { name: "Lâm Đồng", slug: "lam-dong" },
  { name: "Lạng Sơn", slug: "lang-son" },
  { name: "Lào Cai", slug: "lao-cai" },
  { name: "Long An", slug: "long-an" },
  { name: "Nam Định", slug: "nam-dinh" },
  { name: "Nghệ An", slug: "nghe-an" },
  { name: "Ninh Bình", slug: "ninh-binh" },
  { name: "Ninh Thuận", slug: "ninh-thuan" },
  { name: "Phú Thọ", slug: "phu-tho" },
  { name: "Phú Yên", slug: "phu-yen" },
  { name: "Quảng Bình", slug: "quang-binh" },
  { name: "Quảng Nam", slug: "quang-nam" },
  { name: "Quảng Ngãi", slug: "quang-ngai" },
  { name: "Quảng Ninh", slug: "quang-ninh" },
  { name: "Quảng Trị", slug: "quang-tri" },
  { name: "Sóc Trăng", slug: "soc-trang" },
  { name: "Sơn La", slug: "son-la" },
  { name: "Tây Ninh", slug: "tay-ninh" },
  { name: "Thái Bình", slug: "thai-binh" },
  { name: "Thái Nguyên", slug: "thai-nguyen" },
  { name: "Thanh Hóa", slug: "thanh-hoa" },
  { name: "Thừa Thiên Huế", slug: "thua-thien-hue" },
  { name: "Tiền Giang", slug: "tien-giang" },
  { name: "Trà Vinh", slug: "tra-vinh" },
  { name: "Tuyên Quang", slug: "tuyen-quang" },
  { name: "Vĩnh Long", slug: "vinh-long" },
  { name: "Vĩnh Phúc", slug: "vinh-phuc" },
  { name: "Yên Bái", slug: "yen-bai" },
];

export const listChair = [
  { id: 0, codeChair: "A1", status: "available" },
  { id: 1, codeChair: "A2", status: "available" },
  { id: 2, codeChair: "A3", status: "available" },
  { id: 3, codeChair: "A4", status: "available" },
  { id: 4, codeChair: "A5", status: "unavailable" },
  { id: 5, codeChair: "A6", status: "unavailable" },
  { id: 6, codeChair: "A7", status: "available" },
  { id: 7, codeChair: "A8", status: "available" },
  { id: 8, codeChair: "A9", status: "available" },
  { id: 9, codeChair: "A10", status: "available" },
  { id: 10, codeChair: "A11", status: "unavailable" },
  { id: 11, codeChair: "A12", status: "unavailable" },
  { id: 12, codeChair: "A13", status: "available" },
  { id: 13, codeChair: "A14", status: "available" },
  { id: 14, codeChair: "A15", status: "available" },
  { id: 15, codeChair: "A16", status: "available" },
  { id: 16, codeChair: "A17", status: "unavailable" },
  { id: 17, codeChair: "A18", status: "unavailable" },
  { id: 18, codeChair: "A19", status: "available" },
  { id: 19, codeChair: "A20", status: "available" },
  { id: 20, codeChair: "A21", status: "available" },
  { id: 21, codeChair: "A22", status: "available" },
  { id: 22, codeChair: "A23", status: "unavailable" },
  { id: 23, codeChair: "A24", status: "unavailable" },
  { id: 24, codeChair: "A25", status: "available" },
  { id: 25, codeChair: "A26", status: "available" },
  { id: 26, codeChair: "A27", status: "unavailable" },
  { id: 27, codeChair: "A28", status: "unavailable" },
  { id: 28, codeChair: "A29", status: "available" },
  { id: 29, codeChair: "A30", status: "available" },
  { id: 30, codeChair: "A31", status: "available" },
  { id: 31, codeChair: "A32", status: "available" },
  { id: 32, codeChair: "A33", status: "unavailable" },
  { id: 33, codeChair: "A34", status: "unavailable" },
  { id: 34, codeChair: "A35", status: "unavailable" },
  { id: 35, codeChair: "A36", status: "unavailable" },
];

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const items = [
  {
    key: "1",
    label: <Title level={5}>Giờ đi</Title>,
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: <Title level={5}>Nhà xe</Title>,
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: <Title level={5}>Giá vé</Title>,
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: <Title level={5}>Điểm đón</Title>,
    children: <p>{text}</p>,
  },
  {
    key: "5",
    label: <Title level={5}>Điểm trả</Title>,
    children: <p>{text}</p>,
  },
  {
    key: "6",
    label: <Title level={5}>Vị trí ghế</Title>,
    children: <p>{text}</p>,
  },
];

export const bookings = [
  {
    id: 0,
    from: "ca-mau",
    to: "ho-chi-minh",
    garage: {
      name: "An Anh Limousine",
      img: "https://static.vexere.com/production/images/1716953194738.jpeg?w=250&h=250",
      alt: "hinh xe An Anh Limousine",
    },
    vehicleType: "Limousine 24 Phòng Đôi",
    ticketPrice: "350000",
    flashSale: "Giảm 25%",
    rating: "4.5",
    chairs: listChair,
    time: {
      hourStart: "13:00",
      dateStart: "2024-08-27",
      hourEnd: "19:45",
      dateEnd: "2024-08-27",
    },
    placeStart: [
      {
        index: 0,
        name: "116 Quốc lộ 13",
        location: "266 Đồng Đen, Phường 10, Tân Bình, Hồ Chí Minh",
      },
      {
        index: 1,
        name: "Lăng Cha Cả",
        location: "315 Hoàng văn Thụ, Phường 2, Quận Tân Bình, Hồ Chí Minh",
      },
      {
        index: 2,
        name: "5 Nguyễn Huệ",
        location: "Quận 1, Hồ Chí Minh",
      },
      {
        index: 3,
        name: "Chợ Bến Thành",
        location: "Quận 1, Hồ Chí Minh",
      },
    ],
    placeEnd: [
      {
        index: 0,
        name: "Vp Đà Lạt",
        location:
          "Quốc Lộ 20, thị trấn Madagui, Thị trấn Ma Đa Guôi, Đạ Huoai, Lâm Đồng",
      },
      {
        index: 1,
        name: "Siêu thị Coop Mart Bảo Lộc",
        location: "803 Trần Phú, Phường 2, Bảo Lộc, Lâm Đồng",
      },
    ],
    ticket: [
      {
        id: 0,
        user: {
          name: "",
          email: "",
          numberPhone: "",
        },
        chairs: ["A1", "A2"],
        time: {
          hourStart: "13:00",
          dateStart: "2024-08-27",
          hourEnd: "19:45",
          dateEnd: "2024-08-27",
        },
        placeStart: {
          index: 0,
          name: "116 Quốc lộ 13",
          location: "266 Đồng Đen, Phường 10, Tân Bình, Hồ Chí Minh",
        },
        placeEnd: {
          index: 1,
          name: "Vp Đà Lạt",
          location:
            "Quốc Lộ 20, thị trấn Madagui, Thị trấn Ma Đa Guôi, Đạ Huoai, Lâm Đồng",
        },
      },
    ],
    status: true,
  },
  {
    id: 1,
    from: "ca-mau",
    to: "ho-chi-minh",
    garage: {
      name: "Lê Lai Limousine",
      img: "https://static.vexere.com/production/images/1696085715372.jpeg?w=250&h=250",
      alt: "hinh xe Lê Lai Limousine",
    },
    vehicleType: "Limousine 30 Phòng Đôi",
    ticketPrice: "400000",
    flashSale: "Giảm 20%",
    rating: "4.7",
    chairs: listChair,
    time: {
      hourStart: "09:00",
      dateStart: "2024-08-27",
      hourEnd: "16:30",
      dateEnd: "2024-08-28",
    },
    placeStart: [
      {
        index: 0,
        name: "5 Nguyễn Huệ",
        location: "Quận 1, Hồ Chí Minh",
      },
      {
        index: 1,
        name: "Chợ Bến Thành",
        location: "Quận 1, Hồ Chí Minh",
      },
    ],
    placeEnd: [
      {
        index: 0,
        name: "Bãi Biển Nha Trang",
        location: "Nha Trang, Khánh Hòa",
      },
      {
        index: 1,
        name: "Siêu thị Big C Nha Trang",
        location: "Trần Phú, Nha Trang, Khánh Hòa",
      },
    ],

    ticket: [
      {
        id: 1,
        user: {
          name: "Nguyễn Văn A",
          email: "nguyenvana@example.com",
          numberPhone: "0987654321",
        },
        chairs: ["A1", "A2"],
        time: {
          hourStart: "09:00",
          dateStart: "2024-08-28",
          hourEnd: "16:30",
          dateEnd: "2024-08-28",
        },
        placeStart: {
          index: 0,
          name: "5 Nguyễn Huệ",
          location: "Quận 1, Hồ Chí Minh",
        },
        placeEnd: {
          index: 1,
          name: "Bãi Biển Nha Trang",
          location: "Nha Trang, Khánh Hòa",
        },
      },
    ],
    status: true,
  },
  {
    id: 2,
    from: "da-lat",
    to: "phan-thiet",
    garage: {
      name: "Tân Phú Limousine",
      img: "https://static.vexere.com/production/images/1645602467050.jpeg?w=250&h=250",
      alt: "hinh xe Tân Phú Limousine",
    },
    vehicleType: "Limousine 16 Phòng Đôi",
    ticketPrice: "300000",
    flashSale: "Giảm 15%",
    rating: "4.6",
    chairs: listChair,
    time: {
      hourStart: "14:00",
      dateStart: "2024-08-29",
      hourEnd: "20:00",
      dateEnd: "2024-08-29",
    },
    placeStart: [
      {
        index: 0,
        name: "32 Trần Hưng Đạo",
        location: "Quận 5, Hồ Chí Minh",
      },
      {
        index: 1,
        name: "Nhà thờ Đức Bà",
        location: "Quận 1, Hồ Chí Minh",
      },
    ],
    placeEnd: [
      {
        index: 0,
        name: "Bãi Biển Phan Thiết",
        location: "Phan Thiết, Bình Thuận",
      },
      {
        index: 1,
        name: "Siêu thị Lotte Mart Phan Thiết",
        location: "Phan Thiết, Bình Thuận",
      },
    ],
    ticket: [
      {
        id: 2,
        user: {
          name: "Trần Thị B",
          email: "tranthib@example.com",
          numberPhone: "0912345678",
        },
        time: {
          hourStart: "14:00",
          dateStart: "2024-08-29",
          hourEnd: "20:00",
          dateEnd: "2024-08-29",
        },
        placeStart: {
          index: 0,
          name: "32 Trần Hưng Đạo",
          location: "Quận 5, Hồ Chí Minh",
        },
        placeEnd: {
          index: 1,
          name: "Bãi Biển Phan Thiết",
          location: "Phan Thiết, Bình Thuận",
        },
        chairs: ["C1", "C2"],
      },
    ],
    status: true,
  },
  {
    id: 3,
    from: "phan-rang",
    to: "vung-tau",
    garage: {
      name: "Việt Anh Limousine",
      img: "https://static.vexere.com/production/images/1591861453986.png?w=250&h=250",
      alt: "hinh xe Việt Anh Limousine",
    },
    vehicleType: "Limousine 20 Phòng Đôi",
    ticketPrice: "350000",
    flashSale: "Giảm 30%",
    rating: "4.8",
    chairs: listChair,
    time: {
      hourStart: "10:00",
      dateStart: "2024-08-30",
      hourEnd: "17:00",
      dateEnd: "2024-08-30",
    },
    placeStart: [
      {
        index: 0,
        name: "8 Phạm Ngũ Lão",
        location: "Quận 1, Hồ Chí Minh",
      },
      {
        index: 1,
        name: "Bưu Điện Trung Tâm",
        location: "Quận 1, Hồ Chí Minh",
      },
    ],
    placeEnd: [
      {
        index: 0,
        name: "Công viên 23/9",
        location: "Quận 1, Hồ Chí Minh",
      },
      {
        index: 1,
        name: "Siêu thị Coop Mart Nguyễn Đình Chiểu",
        location: "Quận 3, Hồ Chí Minh",
      },
    ],
    ticket: [
      {
        id: 3,
        user: {
          name: "Nguyễn Thị C",
          email: "nguyenthic@example.com",
          numberPhone: "0923456789",
        },

        chairs: ["D1", "D2"],
      },
    ],
    status: true,
  },
  {
    id: 4,
    from: "kieng-giang",
    to: "hai-phong",
    garage: {
      name: "Hoàng Gia Limousine",
      img: "https://static.vexere.com/production/images/1595423955061.jpeg?w=250&h=250",
      alt: "hinh xe Hoàng Gia Limousine",
    },
    vehicleType: "Limousine 40 Phòng Đôi",
    ticketPrice: "450000",
    flashSale: "Giảm 10%",
    rating: "4.9",
    chairs: listChair,
    time: {
      hourStart: "11:00",
      dateStart: "2024-08-31",
      hourEnd: "18:30",
      dateEnd: "2024-08-31",
    },
    placeStart: [
      {
        name: "45 Lê Duẩn",
        location: "Quận 1, Hồ Chí Minh",
      },
      {
        name: "Chợ Tân Định",
        location: "Quận 1, Hồ Chí Minh",
      },
    ],
    placeEnd: [
      {
        name: "Đà Lạt",
        location: "Lâm Đồng",
      },
      {
        name: "Siêu thị VinMart Đà Lạt",
        location: "Đà Lạt, Lâm Đồng",
      },
    ],
    ticket: [
      {
        id: 4,
        user: {
          name: "Lê Văn D",
          email: "levand@example.com",
          numberPhone: "0934567890",
        },
        time: {
          hourStart: "11:00",
          dateStart: "2024-08-31",
          hourEnd: "18:30",
          dateEnd: "2024-08-31",
        },
        placeStart: {
          name: "45 Lê Duẩn",
          location: "Quận 1, Hồ Chí Minh",
        },
        placeEnd: {
          name: "Đà Lạt",
          location: "Lâm Đồng",
        },
        chairs: ["E1", "E2"],
      },
    ],
    status: true,
  },
  {
    id: 5,
    from: "son-la",
    to: "nghe-an",
    garage: {
      name: "Cát Tường Limousine",
      img: "https://static.vexere.com/production/images/1568100712057.jpeg?w=250&h=250",
      alt: "hinh xe Cát Tường Limousine",
    },
    vehicleType: "Limousine 12 Phòng Đôi",
    ticketPrice: "250000",
    flashSale: "Giảm 5%",
    rating: "4.4",
    chairs: listChair,
    time: {
      hourStart: "15:00",
      dateStart: "2024-09-01",
      hourEnd: "21:00",
      dateEnd: "2024-09-01",
    },
    placeStart: [
      {
        name: "20 Nguyễn Thị Minh Khai",
        location: "Quận 3, Hồ Chí Minh",
      },
      {
        name: "Bệnh viện Chợ Rẫy",
        location: "Quận 5, Hồ Chí Minh",
      },
    ],
    placeEnd: [
      {
        name: "Vũng Tàu",
        location: "Vũng Tàu",
      },
      {
        name: "Siêu thị Lotte Mart Vũng Tàu",
        location: "Vũng Tàu",
      },
    ],
    ticket: [
      {
        id: 5,
        user: {
          name: "Đinh Thị E",
          email: "dinthie@example.com",
          numberPhone: "0945678901",
        },
        time: {
          hourStart: "15:00",
          dateStart: "2024-09-01",
          hourEnd: "21:00",
          dateEnd: "2024-09-01",
        },
        placeStart: {
          name: "20 Nguyễn Thị Minh Khai",
          location: "Quận 3, Hồ Chí Minh",
        },
        placeEnd: {
          name: "Vũng Tàu",
          location: "Vũng Tàu",
        },
        chairs: ["F1", "F2"],
      },
    ],
    status: true,
  },
];
