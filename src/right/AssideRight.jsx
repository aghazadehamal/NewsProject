import Weather from "./Weather";

import RightThird from "./RightThird";
import RightFourth from "./RightFourth";
import { CgProfile } from "react-icons/cg";
import HomePage from "../HomePage";
import { useState } from "react";

function AssideRight() {
  const [showHomePage, setShowHomePage] = useState(false);

  const handleProfileClick = () => {
    setShowHomePage(!showHomePage);
  };
  return (
    <div className="asside-right mt-14 lg:w-72 md:w-60 w-48 hidden lg:block">
      <div className="relative mb-4 ml-12 cursor-pointer" onClick={handleProfileClick}>
        <i className="iconCg text-2xl">
          <CgProfile />
        </i>
        <span className="absolute top-0 left-0 text-sm md:text-base lg:text-lg ml-9">
        <HomePage />
        </span>
      </div>

      {/* {showHomePage && <HomePage />} */}

      <Weather />

      <RightThird />
      <RightFourth />
    </div>
  );

}

export default AssideRight;
