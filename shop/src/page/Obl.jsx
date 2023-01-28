import React, { useState } from "react";
import s from "../component/Home.module.css";
import "./Obl.css";
import image1 from "../image/svg/Fullscreenicon.svg";
import image2 from "../image/svg/Group31.svg";
import Breadcrumbs from "../Breadcrumbs";


const Obl = ({ t, data, userOrder, setTotal, total }) => {

  const [pina, setPina] = useState();

  const addCount = (e) => {
    data.forEach(item => {
      if (item.nameOfGoods === e.target.title) {
        setPina(item);
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

  const addCountCheck = (e) => {
    data.forEach(item => {
      if (item.nameOfGoods === e.target.title) {
        setPina(item);
        userOrder.forEach((el, index) => {
          if (item === el) {
            userOrder.splice(index, 1);
          }
        });
        if (pina?.nameOfGoods === data[7].nameOfGoods || pina?.nameOfGoods === data[6].nameOfGoods) {
          userOrder.forEach((el, index) => {
            if (data[6] === el || data[7] === el) {
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

  const clickPina = (e) => {
    data.forEach(item => {
      item.checked = false;
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
        item.checked = true;
      }
    });
    console.log(userOrder);
  };

  const imgSize = (e) => {
    let twoImg = document.getElementById("lightCol");
    twoImg.src = "";
    if (window.screen.availWidth > 900) {
      let g = document.getElementById(e.target.id);
      // let a = g.src.substring(35, g.src.length - 3) + "webp";
      // let x = "/static/media/" + a;
      if (g.src.slice(-3) === "jpg") {
        let con = document.getElementById("light");
        con.style.visibility = "visible";
        let twoImg = document.getElementById("lightCol");
        // twoImg.src = "/static/media/" + a
        twoImg.src = g.src;
      } else if (g.src.slice(-4) === "jpeg") {
        let con = document.getElementById("light");
        con.style.visibility = "visible";
        let twoImg = document.getElementById("lightCol");
        // twoImg.src = "/static/media/" + a
        twoImg.src = g.src;
      } else {
        let con = document.getElementById("light2");
        con.style.visibility = "visible";
        let twoImg = document.getElementById("lightCol2");
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

  const hidden2 = (e) => {
    if (e.target.id === "light2") {
      let con = document.getElementById("light2");
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
            <span onClick={addCountCheck} title={data[num].nameOfGoods} className={s.spanAdd}>+</span>
          </button>
        </div>
        <span className={s.itemTotal} style={{ padding: 10 + "px" }}>{data[num].total} грн</span>
      </div>
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
    );
  };

  // const container = (nameImg, nameGoods, size, boxBut) => {
  //
  //   console.log(userOrder);
  //   return (
  //     <div className={s.container}>
  //       <div className={s.boxOne}>
  //         <figure>
  //           <div className={`img${nameImg} base`} id={`img${nameImg}`}>
  //             { window.screen.width > 900 ? <span className={s.block} onClick={imgSize} id={`img${size}`}></span> : '' }
  //           </div>
  //         </figure>
  //         <h5 className={s.itemName}>{data[nameGoods].nameOfGoods}</h5>
  //         <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
  //           and typesetting industry. Lorem Ipsum has been the industry's standard</p>
  //         <div className={s.divBut}>
  //           <div style={{ padding: 10 + "px", margin: "20px 15px" }}>
  //             <button className={s.butMin}>
  //               <span onClick={minesCount} title={data[boxBut].nameOfGoods} className={s.spanMin}>-</span>
  //             </button>
  //             <span className={s.itemTotalSize} id="lightblue">{data[boxBut].size}</span>
  //             <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
  //               <span onClick={addCount} title={data[boxBut].nameOfGoods} className={s.spanAdd}>+</span>
  //             </button>
  //           </div>
  //           <span className={s.itemTotal}>{data[boxBut].total} грн</span>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

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
    <div id="light2" className={s.boxHideImage} onClick={hidden2}>
      <figure className="figure">
        <div className="divImg">
            <span className="blockLarge" id="light2">
              <img style={{ width: "35px" }} src={image2} onClick={hidden} id="light2" />
            </span>
          {/*<img src={''} className="imageLarge" id="lightCol" />*/}
          <iframe className="imageLarge2" id="lightCol2" width="100%" height='100%' src="https://www.youtube.com/embed/wvo65hmKvtA"/>
        </div>
      </figure>
    </div>

    <main>

      <div className={s.divBox}>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                {/*<img src={(`/static/media/${data[0].src}.${data[0].src2}`)} className={"base"} id="img3" />*/}
                <img src={require("../image2/teh4progandpausa.jpg")} className={"base"} id="img3" />
                {size(3)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[0].nameOfGoods}</h5>
            <p className={s.itemDesc}>Основне миття ГЕЛЕМ,
              ополіскування помякшеною водою,
              віск з осушенням,
              осмос для надання блиску,
              кнопка "Пауза" <br/>
              Система ANTIFROST TURBO ECO Електронна система управління Schneider Germany з 4х рівневою системою
              захисту для безперебійної роботи обладнання до -35 °С навіть при відсутності електроенергії чи
              водопостачання. Підключена система для економії води для системи antifrost до 90%.</p>
            {boxBut(0)}
          </div>
        </div>

        <div className={s.container}>     {/*  with check  */}
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                <iframe id="img4" width="100%" height='100%' src="https://www.youtube.com/embed/ENZjdyDPFos"/>
                {size(4)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[6].nameOfGoods}</h5>
            <p className={s.itemDesc}></p>
            <div>
              <input className={data[6].size > 0 ? s.check2 : s.check}
                     type="radio" name="pina" title={data[6].nameOfGoods} onChange={clickPina}
                     checked={data[6].checked} />
              {selectName(6)}
            </div>
            {boxButWithCheck(6)}
          </div>
        </div>

        <div className={s.container}>   {/*  with check  */}
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                <iframe id="img5" width="100%" height='100%' src="https://www.youtube.com/embed/ENZjdyDPFos"/>
                {size(5)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[7].nameOfGoods}</h5>
            <p className={s.itemDesc}></p>
            <div>
              <input className={data[7].size > 0 ? s.check2 : s.check}
                     type="radio" name="pina" title={data[7].nameOfGoods} onChange={clickPina}
                     checked={data[7].checked} />
              {selectName(7)}
            </div>
            {boxButWithCheck(7)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                <img src={require("../image2/Brush.jpg")} className={"base"} id="img1" />
                {/*<img src={(`/static/media/${data[8].src}.${data[8].src2}`)} className={"base"} id="img1" />*/}
                {size(1)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[8].nameOfGoods}</h5>
            <p className={s.itemDesc}></p>
            {boxBut(8)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                <img src={require("../image2/turboBrush.jpg")} className={"base"} id="img2" />
                {/*<img src={(`/static/media/${data[9].src}.${data[9].src2}`)} className={"base"} id="img2" />*/}
                {size(2)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[9].nameOfGoods}</h5>
            <p className={s.itemDesc}></p>
            {boxBut(9)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                <img src={require("../image2/Fura_1.jpg")} className={"base"} id="img16" />
                {/*<img src={(`/static/media/${data[10].src}.${data[10].src2}`)} className={"base"} id="img16" />*/}
                {size(16)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[10].nameOfGoods}</h5>
            <p className={s.itemDesc}></p>
            {boxBut(10)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                <img src={require("../image2/Fura_3.jpg")} className={"base"} id="img17" />
                {/*<img src={(`/static/media/${data[11].src}.${data[11].src2}`)} className={"base"} id="img17" />*/}
                {size(17)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[11].nameOfGoods}</h5>
            <p className={s.itemDesc}></p>
            {boxBut(11)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                <img src={require("../image/190287494_104260661860718_4702299049689622091_n.jpg")} className={"base"} id="img18" />
                {/*<img src={(`/static/media/${data[12].src}.${data[12].src2}`)} className={"base"} id="img18" />*/}
                {size(18)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[12].nameOfGoods}</h5>
            <p className={s.itemDesc}></p>
            {boxBut(12)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                <img src={require("../image2/chastPer.jpg")} className={"base"} id="img19" />
                {/*<img src={(`/static/media/${data[14].src}.${data[14].src2}`)} className={"base"} id="img19" />*/}
                {size(19)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[14].nameOfGoods}</h5>
            <p className={s.itemDesc}></p>
            {boxBut(14)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                <img src={require("../image2/kasa.jpeg")} className={"base"} id="img20" />
                {/*<img src={(`/static/media/${data[15].src}.${data[15].src2}`)} className={"base"} id="img20" />*/}
                {size(20)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[15].nameOfGoods}</h5>
            <p className={s.itemDesc}></p>
            {boxBut(15)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                <img src={require("../image2/aprrevcoin.jpeg")} className={"base"} id="img21" />
                {/*<img src={(`/static/media/${data[16].src}.${data[16].src2}`)} className={"base"} id="img21" />*/}
                {size(21)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[16].nameOfGoods}</h5>
            <p className={s.itemDesc}></p>
            {boxBut(16)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                <img src={require("../image2/siscorpost.jpg")} className={"base"} id="img22" />
                {/*<img src={(`/static/media/${data[17].src}.${data[17].src2}`)} className={"base"} id="img22" />*/}
                {size(22)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[17].nameOfGoods}</h5>
            <p className={s.itemDesc}></p>
            {boxBut(17)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                <img src={require("../image2/back.jpg")} className={"base"} id="img23" />
                {/*<img src={(`/static/media/${data[18].src}.${data[18].src2}`)} className={"base"} id="img23" />*/}
                {size(23)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[18].nameOfGoods}</h5>
            <p className={s.itemDesc}></p>
            {boxBut(18)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                <img src={require("../image2/termainal.jpg")} className={"base"} id="img24" />
                {/*<img src={(`/static/media/${data[19].src}.${data[19].src2}`)} className={"base"} id="img24" />*/}
                {size(24)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[19].nameOfGoods}</h5>
            <p className={s.itemDesc}></p>
            {boxBut(19)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                <img src={require("../image2/termainal.jpg")} className={"base"} id="img25" />
                {/*<img src={(`/static/media/${data[20].src}.${data[20].src2}`)} className={"base"} id="img25" />*/}
                {size(25)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[20].nameOfGoods}</h5>
            <p className={s.itemDesc}></p>
            {boxBut(20)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                <img src={require("../image2/back.jpg")} className={"base"} id="img26" />
                {/*<img src={(`/static/media/${data[21].src}.${data[21].src2}`)} className={"base"} id="img26" />*/}
                {size(26)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[21].nameOfGoods}</h5>
            <p className={s.itemDesc}></p>
            {boxBut(21)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                <img src={require("../image2/et1000.jpg")} className={"base"} id="img27" />
                {/*<img src={(`/static/media/${data[22].src}.${data[22].src2}`)} className={"base"} id="img27" />*/}
                {size(27)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[22].nameOfGoods}</h5>
            <p className={s.itemDesc}></p>
            {boxBut(22)}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.boxOne}>
            <figure>
              <div style={{ height: "315px" }}>
                <img src={require("../image2/Two-stationVthree-phaseVacuumcleaner.jpg")} className={"base"} id="img36" />
                {/*<img src={(`/static/media/${data[41].src}.${data[41].src2}`)} className={"base"} id="img36" />*/}
                {size(36)}
              </div>
            </figure>
            <h5 className={s.itemName}>{data[41].nameOfGoods}</h5>
            <p className={s.itemDesc}></p>
            {boxBut(41)}
          </div>
        </div>

      </div>
    </main>
  </>;
};

export default Obl;


{/*{*/
}
{/*  data[6].size > 0*/
}
{/*  ? <span className={s.inputTextGreen}>{t("selected")}</span>*/
}
{/*  : <span className={s.inputText}>{t("chooseThisTypeOfCover")}</span>*/
}
{/*}*/
}

// userOrder.forEach((el, index) => {
//   if (el.nameOfGoods === data[7].nameOfGoods || el.nameOfGoods === data[6].nameOfGoods) {
//     if(item.nameOfGoods === data[7].nameOfGoods || item.nameOfGoods === data[6].nameOfGoods){
//       if(el.size != 0){
//         setTotal(total - el.total)
//         el.total = el.prise
//         userOrder.splice(el, 1);
//       }
//       el.size = 0
//       el.checked = false
//     }
//   }})