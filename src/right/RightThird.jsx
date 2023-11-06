import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoBookmarkFill } from 'react-icons/go';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const sliderItems = [
  {
    title: "Quick Bytes",
    subTitle: "Contribute stories and start earning",
    description: "Lorem Ipsum is simply dummy text of the printing...",
  },
  {
    title: "2",
    subTitle: "Contribute stories and start earning",
    description: "Lorem Ipsum has been the industry's standard...",
  },
  {
    title: "3",
    subTitle: "Contribute stories and start earning",
    description: "Lorem Ipsum has been the industry's standard...",
  },
];

function RightThird() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
    nextArrow: (
      <CustomNextArrow
        currentSlide={currentSlide}
        totalSlides={sliderItems.length}
      />
    ),
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div
      style={{ height: "189px" }}
      className="w-65 h-48 relative bg-white p-5 mt-7 rounded shadow-lg"
    >
      <Slider {...sliderSettings}>
        {sliderItems?.map((item, index) => (
          <div key={index}>
            <div style={{display: "flex"}} className="mb-2 font-bold text-lg text-black"><p className="mt-1"><GoBookmarkFill/></p><p className="ml-2">{item.title}</p> </div>
            <h3 className="mb-3 text-sm text-gray-700">{item.subTitle}</h3>
            <p className="mb-4 text-xs text-gray-600">{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const CustomPrevArrow = ({ onClick, currentSlide }) => {
  return (
    <div
      className={`custom-arrow prev ${currentSlide === 0 ? "disabled" : ""}`}
      onClick={onClick}
      style={{
        position: "absolute",
        left: "5px",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 2,
        marginLeft: "160px",
        marginTop: "8px",
        top: "5%",
      }}
    >
      <IoIosArrowDropleftCircle className="text-blue-500" size={20} />
    </div>
  );
};

const CustomNextArrow = ({ onClick, currentSlide, totalSlides }) => {
  return (
    <div
      className={`custom-arrow next ${
        currentSlide === totalSlides - 1 ? "disabled" : ""
      }`}
      onClick={onClick}
      style={{
        position: "absolute",
        top: "5%",
        right: "5px",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 2,
        left: "0px",
        marginLeft: "200px",
        marginTop: "8px",
      }}
    >
      <IoIosArrowDroprightCircle className="text-blue-500" size={20} />
    </div>
  );
};

export default RightThird;
