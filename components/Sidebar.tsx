import { Dispatch, SetStateAction } from "react";
import { FaBox, FaChartBar, FaRegTrashAlt, FaPlus } from "react-icons/fa";

const Sidebar = ({
  setActivePage,
  sidebarOpen,
}: {
  setActivePage: Dispatch<SetStateAction<string>>;
  sidebarOpen: boolean;
}) => {
  return (
    <nav
      className={`bg-[#9A928D] text-white p-4 transition-all duration-300 ease-in-out ${
        sidebarOpen ? "w-64" : "w-16"
      } h-full flex flex-col`}
    >
      <ul className="space-y-4">
        {[
          { icon: <FaBox />, text: "คลังสินค้า", page: "inventory" },
          { icon: <FaPlus />, text: "เพิ่มสินค้า", page: "add-product" },
          { icon: <FaRegTrashAlt />, text: "ตัดสต๊อก", page: "remove-product" },
          { icon: <FaChartBar />, text: "รายงาน", page: "report" },
        ].map((item, index) => (
          <li key={index}>
            <button
              onClick={() => setActivePage(item.page)}
              className="flex items-center text-lg font-mitr space-x-4 hover:text-[#AA8558] transition-colors duration-200 w-full p-2 rounded-lg hover:bg-[#8A827D]"
            >
              {/* Icon stays fixed size */}
              <span className="text-2xl w-8 flex justify-center items-center">
                {item.icon}
              </span>
              {/* Text transitions smoothly */}
              <span
                className={`whitespace-nowrap transition-all duration-300 ${
                  sidebarOpen
                    ? "opacity-100 visible w-auto"
                    : "opacity-0 invisible w-0"
                }`}
              >
                {item.text}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
