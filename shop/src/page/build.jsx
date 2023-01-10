import React from "react";
import s from "../component/Home.module.css";
import "./Obl.css";
import image1 from '../image/svg/Fullscreenicon.svg'
import image2 from '../image/svg/Group31.svg'


const Build = ({ t, data, userOrder, setTotal, total }) => {

  const boxBut = (num) => {
    return (
      <div className={s.divBut}>
        <div style={{ padding: 10 + "px", margin: "20px 15px" }}>
          <button className={s.butMin}>
            <span title={data[num].nameOfGoods} className={s.spanMin}>-</span>
          </button>
          <span className={s.itemTotalSize} id="lightblue">{data[num].size}</span>
          <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
            <span title={data[num].nameOfGoods} className={s.spanAdd}>+</span>
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

        <div className={s.container}>
          <div className={s.boxOne}>
            {/*<div className={'img10 base'} id='img10'>*/}
            {/*  {size(10)}*/}
            {/*</div>*/}
            <figure>
              <div style={{height: '315px'}}>
                <img src={require("../image/Hust_5.jpg")} className={"base"} id="img3" />
                {size(3)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[0].nameOfGoods}</h5>
            <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            {boxBut(0)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{height: '315px'}}>
                <img src={require("../image/Hust_5.jpg")} className={"base"} id="img4" />
                {size(4)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[3].nameOfGoods}</h5>
            <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            {boxBut(3)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{height: '315px'}}>
                <img src={require("../image/0_02_05_092117a88a3576e685bb507d7af813aa7e493ceef3a526d1ca8a17b75cd2b3d6(1).jpg")} className={"base"} id="img5" />
                {size(5)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[54].nameOfGoods}</h5>
            <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            {boxBut(54)}
          </div>
        </div>

      </div>


      {/*<figure onClick={imgSize}>*/}
      {/*  <img src={image1} className={"img3 base"} id="img3"/>*/}
      {/*</figure>*/}
      {/*<figure onClick={imgSize}>*/}
      {/*  <img src={require("../image/BX_3.jpg")} className={"base"} id="img3"/>*/}
      {/*</figure>*/}

    </>
  );
};

export default Build;