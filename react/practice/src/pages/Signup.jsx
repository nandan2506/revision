import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logging, setLogging] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSignup = async () => {
    try {
      setLogging(true);
      setIsError(false);

      const res = await fetch(`${API_URL}/user/signUp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("signed up successfully")
      } else {
        setError(data.message);
        alert(data.message || "Login failed");
      }
    } catch (error) {
      setIsError(true);
      setError(error.message || "Something went wrong");
      console.log("Error while login:", error);
    } finally {
      setLogging(false); // ✅ always reset
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-200 flex flex-col items-center justify-center">
      <h1 className="text-blue-500 text-2xl font-bold mb-4">Signup</h1>
      <input
        className="mb-2 p-2 border border-gray-300 rounded w-64"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <input
        className="mb-2 p-2 border border-gray-300 rounded w-64"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <input
        className="mb-2 p-2 border border-gray-300 rounded w-64"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button
        onClick={handleSignup}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Signup
      </button>
      <p>Already have account</p>
      <button
        onClick={() => navigate("/login")}
        className="bg-white hover:bg-gray-600 text-blue-500 px-4 py-2 rounded"
      >
        Login
      </button>
      {logging && <h1 className="mt-2 text-gray-600">Logging...</h1>}
      {isError && <h1 className="mt-2 text-red-500">{error}</h1>}
    </div>
  );
}
