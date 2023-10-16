import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Center/Card";
import { BiSearch } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Environment() {
  const [news, setNews] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("defaultCategory");

  const fetchNews = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://all-api.bitcode.az/api/news?category=environment"
    );
    setNews(res.data.data);
    setFiltered(res.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  const find = (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredNews = news.filter(
      (article) => article.title.toLowerCase().includes(searchText)
    );
    setSearchResults(filteredNews);
  };

  return (
    <div>
      <div
        style={{ position: "relative" }}
        className="flex flex-col md:flex-row -center mt-10"
      >
         <div
    className="relative worldInput mb-4 md:mb-0 w-full md:w-auto ml-10"
    style={{ position: "relative" }}
  >
    <input
      className="border p-2 rounded w-full pr-10"
      onChange={find}
      type="text"
      placeholder="Search for news"
    />
    <BiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    <div
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        zIndex: 1,
        maxHeight: "200px",
        overflowY: "auto",
      }}
    >
      {searchResults.slice(0, 5).map((result, idx) => (
         <NavLink key={idx} to={`/news/${result.slug}`} className="border p-2  bg-white block">
         {result.title}
       </NavLink>
      ))}
    </div>
  </div>;

        <a
          href="https://www.worldometers.info/coronavirus/"
          target="_blank"
          rel="noopener noreferrer"
          className="worldButton mt-4 md:mt-0 w-full md:w-auto bg-blue-500 text-white p-2 rounded flex items-center justify-center sm:w-full ml-14"
        >
          Latest news on <span className="font-bold ml-2">Covid-19</span>
          <AiOutlineArrowRight className="ml-2" />
        </a>
      </div>

      <div
        style={{
          marginTop: "40px",
          marginLeft: "40px",
          marginRight: "40px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
        className="center"
      >
        {filtered?.map((item, index) => (
          <Card news={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Environment;
