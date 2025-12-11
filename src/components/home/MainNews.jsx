import React from "react";

const MainNews = ({ data }) => {
  return (
    <div>
      <img src={data.image} className="img-fluid rounded" alt="" />

      <h4 className="fw-bold mt-3">{data.title}</h4>

      <ul className="mt-2">
        {data.summary.map((item, idx) => (
          <li key={idx} className="small text-muted">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainNews;
