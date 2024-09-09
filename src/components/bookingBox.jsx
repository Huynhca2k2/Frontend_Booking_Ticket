import { Alert, Tabs } from "antd";
import CustomSearchInput from "./CustomSearchInput";
import { FaBus, FaPlane } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function BookingBox() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const date = searchParams.get("date") || null;

  return (
    <div className="bg-white w-full px-4 pb-4 rounded-xl shadow-sm border border-gray-100 ">
      <Tabs
        defaultActiveKey="1"
        centered
        items={[
          {
            label: (
              <span className="flex items-center gap-2 px-6 text-base font-semibold">
                <FaBus />
                Xe Khách
              </span>
            ),
            key: "1",
            children: (
              <CustomSearchInput
                fromValue={from}
                toValue={to}
                dateValue={date}
              />
            ),
          },
          {
            label: (
              <span className="flex items-center gap-2 px-6 text-base font-semibold">
                <FaPlane />
                Máy Bay
              </span>
            ),
            key: "2",
            children: (
              <Alert
                message="The function will be developed in the future."
                type="warning"
                showIcon
              />
            ),
          },
        ]}
      />
    </div>
  );
}

export default BookingBox;
