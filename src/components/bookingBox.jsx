import { Alert, Tabs } from "antd";
import CustomSearchInput from "./customSearchInput";
import { FaBus, FaPlane } from "react-icons/fa";

function BookingBox() {
  return (
    <div className="bg-white w-full px-4 pb-4 rounded-xl shadow-sm border border-gray-100">
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
            children: <CustomSearchInput />,
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
