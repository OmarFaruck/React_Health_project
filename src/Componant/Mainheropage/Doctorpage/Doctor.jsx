import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import Card from '../Cardpage/Card';
import Card1 from '../Cardpage/Card_1';
import Card2 from '../Cardpage/Card_2';
import Card3 from '../Cardpage/Card_3';
import Card4 from '../Cardpage/Card_4';
import Card5 from '../Cardpage/Card_5';
import '../Doctorpage/Doctor.css'
const Doctor = () => {
  return (
    <section id='doctor'>
      <div className="container">
        <h1>Our Doctors</h1>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>

          <SwiperSlide>
            <Card1/>
          </SwiperSlide>

          <SwiperSlide>
            <Card2/>
          </SwiperSlide>

          <SwiperSlide>
            <Card3/>
          </SwiperSlide>
          
          <SwiperSlide>
            <Card4/>
          </SwiperSlide>

          <SwiperSlide>
            <Card5/>
          </SwiperSlide>
 
        </Swiper>
      </div>
    </section>
  );
};

export default Doctor;