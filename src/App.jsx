import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Mousewheel, Pagination } from 'swiper/modules';
import shadowData from './datas/ShadowData';
import ImagesData from './datas/ImagesData';
import FigureData from './datas/FigurData';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import KarierreTitelData from './datas/KarierreTitelData';

const { coachTitel, ambassadorTitel, commentatorTitel, speakerTitel } = KarierreTitelData;
const { coach, ambassador, speaker, moderator, commentator } = shadowData;
const { coachFigure, commentatorFigure, ambassadorFigure, speakerFigure, jensLehmannName } = FigureData;

export default function App() {
  const [loading, setLoading] = useState(true);
  const [dotIndex, setDotIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [onSlideIndex, setonSlideIndex] = useState(0)
  const karierreRef = useRef(null);


  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000); // 1 second fade out transition
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSlideChange = () => {
    console.log('slide changed');
    if (karierreRef.current) {

      karierreRef.current.style.opacity = '0';
      setTimeout(() => {
        karierreRef.current.style.opacity = '1';
      }, 100); // 100ms sonra opacity'yi tekrar 1 yaparak görünmesini sağlar
    }
  };

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setDotIndex((prevIndex) => (prevIndex + 1) % 5);
      }, 200);

      return () => clearInterval(interval);
    }
  }, [loading]);

  if (loading) {
    return (
      <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
        <div className="shadowData-container">
          <img src={coach} alt="coach" className="face-image coach-face" />
          <img src={ambassador} alt="ambassador" className="face-image ambassador-face" />
          <img src={commentator} alt="commentator" className=" commentator-face" />
          <img src={speaker} alt="speaker" className="face-image speaker-face" />
          <img src={moderator} alt="moderator" className="face-image moderator-face" />
        </div>
        <p className="loading-subtitle">THE FIVE FACES</p>
        <div className="loading-divider">
          <span className="loading-divider-text">of</span>
        </div>
        <h1 className="loading-title">ALİ YILDIZ</h1>
        <div className="dots-container">
          <div className="dots">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`dot ${index === dotIndex ? 'active' : index === (dotIndex - 1 + 5) % 5 ? 'fading' : ''}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="social-icons">
        <div className="icon-container">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <div className="line"></div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook-icon">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={5}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        onSlideChange={handleSlideChange}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-container">
            <Swiper
              direction={'horizontal'}
              slidesPerView={1}
              spaceBetween={5}
              rewind={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              onSlideChange={(e) => {

                console.log('slide changed', e.activeIndex);
              }}
              modules={[Navigation, Pagination]}
              className="slide-text"
            >
              <div className="fixed-element">
                <img src={jensLehmannName} alt="name" />
              </div>



              <SwiperSlide className='silluhetto-slide' >

                <div className="image-container">
                  <img src={coachFigure} alt="figur1" style={{ zIndex: 2, marginLeft: '-140px' }} />
                  <div className="fixed-element-karierre">
                    <img src={coachTitel} alt="coachTitel" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='silluhetto-slide' >
                <div className="image-container">
                  <img src={commentatorFigure} alt="figur2" />
                  <div className="fixed-element-karierre">
                    <img src={ambassadorTitel} alt="ambassadorTitel" />
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide className='silluhetto-slide' >
                <div className="image-container">
                  <img src={ambassadorFigure} alt="figur3" />
                  <div className="fixed-element-karierre">
                    <img src={commentatorTitel} alt="commentatorTitel" />
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide className='silluhetto-slide' >
                <div className="image-container">
                  <img src={speakerFigure} alt="figur3" />
                  <div className="fixed-element-karierre">
                    <img src={speakerTitel} alt="speakerTitel" />
                  </div>
                </div>

              </SwiperSlide>
              <div><IoIosArrowBack />
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </Swiper>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <img src={ImagesData[1]} />
        </SwiperSlide>
        <SwiperSlide>

          <h3>Resim Açıklaması</h3>
          <p>Bu resimle ilgili bir açıklama.</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImagesData[3]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImagesData[4]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImagesData[5]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImagesData[6]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImagesData[7]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImagesData[8]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImagesData[9]} />
        </SwiperSlide>
      </Swiper>

      {
        onSlideIndex
      }

      <div >swiper</div>








    </>
  );
}
