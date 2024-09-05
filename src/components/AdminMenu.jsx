import React from "react";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="w-full h-20 bg-gray-800 text-white">
      <nav className="flex flex-row space-y-2 p-3 justify-evenly">
        <Link
          to="/admin/users"
          className="block px-4  rounded-md hover:text-green-500 transition-colors duration-200"
        >
          Quản lý người dùng
        </Link>
        <Link
          to="/admin/posts"
          className="block px-4  rounded-md hover:text-green-500 transition-colors duration-200"
        >
          Quản lý bài viết
        </Link>
        <Link
          to="/admin/tickets"
          className="block px-4  rounded-md hover:text-green-500 transition-colors duration-200"
        >
          Quản lý đặt vé xe
        </Link>
        <Link
          to="/admin/routes"
          className="block px-4  rounded-md hover:text-green-500 transition-colors duration-200"
        >
          Quản lý tuyến đường
        </Link>
        <Link
          to="/admin/buses"
          className="block px-4  rounded-md hover:text-green-500 transition-colors duration-200"
        >
          Quản lý xe bus
        </Link>
        <Link
          to="/admin/settings"
          className="block px-4  rounded-md hover:text-green-500 transition-colors duration-200"
        >
          Cài đặt
        </Link>
      </nav>
    </div>
  );
};

export default AdminMenu;
