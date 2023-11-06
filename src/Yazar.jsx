import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { AiFillRead, AiOutlineCloudUpload } from "react-icons/ai";
import { GoShare } from "react-icons/go";

function Yazar() {
  const { slug } = useParams();
  const [authorNews, setAuthorNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuthorNews = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `https://all-api.bitcode.az/api/news?authorSlug=${slug}`
        );
        setAuthorNews(response.data);
      } catch (error) {
        console.error("API request error: ", error);
        setError("An error occurred while fetching the data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAuthorNews();
  }, [slug]);

  const shareOnFacebook = (news) => {

    const postUrl = `https://aghazadehnews.netlify.app//news/${news.slug}`;
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      postUrl
    )}&quote=${encodeURIComponent(news.title)}`;
    window.open(fbShareUrl, "newwindow", "width=600,height=450");
  };

  return (
    <div style={{ width: "800px" }} className="DisplayPostMarginLeft mt-6 ml-20">
      <div className="DisplayPostFlexTwo flex items-center mb-6">
        {authorNews?.data?.length > 0 && (
          <>
            <img
              src={authorNews.data[0]?.author?.photo}
              className="w-28 h-28 md:w-20 md:h-20 mb-3 rounded-full"
              alt="Author"
            />
            <h3 className="text-black text-lg md:text-xl ml-4">
              {authorNews.data[0]?.author?.fullname}
            </h3>
            <h2 className="DisplayPostTotal ml-auto">Total News: {authorNews.data.length}</h2>
          </>
        )}
      </div>

      <div className="DisplayPostFlex gap-6">
        {authorNews?.data?.map((news, index) => (
          <div
            className="card mb-6"
            key={index}
            style={{
              flex: "0 0 calc(50% - 1rem)",
              maxWidth: "calc(50% - 1rem)",
            }}
          >
            <div  className="DisplayPostWidth flex p-5 bg-white w-full h-48 rounded-lg shadow-md overflow-hidden">
              <div  className="flex-1 pr-5 flex flex-col">
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
              <div className="flex-shrink-0 flex flex-col items-center">
                <img
                  src={news?.photo}
                  className="w-24 h-24 md:w-28 md:h-28 rounded shadow"
                  alt="News Thumbnail"
                />
                <div className="DisplayPostWidthThree flex items-center space-x-2 text-lg mt-5">
                <span
                  style={{ color: "brown" }}
                  className="text-lg cursor-pointer"
                  onClick={() => shareOnFacebook(news)}
                >
                  <GoShare />
                </span>

                <span onClick={() => shareOnFacebook(news)}   style={{ color: "blue" }} className="DisplaynewsWidthFour cursor-pointer text-sm ">
                  Share
                </span>
                <NavLink
                  style={{ color: "brown" }}
                  className="text-lg"
                  to={`/news/${news.slug}`}
                >
                  <AiFillRead />
                </NavLink>
                <NavLink to={`/news/${news.slug}`} style={{ color: "blue" }} className="DisplayPostWidthFive text-sm">
                Read later
                </NavLink>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Yazar;
