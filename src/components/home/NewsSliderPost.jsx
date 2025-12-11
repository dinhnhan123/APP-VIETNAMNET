import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/home/newsSliderPost.css";

const NewsSliderPost = () => {
    const slides = [
        {
            id: 1,
            title:
                "Chung cư 'cấm cửa' xe điện: Nỗi lo có thật từ phía các đơn vị vận hành tòa nhà",
            image: "https://picsum.photos/300/200?1",
            url: "#",
        },
        {
            id: 2,
            title: "Nhiều chung cư bắt đầu đưa xe điện vào danh sách kiểm soát",
            image: "https://picsum.photos/300/200?2",
            url: "#",
        },
        {
            id: 3,
            title: "Giải pháp an toàn cháy nổ cho tầng hầm chung cư",
            image: "https://picsum.photos/300/200?3",
            url: "#",
        },
    ];

    return (
        <div className="bg-white rounded shadow-sm p-3">

            {/* Header */}
            <h6 className="text-primary fw-bold d-flex align-items-center mb-2 titleNewSliderPost">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/565/565547.png"
                    width="16"
                    className="me-2"
                />
                CHUNG CƯ CẤM XE ĐIỆN
            </h6>

            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500 }}
                spaceBetween={10}
            >
                {slides.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="d-flex">
                            <div className="flex-grow-1 me-2">
                                <a href={item.url} className="text-dark text-decoration-none">
                                    <p className="small fw-medium m-0 textNewSliderPost">{item.title}</p>
                                </a>
                            </div>

                            {/* Image */}
                            <div
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    overflow: "hidden",
                                    borderRadius: "6px",
                                }}
                            >
                                <img
                                    src={item.image}
                                    className="w-100 h-100 object-fit-cover"
                                    alt=""
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default NewsSliderPost;
