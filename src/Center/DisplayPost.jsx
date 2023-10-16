import React, { useEffect, useState } from "react";
import { usePostContext } from "./PostContext";
import axios from "axios";
import { AiFillRead } from "react-icons/ai";
import { GoShare } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";

const DisplayPost = () => {
  const { posts, setPosts } = usePostContext();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          "https://all-api.bitcode.az/api/news?limit=10&page=${page}"
        );
        setPosts((prevPosts) => [...res.data.data, ...prevPosts]);
      } catch (error) {
        console.error("An error occurred while fetching the data.", error);
      }
    };

    fetchPosts();
  }, [setPosts]);

  console.log(posts);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchText.toLowerCase()) ||
      post.description.toLowerCase().includes(searchText.toLowerCase())
  );

  const shareOnFacebook = (post) => {
    console.log(post);
    const postUrl = `https://taupe-cassata-2d1c6e.netlify.app/news/${post.slug}`;
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      postUrl
    )}&quote=${encodeURIComponent(post.title)}`;
    window.open(fbShareUrl, "newwindow", "width=600,height=450");
  };

  return (
    <div
      className="mt-2"
      style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
    >
      <div
        style={{ position: "relative" }}
        className="flex flex-col md:flex-row justify-between items-center mt-10 mb-3"
      >
        <div className="relative AsterNewsInput mb-4 md:mb-0 w-full md:w-auto ">
          <input
            className="border p-2 rounded w-full pr-10"
            onChange={handleSearch}
            value={searchText}
            type="text"
            placeholder="Search for news"
          />
          <BiSearch className=" absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        <a
          href="https://www.worldometers.info/coronavirus/"
          target="_blank"
          rel="noopener noreferrer"
          className="fi
     mt-4 md:mt-0 w-full md:w-auto bg-blue-500 text-white p-2 rounded flex items-center justify-center sm:w-full ml-4"
          style={{ width: "290px" }}
        >
          Latest news on <span className="font-bold ml-2">Covid-19</span>
          <AiOutlineArrowRight className="ml-2" />
        </a>
      </div>
      {filteredPosts.map((post, index) => (
        <div className="card mt-3" key={index}>
          <div className="flex p-5 bg-white w-full h-48 rounded-lg shadow-md overflow-hidden">
            <div className="flex-1 pr-5 flex flex-col">
              <h3 className="text-black text-lg md:text-xl mb-2 font-semibold overflow-hidden line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm md:text-base text-blue-800 mb-2 overflow-hidden line-clamp-2 flex-grow">
                {post.description}
              </p>
              <p className="text-sm text-blue-800 mb-1  overflow-hidden line-clamp-1">
                {post.category.name}
              </p>
              <p className="text-sm text-blue-800 mb-1 overflow-hidden line-clamp-1">
                {post.name}
              </p>
              <p className="text-xs text-black mt-auto overflow-hidden line-clamp-1">
                {post.published_date}
              </p>
              <p>{post.body}</p>
            </div>

            <div className="flex-shrink-0 flex flex-col items-center ">
              <img
                style={{ borderRadius: "10px" }}
                src={post.photo}
                className="w-24 h-24 md:w-28 md:h-28  shadow"
                alt="News"
              />
              <div className="flex items-center space-x-3 text-lg mt-5">
                <span
                  style={{ color: "brown" }}
                  className="text-lg cursor-pointer"
                  onClick={() => shareOnFacebook(post)}
                >
                  <GoShare />
                </span>

                <span style={{ color: "blue" }} className="text-sm ">
                  Share
                </span>
                <NavLink
                  style={{ color: "brown" }}
                  className="text-lg"
                  to={`/news/${post.slug}`}
                >
                  <AiFillRead />
                </NavLink>
                <span style={{ color: "blue" }} className="text-sm">
                  Read later
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayPost;
