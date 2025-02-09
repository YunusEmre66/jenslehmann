import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Mousewheel, Pagination } from 'swiper/modules';

import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import '../styles.css';
import silhouetteData from '../datas/SilhoutteData'; // ImagesData dosyasından verileri içe aktarın

const SliderComponent = () => {
    return (
        <div className="slider-container">
            <Swiper
                rewind={true}
                navigation={true}
                direction={'diagonal'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* 
                <SwiperSlide>
                    <img src={silhouetteData[0]} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={silhouetteData[1]} />
                </SwiperSlide> */}
                {silhouetteData.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}

            </Swiper>
            <div className="slider-title">Ali Yıldız</div>
        </div>
    );
};

export default SliderComponent;