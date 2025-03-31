import React, { useEffect, useState } from "react";
import { Card, Tag } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiper } from "@/components/tools/Swiper";
import "swiper/css";
import "./style.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import axios from "axios";
import { useContext } from "react";
import { Context } from "@/App";

const { Meta } = Card;


const Home = () => {
  const [image, setImage] = useState([]);

    const test = useContext(Context);



  useEffect(() => {
    const fetchData = async () => {
      const responsive = await axios.get(
        `${test}admin/getallactive`
      );
      responsive?.data?.success === 0 && setImage(responsive?.data?.data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full gap-2">
      <div>
        <Swiper
          {...swiper}
          modules={[Navigation, Pagination, A11y]}
          navigation
          className="w-[1200px]"
          pagination={{ clickable: true }}
        >
          {image.map((item, index) => {
            return (
              <SwiperSlide key={index} className="w-[1200px]">
                <img
                  src={item?.image}
                  className="w-full h-[200px] object-center rounded-lg"
                  alt="logo"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="my-3">
        <div>
          <h1 className="font-bold text-3xl">Khoá học</h1>
          {}
        </div>
      </div>
    </div>
  );
};

export default Home;
