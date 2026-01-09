import React from "react";
import { Link } from "react-router-dom";

const NewsCategoryPost = ({ sections = [] }) => {
  return (
    <div className="container mt-4">
      <div className="row g-4">
        {sections.map((sec, idx) => (
          <div key={idx} className="col-12 col-md-4 d-flex">
            <div className="border rounded p-3 bg-white shadow-sm h-100 w-100">
              <h5 className="fw-bold pb-2 border-bottom">{sec.title}</h5>

              {sec.items.map((item, i) => (
                <Link
                  key={i}
                  to={`/article?url=${encodeURIComponent(item.link)}&title=${encodeURIComponent(item.title)}`}
                  className="d-flex gap-2 align-items-start mb-3 text-decoration-none"
                  style={{ cursor: "pointer" }}
                >
                  {item.img && (
                    <img
                      src={item.img}
                      alt="thumbnail"
                      className="rounded"
                      style={{
                        width: "120px",
                        height: "70px",
                        objectFit: "cover",
                      }}
                    />
                  )}

                  <p className="small m-0 text-dark hover-text">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCategoryPost;
