import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { urlTtitle } from "../constant/constant";
import "./Partnet.scss";

const urlImg = "https://hana.ai/public/upload/images/becomepartner.jpg";

export default function Partner() {
  return (
    <div className="partner">
      <div className="title-partner">
        <h2>KHÁCH HÀNG TIÊU BIỂU</h2>
        <img src={urlTtitle} alt="kkk" />
      </div>
      <h3>TRỞ THÀNH ĐỐI TÁC CỦA HANA ĐỂ NHẬN NHỮNG QUYỀN LỢI TỐT NHẤT</h3>
      <Row gutter={[64, 16]}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <img src={urlImg} alt="jdjas" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} className="col2-partner">
          <h4>
            <p style={{ display: "flex" }}>
              <div>
                <p>Đồng hành cùng MIDEAS </p>
                <p>và nhận hoa hồng lên đến</p>
              </div>
              <b>50%</b>
            </p>
            <p>
              Nhận ngay <em>30%</em> khi bán được gói ĐẶC BIỆT
            </p>

            <p>
              Nhận ngay <em>40% </em> khi bán được gói NÂNG CAO, CAO CẤP
            </p>
          </h4>
          <p style={{ fontSize: 16, marginBottom: 30 }}>
            Mỗi đối tác là người đồng hàng và là người đại diện thương hiệu mang
            những giá trị A.I . Chatbot HANA - Giải pháp cho Marketing và bán
            hàng tự động tới khách hàng của bạn với hoa hồng lên đến 50% và trọn
            đời sẽ giúp bạn tạo ra nguồn thu nhập thụ động ngày càng lớn
          </p>
          <Link className="bt-free" to="/">
            Xem chi tiết
          </Link>
        </Col>
      </Row>
    </div>
  );
}
