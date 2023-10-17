import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import FollowRoots from "./FollowRoots";

import AssideCenterFooterFooter from "./AssideCenterFooterFooter";
import axios from "axios";
import RandomCenter from "./RandomCenter";

import DisplayPost from "./DisplayPost";
import CreatePost from "./CreatePost";
import { PostProvider } from "./PostContext";

function AssideCenter() {
  const [news, setNews] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://all-api.bitcode.az/api/news");
      setNews(res.data.data);
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
  }, []);

  const find = (e) => {
    console.log(news[0].author);
    const filteredNews = news.filter((article) =>
      article.author.fullname
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );
    setFiltered(filteredNews);
    console.log(filteredNews);
  };

  const navigate = useNavigate();
  function SkeletonLoader() {
    return (
      <div className="animate-pulse">
        <div className="flex flex-wrap items-center space-x-4">
          <div
            style={{ marginLeft: "50px" }}
            className=" bg-gray-400 h-36 w-80 mt-4 "
          ></div>
           <div
            style={{ marginLeft: "50px" }}
            className=" bg-gray-400 h-36 w-80 mt-4 "
          ></div>
          <div
            style={{ marginLeft: "50px" }}
            className=" bg-gray-400 h-36 w-80 mt-4 "
          ></div>
          <div
            style={{ marginLeft: "50px" }}
            className=" bg-gray-400 h-36 w-80 mt-4"
          ></div>
           <div
            style={{ marginLeft: "50px" }}
            className=" bg-gray-400 h-36 w-80 mt-4 "
          ></div>
          <div
            style={{ marginLeft: "50px" }}
            className=" bg-gray-400 h-36 w-80 mt-4 "
          ></div>
          <div
            style={{ marginLeft: "50px" }}
            className=" bg-gray-400 h-36 w-80 mt-4"
          ></div>
          <div
            style={{ marginLeft: "50px" }}
            className=" bg-gray-400 h-36 w-80 mt-4 "
          ></div>
          <div
            style={{ marginLeft: "50px" }}
            className=" bg-gray-400 h-36 w-80 mt-4"
          ></div>
          <div
            style={{ marginLeft: "50px" }}
            className=" bg-gray-400 h-36 w-80 mt-4 "
          ></div>
          <div
            style={{ marginLeft: "50px" }}
            className=" bg-gray-400 h-36 w-80 mt-4"
          ></div>
          <div
            style={{ marginLeft: "50px" }}
            className=" bg-gray-400 h-36 w-80 mt-4"
          ></div>
          <div
            style={{ marginLeft: "50px" }}
            className=" bg-gray-400 h-36 w-80 mt-4"
          ></div>
          <div
            style={{ marginLeft: "50px" }}
            className=" bg-gray-400 h-36 w-80 mt-4"
          ></div>
          <div
            style={{ marginLeft: "50px" }}
            className=" bg-gray-400 h-36 w-80 mt-4"
          ></div>
          <div
            style={{ marginLeft: "50px" }}
            className=" bg-gray-400 h-36 w-80 mt-4"
          ></div>

          {/* <div className="flex-1 space-y-2 py-1">
            <div className="h-4 bg-gray-400 w-3/4"></div>
          </div> */}
        </div>
      </div>
    );
  }
  return (
    <div className="mx-2 md:mx-10 ">
      <div className="AssideCenterMarginLeft mt-2 ml-10 ">
      <div>
          <PostProvider>
            {loading ? (
              <SkeletonLoader />
            ) : (
              <DisplayPost />
            )}
            <CreatePost />
          </PostProvider>
        </div>
      </div>

      <div className="FollowRoots mt-5">
        <FollowRoots />
      </div>

      <div className="mt-10">
        <RandomCenter />
      </div>

    

      <div className="mt-10">
        <AssideCenterFooterFooter />
      </div>
    </div>
  );
}

export default AssideCenter;
