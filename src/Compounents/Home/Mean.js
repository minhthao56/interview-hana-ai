import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

import "./Mean.scss";

const url = "https://hana.ai/public/upload/images/bgtrolithongminh.jpg";
const img = "https://hana.ai/public/upload/images/tro-li-hana-ai.png";

export default function Mean() {
  return (
    <div style={{ backgroundImage: `url(${url})` }} className="mean">
      <div className="container-mean">
        <Row gutter={[32, 8]}>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            style={{ display: "flex" }}
          >
            <img src={img} alt="" />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="col2-mean">
            <h2>TRỢ LÍ THÔNG MINH HANA LÀ GÌ ?</h2>
            <p>
              Là nền tảng (platform) – nơi mà bạn có thể tự tạo ra những A.I
              Chatbot cho Website và Facebook Fanpage của riêng bạn mà chẳng cần
              học qua bất kỳ lớp về lập trình nào. Được ứng dụng công nghệ Trí
              tuệ nhân tạo (AI) hiện đại cùng giải thuật xử lý ngôn ngữ tự nhiên
              (NLP), HANA có thể trả lời tự động comment/inbox/chatweb từ những
              kịch bản và kiến thức bạn đã dạy. Đồng thời, khả năng tự động tạo
              phễu và nuôi dưỡng của HANA sẽ giúp bạn tạo nên những chiến dịch
              marketing hiệu quả chỉ với 0 đồng và dễ dàng lên đơn hàng hoàn
              toàn tự động.
            </p>
            <Link className="bt-free" to="/">
              MIỄN PHÍ TRỌN ĐỜI
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}
