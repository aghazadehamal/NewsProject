import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function AuthorNews() {
  const { authorSlug } = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `https://your-api-endpoint.com/authors/${authorSlug}/news`
        );
        setNews(response.data);
      } catch (error) {
        setError("An error occurred while fetching the data.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [authorSlug]);
}

export default AuthorNews;
