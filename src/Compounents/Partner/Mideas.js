import React from "react";
import { Row, Col, Progress } from "antd";
import { Link } from "react-router-dom";
import { urlTtitle } from "../constant/constant";
import "./Mideas.scss";

export default function Mideas() {
  return (
    <div className="mideas">
      <div className="title-mideas">
        <h2>VỀ MIDEAS</h2>
        <img src={urlTtitle} alt="kkk" />
      </div>
      <Row gutter={[64, 16]}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            Đội ngũ trẻ trung và năng động có hơn 10 năm kinh nghiệm trong lĩnh
            vực công nghệ đặc biệt là công nghệ trí tuệ nhân tạo (AI). Cùng với
            những chuyên gia trong lĩnh vực marketing chúng tôi hy vọng sẽ mang
            đến cho bạn và doanh nghiệp của bạn thêm nhiều giá trị về tự động
            hóa trong bán hàng và marketing online
          </p>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div style={{ marginBottom: 30 }}>
            <b>Công nghệ AI</b>
            <Progress
              percent={75}
              strokeColor="#229a27"
              trailColor="#ffffff"
              strokeWidth={20}
            />
          </div>
          <div style={{ marginBottom: 30 }}>
            <b>Maketing & Content marketing</b>
            <Progress
              percent={64}
              strokeColor="#229a27"
              trailColor="#ffffff"
              strokeWidth={20}
            />
          </div>
          <div style={{ marginBottom: 30 }}>
            <b>Tự động hóa</b>
            <Progress
              percent={83}
              strokeColor="#229a27"
              trailColor="#ffffff"
              strokeWidth={20}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
