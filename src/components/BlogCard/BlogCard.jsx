// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./BlogCard.css";
import CardImg from "../../assets/card.png";
// import required modules
import { Navigation, Pagination } from "swiper/modules";

const EventCard = ({ image, title, subtitle, date }) => {
  // Format date to "Month Day, Year"
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="w-full overflow-hidden shadow-lg bg-white">
      {/* Image Section */}
      <div className="h-56">
        <img className="w-full h-full object-top" src={image} alt={title} />
      </div>

      {/* Content Section */}
      <div className="p-2 text-left">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-700 text-base mb-8">{subtitle}</p>
        <p className="text-gray-900 text-sm text-right">{formattedDate}</p>
      </div>
    </div>
  );
};

const BlogCard = () => {
  return (
    <div className="bg-gray-400 text-center">
      <div className="text-center text-white pt-8">
        <h2 className="text-xl font-medium">Blog Title</h2>
        <p className="text-sm">Blog description goes here...</p>
      </div>
      <div className="max-w-[80%] mx-auto blogCard">
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          navigation
          // loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <EventCard
              image={CardImg}
              title="Blog 1"
              subtitle="Description for Blog 1"
              date="2023-10-01"
            />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard
              image={CardImg}
              title="Blog 1"
              subtitle="Description for Blog 1"
              date="2023-10-01"
            />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard
              image={CardImg}
              title="Blog 1"
              subtitle="Description for Blog 1"
              date="2023-10-01"
            />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard
              image={CardImg}
              title="Blog 1"
              subtitle="Description for Blog 1"
              date="2023-10-01"
            />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard
              image={CardImg}
              title="Blog 1"
              subtitle="Description for Blog 1"
              date="2023-10-01"
            />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard
              image={CardImg}
              title="Blog 1"
              subtitle="Description for Blog 1"
              date="2023-10-01"
            />
          </SwiperSlide>
          <SwiperSlide>
            <EventCard
              image={CardImg}
              title="Blog 1"
              subtitle="Description for Blog 1"
              date="2023-10-01"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <button className="bg-white text-black py-2 px-1 sm:px-3 my-5 text-xs sm:text-base rounded whitespace-nowrap uppercase font-medium cursor-pointer hover:bg-black hover:text-white transition duration-300">
        view style and news
      </button>
    </div>
  );
};

export default BlogCard;
