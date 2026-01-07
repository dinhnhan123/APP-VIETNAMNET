import express from "express";
import axios from "axios";
import xml2js from "xml2js";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/rss", async (req, res) => {
  try {
    const rssUrl = req.query.url;
    if (!rssUrl) return res.json({ error: "Thiếu tham số url" });

    const response = await axios.get(rssUrl);
    const parser = new xml2js.Parser();
    const data = await parser.parseStringPromise(response.data);

    const items = data.rss.channel[0].item;

    const result = items.map((item, index) => {
      const desc = item.description?.[0] || "";

      const imgMatch = desc.match(/<img[^>]+src="([^">]+)"/);
      const image = imgMatch ? imgMatch[1] : "";

      return {
        id: index + 1,
        title: item.title?.[0]?.trim() || "",
        link: item.link?.[0] || "",
        image,
        description: desc.replace(/<[^>]*>?/gm, "").trim(),
        pubDate: item.pubDate?.[0] || ""
      };
    });

    res.json(result);
  } catch (err) {
    res.json({ error: "Không đọc được RSS" });
  }
});

app.listen(3001, () =>
  console.log("🚀 API đang chạy tại http://localhost:3001/api/rss")
);
