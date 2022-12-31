import React, { useState } from "react";
import s from "../Home.module.css";
import image1 from "../image/303822-1366x768.jpg";


const Acses = ({ data, userOrder, setTotal, total }) => {

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

  return <>
    <div className={s.divBox}>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={s.img3}></div>
          <h5 className={s.itemName}>{data[11].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          <div className={s.divBut}>
            <div style={{ padding: 10 + "px", margin: "20px 15px" }}>
              <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
                <span onClick={addCount} title={data[11].nameOfGoods} className={s.spanAdd}>+</span>
              </button>
              <span className={s.itemTotalSize} id="lightblue">{data[11].size}</span>
              <button className={s.butMin}>
                <span onClick={minesCount} title={data[11].nameOfGoods} className={s.spanMin}>-</span>
              </button>
            </div>
            <span className={s.itemTotal}>{data[11].total} грн</span>
          </div>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={s.img3}></div>
          <h5 className={s.itemName}>{data[12].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          <div className={s.divBut}>
            <div style={{ padding: 10 + "px", margin: "20px 15px" }}>
              <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
                <span onClick={addCount} title={data[12].nameOfGoods} className={s.spanAdd}>+</span>
              </button>
              <span className={s.itemTotalSize} id="lightblue">{data[12].size}</span>
              <button className={s.butMin}>
                <span onClick={minesCount} title={data[12].nameOfGoods} className={s.spanMin}>-</span>
              </button>
            </div>
            <span className={s.itemTotal}>{data[12].total} грн</span>
          </div>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={s.img3}></div>
          <h5 className={s.itemName}>{data[15].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          <div className={s.divBut}>
            <div style={{ padding: 10 + "px", margin: "20px 15px" }}>
              <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
                <span onClick={addCount} title={data[15].nameOfGoods} className={s.spanAdd}>+</span>
              </button>
              <span className={s.itemTotalSize} id="lightblue">{data[15].size}</span>
              <button className={s.butMin}>
                <span onClick={minesCount} title={data[15].nameOfGoods} className={s.spanMin}>-</span>
              </button>
            </div>
            <span className={s.itemTotal}>{data[15].total} грн</span>
          </div>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={s.img3}></div>
          <h5 className={s.itemName}>{data[14].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          <div className={s.divBut}>
            <div style={{ padding: 10 + "px", margin: "20px 15px" }}>
              <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
                <span onClick={addCount} title={data[14].nameOfGoods} className={s.spanAdd}>+</span>
              </button>
              <span className={s.itemTotalSize} id="lightblue">{data[14].size}</span>
              <button className={s.butMin}>
                <span onClick={minesCount} title={data[14].nameOfGoods} className={s.spanMin}>-</span>
              </button>
            </div>
            <span className={s.itemTotal}>{data[14].total} грн</span>
          </div>
        </div>
      </div>
    </div>

  </>;
};

export default Acses;