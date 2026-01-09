import React from "react";
import { Link } from "react-router-dom";

const MainNews = ({ data = [] }) => {
  if (!data.length) return null;

  const main = data[0];
  const list = data.slice(1, 5);

  return (
    <div>
      {/* IMAGE */}
      <Link to={`/article?url=${encodeURIComponent(main.link)}&title=${encodeURIComponent(main.title)}`}>
        <img src={main.image} className="w-100 h-100 object-fit-cover" alt={main.title} />
      </Link>

      {/* TITLE */}
      <h4 className="fw-bold mt-3">
        <Link
          to={`/article?url=${encodeURIComponent(main.link)}&title=${encodeURIComponent(main.title)}`}
          className="text-dark text-decoration-none"
        >
          {main.title}
        </Link>
      </h4>

      {/* SUMMARY LIST */}
      <ul className="mt-2">
        {list.map((item) => (
          <li key={item.id} className="small text-muted">
            <Link
             to={`/article?url=${encodeURIComponent(item.link)}&title=${encodeURIComponent(item.title)}`}
              className="text-muted text-decoration-none"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainNews;
