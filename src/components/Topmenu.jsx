import React, { useRef } from "react";
import "../styles/topmenu.css"
import { Link } from "react-router-dom";
const TopMenu = () => {
    const menus = [
        "Chính trị", "Thời sự", "Kinh doanh", "Dân tộc và Tôn giáo",
        "Thể thao", "Giáo dục", "Thế giới", "Đời sống",
        "Văn hóa - Giải trí", "Sức khỏe", "Công nghệ",
        "Pháp luật", "Xe"
    ];

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -150, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
    };

    return (
        <div className="bg-white border-bottom position-relative">

            <button className="scroll-btn left-btn d-lg-none" onClick={scrollLeft}>
                &#10094;
            </button>

            <button className="scroll-btn right-btn d-lg-none" onClick={scrollRight}>
                &#10095;
            </button>

            <div ref={scrollRef} className="menu-scroll container d-flex align-items-center py-1 top-menu">

                <div style={{ cursor: "pointer", fontSize: "25px", marginBottom: "5px", color: "#444" }}>
                    &#8962;
                </div>

                {menus.map((item, index) => (
                    <Link
                        key={index}
                        to={`/${item.toLowerCase().replaceAll(" ", "-")}`}
                        className="text-dark fw-semibold"
                        style={{
                            cursor: "pointer",
                            fontSize: "15px",
                            whiteSpace: "nowrap",
                            textDecoration: "none"
                        }}
                    >
                        {item}
                    </Link>
                ))}


            </div>
        </div>
    );
};

export default TopMenu;
