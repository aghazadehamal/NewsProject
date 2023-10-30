import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div>
      <button  className="fade-in " onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default HomePage;
