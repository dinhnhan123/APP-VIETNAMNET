import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/topmenu.css";

const TopMenu = () => {
  const menus = [
    {
      title: "Chính trị",
      children: ["Chính sách", "Nhân sự", "Quốc hội", "Đối ngoại"]
    },
    {
      title: "Thời sự",
      children: ["Giao thông", "Môi trường", "Nóng 24h"]
    },
    {
      title: "Kinh doanh",
      children: ["Tài chính", "BĐS", "Chứng khoán", "Doanh nghiệp"]
    },
    {
      title: "Dân tộc và Tôn giáo",
      children: ["Chính sách dân tộc", "Hoạt động tôn giáo"]
    },
    {
      title: "Thể thao",
      children: ["Bóng đá", "Tennis", "Esports"]
    },
    {
      title: "Giáo dục",
      children: ["Tuyển sinh", "Du học", "Đào tạo"]
    },
    {
      title: "Thế giới",
      children: ["Quân sự", "Kinh tế", "Hồ sơ"]
    },
    {
      title: "Đời sống",
      children: ["Gia đình", "Ẩm thực", "Nhà đẹp"]
    },
    {
      title: "Văn hóa - Giải trí",
      children: ["Âm nhạc", "Điện ảnh", "Sao"]
    },
    {
      title: "Sức khỏe",
      children: ["Dinh dưỡng", "Bệnh lý", "Y tế"]
    },
    {
      title: "Công nghệ",
      children: ["AI", "Mobile", "Internet"]
    },
    {
      title: "Pháp luật",
      children: ["Hình sự", "Dân sự", "Hồ sơ"]
    },
    {
      title: "Xe",
      children: ["Ô tô", "Xe máy", "Đánh giá"]
    }
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -160, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 160, behavior: "smooth" });
  };

  return (
    <div className="topmenu-wrapper">
      <button className="scroll-btn left d-lg-none" onClick={scrollLeft}>
        &#10094;
      </button>
      <button className="scroll-btn right d-lg-none" onClick={scrollRight}>
        &#10095;
      </button>

      <div ref={scrollRef} className="menu-scroll container">
        <div className="home-icon">&#8962;</div>

        {menus.map((menu, index) => (
          <div className="menu-item" key={index}>
            <Link
              to={`/${menu.title.toLowerCase().replaceAll(" ", "-")}`}
              className="menu-link"
            >
              {menu.title}
            </Link>

            <div className="submenu">
              {menu.children.map((sub, idx) => (
                <Link
                  key={idx}
                  to={`/${sub.toLowerCase().replaceAll(" ", "-")}`}
                  className="submenu-link"
                >
                  {sub}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopMenu;
