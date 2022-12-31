import React, { useState } from "react";
import s from "../Home.module.css";


const Nacr = ({ data, userOrder, setTotal, total }) => {

  const [pina, setPina] = useState();

  const clickNacr = (e) => {
    data.forEach(item => {
      if (item.nameOfGoods === e.target.title) {
        setPina(item);
        userOrder.forEach((el, index) => {
          if (item === el) {
            userOrder.splice(index, 1);
          }
        });
        userOrder.forEach((el, index) => {
          if (el === data[23] || el === data[24] || el === data[25] || el === data[26] || el === data[27] || el === data[28]) {
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
      }
    });
  };

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
          <div className={s.img2}></div>
          <h5 className={s.itemName}>{data[23].nameOfGoods}</h5>
          <p className={s.itemDesc}>Desc</p>
          <div>
            <input className={pina?.nameOfGoods === data[23].nameOfGoods ? s.check2 : s.check}
                   type="radio" name="pina" title={data[23].nameOfGoods} onClick={clickNacr} />
            {
              pina?.nameOfGoods === data[23].nameOfGoods
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
          <div className={s.img2}></div>
          <h5 className={s.itemName}>{data[24].nameOfGoods}</h5>
          <p className={s.itemDesc}>Desc</p>
          <div>
            <input className={pina?.nameOfGoods === data[24].nameOfGoods ? s.check2 : s.check}
                   type="radio" name="pina" title={data[24].nameOfGoods} onClick={clickNacr} />
            {
              pina?.nameOfGoods === data[24].nameOfGoods
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
          <div className={s.img2}></div>
          <h5 className={s.itemName}>{data[25].nameOfGoods}</h5>
          <p className={s.itemDesc}>Desc</p>
          <div>
            <input className={pina?.nameOfGoods === data[25].nameOfGoods ? s.check2 : s.check}
                   type="radio" name="pina" title={data[25].nameOfGoods} onClick={clickNacr} />
            {
              pina?.nameOfGoods === data[25].nameOfGoods
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
          <div className={s.img2}></div>
          <h5 className={s.itemName}>{data[26].nameOfGoods}</h5>
          <p className={s.itemDesc}>Desc</p>
          <div>
            <input className={pina?.nameOfGoods === data[26].nameOfGoods ? s.check2 : s.check}
                   type="radio" name="pina" title={data[26].nameOfGoods} onClick={clickNacr} />
            {
              pina?.nameOfGoods === data[26].nameOfGoods
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
          <div className={s.img2}></div>
          <h5 className={s.itemName}>{data[27].nameOfGoods}</h5>
          <p className={s.itemDesc}>Desc</p>
          <div>
            <input className={pina?.nameOfGoods === data[27].nameOfGoods ? s.check2 : s.check}
                   type="radio" name="pina" title={data[27].nameOfGoods} onClick={clickNacr} />
            {
              pina?.nameOfGoods === data[27].nameOfGoods
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
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={s.img2}></div>
          <h5 className={s.itemName}>{data[28].nameOfGoods}</h5>
          <p className={s.itemDesc}>Desc</p>
          <div>
            <input className={pina?.nameOfGoods === data[28].nameOfGoods ? s.check2 : s.check}
                   type="radio" name="pina" title={data[28].nameOfGoods} onClick={clickNacr} />
            {
              pina?.nameOfGoods === data[28].nameOfGoods
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
    </div>
  </>;
};

export default Nacr;
