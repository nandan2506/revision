import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API_URL = import.meta.env.VITE_API_URL

  const handleLogin = async () => {
    try {
      const res = await fetch(`${API_URL}/user/logIn`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json(); // ✅ await here
      console.log("Login response:", data);

      if (res.ok) {
        const token = data.token; // ✅ token is inside response JSON
        if (token) {
          localStorage.setItem("token", token); // ✅ store for later use
          alert("Logged in successfully!");
        }
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.log("Error while login:", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="enter email"
      />
      <input
        type="password" // ✅ better for passwords
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="enter password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
