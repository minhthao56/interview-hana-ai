import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel, Row, Col } from "antd";
import infoAIP from "../../api/infoAIP";

import "./subHome.scss";

export default function SubHome() {
  const [dataBanner, setDataBanner] = useState([]);
  const [isChange, setIsChange] = useState(true);

  const handleChange = () => {
    setIsChange(true);
  };
  const handleChangeBefore = () => {
    setIsChange(false);
  };
  useEffect(() => {
    infoAIP.getBanner().then((res) => setDataBanner(res));
  });

  return (
    <Carousel
      autoplay
      style={{ backgroundColor: "#edebec", height: 560 }}
      afterChange={handleChange}
      beforeChange={handleChangeBefore}
    >
      {dataBanner.map((data, key) => {
        return (
          <div className="subhome" key={key}>
            <Row gutter={[16, 16]}>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={12}
                xl={12}
                className="img-subhome"
                order={key % 2 === 0 ? 1 : 2}
              >
                <img src={data.url} alt="" />
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={12}
                xl={12}
                className="main-subhome"
                order={key % 2 === 0 ? 2 : 1}
              >
                <div
                  style={{ marginLeft: 50, marginRight: 50 }}
                  className={isChange ? "open" : "lose"}
                >
                  <h1 className="title-subhome">{data.title}</h1>
                  <p className="content-subhome">{data.content}</p>

                  <Link className="bt-subhome" to="/">
                    MIỄN PHÍ TRỌN ĐỜI
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        );
      })}
    </Carousel>
  );
}
