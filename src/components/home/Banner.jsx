import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import bannerImg from "../../assets/banner-home-1.jpg";
import bannerImg2 from "../../assets/banner-home-2.jpg";
import "../../styles/home/banner.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
      navigation={true}
      style={{ width: "100%" }}
    >
      <SwiperSlide>
        <img
          src={bannerImg}
          style={{
            width: "100%",
            height: "auto",   
            display: "block",
          }}
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src={bannerImg2}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
