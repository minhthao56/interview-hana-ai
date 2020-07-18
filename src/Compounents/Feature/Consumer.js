import React from "react";
import "./Consumer.scss";
import { urlTtitle } from "../constant/constant";

export default function Consumer() {
  return (
    <div className="consumer">
      <div className="title-consumer">
        <h2>KHÁCH HÀNG TIÊU BIỂU</h2>
        <img src={urlTtitle} alt="kkk" />
      </div>
      <div className="main-consumer">
        <a href="#">
          <img src="https://hana.ai/wp-content/uploads/2018/12/partner-008.jpg" />
        </a>
        <h2>Denim Stores</h2>
        <div>
          <i className="far fa-thumbs-up"></i>
          <span> 265,342 Liked</span>
        </div>
      </div>
    </div>
  );
}
