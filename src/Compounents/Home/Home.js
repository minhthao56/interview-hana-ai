import React from "react";

import {
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
import Nav from "../Nav/Nav";
import SubHome from "./SubHome";

import "./Home.scss";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  render() {
    return (
      <div>
        <Nav />
        <Element name="home" className="element">
          <SubHome />
        </Element>

        <Element name="benefit" className="element">
          Lợi ích
        </Element>

        <Element name="features" className="element">
          Tính năng
        </Element>

        <Element name="price" className="element">
          Bảng Giá
        </Element>
        <Element name="blog" className="element">
          Blog
        </Element>
        <Element name="contact" className="element">
          Liên Hệ
        </Element>
        <Element name="partner" className="element">
          Đối tác
        </Element>
      </div>
    );
  }
}
