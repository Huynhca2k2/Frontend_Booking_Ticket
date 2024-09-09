import BookingBox from "./BookingBox";
import { Button, Carousel, Empty, Pagination, message } from "antd";
import { Typography, Radio, Space } from "antd";
import { useEffect, useState } from "react";
import { Collapse } from "antd";
import banner1 from "../assets/images/banner-pc_1.jpg";
import banner2 from "../assets/images/banner-pc_2.jpg";
import banner3 from "../assets/images/banner-pc_3.jpg";
import banner4 from "../assets/images/banner-pc_4.jpg";
import { useUser } from "../context/UserContext";
import { useLocation, useNavigate } from "react-router-dom";
import Ticket from "./Ticket";
import { filterTrips } from "../services/trip";
import FilterTime from "./FilterTime";
import FilterBusName from "./FilterBusName";
import FilterPrice from "./FilterPrice";

const { Title } = Typography;

function Booking() {
  const { tripsContext, setTripsContext } = useUser();
  const location = useLocation();
  const [tripList, setTripList] = useState(tripsContext || []);
  const [sortBuses, setSortBuses] = useState([]);
  const [value, setValue] = useState(1);
  const [range, setRange] = useState([0, 24]);
  const [rangePrice, setRangePrice] = useState([0, 1000]);
  const [filteredBusNames, setFilteredBusNames] = useState([]);

  const items = [
    {
      key: "1",
      label: <Title level={5}>Giờ đi</Title>,
      children: <FilterTime range={range} setRange={setRange} />,
    },
    {
      key: "2",
      label: <Title level={5}>Nhà xe</Title>,
      children: <FilterBusName onFilterChange={setFilteredBusNames} />,
    },
    {
      key: "3",
      label: <Title level={5}>Giá vé</Title>,
      children: (
        <FilterPrice rangePrice={rangePrice} setRangePrice={setRangePrice} />
      ),
    },
    {
      key: "4",
      label: <Title level={5}>Điểm đón</Title>,
      children: <FilterBusName onFilterChange={setFilteredBusNames} />,
    },
    {
      key: "5",
      label: <Title level={5}>Điểm trả</Title>,
      children: <FilterBusName onFilterChange={setFilteredBusNames} />,
    },
  ];

  useEffect(() => {
    let sortedBuses = [
      ...tripList?.flatMap((trip) =>
        trip?.buses?.map((bus) => ({
          ...bus,
          tripId: trip.id,
          departureTime: trip.departureTime,
        }))
      ),
    ];

    // Filter based on time range
    if (range[0] !== 0 || range[1] !== 24) {
      sortedBuses = sortedBuses.filter((bus) => {
        const busHour = new Date(bus.departureTime).getHours();
        return busHour >= range[0] && busHour <= range[1];
      });
    }

    // Filter based on selected bus names
    if (filteredBusNames.length > 0) {
      sortedBuses = sortedBuses.filter((bus) =>
        filteredBusNames.includes(bus.name)
      );
    }

    // Filter based on price range
    if (rangePrice[0] !== 0 || rangePrice[1] !== 1000) {
      sortedBuses = sortedBuses.filter((bus) => {
        return (
          bus?.priceReal >= rangePrice[0] * 1000 &&
          bus?.priceReal <= rangePrice[1] * 1000
        );
      });
    }

    setSortBuses(sortedBuses);
  }, [tripList, range, filteredBusNames, rangePrice]);

  const handleClearFilter = () => {
    setRange([0, 24]);
    setFilteredBusNames([]);
    setRangePrice([0, 1000]);
  };

  const onChange = (e) => {
    setValue(e.target.value);

    let sortedBusesList = sortBuses;

    if (e.target.value === 2) {
      sortedBusesList = sortedBusesList.sort(
        (a, b) => new Date(a.departureTime) - new Date(b.departureTime)
      );
    } else if (e.target.value === 3) {
      sortedBusesList = sortedBusesList.sort(
        (a, b) => new Date(b.departureTime) - new Date(a.departureTime)
      );
    } else if (e.target.value === 4) {
      sortedBusesList = sortedBusesList.sort(
        (a, b) => a.priceReal - b.priceReal
      );
    } else if (e.target.value === 5) {
      sortedBusesList = sortedBusesList.sort(
        (a, b) => b.priceReal - a.priceReal
      );
    }

    setSortBuses(sortedBusesList);
  };

  useEffect(() => {
    const fetchTrips = async () => {
      const params = new URLSearchParams(location.search);
      const from = params.get("from");
      const to = params.get("to");
      const date = params.get("date");

      if (from && to && date) {
        try {
          const trips = await filterTrips(from, to, date);
          setTripsContext(trips);
        } catch (error) {
          message.error("Có lỗi xảy ra khi tìm kiếm chuyến đi");
        }
      }
    };

    // Fetch trips if context is null
    if (!tripsContext) {
      fetchTrips();
    } else setTripList(tripsContext);
  }, [location.search, tripsContext, setTripsContext]);

  return (
    <div className="bg-[#f2f2f2]">
      <div className="custom-container pt-4 ">
        <BookingBox />
      </div>
      <div className="flex flex-row !mt-4 gap-4 custom-container items-start">
        <div className="flex flex-col gap-4 w-1/4 sticky top-3">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <Title level={4} className="!text-black !font-bold">
              Sắp xếp
            </Title>
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio value={1}>Mặc định</Radio>
                <Radio value={2}>Giờ đi sớm nhất</Radio>
                <Radio value={3}>Giờ đi muộn nhất</Radio>
                <Radio value={4}>Giá tăng dần</Radio>
                <Radio value={5}>Giá giảm dần</Radio>
              </Space>
            </Radio.Group>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex flex-row items-center justify-between">
              <Title level={4} className="!text-black px-4 pt-4">
                Lọc
              </Title>
              {range[0] === 0 &&
              rangePrice[0] === 0 &&
              range[1] === 24 &&
              rangePrice[1] === 1000 &&
              filteredBusNames.length === 0 ? null : (
                <Button
                  type="link"
                  className="underline !font-bold"
                  onClick={handleClearFilter}
                >
                  Xóa lọc
                </Button>
              )}
            </div>

            <Collapse
              className="!bg-white"
              items={items}
              bordered={false}
              defaultActiveKey={["1"]}
              expandIconPosition={"end"}
            />
          </div>
        </div>
        <div className="w-3/4 flex flex-col gap-4">
          <Carousel dots={false} autoplay>
            {[banner1, banner2, banner3, banner4].map((banner, idx) => (
              <div key={idx} className="h-[100px]">
                <img
                  src={banner}
                  alt="banner qc"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            ))}
          </Carousel>
          <div className="flex flex-col gap-4">
            {sortBuses.length > 0 ? (
              sortBuses.map((itemBuses, i) => (
                <Ticket busesCustom={itemBuses} key={i} />
              ))
            ) : (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                  <Typography.Text>
                    Không tìm thấy kết quả phù hợp
                  </Typography.Text>
                }
              />
            )}
            <Pagination align="center" defaultCurrent={1} total={12} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
