import React from "react";
import { urlTitleReview, urlImgReview } from "../constant/constant";
import { dataReview } from "../constant/dataHardClient";
import { Link } from "react-router-dom";

import "./Review.scss";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Review() {
  return (
    <div style={{ backgroundImage: `url(${urlImgReview})` }} className="review">
      <div className="container-review">
        <div className="title-review">
          <h2>KHÁCH HÀNG ĐÁNH GIÁ HANA</h2>
          <img src={urlTitleReview} alt="á" />
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={true}
        >
          {dataReview.map((data, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="main-reivew">
                  <img src={data.url} />
                  <h2>{data.name}</h2>
                  <p>{data.sub}</p>
                  <p>{data.content}</p>
                </div>
              </SwiperSlide>
            );
          })}
          ...
        </Swiper>
        <div className="more-review">
          <Link className="bt-free" to="/">
            XEM THÊM
          </Link>
        </div>
      </div>
    </div>
  );
}
