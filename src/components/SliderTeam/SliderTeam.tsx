import "swiper/scss";
import "./SliderTeam.scss";
import cn from "classnames";

import astronauts from "../../../public/austonauts.json";

import { AstronautCard } from "../AstronautCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

import { useEffect, useRef, useState } from "react";

export const SliderTeam = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const onPrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const onNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", () => {
        setIsPrevDisabled(swiperRef.current?.isBeginning ?? false);
        setIsNextDisabled(swiperRef.current?.isEnd ?? false);
      });
    }
  }, []);

  return (
    <div className="slider-team">
      <div className="slider-team__left">
        <h2 className="section__title">team</h2>
        <p className="slider-team__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In expedita
          rem vitae aliquid ducimus dolores possimus cupiditate dignissimos
          tempore, dolorum consectetur officia molestiae necessitatibus odit,
          cum nostrum distinctio provident laborum.
        </p>
        <div className="slider-team__buttons">
          <button
            className={cn("slider-team__button slider-team__button--left", {
              "slider-team__button--disabled": isPrevDisabled,
            })}
            onClick={onPrevClick}
            disabled={isPrevDisabled}
          ></button>
          <button
            className={cn("slider-team__button slider-team__button--right", {
              "slider-team__button--disabled": isNextDisabled,
            })}
            onClick={onNextClick}
            disabled={isNextDisabled}
          ></button>
        </div>
      </div>
      <div className="slider-team__slider">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsPrevDisabled(swiper.isBeginning);
            setIsNextDisabled(swiper.isEnd);
          }}
          slidesPerView={2}
          speed={800}
        >
          {astronauts.map((astronaut, index) => (
            <SwiperSlide key={index}>
              <AstronautCard astronaut={astronaut} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
