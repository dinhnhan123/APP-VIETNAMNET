import express from "express";
import axios from "axios";
import xml2js from "xml2js";
import cors from "cors";
import * as cheerio from "cheerio";
import he from "he";

const app = express();
app.use(cors());

function deepDecode(str) {
  let prev;
  let current = str;

  do {
    prev = current;
    current = he.decode(prev);
  } while (current !== prev);

  return current;
}

/* ================== API RSS ================== */
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
        title: deepDecode(item.title?.[0]?.trim() || ""),
        link: item.link?.[0] || "",
        image,
        description: deepDecode(desc.replace(/<[^>]*>?/gm, "").trim()),
        pubDate: item.pubDate?.[0] || "",
      };
    });

    res.json(result);
  } catch (err) {
    res.json({ error: "Không đọc được RSS" });
  }
});

/* ================== HÀM LẤY NỘI DUNG BÀI ================== */
async function fetchArticleContent(url) {
  try {
    const { data: html } = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const $ = cheerio.load(html);
    let content = "";

    const container = $("#maincontent");

    container.children().each((_, el) => {
      const tag = el.tagName?.toLowerCase();

      // ===== TEXT =====
      if (tag === "p") {
        const text = $(el).text().trim();
        if (text.length > 30) {
          content += `<p>${text}</p>`;
        }
      }

      // ===== IMAGE =====
      if (tag === "figure") {
        const img =
          $(el).find("img").attr("data-original") ||
          $(el).find("img").attr("data-srcset");

        if (img) {
          content += `<img src="${img}" />`;
        }
      }
    });

    return content;
  } catch (err) {
    console.error("Lỗi crawl:", err.message);
    return "";
  }
}

/* ================== API ARTICLE ================== */
app.get("/api/article", async (req, res) => {
  const url = req.query.url;
  if (!url) return res.json({ error: "Thiếu url" });

  const content = await fetchArticleContent(url);

  res.json({
    content,
  });
});
app.get("/api/home", async (req, res) => {
  try {
    const sources = {
      politics: "https://vietnamnet.vn/rss/chinh-tri.rss",
      business: "https://vietnamnet.vn/rss/kinh-doanh.rss",
      news : "https://vietnamnet.vn/rss/thoi-su.rss",
      ethnicityReligion : "https://vietnamnet.vn/rss/dan-toc-ton-giao.rss",
      sport: "https://vietnamnet.vn/rss/the-thao.rss",
      tech: "https://vietnamnet.vn/rss/cong-nghe.rss",
      education : "https://vietnamnet.vn/rss/giao-duc.rss",
      world : "https://vietnamnet.vn/rss/the-gioi.rss",
      entertainment : "https://vietnamnet.vn/rss/van-hoa-giai-tri.rss",
      life : "https://vietnamnet.vn/rss/doi-song.rss",
      health : "https://vietnamnet.vn/rss/suc-khoe.rss",
      law : "https://vietnamnet.vn/rss/phap-luat.rss",
      car : "https://vietnamnet.vn/rss/xe.rss"
    };

    const parser = new xml2js.Parser();
    const result = {};

    for (const key in sources) {
      const response = await axios.get(sources[key], {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
        },
        timeout: 15000
      });

      const data = await parser.parseStringPromise(response.data);
      const items = data.rss.channel[0].item.slice(0, 12);

      result[key] = items.map((item, index) => {
        const desc = item.description?.[0] || "";
        const imgMatch = desc.match(/<img[^>]+src="([^">]+)"/);
        const image = imgMatch ? imgMatch[1] : "";

        return {
          id: index + 1,
          title: deepDecode(item.title?.[0]?.trim() || ""),
          link: item.link?.[0] || "",
          image,
          description: deepDecode(desc.replace(/<[^>]*>?/gm, "").trim()),
          pubDate: item.pubDate?.[0] || ""
        };
      });
    }

    res.json(result);
  } catch (err) {
    console.log("HOME ERROR:", err.message);
    res.json({ error: err.message });
  }
});
/* ================== START SERVER ================== */
app.listen(3001, () => {
  console.log("🚀 Server chạy tại http://localhost:3001");
});
