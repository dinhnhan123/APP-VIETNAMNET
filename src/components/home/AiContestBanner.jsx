import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home/aiContestBanner.css";
import imgRobot from "../../assets/robotai-removebg-preview.png";

const AiContestBanner = ({ data = [] }) => {
  return (
    <div className="ai-banner container mt-4 p-4 rounded-4">
      <div className="row align-items-center">

        {/* Robot */}
        <div className="col-12 col-md-3 text-center">
          <img
            src={imgRobot}
            alt="robot"
            className="img-fluid robot-img"
          />
        </div>

        {/* Content */}
        <div className="col-12 col-md-9 text-white">
          <h2 className="fw-bold text-center text-md-start ai-title">
            TECHNOLOGY 2026
          </h2>

          <div className="row mt-3 g-4">
            {data.slice(1, 3).map((item, idx) => (
              <div key={idx} className="col-12 col-md-6 d-flex gap-3">

                {item.image && (
                  <Link to={`/article?url=${encodeURIComponent(item.link)}&title=${encodeURIComponent(item.title)}`}>
                    <img
                      src={item.image}
                      className="thumb-img"
                      alt={item.title}
                    />
                  </Link>
                )}

                <Link
                  to={item.url}
                  className="text-white text-decoration-none"
                >
                  <p className="m-0 small hover-text">
                    {item.title}
                  </p>
                </Link>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AiContestBanner;
