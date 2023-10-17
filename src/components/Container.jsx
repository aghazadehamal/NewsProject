import React, { useState } from "react";
import AssideLeft from "../AssideLeft/AssideLeft";
import AssideRight from "../right/AssideRight";

import { SiScrollreveal } from "react-icons/si";

function Container({ children }) {
  const [showAssideLeft, setShowAssideLeft] = useState(true);

  const toggleAssideLeftVisibility = () => {
    setShowAssideLeft((prev) => !prev);
  };

  return (
    <div style={{ backgroundColor: "#F4F9F8" }} className="flex w-full ">
      <div>
        <button
          style={{ marginTop: "50px" }}
          className="ml-4 text-2xl"
          onClick={toggleAssideLeftVisibility}
        >
          <SiScrollreveal />
        </button>
      </div>

      {showAssideLeft && <AssideLeft  className="w-1/4" />}

      <div className="w-[63%]">{children}</div>

      <AssideRight className="w-1/4" />
    </div>
  );
}

export default Container;
