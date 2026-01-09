import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/home/newsSliderPost.css";

const NewsSliderPost = ({ data = [] }) => {
  return (
    <div className="bg-white rounded shadow-sm p-3">
      <h6 className="text-primary fw-bold d-flex align-items-center mb-2 titleNewSliderPost">
        <img
          src="https://cdn-icons-png.flaticon.com/512/565/565547.png"
          width="16"
          className="me-2"
          alt=""
        />
        CÔNG NGHỆ HIỆN NAY
      </h6>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        spaceBetween={10}
      >
       {data.map((item) => (
  <SwiperSlide key={item.id}>
            <div className="d-flex">
              <div className="flex-grow-1 me-2">
                <Link
                  to={`/article?url=${encodeURIComponent(item.link)}&title=${encodeURIComponent(item.title)}`}
                  className="text-dark text-decoration-none"
                >
                  <p className="small fw-medium m-0 textNewSliderPost">
                    {item.title}
                  </p>
                </Link>
              </div>

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
                  alt={item.title}
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
