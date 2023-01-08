import React, { useState } from "react";
import s from "../component/Home.module.css";
import './Obl.css'


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
    console.log(userOrder);
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
      <div className={""} id="lightCol">
        <span className={s.blockLarge} onClick={imgSize} id="lightCol"></span>
      </div>
    </div>
    <div className={s.divBox}>

      <div className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div className={"img3 base"} id="img3">
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
          <div className={"img4 base"} id="img4">
            {size(4)}
          </div>
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
          <div className={'img5 base'} id='img5'>
            {size(5)}
          </div>
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
          <div className={'img1 base'} id='img1'>
            {size(1)}
          </div>
          <h5 className={s.itemName}>{data[8].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(8) }
        </div>
      </div>

      <div className={s.container}>
        <div className={s.boxOne}>
          <div className={'img2 base'} id='img2'>
            {size(2)}
          </div>
          <h5 className={s.itemName}>{data[9].nameOfGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          { boxBut(9) }
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