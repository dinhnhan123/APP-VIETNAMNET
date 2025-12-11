import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home/mediaSection.css";

const MediaSection = ({ multimedia, photo }) => {
  return (
    <div className="container mt-4">

      <div className="row g-4">
        <div className="col-12 col-lg-8">

          <h5 className="section-title mb-3">MULTIMEDIA</h5>

          <div className="row g-3">
            <div className="col-12 col-md-6">
              <Link to={multimedia.link}>
                <img
                  src={multimedia.image}
                  alt=""
                  className="img-fluid rounded"
                />
              </Link>
            </div>

            <div className="col-12 col-md-6">
              <Link
                to={multimedia.link}
                className="text-decoration-none text-dark"
              >
                <h5 className="fw-bold">{multimedia.title}</h5>
              </Link>

              <p className="small text-muted mt-2">
                {multimedia.description}
              </p>
            </div>

          </div>
        </div>

        <div className="col-12 col-lg-4">

          <h5 className="section-title mb-3">PHOTO</h5>

          {photo.map((item, index) => (
            <div key={index} className="row mb-3 align-items-start">
              <div className="col-7">
                <Link
                  to={item.link}
                  className="text-decoration-none text-dark"
                >
                  <p className="fw-semibold small mb-1">{item.title}</p>
                </Link>
              </div>
              <div className="col-5">
                <Link to={item.link}>
                  <div className="image-box position-relative">
                    <img
                      src={item.image}
                      alt=""
                      className="img-fluid rounded"
                    />
                    <span className="camera-icon">📷</span>
                  </div>
                </Link>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default MediaSection;
