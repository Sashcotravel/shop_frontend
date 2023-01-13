import React, { useState } from "react";
import s from "../component/Home.module.css";
import "./Obl.css";
import image1 from "../image/svg/Fullscreenicon.svg";
import image2 from "../image/svg/Group31.svg";


const Nacr = ({ t, data, userOrder, setTotal, total }) => {

  const [pina, setPina] = useState();

  const clickNacr = (e) => {
    data.forEach(item => {
      item.checked = false;
      if (item.nameOfGoods === e.target.title) {
        setPina(item);
        userOrder.forEach((el, index) => {
          if (item === el) {
            userOrder.splice(index, 1);
          }
        });
        userOrder.forEach((el, index) => {
          if (el.nameOfGoods === data[23].nameOfGoods || el.nameOfGoods === data[24].nameOfGoods || el.nameOfGoods === data[25].nameOfGoods
            || el.nameOfGoods === data[26].nameOfGoods || el.nameOfGoods === data[27].nameOfGoods ||
            el.nameOfGoods === data[28].nameOfGoods || el.nameOfGoods === data[29].nameOfGoods) {
            userOrder.splice(index, 1);
            if (el.size > 0) {
              // setTotal((actual) => actual - el.total)
              setTotal(total - el.total);
              el.size = 0;
              el.total = el.prise;
            }
          }
        });
        // setTotal((actual) => actual + item.prise)
        userOrder.push(item);
        item.checked = true;
      }
    });
  };

  const addCount = (e) => {
    data.forEach(item => {
      if (item.nameOfGoods === e.target.title) {
        setPina(item);
        userOrder.forEach((el, index) => {
          if (item === el) {
            userOrder.splice(index, 1);
          }
        });
        if (pina?.nameOfGoods === data[23].nameOfGoods || pina?.nameOfGoods === data[24].nameOfGoods
          || pina?.nameOfGoods === data[25].nameOfGoods || pina?.nameOfGoods === data[26].nameOfGoods
          || pina?.nameOfGoods === data[27].nameOfGoods || pina?.nameOfGoods === data[28].nameOfGoods
          || pina?.nameOfGoods === data[29].nameOfGoods) {
          userOrder.forEach((el, index) => {
            if (el === data[23] || el === data[24] || el === data[25] || el === data[26]
              || el === data[27] || el === data[28] || el === data[29]) {
              userOrder.splice(index, 1);
              if (el.size != 0) {
                setTotal(total - el.total);
              }
              el.size = 0;
              el.total = el.prise;
            }
          });
        }
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
  };

  const imgSize = (e) => {
    let twoImg = document.getElementById("lightCol");
    twoImg.src = "";
    if (window.screen.availWidth > 900) {
      let g = document.getElementById(e.target.id);
      if (g.src.slice(-3) === "jpg") {
        let con = document.getElementById("light");
        con.style.visibility = "visible";
        let twoImg = document.getElementById("lightCol");
        twoImg.src = g.src;
      }
    }
  };

  const hidden = (e) => {
    if (e.target.id === "light") {
      let con = document.getElementById("light");
      con.style.visibility = "hidden";
    }
  };

  const selectName = (number) => {
    return (
      data[number].size > 0
        ? <span className={s.inputTextGreen}>{t("selected")}</span>
        : <span className={s.inputText}>{t("chooseThisTypeOfCover")}</span>
    );
  };

  const size = (num) => {
    return (
      window.screen.width > 900 ? <span className="block">
        <img style={{ width: "35px" }} src={image1} onClick={imgSize} id={`img${num}`} />
      </span> : ""
    );
  };

  const boxButWithCheck = (num) => {
    return (
      <div className={s.divBut}>
        <div>
          <button className={s.butMin}>
            <span onClick={minesCount} title={data[num].nameOfGoods} className={s.spanMin}>-</span>
          </button>
          <span className={s.itemTotalSize} id="lightblue">{data[num].size}</span>
          <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
            <span onClick={addCount} title={data[num].nameOfGoods} className={s.spanAdd}>+</span>
          </button>
        </div>
        <span className={s.itemTotal} style={{ padding: 10 + "px" }}>{data[num].total} грн</span>
      </div>
    );
  };

  return <>
    <div id="light" className={s.boxHideImage} onClick={hidden}>
      <figure className="figure">
        <div className="divImg">
            <span className="blockLarge" id="light">
              <img style={{ width: "35px" }} src={image2} onClick={hidden} id="light" />
            </span>
          <img src={(`/static/media/${data[0].src}.${data[0].src2}`)} className="imageLarge" id="lightCol" />
        </div>
      </figure>
    </div>

    <main>
      <div className={s.divBox}>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                {/*<img src={require("../image/Lutsk.jpg")} className={"base"} id="img6" />*/}
                <img src={(`/static/media/${data[23].src}.${data[23].src2}`)} className={"base"} id="img6" />
                {size(6)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[23].nameOfGoods}</h5>
            <p className={s.itemDesc}>Desc</p>
            <div>
              <input className={data[23].size > 0 ? s.check2 : s.check} checked={data[23].checked}
                     type="radio" name="pina" title={data[23].nameOfGoods} onChange={clickNacr} />
              {selectName(23)}
            </div>
            {boxButWithCheck(23)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                {/*<img src={require("../image/BX_3.jpg")} className={"base"} id="img7" />*/}
                <img src={(`/static/media/${data[24].src}.${data[24].src2}`)} className={"base"} id="img7" />
                {size(7)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[24].nameOfGoods}</h5>
            <p className={s.itemDesc}>Desc</p>
            <div>
              <input className={data[24].size > 0 ? s.check2 : s.check} checked={data[24].checked}
                     type="radio" name="pina" title={data[24].nameOfGoods} onChange={clickNacr} />
              {selectName(24)}
            </div>
            {boxButWithCheck(24)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                {/*<img src={require("../image/pop.jpg")} className={"base"} id="img8" />*/}
                <img src={(`/static/media/${data[25].src}.${data[25].src2}`)} className={"base"} id="img8" />
                {size(8)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[25].nameOfGoods}</h5>
            <p className={s.itemDesc}>Desc</p>
            <div>
              <input className={data[25].size > 0 ? s.check2 : s.check} checked={data[25].checked}
                     type="radio" name="pina" title={data[25].nameOfGoods} onChange={clickNacr} />
              {selectName(25)}
            </div>
            {boxButWithCheck(25)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                {/*<img src={require("../image/Rogatyn.jpg")} className={"base"} id="img9" />*/}
                <img src={(`/static/media/${data[26].src}.${data[26].src2}`)} className={"base"} id="img9" />
                {size(9)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[26].nameOfGoods}</h5>
            <p className={s.itemDesc}>Desc</p>
            <div>
              <input className={data[26].size > 0 ? s.check2 : s.check} checked={data[26].checked}
                     type="radio" name="pina" title={data[26].nameOfGoods} onChange={clickNacr} />
              {selectName(26)}
            </div>
            {boxButWithCheck(26)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                {/*<img src={require("../image/sam4.jpg")} className={"base"} id="img10" />*/}
                <img src={(`/static/media/${data[27].src}.${data[27].src2}`)} className={"base"} id="img10" />
                {size(10)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[27].nameOfGoods}</h5>
            <p className={s.itemDesc}>Desc</p>
            <div>
              <input className={data[27].size > 0 ? s.check2 : s.check} checked={data[27].checked}
                     type="radio" name="pina" title={data[27].nameOfGoods} onChange={clickNacr} />
              {
                selectName(27)
              }
            </div>
            {boxButWithCheck(27)}
          </div>

        </div>
        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                {/*<img src={require("../image/Striy_2(2).jpg")} className={"base"} id="img60" />*/}
                <img src={(`/static/media/${data[28].src}.${data[28].src2}`)} className={"base"} id="img60" />
                {size(60)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[28].nameOfGoods}</h5>
            <p className={s.itemDesc}>Desc</p>
            <div>
              <input className={data[28].size > 0 ? s.check2 : s.check} checked={data[28].checked}
                     type="radio" name="pina" title={data[28].nameOfGoods} onChange={clickNacr} />
              {selectName(28)}
            </div>
            {boxButWithCheck(28)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            {/*<div className={'img11 base'} id='img11'>*/}
            {/*  {size(11)}*/}
            {/*</div>*/}
            <figure>
              <div style={{ height: "315px" }}>
                {/*<img src={require("../image/vynnytsya2.jpg")} className={"base"} id="img11" />*/}
                <img src={(`/static/media/${data[29].src}.${data[29].src2}`)} className={"base"} id="img11" />
                {size(11)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[29].nameOfGoods}</h5>
            <p className={s.itemDesc}>Desc</p>
            <div>
              <input className={data[29].size > 0 ? s.check2 : s.check} checked={data[29].checked}
                     type="radio" name="pina" title={data[29].nameOfGoods} onChange={clickNacr} />
              {selectName(29)}
            </div>
            {boxButWithCheck(29)}
          </div>
        </div>

      </div>
    </main>
  </>;
};

export default Nacr;