import React from "react";
import "./Price.scss";
import { Row, Col } from "antd";

import { urlTtitle } from "../constant/constant";
import { dataPrice } from "../constant/dataHardClient";

export default function Pirce() {
  return (
    <div className="pirce">
      <div className="title-pirce">
        <h2>BẢNG GIÁ</h2>
        <img src={urlTtitle} alt="kkk" />
      </div>
      <div className="container-price">
        <div className="bt-price">
          <button>THÁNG</button>
          <button>6 THÁNG (-20%)</button>
          <button>NĂM(-50%)</button>
        </div>
        <Row>
          {dataPrice.map((data, i) => {
            return (
              <Col xs={24} sm={24} md={24} lg={8} xl={8} key={i}>
                <div
                  className={i === 1 ? "main-price best" : "main-price three"}
                  id={i === 0 ? "one" : null}
                  style={{
                    backgroundImage: `url(${data.urlBg})`,
                  }}
                >
                  {i === 1 ? <h1 id="best-offer">BEST OFFER</h1> : null}

                  <div className="type-price">
                    <h2>{data.title}</h2>
                    <h1 className={data.color}>
                      {data.price ? (
                        <div>
                          {data.price}K<sub>/tháng</sub>
                        </div>
                      ) : (
                        "FREE"
                      )}
                    </h1>
                    <b>{data.subscriber} subscriber</b>
                    <p>Người mới bắt đầu kinh doanh online</p>
                  </div>
                  {data.list.map((data1, i1) => {
                    return (
                      <div className="list-price" key={i1}>
                        <i className={"fa fa-check-circle-o " + data.color}></i>
                        <span>{data1}</span>
                      </div>
                    );
                  })}

                  <div className="action-price">
                    <a className={"bt-price" + i} href="/">
                      ĐĂNG KÝ NGAY
                    </a>
                    <button href="/">So Sánh</button>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="princle-price">
        <h1>Miễn phí sử dụng ngay 30 ngày</h1>
        <p>
          <b>ĐẶC BIỆT:</b> Chúng tôi còn cung cấp gói Chatbot thông minh có thể
          xử lý nhiều tình huống phức tạp thường gặp trong giao tiếp chat bằng
          công nghệ Trí tuệ nhân tạo (AI) kết hợp xử lý ngôn ngữ tự nhiên (NLP)
          Tiếng Việt. Click “chi tiết” so sánh tính năng bên dưới để tìm hiểu
          thêm
        </p>
        <h2>
          So sánh tính năng của các gói <b>( Chi tiết )</b>
        </h2>
      </div>
    </div>
  );
}
