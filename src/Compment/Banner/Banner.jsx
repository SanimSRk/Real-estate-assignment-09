import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Banner = () => {
  return (
    <div className="w-[88%] mx-auto mt-2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[linear-gradient(rgba(19,19,24,0.3),rgba(19,19,24,0.4)),url(/house.jpg)] w-full  grid justify-center items-center rounded-lg h-[300px] md:h-[430px] lg:h-[555px] bg-cover bg-center">
            <div className=" lg:w-2/3 mx-auto text-center text-white grid justify-center items-center">
              <h2 className="text-3xl lg:text-6xl gap-0 font-extrabold ">
                Welcome to ours Home
                <span className="text-[#FF9638]">Haven</span>
              </h2>
              <h2 className="mt-3 text-xl font-semibold">
                Your Comprehensive Guide to Modern Residential Living in the
                Heart of the City
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[linear-gradient(rgba(19,19,24,0.3),rgba(19,19,24,0.4)),url(/house2.jpg)] w-full grid justify-center items-center  rounded-lg  md:h-[430px] h-[300px] lg:h-[555px] bg-cover bg-center ">
            <div className=" lg:w-2/3 mx-auto text-center text-white grid justify-center items-center">
              <h2 className="text-3xl lg:text-6xl gap-0 font-extrabold ">
                Welcome to ours Home
                <span className="text-[#FF9638]">Haven</span>
              </h2>
              <h2 className="mt-3 text-xl font-semibold">
                Your Comprehensive Guide to Modern Residential Living in the
                Heart of the City
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[linear-gradient(rgba(19,19,24,0.3),rgba(19,19,24,0.4)),url(/villa.jpg)] w-full grid justify-center items-center rounded-lg  md:h-[430px] h-[300px] lg:h-[555px] bg-cover bg-center ">
            {' '}
            <div className=" lg:w-2/3 mx-auto text-center text-white grid justify-center items-center">
              <h2 className="text-3xl lg:text-6xl gap-0 font-extrabold ">
                Welcome to ours Home
                <span className="text-[#FF9638]">Haven</span>
              </h2>
              <h2 className="mt-3 text-xl font-semibold">
                Your Comprehensive Guide to Modern Residential Living in the
                Heart of the City
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[linear-gradient(rgba(19,19,24,0.3),rgba(19,19,24,0.4)),url(/house3.jpg)] w-full grid justify-center items-center rounded-lg  md:h-[430px] h-[300px] lg:h-[555px] bg-cover bg-center">
            {' '}
            <div className=" lg:w-2/3 mx-auto text-center text-white grid justify-center items-center">
              <h2 className="text-3xl lg:text-6xl gap-0 font-extrabold ">
                Welcome to ours Home
                <span className="text-[#FF9638]">Haven</span>
              </h2>
              <h2 className="mt-3 text-xl font-semibold">
                Your Comprehensive Guide to Modern Residential Living in the
                Heart of the City
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[linear-gradient(rgba(19,19,24,0.3),rgba(19,19,24,0.4)),url(/bed.jpg)] w-full grid justify-center items-center bg-cover bg-center  rounded-lg  md:h-[430px] h-[300px] lg:h-[555px] ">
            {' '}
            <div className=" text-white lg:w-2/3 mx-auto text-center grid justify-center items-center">
              <h2 className=" text-3xl text-white lg:text-6xl gap-0 font-extrabold ">
                Welcome to ours Home
                <span className="text-[#FF9638]">Haven</span>
              </h2>
              <h2 className="mt-3 text-xl font-semibold">
                Your Comprehensive Guide to Modern Residential Living in the
                Heart of the City
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
