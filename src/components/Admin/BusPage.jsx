import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../services/localStorageService";
import AdminMenu from "../AdminMenu";
import { toast } from "react-toastify";
const BusPage = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const getUserDetails = async (accessToken) => {
    try {
      const response = await fetch(
        "http://localhost:8080/identity/bus/getBus",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await response.json();
      console.log(data);
      setUserDetails(Array.isArray(data.result) ? data.result : []);
    } catch (error) {
      console.error("Error fetching user details:", error);
      setUserDetails([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const accessToken = getToken();
    try {
      const response = await fetch("http://localhost:8080/identity/bus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        const createdUser = await response.json();
        setUserDetails((prevUsers) => [...prevUsers, createdUser]);
        setNewUser({
          username: "",
          firstName: "",
          lastName: "",
          email: "",
        });
      } else {
        toast.error("Failed to create user");
      }
    } catch (error) {
      toast.error("Error creating user:", error);
    }
  };

  useEffect(() => {
    const accessToken = getToken();

    if (!accessToken) {
      navigate("/login");
    } else {
      getUserDetails(accessToken);
    }
  }, [navigate]);

  const handleEdit = (user) => {
    setEditingUser(user);
  };
  const handleSaveEdit = async (e) => {
    e.preventDefault();
    const accessToken = getToken();
    try {
      const response = await fetch(
        `http://localhost:8080/identity/users/${editingUser.id}`,
        {
          method: "PUT", // or "PATCH" depending on your API
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(editingUser),
        }
      );

      if (response.ok) {
        setUserDetails((prevUsers) =>
          prevUsers.map((user) =>
            user.id === editingUser.id ? editingUser : user
          )
        );
        setEditingUser(null); // Clear form after saving
      } else {
        console.error("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = async (userId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
      try {
        const accessToken = getToken();
        const response = await fetch(
          `http://localhost:8080/identity/users/${userId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.ok) {
          setUserDetails(userDetails.filter((user) => user.id !== userId));
          console.log(`User with ID: ${userId} has been deleted.`);
        } else {
          console.error("Failed to delete user");
        }
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <>
      <AdminMenu></AdminMenu>
      <div className="p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Quản Lý Xe Khách</h2>

        {/* Form tạo người dùng mới */}
        {/* {editingUser && (
          <form onSubmit={handleSaveEdit} className="mb-6"></form>
        )} */}
        <form onSubmit={handleCreateUser} className="mb-6">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Tên Xe Khách
            </label>
            <input
              type="text"
              name="busName"
              value={newUser.busName}
              onChange={handleInputChange}
              className="border rounded-md px-4 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Kiểu xe</label>
            <input
              type="text"
              name="firstName"
              value={newUser.busType}
              onChange={handleInputChange}
              className="border rounded-md px-4 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Chuyến Xe</label>
            <input
              type="text"
              name="lastName"
              value={newUser.lastName}
              onChange={handleInputChange}
              className="border rounded-md px-4 py-2 w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Tạo Xe Khách Mới
          </button>
        </form>

        {/* Bảng hiển thị người dùng */}
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              {/* <th className="py-2 px-2 border-b">ID</th> */}
              <th className="py-2 px-4 border-b">Tên Xe Khách</th>
              <th className="py-2 px-4 border-b">Chuyến Xe</th>
              <th className="py-2 px-4 border-b">Kiểu xe</th>
              <th className="py-2 px-4 border-b">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {userDetails.length > 0 ? (
              userDetails.map((user) => (
                <tr key={user.id}>
                  {/* <td className="py-2 px-4 border-b">{user.id}</td> */}
                  <td className="py-2 px-4 border-b">{user.busName}</td>
                  <td className="py-2 px-4 border-b">{user.chuyenXe}</td>
                  <td className="py-2 px-4 border-b">{user.busType}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="text-blue-500 hover:underline mr-2"
                      onClick={() => handleEdit(user)}
                    >
                      Sửa
                    </button>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => handleDelete(user.id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  Không có người dùng nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BusPage;
