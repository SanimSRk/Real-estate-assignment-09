import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
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
          <div className="w-full grid justify-center items-center rounded-lg h-[300px] md:h-[430px] lg:h-[555px] bg-cover bg-center bg-[url('/house.jpg')]">
            <div className=" lg:w-2/3 mx-auto text-center text-white grid justify-center items-center">
              <h2 className="text-3xl lg:text-6xl gap-0 font-extrabold ">
                Welcome to ours Home
                <span className="text-[#FF9638]">Haven</span>
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full grid justify-center items-center  rounded-lg  md:h-[430px] h-[300px] lg:h-[555px] bg-cover bg-center bg-[url('/house2.jpg')]">
            <div className=" lg:w-2/3 mx-auto text-center text-white grid justify-center items-center">
              <h2 className="text-3xl lg:text-6xl gap-0 font-extrabold ">
                Welcome to ours Home
                <span className="text-[#FF9638]">Haven</span>
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full grid justify-center items-center rounded-lg  md:h-[430px] h-[300px] lg:h-[555px] bg-cover bg-center bg-[url('/villa.jpg')]">
            {' '}
            <div className=" lg:w-2/3 mx-auto text-center text-white grid justify-center items-center">
              <h2 className="text-3xl lg:text-6xl gap-0 font-extrabold ">
                Welcome to ours Home
                <span className="text-[#FF9638]">Haven</span>
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full grid justify-center items-center rounded-lg  md:h-[430px] h-[300px] lg:h-[555px] bg-cover bg-center bg-[url('/house3.jpg')]">
            {' '}
            <div className=" lg:w-2/3 mx-auto text-center text-white grid justify-center items-center">
              <h2 className="text-3xl lg:text-6xl gap-0 font-extrabold ">
                Welcome to ours Home
                <span className="text-[#FF9638]">Haven</span>
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full grid justify-center items-center bg-cover bg-center  rounded-lg  md:h-[430px] h-[300px] lg:h-[555px] bg-[url('/bed.jpg')]">
            {' '}
            <div className=" lg:w-2/3 mx-auto text-center grid justify-center items-center">
              <h2 className=" text-3xl lg:text-6xl gap-0 font-extrabold ">
                Welcome to ours Home
                <span className="text-[#FF9638]">Haven</span>
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
