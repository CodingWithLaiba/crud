import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreaterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_URL}/createUser`, { name, email, age })
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
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold mb-2">Add User</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter Name"
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter Email"
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              placeholder="Enter age"
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}
