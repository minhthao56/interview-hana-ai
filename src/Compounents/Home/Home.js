import React from "react";

import {
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
import Nav from "../Nav/Nav";
import SubHome from "./SubHome";
import Mean from "./Mean";
import Benefit from "../Benefit/Benefit";
import Feature from "../Feature/Feature";
import ShouldeUse from "../Feature/ShouldUse";
import Consumer from "../Feature/Consumer";

import "./Home.scss";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function () {});

    Events.scrollEvent.register("end", function () {});
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
          <Mean />
        </Element>

        <Element name="benefit" className="element">
          <Benefit />
        </Element>

        <Element name="features" className="element">
          <Feature />
          <ShouldeUse />
          <Consumer />
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
