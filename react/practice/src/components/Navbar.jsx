import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-evenly p-2">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => navigate("/login")}
      >
        login
      </button>
      <button
        className="bg-gray-100 hover:bg-gray-600 text-blue-500 px-4 py-2 rounded"
        onClick={() => navigate("/signUp")}
      >
        signup
      </button>
    </div>
  );
}
