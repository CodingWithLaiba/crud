import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/`)
      .then((result) => {
        setUsers(Array.isArray(result.data) ? result.data : []);
      })
      .catch((err) => {
        console.log(err);
        setUsers([]);
      });
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/deleteUser/${id}`)
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex h-screen justify-center items-center bg-blue-500">
      <div className="bg-white rounded p-4 shadow-lg">
        <div className="flex items-center justify-end">
          <Link
            to="/create"
            className="bg-green-500 text-white px-2 py-2 cursor-pointer "
          >
            Add+
          </Link>
        </div>

        <table className="table-auto border-collapse border border-gray-300 mt-3">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Age</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.age}</td>
                <td className="border px-4 py-2">
                  <button className="cursor-pointer bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                    <Link to={`/update/${user._id}`}>Update</Link>
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
                    onClick={() => {
                      handleDelete(user._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
