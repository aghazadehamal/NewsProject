import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function RandomCenter() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://all-api.bitcode.az/api/news/random?limit=6&page=${page}`
      );
      setNews((prevNews) => [...prevNews, ...res.data.data]);
    } catch (error) {
      console.error("An error occurred while fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [page]);

  const handleShowMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div style={{ gap: "10px" }} className=" RandomCenterMarginLeft  ml-10 flex flex-wrap mt-15">
      {news?.map((item, index) => (
        <Card key={index} news={item} index={index} />
      ))}
      <button
        onClick={handleShowMore}
        className="bg-[#F4F9F8] border-[#E5E5E5] text-sm px-4 py-2 md:ml-40 mt-10 Amal border"
      >
        Show More
      </button>
    </div>
  );
}

export default RandomCenter;
