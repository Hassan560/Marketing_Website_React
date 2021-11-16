import React from "react";
import { Data } from "../../../Helpers/Boxes.Data";
import BoxesItem from "./BoxesItem";
import servicesSty from "./Services.module.css";
function Services() {
  return (
    <div className={servicesSty.services}>
      <h1>
        WE ARE SEO <span>MARKETING AGENCY</span>
      </h1>
        <div className={servicesSty.box}>
          {Data.map((elem) => {
            return (
              <BoxesItem
                key={elem.id}
                image={elem.logo}
                heading={elem.heading}
                para={elem.para}
              />
            );
          })}
        </div>
    </div>
  );
}

export default Services;
