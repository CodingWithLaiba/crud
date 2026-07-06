import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function UpdateUser() {
  const { id } = useParams();
  console.log("ID:", id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/getUser/${id}`)
      .then((result) => {
        console.log(result.data);

        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  function handleUpdate(e) {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_API_URL}/updateUser/${id}`, { name, email, age })
      .then((result) => {
        console.log(result.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="flex h-screen justify-center items-center bg-blue-500">
      <div className="bg-white rounded p-4 shadow-lg w-110">
        <form onSubmit={handleUpdate}>
          <h2 className="text-3xl font-bold mb-2">Update User</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={age || ""}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age"
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
}
