import React, { useState } from "react";
import s from "../Home.module.css";
import './Obl.css'


const Nacr = ({ data, userOrder, setTotal, total }) => {

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
          if (el === data[23] || el === data[24] || el === data[25]
            || el === data[26] || el === data[27] || el === data[28]|| el === data[29]) {
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
        userOrder.forEach((el, index) => {
          if (item === el) {
            userOrder.splice(index, 1);
          }})
        userOrder.forEach((el, index) => {
          if (el === data[23] || el === data[24] || el === data[25] || el === data[26]
            || el === data[27] || el === data[28] || el === data[29]) {
            if(el.size != 0){
              setTotal(total - el.total)
              el.total = el.prise
            }
            el.size = 0
            el.checked = false
          }})
        item.checked = true
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
    let size = e.target.id.slice(3)
    let g = document.getElementById(e.target.id)
    if(g.className == `${e.target.id} base`){
      let con = document.getElementById("light");
      con.style.visibility = "visible";
      let twoImg = document.getElementById("lightCol");
      twoImg.className = `${e.target.id}_2`
      window.scroll(0, 0);
      window.addEventListener("scroll", window.scroll(0, 0));
    } else {
      let con = document.getElementById("light");
      con.style.visibility = "hidden";
    }
  }

  return <>
    <div className={s.divBox}>
      <div id="light" className={s.boxHideImage}>
        <div className={""} id="lightCol" onClick={imgSize}></div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={'img6 base'} id='img6' onClick={imgSize}></div>
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
            {
              data[23].size > 0
                ? <span className={s.inputTextGreen}>Вибрано</span>
                : <span className={s.inputText}>Вибрати цей тип накриття</span>
            }
          </div>
          <div className={s.divBut}>
            <div>
              <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
                <span onClick={addCount} title={data[23].nameOfGoods} className={s.spanAdd}>+</span>
              </button>
              <span className={s.itemTotalSize} id="lightblue">{data[23].size}</span>
              <button className={s.butMin}>
                <span onClick={minesCount} title={data[23].nameOfGoods} className={s.spanMin}>-</span>
              </button>
            </div>
            <span className={s.itemTotal} style={{ padding: 10 + "px" }}>{data[23].total} грн</span>
          </div>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={'img7 base'} id='img7' onClick={imgSize}></div>
          <h5 className={s.itemName}>{data[24].nameOfGoods}</h5>
          <p className={s.itemDesc}>Desc</p>
          <div>
            <input className={data[24].size > 0 ? s.check2 : s.check} checked={data[24].checked}
                   type="radio" name="pina" title={data[24].nameOfGoods} onChange={clickNacr} />
            {
              data[24].size > 0
                ? <span className={s.inputTextGreen}>Вибрано</span>
                : <span className={s.inputText}>Вибрати цей тип накриття</span>
            }
          </div>
          <div className={s.divBut}>
            <div>
              <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
                <span onClick={addCount} title={data[24].nameOfGoods} className={s.spanAdd}>+</span>
              </button>
              <span className={s.itemTotalSize} id="lightblue">{data[24].size}</span>
              <button className={s.butMin}>
                <span onClick={minesCount} title={data[24].nameOfGoods} className={s.spanMin}>-</span>
              </button>
            </div>
            <span className={s.itemTotal} style={{ padding: 10 + "px" }}>{data[24].total} грн</span>
          </div>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={'img8 base'} id='img8' onClick={imgSize}></div>
          <h5 className={s.itemName}>{data[25].nameOfGoods}</h5>
          <p className={s.itemDesc}>Desc</p>
          <div>
            <input className={data[25].size > 0 ? s.check2 : s.check} checked={data[25].checked}
                   type="radio" name="pina" title={data[25].nameOfGoods} onChange={clickNacr} />
            {
              data[25].size > 0
                ? <span className={s.inputTextGreen}>Вибрано</span>
                : <span className={s.inputText}>Вибрати цей тип накриття</span>
            }
          </div>
          <div className={s.divBut}>
            <div>
              <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
                <span onClick={addCount} title={data[25].nameOfGoods} className={s.spanAdd}>+</span>
              </button>
              <span className={s.itemTotalSize} id="lightblue">{data[25].size}</span>
              <button className={s.butMin}>
                <span onClick={minesCount} title={data[25].nameOfGoods} className={s.spanMin}>-</span>
              </button>
            </div>
            <span className={s.itemTotal} style={{ padding: 10 + "px" }}>{data[25].total} грн</span>
          </div>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={'img9 base'} id='img9' onClick={imgSize}></div>
          <h5 className={s.itemName}>{data[26].nameOfGoods}</h5>
          <p className={s.itemDesc}>Desc</p>
          <div>
            <input className={data[26].size > 0 ? s.check2 : s.check} checked={data[26].checked}
                   type="radio" name="pina" title={data[26].nameOfGoods} onChange={clickNacr} />
            {
              data[26].size > 0
                ? <span className={s.inputTextGreen}>Вибрано</span>
                : <span className={s.inputText}>Вибрати цей тип накриття</span>
            }
          </div>
          <div className={s.divBut}>
            <div>
              <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
                <span onClick={addCount} title={data[26].nameOfGoods} className={s.spanAdd}>+</span>
              </button>
              <span className={s.itemTotalSize} id="lightblue">{data[26].size}</span>
              <button className={s.butMin}>
                <span onClick={minesCount} title={data[26].nameOfGoods} className={s.spanMin}>-</span>
              </button>
            </div>
            <span className={s.itemTotal} style={{ padding: 10 + "px" }}>{data[26].total} грн</span>
          </div>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={'img10 base'} id='img10' onClick={imgSize}></div>
          <h5 className={s.itemName}>{data[27].nameOfGoods}</h5>
          <p className={s.itemDesc}>Desc</p>
          <div>
            <input className={data[27].size > 0 ? s.check2 : s.check} checked={data[27].checked}
                   type="radio" name="pina" title={data[27].nameOfGoods} onChange={clickNacr} />
            {
              data[27].size > 0
                ? <span className={s.inputTextGreen}>Вибрано</span>
                : <span className={s.inputText}>Вибрати цей тип накриття</span>
            }
          </div>
          <div className={s.divBut}>
            <div>
              <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
                <span onClick={addCount} title={data[27].nameOfGoods} className={s.spanAdd}>+</span>
              </button>
              <span className={s.itemTotalSize} id="lightblue">{data[27].size}</span>
              <button className={s.butMin}>
                <span onClick={minesCount} title={data[27].nameOfGoods} className={s.spanMin}>-</span>
              </button>
            </div>
            <span className={s.itemTotal} style={{ padding: 10 + "px" }}>{data[27].total} грн</span>
          </div>
        </div>
      </div><div className={s.container}>
        <div className={s.boxOne}>
          <div className={'img10 base'} id='img10' onClick={imgSize}></div>
          <h5 className={s.itemName}>{data[28].nameOfGoods}</h5>
          <p className={s.itemDesc}>Desc</p>
          <div>
            <input className={data[28].size > 0 ? s.check2 : s.check} checked={data[28].checked}
                   type="radio" name="pina" title={data[28].nameOfGoods} onChange={clickNacr} />
            {
              data[28].size > 0
                ? <span className={s.inputTextGreen}>Вибрано</span>
                : <span className={s.inputText}>Вибрати цей тип накриття</span>
            }
          </div>
          <div className={s.divBut}>
            <div>
              <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
                <span onClick={addCount} title={data[28].nameOfGoods} className={s.spanAdd}>+</span>
              </button>
              <span className={s.itemTotalSize} id="lightblue">{data[28].size}</span>
              <button className={s.butMin}>
                <span onClick={minesCount} title={data[28].nameOfGoods} className={s.spanMin}>-</span>
              </button>
            </div>
            <span className={s.itemTotal} style={{ padding: 10 + "px" }}>{data[28].total} грн</span>
          </div>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={'img11 base'} id='img11' onClick={imgSize}></div>
          <h5 className={s.itemName}>{data[29].nameOfGoods}</h5>
          <p className={s.itemDesc}>Desc</p>
          <div>
            <input className={data[29].size > 0 ? s.check2 : s.check} checked={data[29].checked}
                   type="radio" name="pina" title={data[29].nameOfGoods} onChange={clickNacr} />
            {
              data[29].size > 0
                ? <span className={s.inputTextGreen}>Вибрано</span>
                : <span className={s.inputText}>Вибрати цей тип накриття</span>
            }
          </div>
          <div className={s.divBut}>
            <div>
              <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
                <span onClick={addCount} title={data[29].nameOfGoods} className={s.spanAdd}>+</span>
              </button>
              <span className={s.itemTotalSize} id="lightblue">{data[29].size}</span>
              <button className={s.butMin}>
                <span onClick={minesCount} title={data[29].nameOfGoods} className={s.spanMin}>-</span>
              </button>
            </div>
            <span className={s.itemTotal} style={{ padding: 10 + "px" }}>{data[29].total} грн</span>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default Nacr;
