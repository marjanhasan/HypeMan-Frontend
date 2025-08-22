import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Banner.css";
import Banner1 from "../../assets/banner1.png";
import Banner2 from "../../assets/banner2.png";
import Banner3 from "../../assets/banner3.png";

const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect="fade"
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Banner1} alt="Banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner2} alt="Banner 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner3} alt="Banner 3" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
