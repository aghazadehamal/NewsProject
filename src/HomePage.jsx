import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div>
      <button  className="fade-in ml-20" onClick={handleLogout}>Çıkış Yap</button>
    </div>
  );
};

export default HomePage;
