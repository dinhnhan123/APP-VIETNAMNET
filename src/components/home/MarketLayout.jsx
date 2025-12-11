import React, { useState } from "react";
import "../../styles/home/marketLayout.css"; 

const MarketLayout = () => {
  const [activeTab, setActiveTab] = useState("read");

  const middleNews = [
    {
      id: 1,
      title:
        "“Phù phép” thịt trâu Ấn Độ giá rẻ thành bò Wagyu thượng hạng, thu lãi khủng",
      image: "https://picsum.photos/100/70?1",
    },
    {
      id: 2,
      title:
        "Giá rau xanh ‘leo thang’ sau bão: Người bán lo ế, người mua xót tiền",
      image: "https://picsum.photos/100/70?2",
      comments: 2,
    },
    {
      id: 3,
      title: "Tủ lạnh dung tích lớn giá giảm mạnh, chỉ còn hơn 13 triệu đồng",
      image: "https://picsum.photos/100/70?3",
    },
    {
      id: 4,
      title: "Giá xăng dầu quay đầu đi lên",
      image: "https://picsum.photos/100/70?4",
    },
    {
      id: 5,
      title:
        "Loại nho mới của Trung Quốc đổ bộ chợ Việt, giá đắt gấp 10 lần “quý tộc”",
      image: "https://picsum.photos/100/70?5",
    },
  ];

  const readMost = [
    "Đám tang vắng và câu nói xót xa từ người mẹ 90 tuổi của Thương Tín",
    "Tác giả ‘Say mộng với dì em’: Là nhân viên văn phòng, chưa muốn vào showbiz",
    "SEA Games ngày 10/12: Việt Nam ‘mở hàng’ HCV",
    "Vụ xe chở gia đình đi đám cưới trên cao tốc: Nạn nhân thứ 4 tử vong",
    "Đại tướng Lương Tam Quang: Tăng biên chế công an cơ sở",
    "Cao tốc Bắc – Nam dày đặc camera: Giám sát hay phạt nguội?",
    "Những ngày cuối của Thương Tín: U uất đêm ngày trông ngóng con gái",
    "Áp lực bủa vây, dự báo giá vàng năm 2026",
  ];

  const commentMost = [
    "Clip: Tranh cãi vụ tài xế phanh gấp giữa cao tốc",
    "Nóng: Lộ trình tăng tuổi nghỉ hưu giai đoạn mới",
    "Tranh luận: Có nên cấm xe điện dưới hầm chung cư?",
    "Ý kiến trái chiều về luật căn cước mới",
    "Cộng đồng xôn xao vụ tăng giá sách giáo khoa",
    "Cha mẹ tranh luận gay gắt chuyện dạy con sớm",
    "Điện lực giải thích hóa đơn tăng đột biến",
    "Vụ việc gây bão mạng: Lãnh đạo lên tiếng",
  ];

  const showList = activeTab === "read" ? readMost : commentMost;

  return (
    <div className="container mt-4">
      <div className="row g-4">
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
             Bản tin sáng 10/12: Cao tốc Bắc - Nam dày đặc camera: Giám sát hay phạt nguội?
            </p>
            <p className="small m-0">
            Bản tin cuối ngày 9/12: Khởi tố đối tượng cầm dao đuổi công an khi bị kiểm tra
            </p>
          </div>

          <div className="p-3 border rounded bg-white shadow-sm">
            <h6 className="fw-bold text-primary">RAO VẶT</h6>
            <p className="small m-0 text-muted">Liên hệ đăng tin quảng cáo</p>
            <img src="https://vads.vn/Content/v2024_2/icon/logo-vads.svg" alt="" />
            <p className="small">Liên hệ : 0862700821</p>
          </div>
        </div>

        <div className="col-md-6">
          <h6 className="fw-bold border-bottom pb-2">THỊ TRƯỜNG - TIÊU DÙNG</h6>

          {middleNews.map((item) => (
            <div key={item.id} className="d-flex mb-3 pb-3 border-bottom">
              <img
                src={item.image}
                className="me-3 rounded"
                width="110"
                height="75"
                style={{ objectFit: "cover" }}
                alt=""
              />

              <div className="flex-grow-1">
                <p className="m-0 fw-medium small">{item.title}</p>
                {item.comments && (
                  <span className="text-muted small">💬 {item.comments}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="col-md-3">
          <ul className="nav nav-tabs custom-tabs mb-3">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "read" ? "active" : ""}`}
                onClick={() => setActiveTab("read")}
              >
                ĐỌC NHIỀU
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "comment" ? "active" : ""}`}
                onClick={() => setActiveTab("comment")}
              >
                BÌNH LUẬN NHIỀU
              </button>
            </li>
          </ul>

          {showList.map((text, i) => (
            <div key={i} className="d-flex mb-3">
              <div className="me-3 text-primary fw-bold fs-4">{i + 1}</div>
              <p className="small m-0">{text}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default MarketLayout;
