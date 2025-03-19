'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useRef } from 'react';

const DoubleRowCarousel = ({ data }: any) => {
  const halfIndex = Math.ceil(data.length / 2);
  const topCarouselData = data.slice(0, halfIndex);
  const bottomCarouselData = data.slice(halfIndex);

  const topSwiperRef = useRef<any>(null);
  const bottomSwiperRef = useRef<any>(null);

  const handleTopSlideChange = (swiper: any) => {
    if (swiper.isEnd) {
      setTimeout(() => {
        topSwiperRef.current?.swiper.slideTo(0, 0);
      }, 100);
    }
  };

  const handleBottomSlideChange = (swiper: any) => {
    if (swiper.isEnd) {
      setTimeout(() => {
        bottomSwiperRef.current?.swiper.slideTo(0, 0);
      }, 100);
    }
  };

  return (
    <div className="space-y-5">
      <Swiper
        ref={topSwiperRef}
        spaceBetween={20}
        slidesPerView={4}
        loop={false}
        speed={12000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="top-slider"
        onSlideChange={(swiper: any) => handleTopSlideChange(swiper)}
      >
        {topCarouselData.map((item: any, i: any) => (
          <SwiperSlide
            id="testimonial-card-I"
            className="manrope-regular"
            key={i}
          >
            <div className="header">
              <div>
                <img src={'https://ui-avatars.com/api/?name=Aakash+Singh'} />
              </div>
              <div className="info">
                <h5>{item.name}</h5>
                <span>{item.role}</span>
              </div>
            </div>
            <div className="testimonial-body">{item.message}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        ref={bottomSwiperRef}
        spaceBetween={20}
        slidesPerView={4}
        loop={false}
        speed={12000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="bottom-slider"
        onSlideChange={(swiper: any) => handleBottomSlideChange(swiper)}
        style={{ direction: 'ltr' }} // Explicitly set direction to left-to-right
      >
        {bottomCarouselData.map((item: any, i: any) => (
          <SwiperSlide
            id="testimonial-card-I"
            className="manrope-regular"
            key={i}
          >
            <div className="header">
              <div>
                <img src={'https://ui-avatars.com/api/?name=Aakash+Singh'} />
              </div>
              <div className="info">
                <h5>{item.name}</h5>
                <span>{item.role}</span>
              </div>
            </div>
            <div className="testimonial-body">{item.message}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DoubleRowCarousel;
