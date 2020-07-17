import React, { useState } from "react";
import { Carousel } from "antd";

export default function SubHome() {
  return (
    <Carousel autoplay style={{ backgroundColor: "red" }}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </Carousel>
  );
}
