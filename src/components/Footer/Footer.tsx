import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import "./Footer.scss";
import slides from "../../../public/footer-images.json";
import { Navigation, Pagination } from "swiper/modules";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-slider">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="slider-images"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="slider-images__image"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="slider-images__content">
                  <h2 className="slider-images__title">{slide.title}</h2>
                  <p className="slider-images__description">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </footer>
  );
};
