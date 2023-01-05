import React, { useState } from "react";
import s from "../Home.module.css";
import './Obl.css'


const Obl = ({ data, userOrder, setTotal, total }) => {

  const [pina, setPina] = useState();

  const addCount = (e) => {
    data.forEach(item => {
      if (item.nameOfGoods === e.target.title) {
        userOrder.forEach((el, index) => {
          if (item === el) {
            userOrder.splice(index, 1);
          }
        });
        userOrder.forEach((el, index) => {
          if (el === data[7] || el === data[6]) {
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

  const clickPina = (e) => {
    data.forEach(item => {
      item.checked = false
      if (item.nameOfGoods === e.target.title) {
        setPina(item);
        userOrder.forEach((el, index) => {
          if (item === el) {
            userOrder.splice(index, 1);
          }
        });
        if (pina?.nameOfGoods === data[6].nameOfGoods) {
          userOrder.forEach((el, index) => {
            if (data[6] === el) {
              userOrder.splice(index, 1);
              if (el.size > 0) {
                // setTotal((actual) => actual - el.total)
                setTotal(total - el.total);
              }
              el.size = 0;
              el.total = el.prise;
            }
          });
        } else if (pina?.nameOfGoods === data[7].nameOfGoods) {
          userOrder.forEach((el, index) => {
            if (data[7] === el) {
              userOrder.splice(index, 1);
              if (el.size > 0) {
                // setTotal((actual) => actual - el.total)
                setTotal(total - el.total);
                el.size = 0;
                el.total = el.prise;
              }
            }
          });
        }
        // setTotal((actual) => actual + item.prise)
        userOrder.push(item);
        item.checked = true
      }
    });
  };

  const imgSize = (e) => {
    // let types = e.target.title.slice(4)
    if(window.screen.availWidth > 600){
      let size = e.target.id.slice(3)
      let g = document.getElementById(e.target.id)
      if(g.className == `${e.target.id} base`){
        let con = document.getElementById("light");
        con.style.visibility = "visible";
        let twoImg = document.getElementById("lightCol");
        twoImg.className = `${e.target.id}_2`
        window.scroll(0, 0);
        window.addEventListener("scroll", window.scroll(0, 0));
        // g.className = `${e.target.id}_2`
      } else {
        let con = document.getElementById("light");
        con.style.visibility = "hidden";
        // g.className = `${e.target.id} base`
        // let twoImg = document.getElementById("lightCol");
        // con.className = ''
      }
    }
  }

  return <>
    <div id="light" className={s.boxHideImage}>
      <div className={""} id="lightCol" onClick={imgSize}></div>
    </div>
    <div className={s.divBox}>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div className={"img3 base"} id="img3">
              {window.screen.width > 600 ? <span className={s.block} onClick={imgSize} id='img3'></span> : ''}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[0].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          <div className={s.divBut}>
            <div style={{ padding: 10 + "px", margin: "20px 15px" }}>
              <button className={s.butMin}>
                <span onClick={minesCount} title={data[0].nameOfGoods} className={s.spanMin}>-</span>
              </button>
              <span className={s.itemTotalSize} id="lightblue">{data[0].size}</span>
              <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
                <span onClick={addCount} title={data[0].nameOfGoods} className={s.spanAdd}>+</span>
              </button>
            </div>
            <span className={s.itemTotal}>{data[0].total} грн</span>
          </div>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          {/*<img src={image1} className={s.img} />*/}
          <div className={'img4 base'} id='img4'>
            {window.screen.width > 600 ? <span className={s.block} onClick={imgSize} id='img4'></span> : ''}
          </div>
          <h5 className={s.itemName}>{data[6].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          <div>
            <input className={data[6].size > 0 ? s.check2 : s.check}
                   type="radio" name="pina" title={data[6].nameOfGoods} onChange={clickPina} checked={data[6].checked}/>
            {/*{*/}
            {/*  pina?.nameOfGoods === data[6].nameOfGoods*/}
            {/*    ? <span className={s.inputTextGreen}>Вибрано</span>*/}
            {/*    : <span className={s.inputText}>Вибрати цей тип накриття</span>*/}
            {/*}*/}
            {
              data[6].size > 0
              ? <span className={s.inputTextGreen}>Вибрано</span>
              : <span className={s.inputText}>Вибрати цей тип накриття</span>
            }
          </div>
          <div className={s.divBut}>
            <div>
              <button className={s.butMin}>
                <span onClick={minesCount} title={data[6].nameOfGoods} className={s.spanMin}>-</span>
              </button>
              <span className={s.itemTotalSize} id="lightblue">{data[6].size}</span>
              <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
                <span onClick={addCount} title={data[6].nameOfGoods} className={s.spanAdd}>+</span>
              </button>
            </div>
            <span className={s.itemTotal} style={{ padding: 10 + "px" }}>{data[6].total} грн</span>
          </div>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          {/*<img src={image1} className={s.img} />*/}
          <div className={'img5 base'} id='img5'>
            {window.screen.width > 600 ? <span className={s.block} onClick={imgSize} id='img5'></span> : ''}
          </div>
          <h5 className={s.itemName}>{data[7].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          <div>
            <input className={data[7].size > 0 ? s.check2 : s.check}
                   type="radio" name="pina" title={data[7].nameOfGoods} onChange={clickPina} checked={data[7].checked} />
            {
              data[7].size > 0
                ? <span className={s.inputTextGreen}>Вибрано</span>
                : <span className={s.inputText}>Вибрати цей тип накриття</span>
            }
          </div>
          <div className={s.divBut}>
            <div>
              <button className={s.butMin}>
                <span onClick={minesCount} title={data[7].nameOfGoods} className={s.spanMin}>-</span>
              </button>
              <span className={s.itemTotalSize} id="lightblue">{data[7].size}</span>
              <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
                <span onClick={addCount} title={data[7].nameOfGoods} className={s.spanAdd}>+</span>
              </button>
            </div>
            <span className={s.itemTotal} style={{ padding: 10 + "px" }}>{data[7].total} грн</span>
          </div>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          {/*<img src='image/ЩІТКА (1).jpg' className={s.img} />*/}
          <div className={'img1 base'} id='img1'>
            {window.screen.width > 600 ? <span className={s.block} onClick={imgSize} id='img1'></span> : ''}
          </div>
          <h5 className={s.itemName}>{data[8].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          <div className={s.divBut}>
            <div style={{ padding: 10 + "px", margin: "20px 15px" }}>
              <button className={s.butMin}>
                <span onClick={minesCount} title={data[8].nameOfGoods} className={s.spanMin}>-</span>
              </button>
              <span className={s.itemTotalSize} id="lightblue">{data[8].size}</span>
              <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
                <span onClick={addCount} title={data[8].nameOfGoods} className={s.spanAdd}>+</span>
              </button>
            </div>
            <span className={s.itemTotal} style={{ padding: 10 + "px" }}>{data[8].total} грн</span>
          </div>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxOne}>
          {/*<img src='image/ЩІТКА (1).jpg' className={s.img} />*/}
          <div className={'img2 base'} id='img2'>
            {window.screen.width > 600 ? <span className={s.block} onClick={imgSize} id='img2'></span> : ''}
          </div>
          <h5 className={s.itemName}>{data[9].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          <div className={s.divBut}>
            <div style={{ padding: 10 + "px", margin: "20px 15px" }}>
              <button className={s.butMin}>
                <span onClick={minesCount} title={data[9].nameOfGoods} className={s.spanMin}>-</span>
              </button>
              <span className={s.itemTotalSize} id="lightblue">{data[9].size}</span>
              <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
                <span onClick={addCount} title={data[9].nameOfGoods} className={s.spanAdd}>+</span>
              </button>
            </div>
            <span className={s.itemTotal} style={{ padding: 10 + "px" }}>{data[9].total} грн</span>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default Obl;