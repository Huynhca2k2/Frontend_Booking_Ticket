import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.png";
import hero4 from "../assets/images/hero4.png";

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
  const listChair = [
    {
      id: 0,
      codeChar: "A1",
      status: "available",
    },
    {
      id: 0,
      codeChar: "A1",
      status: "available",
    },
    {
      id: 0,
      codeChar: "A1",
      status: "available",
    },
    {
      id: 0,
      codeChar: "A1",
      status: "available",
    },
    {
      id: 0,
      codeChar: "A1",
      status: "unavailable",
    },
    {
      id: 0,
      codeChar: "A1",
      status: "selected",
    },
  ];
  return response;
};
