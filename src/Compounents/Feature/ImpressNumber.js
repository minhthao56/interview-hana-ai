import React, { useEffect, useState } from "react";
import "./Consumer.scss";
import "./ImpressNumber.scss";
import { Row, Col } from "antd";
import CountUp from "react-countup";

import { urlTtitle } from "../constant/constant";
import { dataImpressNumber } from "../constant/dataHardClient";

export default function Consumer() {
  const [isConuter, setIsCounter] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handSrollNumber);
    return () => {
      window.removeEventListener("scroll", handSrollNumber);
    };
  }, []);

  const handSrollNumber = () => {
    let scrollY = window.scrollY > 7245;
    if (scrollY) {
      setIsCounter(true);
    } else {
      setIsCounter(false);
    }
  };
  return (
    <div className="consumer">
      <div className="title-consumer">
        <h2>NHỮNG CON SỐ ẤN TƯỢNG VỀ HANA</h2>
        <img src={urlTtitle} alt="kkk" />
      </div>
      <Row gutter={[16, 48]} className="row-consumer">
        {dataImpressNumber.map((data, i) => {
          return (
            <Col xs={24} sm={24} md={12} lg={6} xl={6} className="col-consumer">
              <div className="main-number">
                <img src={data.url} />
                <h2>
                  {isConuter ? <CountUp start={0} end={data.num} /> : null}
                </h2>
                <div className="like-consumer">
                  <span>{data.title}</span>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
