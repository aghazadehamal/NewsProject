import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReadFoot from "./ReadFoot";
import AssideCenterFooterFooter from "../Center/AssideCenterFooterFooter";
import ToDoList from "../ToDoList";
import { padding } from "@mui/system";

function ReadNews() {
  const { slug } = useParams();
  const [news, setNews] = useState();

  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://all-api.bitcode.az/api/news/slug/${slug}`
    );

    setNews(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div
      style={{
        width: "70%",
        fontSize: "10px",
        fontWeight: "200",
        marginTop: "45px",
      }}
    >
      <h1 className="readNewsh1">{news?.title}</h1>
      <h2 className="readNewsh2">{news?.author?.agency}</h2>

      <div style={{ textAlign: "center" }}>
        <div className="ReadNewsImage" style={{ marginTop: "10px" }}>
          {" "}
          <img
            style={{ marginLeft: "50px" }}
            width={805}
            height={400}
            src={news?.photo}
          />
        </div>
      </div>

      <div
        className="ReadNewsText"
        style={{
          fontWeight: "200",
          fontSize: "17px",
          marginLeft: "60px",
          marginTop: "40px",
        }}
        dangerouslySetInnerHTML={{ __html: news?.content }}
      />

      <h3 className="readNewsh3">{news?.published_date}</h3>
      <h4 className="readNewsh4">{news?.author?.fullname}</h4>

      <div
        className=" ToDoList"
        style={{ marginTop: "50px", marginLeft: "35px" }}
      >
        <ToDoList />
      </div>

      <div className=" ReadNewsInput relative mt-12 p-8 bg-yellow-100 ml-12 ">
        <p className="text-lg text-black">Subscribe to our newsletter</p>
        <input
          className="w-full p-4 h-9 bg-blue-100 placeholder-gray-600 mt-2 sm:w-72 md:w-400px"
          type="text"
          placeholder="Enter Email"
        />
        <button className="ml-0 h-10 w-full text-white bg-blue-400 border border-blue-400 rounded-md mt-4 sm:ml-4 sm:w-28 md:w-110px md:mt-0">
          Subscribe
        </button>

        <img className="ReadNewsImageTwo inline" src="../post.svg" alt="Logo" />
      </div>

      <div
        className="ReadFoot"
        style={{ marginTop: "40px", marginLeft: "50px" }}
      >
        <ReadFoot />
      </div>
      <div>
        <AssideCenterFooterFooter />
      </div>
    </div>
  );
}

export default ReadNews;
