import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { data } from "../pages/Data/data.js";
import { Autoplay, Keyboard } from "swiper/modules";
import { Link } from "react-router-dom";

export default function SwiperSlider() {
  const randomItem = Math.floor(Math.random() * data.length);
  const slicedData = data.slice(randomItem, randomItem + 20);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      speed={1000}
      keyboard={{ enabled: true }}
      modules={[Autoplay, Keyboard]}
      loop={true}
    >
      <div className="grid xl:grid-cols-3  sm:justify-items-center my-12 ">
        {slicedData.map((item, index) => (
          <SwiperSlide key={index}>
            <Link to={`/product/${item.category}/${item.id}`} key={item.id}>
              <div className="hidden xl:grid xl:h-full xl:w-full hover:transition-[1] hover:scale-[1.02] ease-linear duration-300">
                <img
                  width={900}
                  height={900}
                  src={item.img}
                  alt={item.title}
                  className="h-fit w-11/12  rounded-xl rounded-tl-[20px] rounded-br-[20px]"
                />
                <p className="font-semibold text-lg mt-2 text-slate-800 tracking-wider px-2">
                  {item.name}
                </p>
                <p className="font-semibold text-lg mt-2 text-slate-800 tracking-wider px-2">
                  ${item.price}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </div>
      <Link to={`/product/${data[randomItem].category}/${data[randomItem].id}`}>
        <div className="xl:hidden sm:grid grid-cols-4 justify-items-center text-center ">
          <div className="col-span-4">
            <img
              height={200}
              width={500}
              src={data[randomItem].img}
              alt=""
              className=" rounded-xl"
            />
            <p className="font-semibold text-lg mt-2 text-slate-800 tracking-wider px-2">
              {data[randomItem].name}
            </p>
            <p className="font-semibold text-lg mt-2 text-slate-800 tracking-wider px-2 ">
              ${data[randomItem].price}
            </p>
          </div>
        </div>
      </Link>
    </Swiper>
  );
}
