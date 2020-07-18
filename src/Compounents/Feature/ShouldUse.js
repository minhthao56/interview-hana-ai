import React from "react";
import { Row, Col } from "antd";

import "./ShouldUse.scss";
import { urlTtitle } from "../constant/constant";
import { dataShoule } from "../constant/dataHardClient";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function ShouldUse() {
  return (
    <div className="should">
      <div className="title-should">
        <h2>NGÀNH NGHỀ NÊN SỬ DỤNG HANA</h2>
        <img src={urlTtitle} alt="kkk" />
      </div>
      <Row className="row-shoule" gutter={[16, 0]}>
        {dataShoule.map((data, key) => {
          return (
            <Col xs={24} sm={24} md={12} lg={8} xl={8} key={key}>
              <div>
                <img src={data.url} alt="á" data-aos="fade-up" />
                <h2>{data.title}</h2>
                <p>{data.content}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
