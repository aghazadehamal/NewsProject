import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "../Center/Card";

function ReadFoot() {
  {
    const [news, setNews] = useState([]);

    const [loading, setLoading] = useState(false);

    const fetchNews = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://all-api.bitcode.az/api/news/random?limit=4"
      );

      setNews(res.data.data);
      setLoading(false);
    };

    useEffect(() => {
      fetchNews();
    }, []);

    const navigate = useNavigate();

    return (
      <div>
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
          className="center "
        >
          {news?.map((item, index) => (
            <Card news={item} index={index} navigate={navigate} />
          ))}
        </div>
      </div>
    );
  }
}

export default ReadFoot;
