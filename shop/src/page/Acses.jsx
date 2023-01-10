import React, { useState } from "react";
import s from "../component/Home.module.css";
import "./Obl.css";
import image1 from '../image/svg/Fullscreenicon.svg'
import image2 from "../image/svg/Group31.svg";


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
    if(e.target.id === 'light'){
      let con = document.getElementById("light");
      con.style.visibility = "hidden";
    }
  }

  const size = (num) => {
    return (
      window.screen.width > 900 ? <span className="block">
        <img style={{width: '35px'}} src={image1} onClick={imgSize} id={`img${num}`}/>
      </span> : ""
    );
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
    )
  }

  return <>
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
          {/*<div className={"img13 base"} id="img13">*/}
          {/*  {size(13)}*/}
          {/*</div>*/}
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/IMG_2671.jpg")} className={"base"} id="img12" />
              {size(12)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[30].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(30) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          {/*<div className={"img13 base"} id="img13">*/}
          {/*  {size(13)}*/}
          {/*</div>*/}
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/IMG_0065(2).jpg")} className={"base"} id="img13" />
              {size(13)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[31].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(31) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          {/*<div className={"img14 base"} id="img14">*/}
          {/*  {size(14)}*/}
          {/*</div>*/}
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/IMG_0332.jpg")} className={"base"} id="img14" />
              {size(14)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[32].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(32) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          {/*<div className={"img15 base"} id="img15">*/}
          {/*  {size(15)}*/}
          {/*</div>*/}
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/IMG_0344.jpg")} className={"base"} id="img15" />
              {size(15)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[33].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(33) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          {/*<div className={"img28 base"} id="img28">*/}
          {/*  {size(28)}*/}
          {/*</div>*/}
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/Hust_3.jpg")} className={"base"} id="img28" />
              {size(28)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[34].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(34) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          {/*<div className={"img29 base"} id="img29">*/}
          {/*  {size(29)}*/}
          {/*</div>*/}
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/Hust_4.jpg")} className={"base"} id="img29" />
              {size(29)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[35].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(35) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          {/*<div className={"img30 base"} id="img30">*/}
          {/*  {size(30)}*/}
          {/*</div>*/}
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/Hust_5.jpg")} className={"base"} id="img30" />
              {size(30)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[36].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(36) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          {/*<div className={"img31 base"} id="img31">*/}
          {/*  {size(31)}*/}
          {/*</div>*/}
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/wisk.jpg")} className={"base"} id="img31" />
              {size(31)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[37].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(37) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          {/*<div className={"img32 base"} id="img32">*/}
          {/*  {size(32)}*/}
          {/*</div>*/}
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/image_b734de78c92b376ebbd46729b928e1c015c3dd708d65ad2fce52175a101a1e77.jpg")} className={"base"} id="img32" />
              {size(32)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[38].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(38) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          {/*<div className={"img33 base"} id="img33">*/}
          {/*  {size(33)}*/}
          {/*</div>*/}
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/screen1.jpg")} className={"base"} id="img33" />
              {size(33)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[39].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(39) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          {/*<div className={"img35 base"} id="img35">*/}
          {/*  {size(35)}*/}
          {/*</div>*/}
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/IMG_0175.jpg")} className={"base"} id="img35" />
              {size(35)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[40].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(40) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          {/*<div className={"img37 base"} id="img37">*/}
          {/*  {size(37)}*/}
          {/*</div>*/}
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/IMG_0334.jpg")} className={"base"} id="img37" />
              {size(37)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[42].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(42) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          {/*<div className={"img38 base"} id="img38">*/}
          {/*  {size(38)}*/}
          {/*</div>*/}
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/buttonPause.jpg")} className={"base"} id="img38" />
              {size(38)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[43].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(43) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          {/*<div className={"img39 base"} id="img39">*/}
          {/*  {size(39)}*/}
          {/*</div>*/}
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/IMG_0922.jpg")} className={"base"} id="img39" />
              {size(39)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[44].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(44) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/IMG_0985.jpg")} className={"base"} id="img40" />
              {size(40)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[45].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(45) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          {/*<div className={"img41 base"} id="img41">*/}
          {/*  {size(41)}*/}
          {/*</div>*/}
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/IMG_2671.jpg")} className={"base"} id="img41" />
              {size(41)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[46].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(46) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/RINSING.jpg")} className={"base"} id="img42" />
              {size(42)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[47].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(47) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/carwash9.jpg")} className={"base"} id="img43" />
              {size(43)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[48].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(48) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/IMG_4738.jpg")} className={"base"} id="img44" />
              {size(44)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[49].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(49) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/EQUIPMENT.jpg")} className={"base"} id="img45" />
              {size(45)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[50].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(50) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/RINSINGWITHOUTOSMOSIS.jpg")} className={"base"} id="img46" />
              {size(46)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[51].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(51) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/OSMOSIS.jpg")} className={"base"} id="img47" />
              {size(47)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[52].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(52) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/korosten1.jpg")} className={"base"} id="img48" />
              {size(48)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[53].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(53) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/lubomil1.jpg")} className={"base"} id="img49" />
              {size(49)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[55].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(55) }
        </div>
      </div>

    </div>

  </>;
};

export default Acses;