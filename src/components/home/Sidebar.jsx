import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ data = [] }) => {
  return (
    <div className="bg-dark text-white p-3 rounded-3 shadow-sm">
      <div className="text-center mb-3">
        <Link
          className="btn btn-sm mt-2"
          style={{ background: "#e21717ff", color: "#ffffffff" }}
        >
          Tin Hot
        </Link>
      </div>

      {data.map((item, index) => (
        <Link
          key={item.id || index}
          to={`/article?url=${encodeURIComponent(item.link)}&title=${encodeURIComponent(item.title)}`}
          className="text-white text-decoration-none"
        >
          <div className="d-flex mb-3">
            <img
              src={item.image}
              alt={item.title}
              width="80"
              height="60"
              className="rounded me-2 object-fit-cover"
            />
            <p className="small fw-medium m-0">{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
