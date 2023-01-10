import React, { useState } from "react";
import s from "../component/Home.module.css";
import './Obl.css'
import image1 from "../image/svg/Fullscreenicon.svg";
import image2 from "../image/svg/Group31.svg";


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
    console.log(userOrder);
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

  const selectName = (number) => {
    return (
      data[number].size > 0
        ? <span className={s.inputTextGreen}>{t("selected")}</span>
        : <span className={s.inputText}>{t("chooseThisTypeOfCover")}</span>
    )
  }

  const size = (num) => {
    return (
      window.screen.width > 900 ? <span className="block">
        <img style={{width: '35px'}} src={image1} onClick={imgSize} id={`img${num}`}/>
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
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/0_02_0a_4441a50b7f71d56d8223346d30daca1e623cd86a3a5c0234e5ed10c4dce9c140.jpg")} className={"base"} id="img3" />
              {size(3)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[0].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(0) }
        </div>
      </div>

      <div className={s.container}>     {/*  with check  */}
        <div className={s.boxOne}>
          {/*<img src={image1} className={s.img} />*/}
          {/*<div className={"img4 base"} id="img4">*/}
          {/*  {size(4)}*/}
          {/*</div>*/}
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/4RAV4(none).jpg")} className={"base"} id="img4" />
              {size(4)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[6].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          <div>
            <input className={data[6].size > 0 ? s.check2 : s.check}
                   type="radio" name="pina" title={data[6].nameOfGoods} onChange={clickPina}
                   checked={data[6].checked} />
            {selectName(6)}
          </div>
          { boxButWithCheck(6) }
        </div>
      </div>

      <div className={s.container}>   {/*  with check  */}
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/244538142_1063353097750478_5474927411768411711_n(1).jpg")} className={"base"} id="img5" />
              {size(5)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[7].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          <div>
            <input className={data[7].size > 0 ? s.check2 : s.check}
                   type="radio" name="pina" title={data[7].nameOfGoods} onChange={clickPina} checked={data[7].checked} />
            { selectName(7) }
          </div>
          { boxButWithCheck(7) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/vynnytsya4.jpg")} className={"base"} id="img1" />
              {size(1)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[8].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(8) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/Share2015_03_24_2dc90332b70c75a404dbce5f80b15297e23f4aca4c1b687.jpg")} className={"base"} id="img2" />
              {size(2)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[9].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(9) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/33(1).jpg")} className={"base"} id="img16" />
              {size(16)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[10].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(10) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/selfservicecarwash_2(2).jpg")} className={"base"} id="img17" />
              {size(17)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[11].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(11) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/190287494_104260661860718_4702299049689622091_n.jpg")} className={"base"} id="img18" />
              {size(18)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[12].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(12) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/244398001_1063353077750480_6075659314078428638_n.jpg")} className={"base"} id="img19" />
              {size(19)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[14].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(14) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/244538142_1063353097750478_5474927411768411711_n.jpg")} className={"base"} id="img20" />
              {size(20)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[15].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(15) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/BX_3.jpg")} className={"base"} id="img21" />
              {size(21)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[16].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(16) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/bank(1).jpg")} className={"base"} id="img22" />
              {size(22)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[17].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(17) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/trafficLights.jpg")} className={"base"} id="img23" />
              {size(23)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[18].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(18) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/Fura_1.jpg")} className={"base"} id="img24" />
              {size(24)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[19].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(19) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/Fura_3(2).jpg")} className={"base"} id="img25" />
              {size(25)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[20].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(20) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/OSMOSISINSTALLATION.jpg")} className={"base"} id="img26" />
              {size(26)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[21].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(21) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/Hust_1(2).jpg")} className={"base"} id="img27" />
              {size(27)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[22].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(22) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{height: '315px'}}>
              <img src={require("../image/IMG_0332(1).jpg")} className={"base"} id="img36" />
              {size(36)}
            </div>
          </figure>
          <h5 className={s.itemName}>{data[41].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(41) }
        </div>
      </div>

    </div>
  </>;
};

export default Obl;


{/*{*/}
{/*  data[6].size > 0*/}
{/*  ? <span className={s.inputTextGreen}>{t("selected")}</span>*/}
{/*  : <span className={s.inputText}>{t("chooseThisTypeOfCover")}</span>*/}
{/*}*/}

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