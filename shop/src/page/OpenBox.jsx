import React, { useEffect } from "react";
import s from "../component/Home.module.css";
import "./Obl.css";
import image1 from '../image/svg/Fullscreenicon.svg'
import image2 from '../image/svg/Group31.svg'
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";


const OpenBox = ({ t, data, userOrder, setTotal, total, setUrl }) => {

  useEffect(() => {
    setUrl("openBox")
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
                  <LazyLoadImage src={require("../image2/Fura_1.jpg")} className={"base"} id="img16" alt='ТКомплект'/>
                  {/*<img src={(`/static/media/${data[10].src}.${data[10].src2}`)} className={"base"} id="img16" />*/}
                  {size(16)}
                </div>
              </figure>
              <p className={s.itemName}>{data[10].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(10)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/Fura_3.jpg")} className={"base"} id="img17" alt='ТКомплект'/>
                  {/*<img src={(`/static/media/${data[11].src}.${data[11].src2}`)} className={"base"} id="img17" />*/}
                  {size(17)}
                </div>
              </figure>
              <p className={s.itemName}>{data[11].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(11)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              {/*<div className={"img29 base"} id="img29">*/}
              {/*  {size(29)}*/}
              {/*</div>*/}
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/vidpostfur.jpg")} className={"base"}
                                 id="img29" alt='Відкритий пост для фури' loading='lazy'/>
                  {/*<img src={require("../image2/vidpostfur.jpg")} className={"base"}*/}
                  {/*     id="img29" alt='Відкритий пост для фури' loading='lazy'/>*/}
                  {size(29)}
                </div>
              </figure>
              <p className={s.itemName}>{data[35].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(35)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              {/*<div className={"img13 base"} id="img13">*/}
              {/*  {size(13)}*/}
              {/*</div>*/}
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image/IMG_0065(2).jpg")} className={"base"} id="img13" alt='Т-подібний відкритий пост' loading='lazy'/>
                  {/*<img src={require("../image/IMG_0065(2).jpg")} className={"base"} id="img13" alt='Т-подібний відкритий пост' loading='lazy'/>*/}
                  {size(13)}
                </div>
              </figure>
              <p className={s.itemName}>{data[31].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(31)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              {/*<div className={"img14 base"} id="img14">*/}
              {/*  {size(14)}*/}
              {/*</div>*/}
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/ppodvidpostbut.jpg")} className={"base"} id="img14" alt='П-подібний відкритий пост' loading='lazy'/>
                  {/*<img src={(`/static/media/${data[32].src}.${data[32].src2}`)} className={"base"} id="img14" />*/}
                  {size(14)}
                </div>
              </figure>
              <p className={s.itemName}>{data[32].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(32)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              {/*<div className={"img15 base"} id="img15">*/}
              {/*  {size(15)}*/}
              {/*</div>*/}
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/tpod.jpg")} className={"base"}
                                 id="img15" alt='Т-подібний із захистом відкритий пост' loading='lazy'/>
                  {/*<img src={(`/static/media/${data[33].src}.${data[33].src2}`)} className={"base"} id="img15" />*/}
                  {size(15)}
                </div>
              </figure>
              <p className={s.itemName}>{data[33].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(33)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              {/*<div className={"img28 base"} id="img28">*/}
              {/*  {size(28)}*/}
              {/*</div>*/}
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/ppodvidpost.jpg")} className={"base"}
                                 id="img28" alt='П-подібний із захистом відкритий пост' loading='lazy'/>
                  {/*<img src={(`/static/media/${data[34].src}.${data[34].src2}`)} className={"base"} id="img28" />*/}
                  {size(28)}
                </div>
              </figure>
              <p className={s.itemName}>{data[34].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(34)}
            </div>
          </div>
        </LazyLoadComponent>
      </div>

    </>
  );
};

export default OpenBox;