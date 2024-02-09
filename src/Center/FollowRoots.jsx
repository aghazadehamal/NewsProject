import React, { useState, useEffect, useRef } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import "swiper/swiper-bundle.css";

function FollowRoots() {
  const [following, setFollowing] = useState({});
  const [slidesPerView, setSlidesPerView] = useState(2);
  const swiperRef = useRef(null);
  const [news, setNews] = useState([])

  const [newsData, setNewsData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://all-api.bitcode.az/api/authors");
      setNewsData(res.data.data);
      setFiltered(res.data.data);
    } catch (error) {
      console.error("An error occurred while fetching the data.", error);
      setError("An error occurred while fetching the data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(); 

    const handleResize = () => {
      setSlidesPerView(window.innerWidth >= 1024 ? 5 : 3);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNextSlide = () => swiperRef.current?.swiper?.slideNext();
  const handlePrevSlide = () => swiperRef.current?.swiper?.slidePrev();

  const follow = (id) => setFollowing((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="okay">
      <div className="header">
        <h3 style={{ fontSize: "20px", fontWeight: "" }}>Yazarlar</h3>
        <div className="FollowRootsButton flex">
          <button onClick={handlePrevSlide}>
            <AiOutlineArrowLeft />
          </button>
          <button onClick={handleNextSlide}>
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>

      <header className="mb-4"></header>

      <Swiper
        ref={swiperRef}
        autoplay={false}
        loop={false}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {filtered.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="p-4 space-y-2 text-center bg-white">
              <div>
                <img
                  src={item?.photo}
                  alt={item?.fullname}
                  className=" okayPhoto w-20 h-20 md:w-28 md:h-28 mb-3 rounded-full"
                />
              </div>

              <h3
                className="text-black-600 hover:text-blue-700 font-bold text-sm md:text-lg text-center truncate"
                style={{ width: "100%" }}
              >
                {item?.fullname}
              </h3>

              <p className="agency">{item.agency}</p>

              <NavLink
                className="btn btn-primary text-xs md:text-sm"
                to={`/author-news/${item.slug}`}
                style={{
                  padding: "4px 5px",
                  backgroundColor: "#2F9FF8",
                  color: "white",
                  borderRadius: "4px",
                }}
              >
                Xeberlere bax
              </NavLink>

              <div>
                <button
                  onClick={() => follow(item.id)}
                  className={`px-4 py-1 rounded-md text-sm text-white ${
                    following[item.id] ? "bg-blue-500" : "bg-gray-500"
                  }`}
                >
                  {following[item.id] ? "Following" : "Follow"}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FollowRoots;
