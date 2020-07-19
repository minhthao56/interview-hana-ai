import React from "react";
import "./Consumer.scss";
import { Row, Col } from "antd";

import { urlTtitle } from "../constant/constant";
import { dataConsumer } from "../constant/dataHardClient";

export default function Consumer() {
  return (
    <div className="consumer">
      <div className="title-consumer">
        <h2>KHÁCH HÀNG TIÊU BIỂU</h2>
        <img src={urlTtitle} alt="kkk" />
      </div>
      <Row gutter={[16, 48]} className="row-consumer">
        {dataConsumer.map((data, i) => {
          return (
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={6}
              xl={6}
              key={i}
              className="col-consumer"
            >
              <div className="main-consumer">
                <a href="#">
                  <img src={data.url} />
                </a>
                <h2>{data.title}</h2>
                <div className="like-consumer">
                  <i className="far fa-thumbs-up"></i>
                  <span>{data.like} Liked</span>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
