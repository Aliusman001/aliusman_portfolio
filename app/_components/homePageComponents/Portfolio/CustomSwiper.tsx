import { Swiper, SwiperSlide } from "swiper/react";
import brent from "@/public/portfolio/brent.png";
import techsentail from "@/public/portfolio/techsentail.png";
import profile from "@/public/portfolio/ali-usman-profile.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import PortfolioCard from "./PortfolioCard";
import SwiperBtns from "./SwiperBtns";

function CustomSwiper() {
  return (
    <div className="relative w-full custom-swiper">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={2}
        spaceBetween={20}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        breakpoints={{
          // Adjust the number of slides and spacing based on screen size
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <PortfolioCard
            link="https://www.techsential.io/"
            image={techsentail}
            title="Techsential"
            content="We bridge the gap between vision and impact,
building next-gen solutions that redefine the
boundaries of what's possible."
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioCard
            link="https://www.brentdarnell.com/"
            image={brent}
            title="Brent Darnell"
            content=" As a Junior Front-End Developer on the Brent Darnell project, I contribute to building responsive user interfaces and dynamic features with Team."
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioCard
            link="https://aliusman-portfolio.vercel.app/"
            image={profile}
            title="Portfolio"
            content="I'm a React js developer using JavaScript, Redux, Redux Toolkit, TailwindCSS, Material UI, HTML5, CSS, Next js"
          />
        </SwiperSlide>
      </Swiper>

      <SwiperBtns />
    </div>
  );
}

export default CustomSwiper;
