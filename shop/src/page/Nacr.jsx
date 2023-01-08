import React, { useState } from "react";
import s from "../component/Home.module.css";
import './Obl.css'


const Nacr = ({ t, data, userOrder, setTotal, total }) => {

  const [pina, setPina] = useState();

  const clickNacr = (e) => {
    data.forEach(item => {
      item.checked = false
      if (item.nameOfGoods === e.target.title) {
        setPina(item);
        userOrder.forEach((el, index) => {
          if (item === el) {
            userOrder.splice(index, 1);
          }
        });
        userOrder.forEach((el, index) => {
          if (el.nameOfGoods === data[23].nameOfGoods || el.nameOfGoods  === data[24].nameOfGoods  || el.nameOfGoods  === data[25].nameOfGoods
            || el.nameOfGoods  === data[26].nameOfGoods  || el.nameOfGoods  === data[27].nameOfGoods  ||
            el.nameOfGoods  === data[28].nameOfGoods || el.nameOfGoods  === data[29].nameOfGoods ) {
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
        item.checked = true
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
            item.checked = false
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
    if(window.screen.availWidth > 600) {
      let size = e.target.id.slice(3)
      let g = document.getElementById(e.target.id)
      if (g.className == `${e.target.id} base`) {
        let con = document.getElementById("light");
        con.style.visibility = "visible";
        let twoImg = document.getElementById("lightCol");
        twoImg.className = `${e.target.id}_2`
      } else {
        let con = document.getElementById("light");
        con.style.visibility = "hidden";
      }
    }
  }

  const hidden = (e) => {
    if(e.target.id === 'light'){
      let con = document.getElementById("light");
      con.style.visibility = "hidden";
    }
  }

  const selectName = (number) => {
    return (
      data[number].size > 0
        ? <span className={s.inputTextGreen}>{t("selected")}</span>
        : <span className={s.inputText}>{t("chooseThisTypeOfCover")}</span>
    )
  }

  const size = (num) => {
    return(
      window.screen.width > 900 ? <span className={s.block} onClick={imgSize} id={`img${num}`}></span> : ''
    )
  }

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
          <div className={'img6 base'} id='img6'>
            {/*{window.screen.width > 900 ? <span className={s.block} onClick={imgSize} id='img6'></span> : ''}*/}
            {size(6)}
          </div>
          <h5 className={s.itemName}>{data[23].nameOfGoods}</h5>
          <p className={s.itemDesc}>Desc</p>
          <div>
            <input className={data[23].size > 0 ? s.check2 : s.check} checked={data[23].checked}
                   type="radio" name="pina" title={data[23].nameOfGoods} onChange={clickNacr} />
            {/*{*/}
            {/*  pina?.nameOfGoods === data[23].nameOfGoods*/}
            {/*    ? <span className={s.inputTextGreen}>Вибрано</span>*/}
            {/*    : <span className={s.inputText}>Вибрати цей тип накриття</span>*/}
            {/*}*/}
            {/*{*/}
            {/*  data[23].size > 0*/}
            {/*    ? <span className={s.inputTextGreen}>{t("selected")}</span>*/}
            {/*    : <span className={s.inputText}>{t("chooseThisTypeOfCover")}</span>*/}
            {/*}*/}
            {
              selectName(23)
            }
          </div>
          {/*<div className={s.divBut}>*/}
          {/*  <div>*/}
          {/*    <button className={s.butMin}>*/}
          {/*      <span onClick={minesCount} title={data[23].nameOfGoods} className={s.spanMin}>-</span>*/}
          {/*    </button>*/}
          {/*    <span className={s.itemTotalSize} id="lightblue">{data[23].size}</span>*/}
          {/*    <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>*/}
          {/*      <span onClick={addCount} title={data[23].nameOfGoods} className={s.spanAdd}>+</span>*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*  <span className={s.itemTotal} style={{ padding: 10 + "px" }}>{data[23].total} грн</span>*/}
          {/*</div>*/}
          { boxButWithCheck(23) }
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={'img7 base'} id='img7'>
            {size(7)}
          </div>
          <h5 className={s.itemName}>{data[24].nameOfGoods}</h5>
          <p className={s.itemDesc}>Desc</p>
          <div>
            <input className={data[24].size > 0 ? s.check2 : s.check} checked={data[24].checked}
                   type="radio" name="pina" title={data[24].nameOfGoods} onChange={clickNacr} />
            {
              selectName(24)
            }
          </div>
          { boxButWithCheck(24) }
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={'img8 base'} id='img8'>
            {size(8)}
          </div>
          <h5 className={s.itemName}>{data[25].nameOfGoods}</h5>
          <p className={s.itemDesc}>Desc</p>
          <div>
            <input className={data[25].size > 0 ? s.check2 : s.check} checked={data[25].checked}
                   type="radio" name="pina" title={data[25].nameOfGoods} onChange={clickNacr} />
            {
              selectName(25)
            }
          </div>
          { boxButWithCheck(25) }
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={'img9 base'} id='img9'>
            {size(9)}
          </div>
          <h5 className={s.itemName}>{data[26].nameOfGoods}</h5>
          <p className={s.itemDesc}>Desc</p>
          <div>
            <input className={data[26].size > 0 ? s.check2 : s.check} checked={data[26].checked}
                   type="radio" name="pina" title={data[26].nameOfGoods} onChange={clickNacr} />
            {
              selectName(26)
            }
          </div>
          { boxButWithCheck(26) }
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={'img10 base'} id='img10'>
            {size(10)}
          </div>
          <h5 className={s.itemName}>{data[27].nameOfGoods}</h5>
          <p className={s.itemDesc}>Desc</p>
          <div>
            <input className={data[27].size > 0 ? s.check2 : s.check} checked={data[27].checked}
                   type="radio" name="pina" title={data[27].nameOfGoods} onChange={clickNacr} />
            {
              selectName(27)
            }
          </div>
          { boxButWithCheck(27) }
        </div>
      </div><div className={s.container}>
        <div className={s.boxOne}>
          <div className={'img10 base'} id='img10'>
            {size(10)}
          </div>
          <h5 className={s.itemName}>{data[28].nameOfGoods}</h5>
          <p className={s.itemDesc}>Desc</p>
          <div>
            <input className={data[28].size > 0 ? s.check2 : s.check} checked={data[28].checked}
                   type="radio" name="pina" title={data[28].nameOfGoods} onChange={clickNacr} />
            {
              selectName(28)
            }
          </div>
          { boxButWithCheck(28) }
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={'img11 base'} id='img11'>
            {size(11)}
          </div>
          <h5 className={s.itemName}>{data[29].nameOfGoods}</h5>
          <p className={s.itemDesc}>Desc</p>
          <div>
            <input className={data[29].size > 0 ? s.check2 : s.check} checked={data[29].checked}
                   type="radio" name="pina" title={data[29].nameOfGoods} onChange={clickNacr} />
            {
              selectName(29)
            }
          </div>
          { boxButWithCheck(29) }
        </div>
      </div>
    </div>
  </>;
};

export default Nacr;