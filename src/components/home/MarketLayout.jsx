import React, { useState } from "react";
import "../../styles/home/marketLayout.css";
import { Link } from "react-router-dom";

const MarketLayout = ({
  listMarket = [],
  readALot = [],
  commentALot = [],
}) => {
  const [activeTab, setActiveTab] = useState("read");

  // đảm bảo showList LUÔN là mảng
  const showList =
    activeTab === "read" ? readALot : commentALot;

  return (
    <div className="container mt-4">
      <div className="row g-4">

        {/* ===== LEFT ===== */}
        <div className="col-md-3">
          <div className="p-3 border rounded bg-white shadow-sm mb-3">
            <h6 className="text-danger fw-bold">PREMIUM ★</h6>
            <p className="small mt-2">
              🇻🇳 Việt Nam chiếm hơn 25% việc làm chuỗi cung ứng toàn cầu tại Đông Nam Á
            </p>
          </div>

          <div className="p-3 border rounded bg-white shadow-sm mb-3">
            <h6 className="fw-bold">🎧 Podcast</h6>
            <p className="small m-0">
              Bản tin sáng 10/12: Cao tốc Bắc - Nam dày đặc camera
            </p>
            <p className="small m-0">
              Bản tin cuối ngày 9/12: Khởi tố đối tượng cầm dao
            </p>
          </div>

          <div className="p-3 border rounded bg-white shadow-sm">
            <h6 className="fw-bold text-primary">RAO VẶT</h6>
            <p className="small m-0 text-muted">Liên hệ đăng tin quảng cáo</p>
            <img
              src="https://vads.vn/Content/v2024_2/icon/logo-vads.svg"
              alt=""
            />
            <p className="small">Liên hệ : 0862700821</p>
          </div>
        </div>

        {/* ===== CENTER ===== */}
        <div className="col-md-6">
          <h6 className="fw-bold border-bottom pb-2">
            THỊ TRƯỜNG - TIÊU DÙNG
          </h6>

          {listMarket.map((item, index) => (
            <Link
              key={item.id || index}
              to={`/article?url=${encodeURIComponent(
                item.link
              )}&title=${encodeURIComponent(item.title)}`}
              className="text-decoration-none text-dark"
            >
              <div className="d-flex mb-3 pb-3 border-bottom">
                <img
                  src={item.image}
                  className="me-3 rounded"
                  width="110"
                  height="75"
                  style={{ objectFit: "cover" }}
                  alt={item.title}
                />

                <div className="flex-grow-1">
                  <p className="m-0 fw-medium small">
                    {item.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ===== RIGHT ===== */}
        <div className="col-md-3">
          <ul className="nav nav-tabs custom-tabs mb-3">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "read" ? "active" : ""
                  }`}
                onClick={() => setActiveTab("read")}
              >
                ĐỌC NHIỀU
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "comment" ? "active" : ""
                  }`}
                onClick={() => setActiveTab("comment")}
              >
                BÌNH LUẬN NHIỀU
              </button>
            </li>
          </ul>

          {showList.map((item, i) => (
            <Link
              key={i}
              to={`/article?url=${encodeURIComponent(
                typeof item === "string" ? "" : item.link
              )}&title=${encodeURIComponent(
                typeof item === "string" ? item : item.title
              )}`}
              className="text-decoration-none text-dark"
            >
              <div className="d-flex mb-3">
                <div className="me-3 text-primary fw-bold fs-4">
                  {i + 1}
                </div>
                <p className="small m-0">
                  {typeof item === "string" ? item : item.title}
                </p>
              </div>
            </Link>
          ))}

        </div>

      </div>
    </div>
  );
};

export default MarketLayout;
