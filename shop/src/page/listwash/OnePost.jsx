import React, { useEffect } from "react";
import s from "../../component/Home.module.css";


const OnePost = ({ listWash, colPost }) => {

  const container = (name, desc, desc2, city, img, imgNum, index) => {
    return (
      <div key={index} className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{ height: "315px" }}>
              {/*<img src={require("../image2/post2_2.jpg")} className={"base"} id={`img${imgNum}`} />*/}
              <img src={img} className={"base"} id={`img${imgNum}`} />
              {/*{size(imgNum)}*/}
            </div>
          </figure>
          <h5 className={s.itemName}>{name}</h5>
          {desc.map((item, i) => <ul key={i} style={{ textDecoration: "none" }}>
            <li className={s.itemDesc}>{item}</li>
          </ul>)}
          <p className={s.itemDesc}>{desc2}</p>
          <span className={s.itemDesc}>місто {city}</span>
          {/*<div className={s.divBut}>*/}
          {/*  <div style={{ padding: 10 + "px", margin: "20px 15px" }}>*/}
          {/*    <span className={s.itemTotalSize} id="lightblue">{totalsSize}</span>*/}
          {/*  </div>*/}
          {/*  <span className={s.itemTotal}>{total} грн</span>*/}
          {/*</div>*/}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={s.divBox}>
        {
          listWash.map((item, index) => {
            if (item.colPost === colPost) {
              return container(item.name, item.desc, item.desc2, item.city, item.src, item.imgNum, index);
            } else if (colPost === 0) {
              return container(item.name, item.desc, item.desc2, item.city, item.src, item.imgNum, index);
            }
          })
        }
      </div>
    </>
  );
};

export default OnePost;