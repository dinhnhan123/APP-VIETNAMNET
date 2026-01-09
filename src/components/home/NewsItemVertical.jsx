import React from "react";
import { Link } from "react-router-dom";

const NewsItemVertical = ({ item }) => {
  return (
    <Link
      to={`/article?url=${encodeURIComponent(item.link)}&title=${encodeURIComponent(item.title)}`}
      className="text-decoration-none text-dark"
    >
      <div className="mb-3">
        <div className="ratio ratio-16x9 rounded overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-100 h-100 object-fit-cover"
          />
        </div>

        <p className="fw-medium mt-2">
          {item.title}
        </p>
      </div>
    </Link>
  );
};

export default NewsItemVertical;
