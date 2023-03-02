import React, { useEffect, useState } from "react";
import s from "../component/Home.module.css";
import "./Obl.css";
import image1 from '../image/svg/Fullscreenicon.svg'
import image2 from '../image/svg/Group31.svg'
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";


const DocumentsPage = ({ t, data, userOrder, setTotal, total, setUrl }) => {

  useEffect(() => {
    setUrl("documentation")
  }, [])


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
    console.log(userOrder);
  };

  const minesCount = (e) => {
    data.forEach(item => {
      if (item.nameOfGoods === e.target.title) {
        if (item.size === 0) {
          item.size = 0;
        } else {
          item.size = item.size - 1;
          if (item.size === 0) {
            item.checked = false;
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
    console.log(userOrder);
  };

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
    );
  };

  const onChange = (e) => {
    data.forEach(item => {
      if (item.nameOfGoods === e.target.id) {
        if (e.target.checked) {
          setTotal((actual) => actual + item.prise);
          userOrder.push(item);
        } else {
          userOrder.forEach((el, index) => {
            if (item === el) {
              setTotal(total - item.prise);
              userOrder.splice(index, 1);
            }
          });
        }
      }
    });
  };


  return (
    <>
      <div className={s.divBox}>


        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne} style={{padding: '10px 0 0 10px'}}>
              <p className={s.itemName}>{data[60].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(60)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne} style={{padding: '10px 0 0 10px'}}>
              <p className={s.itemName}>{data[63].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              <div className={s.divBut}>
                <input type="checkbox" id={data[63].nameOfGoods} onChange={onChange}/>
                <span className={s.itemTotal}>{data[63].total} грн</span>
              </div>
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne} style={{padding: '10px 0 0 10px'}}>
              <p className={s.itemName}>{data[64].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              <div className={s.divBut}>
                <input type="checkbox" id={data[64].nameOfGoods} onChange={onChange}/>
                <span className={s.itemTotal}>{data[64].total} грн</span>
              </div>
            </div>
          </div>
        </LazyLoadComponent>

      </div>

    </>
  );
};

export default DocumentsPage;