import React from "react";
import "./Feature.scss";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

import {
  urlTtitle,
  urlBgFeatur,
  urlImg1,
  urlBgFeature1,
  urlBgFeature2,
  urlImg2,
  urlImg31,
  urlImg4,
  urlImg5,
  urlImg6,
} from "../constant/constant";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Feature() {
  return (
    <div className="feature">
      <div className="title-benefit">
        <h2>TÍNH NĂNG</h2>
        <img src={urlTtitle} alt />
      </div>
      <div
        className="main-feature"
        style={{ backgroundImage: `url(${urlBgFeature1})` }}
      >
        <Row gutter={[32, 0]} className="row-feature">
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="col-feature"
            data-aos="fade-right"
          >
            <img src={urlImg1} alt="wfd" />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="col-feature"
            data-aos="fade-left"
          >
            <div>
              <h2 style={{ marginBottom: 30 }}>
                Quản lý vòng đời khách hàng tiềm năng một cách thông minh
              </h2>
              <p>
                Theo dõi tất cả khách hàng, liên hệ, cơ hội, hoạt động và những
                chi tiết khác từ lúc là khách hàng tiềm năng cho đến khi chuyển
                hóa thành cơ hội kinh doanh
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div
        className="main-feature main1-feature"
        style={{
          backgroundImage: `url(${urlBgFeature2})`,
          backgroundPosition: "right top",
        }}
      >
        <Row gutter={[32, 0]} className="row-feature" data-aos="fade-right">
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="col-feature"
            order={2}
          >
            <img src={urlImg2} alt="wfd" />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="col-feature"
            order={1}
            data-aos="fade-left"
          >
            <div>
              <h2 style={{ marginBottom: 30 }}>
                Quản lý phễu bán hàng và chăm sóc khách hàng tự động
              </h2>
              <p>
                Theo dõi quá trình xử lý yêu cầu khách hàng qua tất cả các bộ
                phận(Sale, Marketing, CSKH, ...), cung cấp đầy đủ thông tin để
                chăm sóc khách hàng hiệu quả hơn, tránh thất thoát khách hàng
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div
        className="main-feature main1-feature"
        style={{
          backgroundImage: `url(${urlBgFeatur})`,
        }}
      >
        <Row gutter={[32, 0]} className="row-feature">
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="col-feature"
            data-aos="fade-right"
          >
            <img src={urlImg31} alt="wfd" />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="col-feature"
            data-aos="fade-left"
          >
            <div>
              <h2 style={{ marginBottom: 30 }}>
                A.I Chatbot trả lời tự động Inbox/Comment/Chatweb
              </h2>
              <p>
                Ứng dụng công nghệ nhân tạo kết hợp xử lí ngôn ngữ tự nhiên bằng
                tiếng Việt, chatbot HANA sẽ giúp doanh nghiệp tiết kiệm thời
                gian và chi phí chăm sóc khách hàng
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div
        className="main-feature main4-feature"
        style={{
          backgroundImage: `url(${urlBgFeatur})`,
          backgroundPosition: "right top",
        }}
      >
        <Row gutter={[32, 0]} className="row-feature">
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="col-feature"
            order={2}
            data-aos="fade-right"
          >
            <img src={urlImg4} alt="wfd" />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="col-feature"
            order={1}
            data-aos="fade-left"
          >
            <div>
              <h2 style={{ marginBottom: 30 }}>
                Re-marketing nuôi dưỡng và tăng tỉ lệ chuyển đổi
              </h2>
              <p>
                Gửi thông điệp hữu ích cho hàng loạt khách hàng tiềm năng trên
                Facebook Messenger hoàn toàn miễn phí. Đây chính là kênh bán
                hàng hiệu quả nhất hiện nay. Với tỉ lệ mở tin lên đến 90%.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div
        className="main-feature main1-feature"
        style={{
          backgroundImage: `url(${urlBgFeatur})`,
        }}
      >
        <Row gutter={[32, 0]} className="row-feature">
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="col-feature"
            data-aos="fade-right"
          >
            <img src={urlImg5} alt="wfd" />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="col-feature"
            data-aos="fade-left"
          >
            <div>
              <h2 style={{ marginBottom: 30 }}>
                Tự động hóa quy trình chăm sóc và bán hàng cùng Chatbot & nhân
                viên
              </h2>
              <p>
                HANA tự động phân nhóm khách hàng trong quá trình lắng nghe,xử
                lí câu nói và phân tích hành động của khách hàng. Đưa khách hàng
                tiềm năng từ những kênh tiếp xúc vào luồng chăm sóc và tương tác
                tự động 24/7 ngay trên website và facebook messenger của
                fanpage.
              </p>
            </div>
            <Link className="bt-free" to="/">
              MIỄN PHÍ TRỌN ĐỜI
            </Link>
          </Col>
        </Row>
      </div>
      <div
        className="main-feature main1-feature"
        style={{
          backgroundImage: `url(${urlBgFeatur})`,
          backgroundPosition: "right top",
        }}
      >
        <Row gutter={[32, 0]} className="row-feature">
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="col-feature"
            order={2}
            data-aos="fade-right"
          >
            <img src={urlImg6} alt="wfd" />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="col-feature"
            order={1}
            data-aos="fade-left"
          >
            <div>
              <h2 style={{ marginBottom: 30 }}>
                Tạo Tương Tác Khủng Thu Hút Hơn <em>10.000</em> Khách Hàng Mỗi
                Ngày Với Viral Chatbot
              </h2>
              <p>
                Thay vì đổ quá nhiều tiền vào ngân sách quảng cáo nhưng chưa
                chắc đem lại hiệu quả cao. HANA đem đến cho cho doanh nghiệp
                giải pháp viral chatbot giúp lan tỏa chiến dịch truyền thông
                theo cấp số nhân qua Facebook Messenger. Dễ dàng chia sẻ, tạo
                hiệu ứng lan tỏa, cá nhân hóa cho từng cá nhân.
              </p>
            </div>
            <Link className="bt-free" to="/">
              MIỄN PHÍ TRỌN ĐỜI
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}
