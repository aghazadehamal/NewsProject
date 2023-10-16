import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login attempt:", username, password);
    if (username === "amal" && password === "123") {
      console.log("Login successful, navigating...");
      navigate("/Aster");
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full px-3 py-2 placeholder-gray-400 text-gray-900 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 placeholder-gray-400 text-gray-900 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      >
        Giriş Yap
      </button>
    </div>
  );
};

export default Login;