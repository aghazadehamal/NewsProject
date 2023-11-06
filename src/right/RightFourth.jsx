import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function RightFourth() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); 

  const items = [
    {
      path: "/topstories",
      span: "Subscribe to our newsletter",
      placeholder: "Enter Email",
    },
  ];

  const handleSubmit = async () => {
    if (!email) {
      setStatus("Please enter a valid email address.");
      setStatusType("error"); 
      return;
    }

    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("Thank you for subscribing!");
        setStatusType("success"); 
      } else {
        setStatus("Subscription failed. Please try again later.");
        setStatusType("error"); 
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("An error occurred. Please try again later.");
      setStatusType("error"); 
    }
  };

  return (
    <div className="mt-6">
      {items?.map((item, index) => (
        <div
          style={{ height: "189px" }}
          className="mt-15 bg-white p-5 rounded-lg shadow-md"
          key={index}
        >
          <div className="text-black no-underline flex flex-col items-center">
            <span
              style={{ fontSize: "16px" }}
              className="text-sm mb-4 block font-medium"
            >
              {item.span}
            </span>
            <input
              className="w-60  h-7 p-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
              type="email"
              placeholder={item.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="w-60 mt-5 h-7 bg-blue-500 text-white border border-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:border-blue-500"
              type="button"
              onClick={handleSubmit}
            >
              Subscribe
            </button>
            {status && (
              <p
                className={`mt-4 text-sm ${
                  statusType === "success"
                    ? "success-message"
                    : "error-message"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RightFourth;
