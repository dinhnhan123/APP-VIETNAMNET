import axios from "axios";

export const fetchRSS = async (rssUrl) => {
  const response = await axios.get("http://localhost:3001/api/rss", {
    params: { url: rssUrl }
  });
  return response.data;
};
export const fetchHome = async () => {
  const res = await axios.get("http://localhost:3001/api/home");
  return res.data;
};