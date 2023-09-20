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
import useAxioSequre from "../../../../Hooks/useAxiosSequre";
import { useQuery } from "@tanstack/react-query"; 
import images from "../../../../assets/images/images.jpg";
import { Rating, StickerStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  // aos annimation
  useEffect(() => {
    Aos.init();
  }, []);

  const [axiosSequre] = useAxioSequre();
  const { data: review = [], refetch } = useQuery(["review"], async () => {
    const res = await axiosSequre.get("/review");
    return res.data;
  });

  const reviews = review.filter(sreview=> sreview.status === "aproved");

   const myStyles = {
     itemShapes: StickerStar,
     activeFillColor: "#F5C60D",
     inactiveFillColor: "#6C6962",
   };

  return (
    <div className=" dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black py-12">
      <div className="max-w-screen-xl px-5 mx-auto">
        <div className="text-center">
          <p className="text-4xl uppercase font-bold mb-2">
            Clents Testimonials
          </p>
          <h1 className="md:text-lg text-[16px] mb-8">
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
          {reviews?.map((reviews) => (
            <SwiperSlide
              key={reviews?._id}
              className="my-10 text-center  categorires-card dark:text-black"
            >
              <div className="bg-[#E0FEFC] h-60 py-5 px-10 rounded-md">
                <div className="flex justify-center mb-3">
                  <img
                    className="h-20 w-20 rounded-full -mt-14"
                    src={reviews && reviews ? reviews.userPhoto : images}
                    alt="image"
                  />
                </div>
                <div className="">
                  <h1 className="text-xl font-bold">{reviews.userName}</h1>
                  <div className="mt-1 flex justify-center mb-2">
                    <Rating
                      style={{ width: "90px" }}
                      value={Math.round(reviews.rating || 0)}
                      readOnly
                      itemStyles={myStyles}
                    />
                  </div>
                  <p>{reviews.reviewtext}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
