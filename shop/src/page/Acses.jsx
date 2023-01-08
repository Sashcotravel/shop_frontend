import React, { useState } from "react";
import s from "../component/Home.module.css";
import "./Obl.css";


const Acses = ({ t, data, userOrder, setTotal, total }) => {

  const addCount = (e) => {
    data.forEach(item => {
      if (item.nameOfGoods === e.target.title) {
        userOrder.forEach((el, index) => {
          if (item === el) {
            userOrder.splice(index, 1);
          }
        });
        item.size = item.size + 1;
        item.total = item.size * item.prise;
        setTotal((actual) => actual + item.prise);
        userOrder.push(item);
      }
    });
  };

  const minesCount = (e) => {
    data.forEach(item => {
      if (item.nameOfGoods === e.target.title) {
        if (item.size === 0) {
          item.size = 0;
        } else {
          item.size = item.size - 1;
          if (item.size === 0) {
            userOrder.forEach((el, index) => {
              if (item === el) {
                userOrder.splice(index, 1);
              }
            });
          }
          item.total = item.total - item.prise;
          if (item.total === 0) {
            item.total = item.prise;
          }
          setTotal(total - item.prise);
        }
      }
    });
  };

  const imgSize = (e) => {
    if (window.screen.availWidth > 600) {
      let size = e.target.id.slice(3);
      let g = document.getElementById(e.target.id);
      if (g.className == `${e.target.id} base`) {
        let con = document.getElementById("light");
        con.style.visibility = "visible";
        let twoImg = document.getElementById("lightCol");
        twoImg.className = `${e.target.id}_2`;
      } else {
        let con = document.getElementById("light");
        con.style.visibility = "hidden";
      }
    }
  };

  const hidden = (e) => {
    if (e.target.id === "light") {
      let con = document.getElementById("light");
      con.style.visibility = "hidden";
    }
  };

  const size = (num) => {
    return(
      window.screen.width > 900 ? <span className={s.block} onClick={imgSize} id={`img${num}`}></span> : ''
    )
  }

  const boxBut = (num) => {
    return (
      <div className={s.divBut}>
        <div style={{ padding: 10 + "px", margin: "20px 15px" }}>
          <button className={s.butMin}>
            <span onClick={minesCount} title={data[num].nameOfGoods} className={s.spanMin}>-</span>
          </button>
          <span className={s.itemTotalSize} id="lightblue">{data[num].size}</span>
          <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
            <span onClick={addCount} title={data[num].nameOfGoods} className={s.spanAdd}>+</span>
          </button>
        </div>
        <span className={s.itemTotal}>{data[num].total} грн</span>
      </div>
    )
  }

  return <>
    <div id="light" className={s.boxHideImage} onClick={hidden}>
      <div className={""} id="lightCol">
        <span className={s.blockLarge} onClick={imgSize} id="lightCol"></span>
      </div>
    </div>
    <div className={s.divBox}>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img12 base"} id="img12">
            {size(12)}
          </div>
          <h5 className={s.itemName}>{data[11].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(11) }
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img13 base"} id="img13">
            {size(13)}
          </div>
          <h5 className={s.itemName}>{data[12].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(12) }
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img14 base"} id="img14">
            {size(14)}
          </div>
          <h5 className={s.itemName}>{data[15].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(15) }
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img15 base"} id="img15">
            {size(15)}
          </div>
          <h5 className={s.itemName}>{data[14].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(14) }
        </div>
      </div>
    </div>

  </>;
};

export default Acses;