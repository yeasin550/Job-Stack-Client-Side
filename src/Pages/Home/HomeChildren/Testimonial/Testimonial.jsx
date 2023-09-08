import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import image1 from "../../../../assets/images/banner1.png";
import {AiTwotoneStar} from 'react-icons/ai'
// aso animation
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  // aos annimation
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="my-20 dark:text-black">
      <div className="max-w-screen-xl px-5 mx-auto">
        <div className="text-center">
          <p className="text-3xl dark:text-white font-bold mb-2">
            Clents Testimonials
          </p>
          <h1 className="text-lg font-bold mb-8">
            What A Job Holder Says About Us
          </h1>
        </div>
        <Swiper
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          breakpoints={{
            576: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="my-8 text-center categorires-card ">
            <div className="bg-slate-100 py-5 px-10 rounded-md">
              <div className="flex justify-center mb-3">
                <img
                  className="h-20 w-20 rounded-full -mt-14"
                  src={image1}
                  alt="image"
                />
              </div>
              <div className="">
                <h1 className="text-xl font-bold">Andnew Smith</h1>
                <div className="flex justify-center text-yellow-400 mt-1">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
                <p>
                  Since my son went to school in Padora, my son was able to
                  discover his hidden talents.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="my-8 text-center categorires-card">
            <div className="bg-slate-100 py-5 px-10 rounded-md">
              <div className="flex justify-center mb-3">
                <img
                  className="h-20 w-20 rounded-full -mt-14"
                  src={image1}
                  alt="image"
                />
              </div>
              <div className="">
                <h1 className="text-xl font-bold">Andnew Smith</h1>
                 <div className="flex justify-center text-yellow-400 mt-1">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
                <p>
                  Since my son went to school in Padora, my son was able to
                  discover his hidden talents.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="my-8 text-center categorires-card">
            <div className="bg-slate-100 py-5 px-10 rounded-md">
              <div className="flex justify-center mb-3">
                <img
                  className="h-20 w-20 rounded-full -mt-14"
                  src={image1}
                  alt="image"
                />
              </div>
              <div className="">
                <h1 className="text-xl font-bold">Andnew Smith</h1>
                 <div className="flex justify-center text-yellow-400 mt-1">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
                <p>
                  Since my son went to school in Padora, my son was able to
                  discover his hidden talents.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="my-8 text-center categorires-card">
            <div className="bg-slate-100 py-5 px-10 rounded-md">
              <div className="flex justify-center mb-3">
                <img
                  className="h-20 w-20 rounded-full -mt-14"
                  src={image1}
                  alt="image"
                />
              </div>
              <div className="">
                <h1 className="text-xl font-bold">Andnew Smith</h1>
                 <div className="flex justify-center text-yellow-400 mt-1">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
                <p>
                  Since my son went to school in Padora, my son was able to
                  discover his hidden talents.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="my-8 text-center categorires-card">
            <div className="bg-slate-100 py-5 px-10 rounded-md">
              <div className="flex justify-center mb-3">
                <img
                  className="h-20 w-20 rounded-full -mt-14"
                  src={image1}
                  alt="image"
                />
              </div>
              <div className="">
                <h1 className="text-xl font-bold">Andnew Smith</h1>
                 <div className="flex justify-center text-yellow-400 mt-1">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
                <p>
                  Since my son went to school in Padora, my son was able to
                  discover his hidden talents.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="my-8 text-center categorires-card">
            <div className="bg-slate-100 py-5 px-10 rounded-md">
              <div className="flex justify-center mb-3">
                <img
                  className="h-20 w-20 rounded-full -mt-14"
                  src={image1}
                  alt="image"
                />
              </div>
              <div className="">
                <h1 className="text-xl font-bold">Andnew Smith</h1>
                 <div className="flex justify-center text-yellow-400 mt-1">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
                <p>
                  Since my son went to school in Padora, my son was able to
                  discover his hidden talents.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="my-8 text-center categorires-card">
            <div className="bg-slate-100 py-5 px-10 rounded-md">
              <div className="flex justify-center mb-3">
                <img
                  className="h-20 w-20 rounded-full -mt-14"
                  src={image1}
                  alt="image"
                />
              </div>
              <div className="">
                <h1 className="text-xl font-bold">Andnew Smith</h1>
                 <div className="flex justify-center text-yellow-400 mt-1">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
                <p>
                  Since my son went to school in Padora, my son was able to
                  discover his hidden talents.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
