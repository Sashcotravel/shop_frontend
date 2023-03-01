import React, { useEffect } from "react";
import s from "../component/Home.module.css";
import "./Obl.css";
import image1 from '../image/svg/Fullscreenicon.svg'
import image2 from '../image/svg/Group31.svg'
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";


const Build = ({ t, data, userOrder, setTotal, total, setUrl }) => {

  useEffect(() => {
    setUrl("construction")
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

  const size = (num) => {
    return (
      window.screen.width > 900 ? <span className="block">
        <img style={{width: '35px'}} src={image1} onClick={imgSize} id={`img${num}`}/>
      </span> : ""
    );
  };

  const imgSize2 = (e) => {
    // let types = e.target.title.slice(4)
    if(window.screen.availWidth > 900){
      let size = e.target.id.slice(3)
      let g = document.getElementById(e.target.id)
      if(g.className == `${e.target.id} base`){
        let con = document.getElementById("light");
        con.style.visibility = "visible";
        let twoImg = document.getElementById("lightCol");
        twoImg.className = `${e.target.id}_2`
        // g.className = `${e.target.id}_2`
      } else {
        let con = document.getElementById("light");
        con.style.visibility = "hidden";
        // g.className = `${e.target.id} base`
        // let twoImg = document.getElementById("lightCol");
        // con.className = ''
      }
    }
  } // old

  const imgSize = (e) => {
    let twoImg = document.getElementById("lightCol");
    twoImg.src = "";
    if (window.screen.availWidth > 900) {
      let g = document.getElementById(e.target.id);
      let a = g.src.substring(35, g.src.length - 24) + "webp";
      let x = "../image/" + a;
      if (g.src.slice(-3) === "jpg") {
        let con = document.getElementById("light");
        con.style.visibility = "visible";
        let twoImg = document.getElementById("lightCol");
        twoImg.src = require("../image/" + a);
      }
    }
  };

  const hidden = (e) => {
    if (e.target.id === "light") {
      let con = document.getElementById("light");
      con.style.visibility = "hidden";
    }
  };

  return (
    <>
      <div id="light" className={s.boxHideImage} onClick={hidden}>
        <figure className='figure'>
          <div className='divImg'>
            <span className='blockLarge' id="light">
              <img style={{width: '35px'}} src={image2} onClick={hidden} id="light" />
            </span>
            <img src={require("../image/ЩІТКА (1).jpg")} className="imageLarge" id="lightCol" />
          </div>
        </figure>
      </div>

      <div className={s.divBox}>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/back.jpg")} className={"base"} id="img26" alt='Баки для накопичення води'/>
                  {/*<img src={(`/static/media/${data[21].src}.${data[21].src2}`)} className={"base"} id="img26" />*/}
                  {size(26)}
                </div>
              </figure>
              <p className={s.itemName}>{data[21].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(21)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/reshnas.jpg")} className={"base"} id="img45" alt='Решітковий настил' />
                  {/*<img src={(`/static/media/${data[50].src}.${data[50].src2}`)} className={"base"} id="img45" />*/}
                  {size(45)}
                </div>
              </figure>
              <p className={s.itemName}>{data[50].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(50)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/reshnas2.jpg")} className={"base"} id="img46" alt='Решітковий настил' />
                  {/*<img src={(`/static/media/${data[51].src}.${data[51].src2}`)} className={"base"} id="img46" />*/}
                  {size(46)}
                </div>
              </figure>
              <p className={s.itemName}>{data[51].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(51)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/reshnas2.jpg")} className={"base"} id="img47" alt='Решітковий настил' />
                  {/*<img src={(`/static/media/${data[52].src}.${data[52].src2}`)} className={"base"} id="img47" />*/}
                  {size(47)}
                </div>
              </figure>
              <p className={s.itemName}>{data[52].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(52)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/reshnas2.jpg")} className={"base"} id="img48" alt='Решітковий настил' />
                  {/*<img src={(`/static/media/${data[53].src}.${data[53].src2}`)} className={"base"} id="img48" />*/}
                  {size(48)}
                </div>
              </figure>
              <p className={s.itemName}>{data[53].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(53)}
            </div>
          </div>
        </LazyLoadComponent>

      </div>

    </>
  );
};

export default Build;