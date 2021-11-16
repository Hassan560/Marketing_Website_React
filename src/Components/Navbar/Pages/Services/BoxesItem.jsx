import React from "react";
// import { Data } from "./Boxes.Data";
import servicesSty from "./Services.module.css";
function BoxesItem({ image, heading, para }) {
  return (
    <div className={servicesSty.boxes}>
      <div className={servicesSty.img}>{image}</div>
      <h3>{heading}</h3>
      <p>{para}</p>
    </div>
  );
}

export default BoxesItem;
