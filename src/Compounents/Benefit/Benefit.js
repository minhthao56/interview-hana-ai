import React, { useEffect, useState } from "react";
import "./Benefit.scss";
import { urlTtitle } from "../constant/constant";
import { Row, Col } from "antd";
import infoAIP from "../../api/infoAIP";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Benefit() {
  const [dataBenefit, setDataBenefit] = useState([]);

  useEffect(() => {
    infoAIP.getBenefit().then((res) => setDataBenefit(res));
  });
  return (
    <div className="benefit">
      <div className="header-benifit">
        <div className="title-benefit">
          <h2>LỢI ÍCH</h2>
          <img src={urlTtitle} alt />
        </div>
        <p>
          Không cần bỏ quá nhiều tiền hoặc biết lập trình, bạn vẫn có thể dễ
          dàng tạo được 1 chatbot có phễu bán hàng tự động, hệ thống quản lí và
          hệ thống tự động hóa chăm sóc khách hàng 24/7, kết hợp với maketing để
          mang đến cho khách hàng để tăng tỉ lệ chuyển đổi. Với nền tảng công
          nghệ A.I tiên tiến, Hana là một trợ lý ảo giúp các doanh nghiệp tiết
          kiệm thời gian và tiền bạc, và nhiều lợi ích khác.
        </p>
        <h3>HÃY CÙNG TÌM HIỂU HANA CÓ THỂ ĐEM ĐẾN GÌ CHO BẠN NHÉ !</h3>
      </div>
      <Row gutter={[72, 32]}>
        {dataBenefit.map((data) => {
          return (
            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="col-benefit">
              <div className="icon-benefit" data-aos="fade-up">
                <img src={data.url} alt="" />
              </div>

              <h3>{data.title}</h3>
              <p>{data.content}</p>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
