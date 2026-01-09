import React from "react";
import { Link } from "react-router-dom";

const NewsItemHorizontal = ({ item }) => {
  return (
    <Link
     to={`/article?url=${encodeURIComponent(item.link)}&title=${encodeURIComponent(item.title)}`}
      className="text-decoration-none text-dark"
    >
      <div className="d-flex mb-3">
        <img
          src={item.image}
          alt={item.title}
          width="100"
          height="80"
          className="rounded me-3 object-fit-cover"
        />

        <p className="small fw-medium m-0">
          {item.title}
        </p>
      </div>
    </Link>
  );
};

export default NewsItemHorizontal;
