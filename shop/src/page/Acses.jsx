import React, { useState } from "react";
import s from "../component/Home.module.css";
import "./Obl.css";


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
    if (window.screen.availWidth > 600) {
      let size = e.target.id.slice(3);
      let g = document.getElementById(e.target.id);
      if (g.className == `${e.target.id} base`) {
        let con = document.getElementById("light");
        con.style.visibility = "visible";
        let twoImg = document.getElementById("lightCol");
        twoImg.className = `${e.target.id}_2`;
      } else {
        let con = document.getElementById("light");
        con.style.visibility = "hidden";
      }
    }
  };

  const hidden = (e) => {
    if (e.target.id === "light") {
      let con = document.getElementById("light");
      con.style.visibility = "hidden";
    }
  };

  const size = (num) => {
    return(
      window.screen.width > 900 ? <span className={s.block} onClick={imgSize} id={`img${num}`}></span> : ''
    )
  }

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
      <div className={""} id="lightCol">
        <span className={s.blockLarge} onClick={imgSize} id="lightCol"></span>
      </div>
    </div>

    <div className={s.divBox}>
      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img12 base"} id="img12">
            {size(12)}
          </div>
          <h5 className={s.itemName}>{data[30].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(30) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img13 base"} id="img13">
            {size(13)}
          </div>
          <h5 className={s.itemName}>{data[31].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(31) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img14 base"} id="img14">
            {size(14)}
          </div>
          <h5 className={s.itemName}>{data[32].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(32) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img15 base"} id="img15">
            {size(15)}
          </div>
          <h5 className={s.itemName}>{data[33].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(33) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img28 base"} id="img28">
            {size(28)}
          </div>
          <h5 className={s.itemName}>{data[34].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(34) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img29 base"} id="img29">
            {size(29)}
          </div>
          <h5 className={s.itemName}>{data[35].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(35) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img30 base"} id="img30">
            {size(30)}
          </div>
          <h5 className={s.itemName}>{data[36].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(36) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img31 base"} id="img31">
            {size(31)}
          </div>
          <h5 className={s.itemName}>{data[37].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(37) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img32 base"} id="img32">
            {size(32)}
          </div>
          <h5 className={s.itemName}>{data[38].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(38) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img33 base"} id="img33">
            {size(33)}
          </div>
          <h5 className={s.itemName}>{data[39].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(39) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img35 base"} id="img35">
            {size(35)}
          </div>
          <h5 className={s.itemName}>{data[40].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(40) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img37 base"} id="img37">
            {size(37)}
          </div>
          <h5 className={s.itemName}>{data[42].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(42) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img38 base"} id="img38">
            {size(38)}
          </div>
          <h5 className={s.itemName}>{data[43].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(43) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img39 base"} id="img39">
            {size(39)}
          </div>
          <h5 className={s.itemName}>{data[44].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(44) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img40 base"} id="img40">
            {size(40)}
          </div>
          <h5 className={s.itemName}>{data[45].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(45) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img41 base"} id="img41">
            {size(41)}
          </div>
          <h5 className={s.itemName}>{data[46].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(46) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img42 base"} id="img42">
            {size(42)}
          </div>
          <h5 className={s.itemName}>{data[47].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(47) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img43 base"} id="img43">
            {size(43)}
          </div>
          <h5 className={s.itemName}>{data[48].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(48) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img44 base"} id="img44">
            {size(44)}
          </div>
          <h5 className={s.itemName}>{data[49].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(49) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img45 base"} id="img45">
            {size(45)}
          </div>
          <h5 className={s.itemName}>{data[50].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(50) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img46 base"} id="img46">
            {size(46)}
          </div>
          <h5 className={s.itemName}>{data[51].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(51) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img47 base"} id="img47">
            {size(47)}
          </div>
          <h5 className={s.itemName}>{data[52].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(52) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img48 base"} id="img48">
            {size(48)}
          </div>
          <h5 className={s.itemName}>{data[53].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(53) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={"img49 base"} id="img49">
            {size(49)}
          </div>
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