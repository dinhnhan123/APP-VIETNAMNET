import axios from "axios";

export const fetchRSS = async (rssUrl) => {
  const response = await axios.get("http://localhost:3001/api/rss", {
    params: { url: rssUrl }
  });
  return response.data;
};