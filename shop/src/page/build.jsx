import React, { useEffect, useState } from "react";
import s from "../component/Home.module.css";
import "./Obl.css";
import image1 from '../image/svg/Fullscreenicon.svg'
import image2 from '../image/svg/Group31.svg'
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";


const Build = ({ t, data, userOrder, setTotal, total, setUrl }) => {

  useEffect(() => {
    setUrl("construction")
  }, [])

  const [resh, setResh] = useState(0)
  const [lastTot, setLastTot] = useState(0)

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
    // console.log(userOrder);
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

  const addChange = (e) => {
    if(e.target.value.length < 6){
      setResh(e.target.value)
      data[62].size = e.target.value
      data[62].total = data[62].size * 90
    }
  }

  const onBlur = (e) => {
    setTotal((actual) => actual + data[62].total);
    userOrder.forEach((el, index) => {
      if (data[62] === el) {
        setTotal((actual) => actual - lastTot);
        userOrder.splice(index, 1);
      }
    });
    if (data[62].size !== "") {
      userOrder.push(data[62]);
    }
    setLastTot(data[62].total);
  };


  return (
    <>
      <div className={s.divBox}>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne+' '+s.boxOne2}>
              <p className={s.itemName}>{data[62].nameOfGoods}</p>
              <p className={s.itemName} style={{marginTop: '0'}}>гравій, пісок, цемент</p>
              <p className={s.itemDesc}></p>
              <div className={s.divBut}>
                <div style={{ padding: 10 + "px", margin: "20px 15px" }}>
                  <span className={s.itemTotalSize} id="lightblue">{data[62].total}</span>
                </div>
                <input className={s.itemTotal+' '+s.inputResh} type="text" value={resh}
                       onChange={addChange} title={data[62].nameOfGoods} onBlur={onBlur}/>
                <span className={s.itemTotal} style={{marginLeft: '-40px'}}>м²</span>
              </div>
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne+' '+s.boxOne2}>
              <p className={s.itemName}>{data[21].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(21)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne+' '+s.boxOne2}>
              <p className={s.itemName}>{data[50].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(50)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne+' '+s.boxOne2}>
              <p className={s.itemName}>{data[51].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(51)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne+' '+s.boxOne2}>
              <p className={s.itemName}>{data[52].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(52)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne+' '+s.boxOne2}>
              <p className={s.itemName}>{data[53].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(53)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne+' '+s.boxOne2}>
              <p className={s.itemName}>{data[60].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(60)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne+' '+s.boxOne2}>
              <p className={s.itemName}>{data[61].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(61)}
            </div>
          </div>
        </LazyLoadComponent>

      </div>

    </>
  );
};

export default Build;