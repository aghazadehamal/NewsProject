import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillRead } from "react-icons/ai";
import { GoShare } from "react-icons/go";

function Card({ news, navigate, index }) {
  function shareOnFacebook(news) {
    const url = window.location.href;
    try {
      new URL(url);
    } catch (e) {
      console.error("Invalid URL:", url);
      return;
    }

    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
      url
    )}&quote=${encodeURI(news.description)}`;
    console.log("Sharing URL:", shareUrl);

    window.open(shareUrl, "_blank");
  }

  return (
    <div className="card mb-6" key={index}>
      <div className="DisplayPostWidth flex p-5 bg-white w-full h-48 rounded-lg shadow-md overflow-hidden">
        <div className="flex-1 pr-5 flex flex-col">
          <h3 className="text-black text-lg md:text-xl mb-2 font-semibold overflow-hidden line-clamp-2">
            {news?.title}
          </h3>
          <p className="text-sm md:text-base text-blue-800 mb-2 overflow-hidden line-clamp-2 flex-grow">
            {news?.description}
          </p>
          <p className="text-sm text-blue-800 mb-2 overflow-hidden line-clamp-1">
            {news?.category?.name}
          </p>
          <p className="text-xs text-black mt-auto overflow-hidden line-clamp-1">
            {news?.published_date}
          </p>
        </div>

        <div className="DisplayPostWidthSix flex-shrink-0 flex flex-col items-center ">
          <img
            style={{ borderRadius: "10px" }}
            src={news?.photo}
            className="w-24 h-24 md:w-28 md:h-28  shadow"
            alt="News"
          />
          <div className="flex items-center space-x-2 text-lg mt-5">
            <span
              style={{ color: "brown" }}
              className="text-lg cursor-pointer"
              onClick={() => shareOnFacebook(news)}
            >
              <GoShare />
            </span>
            <span style={{ color: "blue" }} className="DisplayPostWidthFour text-sm ">
              Share
            </span>
            <NavLink
              style={{ color: "brown" }}
              className="text-lg"
              to={`/news/${news?.slug}`}
            >
              <AiFillRead />
            </NavLink>
            <span style={{ color: "blue" }} className="DisplayPostWidthFive text-sm">
              Read later
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
