import React from "react";
import { urlTtitle } from "../constant/constant";
import { Link } from "react-router-dom";
import "./Newpaper.scss";
import { dataNewspager } from "../constant/dataHardClient";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Newspaper() {
  return (
    <div className="newspaper">
      <div className="title-newspage">
        <h2>TRUYỀN THÔNG NÓI GÌ VỀ HANA</h2>
        <img src={urlTtitle} alt="kkk" />
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        autoplay={true}
      >
        {dataNewspager.map((data, i) => {
          return (
            <SwiperSlide key={i} className="main-newpager">
              <a href="#">
                <img src={data.url} alt="d" />
              </a>
            </SwiperSlide>
          );
        })}
        ...
      </Swiper>
      <div className="action-newspager">
        <h2>Miễn phí sử dụng ngay 30 ngày</h2>
        <Link className="bt-free" to="/">
          ĐĂNG KÝ NGAY
        </Link>
      </div>
    </div>
  );
}
