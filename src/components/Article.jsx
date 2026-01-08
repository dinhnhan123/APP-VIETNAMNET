import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/article-content.css";

function Article() {
  const [content, setContent] = useState("");
  const [searchParams] = useSearchParams();

  const url = searchParams.get("url");
  const title = searchParams.get("title");

  useEffect(() => {
    if (!url) return;

    fetch(`http://localhost:3001/api/article?url=${encodeURIComponent(url)}`)
      .then((res) => res.json())
      .then((data) => {
        setContent(data.content || "");
      })
      .catch((err) => {
        console.error("Lỗi load bài:", err);
      });
  }, [url]);

  return (
    <div className="container article-content">
     <h2 className="title-article">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default Article;
