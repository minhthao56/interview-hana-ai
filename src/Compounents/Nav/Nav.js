import React from "react";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import "./Nav.scss";

let LinkSroll = Scroll.Link;
const logoHana =
  "https://hana.ai/wp-content/themes/twentysixteen/templates/logo.png?t=1543586523";

export default class Nav extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isFixed: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    let isScroll = window.scrollY > 50;
    if (isScroll) {
      this.setState({ isFixed: true });
    } else {
      this.setState({ isFixed: false });
    }
  };

  render() {
    return (
      <div
        className={
          this.state.isFixed ? "container-nav nav-fixed" : "container-nav"
        }
      >
        <nav className="nav">
          <div>
            <img src={logoHana} alt="" className="nav-logo" />
          </div>
          <div className="nav-container">
            <ul className="nav-list">
              <li>
                <LinkSroll
                  activeClass="active"
                  className="link-nav"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Trang Chủ
                </LinkSroll>
              </li>
              <li>
                <LinkSroll
                  activeClass="active"
                  className="link-nav"
                  to="benefit"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Lợi ích
                </LinkSroll>
              </li>
              <li>
                <LinkSroll
                  activeClass="active"
                  className="link-nav"
                  to="features"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Tính năng
                </LinkSroll>
              </li>
              <li>
                <LinkSroll
                  activeClass="active"
                  className="link-nav"
                  to="price"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Bảng Giá
                </LinkSroll>
              </li>
              <li>
                <LinkSroll
                  activeClass="active"
                  className="link-nav"
                  to="blog"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Blog
                </LinkSroll>
              </li>
              <li>
                <LinkSroll
                  activeClass="active"
                  className="link-nav"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Liên Hệ
                </LinkSroll>
              </li>
              <li>
                <Link className="link-nav" to="/">
                  Hướng dẫn
                </Link>
              </li>
              <li>
                <LinkSroll
                  activeClass="active"
                  className="link-nav"
                  to="partner"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Đối tác
                </LinkSroll>
              </li>
              <li>
                <Link className="link-nav bt-login" to="/">
                  Đăng Nhập
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
