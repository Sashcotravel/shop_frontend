import React, { useEffect, useState } from "react";
import s from "../component/Home.module.css";
import "./Obl.css";
import image1 from "../image/svg/Fullscreenicon.svg";
import image2 from "../image/svg/Group31.svg";
import { LazyLoadImage, LazyLoadComponent } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";


const Nacr = ({ t, data, userOrder, setTotal, total, setUrl }) => {

  const [pina, setPina] = useState();
  const [color, setColor] = useState(false)
  const screen = window.screen.availWidth > 900

  useEffect(() => {
    window.scrollTo(0, 0);
    setUrl("cover")
  }, [])

  let lang = localStorage.i18nextLng

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
              if (el.size !== 0) {
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

  const imgSize = (e) => {
    if (window.screen.availWidth > 900) {
      let twoImg = document.getElementById("lightCol");
      twoImg.src = ''
      let g = document.getElementById(e.target.id);
      let con = document.getElementById("light");
      con.style.visibility = "visible";
      twoImg.src = g.src;
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
        <LazyLoadImage style={{ width: "35px", height: '35px' }} src={image1} onClick={imgSize} id={`img${num}`} alt='close'/>
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

  let activeStyle = {
    backgroundColor: "#DF4242",
    color: "#FFFFFF",
    border: "none"
  };

  const changeColor = () => {
    if(screen){
      if(window.scrollY >= 500) {setColor('comp')}
      else {setColor(false)}
    }

    if(!screen){
      if(window.scrollY >= 260) {setColor('mob')}
      else {setColor(false)}
    }
  }

  window.addEventListener('scroll', changeColor)


  return <>
    {screen && <div id="light" className={s.boxHideImage} onClick={hidden}>
      <figure className="figure" id="light">
        <div className="divImg" id="light">
            <span className="blockLarge" id="light">
              <img style={{ width: "35px", height: '35px'  }} src={image2} onClick={hidden} id="light" alt='close' />
            </span>
          <img src='' className="imageLarge" id="lightCol" />
        </div>
      </figure>
    </div>}

    <Helmet>
      <html lang={localStorage.i18nextLng} />
      <meta charSet="utf-8" />
      <title>{t("nacrTit")}</title>
      <meta name="description" content={t("nacrDesc")} />
    </Helmet>

    <main>

      <div className={`${s.divTitle} ${color === 'mob' ? s.styleUpManu : color === 'comp' ? s.styleUpManu2 : s.startPosition}`} >
        <div><NavLink style={({ isActive }) => isActive ? activeStyle : undefined}
                      className={s.spanTitle} to="/obladnannya">{t("equipment")}</NavLink></div>
        <div> <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                       to="/nakritya">{t("cover")}</NavLink></div>
        <div><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle+' '+s.spanTit2}
                      to="/vidkriti-box">{t("openBox")}</NavLink></div>
        <div><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                      to="/aksesyari">{t("accessories")}</NavLink></div>
        <div><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                      to="/budivnitstvo">{t("construction")}</NavLink></div>
        <div><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                      to="/documentacia">{t("documentation")}</NavLink></div>
      </div>

      <div className={s.divBox}>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <LazyLoadImage src={require("../image2/coverSMART.jpg")}
                                 className="base" id="img6" alt='SMART' loading='lazy'/>
                  {size(6)}
                </div>
              </figure>
              <p className={s.itemName}>{data[23].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              <div className={s.inputBoxR}>
                <input className={data[23].size > 0 ? s.check2 : s.check} checked={data[23].checked}
                       type="radio" name="pina" title={data[23].nameOfGoods} onChange={clickNacr} />
                {selectName(23)}
              </div>
              {boxButWithCheck(23)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <LazyLoadImage src={require("../image2/coverPIXEL.jpg")}
                                 className={"base"} id="img7" alt='PIXEL' loading='lazy'/>
                  {size(7)}
                </div>
              </figure>
              <p className={s.itemName}>{data[24].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              <div className={s.inputBoxR}>
                <input className={data[24].size > 0 ? s.check2 : s.check} checked={data[24].checked}
                       type="radio" name="pina" title={data[24].nameOfGoods} onChange={clickNacr} />
                {selectName(24)}
              </div>
              {boxButWithCheck(24)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <LazyLoadImage src={require("../image2/coverMARCO1.jpg")} className={"base"}
                                 id="img8" alt='MARCO 1 Banner' loading='lazy'/>
                  {size(8)}
                </div>
              </figure>
              <p className={s.itemName}>{data[25].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              <div className={s.inputBoxR}>
                <input className={data[25].size > 0 ? s.check2 : s.check} checked={data[25].checked}
                       type="radio" name="pina" title={data[25].nameOfGoods} onChange={clickNacr} />
                {selectName(25)}
              </div>
              {boxButWithCheck(25)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <LazyLoadImage src={require("../image2/coverMARCO.jpg")} className={"base"}
                       id="img9" alt=' MARCO 2 Glass' loading='lazy'/>
                  {size(9)}
                </div>
              </figure>
              <p className={s.itemName}>{data[26].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              <div className={s.inputBoxR}>
                <input className={data[26].size > 0 ? s.check2 : s.check} checked={data[26].checked}
                       type="radio" name="pina" title={data[26].nameOfGoods} onChange={clickNacr} />
                {selectName(26)}
              </div>
              {boxButWithCheck(26)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <LazyLoadImage src={require("../image2/coverMARCHELLO.jpg")} className={"base"}
                                 id="img10" alt='MARCHELLO' loading='lazy'/>
                  {size(10)}
                </div>
              </figure>
              <p className={s.itemName}>{data[27].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              <div className={s.inputBoxR}>
                <input className={data[27].size > 0 ? s.check2 : s.check} checked={data[27].checked}
                       type="radio" name="pina" title={data[27].nameOfGoods} onChange={clickNacr} />
                {
                  selectName(27)
                }
              </div>
              {boxButWithCheck(27)}
            </div>

          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <img src={require("../image2/coverMARCHELLight.jpg")} className={"base"}
                       id="img60" alt='MARCHELLO Light' loading='lazy'/>
                  {size(60)}
                </div>
              </figure>
              <p className={s.itemName}>{data[28].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              <div className={s.inputBoxR}>
                <input className={data[28].size > 0 ? s.check2 : s.check} checked={data[28].checked}
                       type="radio" name="pina" title={data[28].nameOfGoods} onChange={clickNacr} />
                {selectName(28)}
              </div>
              {boxButWithCheck(28)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <LazyLoadImage src={require("../image2/karkasUfo.jpg")} className={"base"}
                                 id="img11" alt='UFO' loading='lazy'/>
                  {size(11)}
                </div>
              </figure>
              <p className={s.itemName}>{data[29].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              <div className={s.inputBoxR}>
                <input className={data[29].size > 0 ? s.check2 : s.check} checked={data[29].checked}
                       type="radio" name="pina" title={data[29].nameOfGoods} onChange={clickNacr} />
                {selectName(29)}
              </div>
              {boxButWithCheck(29)}
            </div>
          </div>
        </LazyLoadComponent>

        <h2 className={s.docH2}>Обрамлення мийки / каркасу виготовлене методом вальцювання із ком
          позитного матеріалу товщиною 4 мм фірми Alubond. Перегородки між постами можуть бути вико
          нані із гартованого скла товщиною 10 мм та нанесеним на ньому друком, а також з банерами із
          дизайном замовника (з спеціальним кріпленням) або з екранами для динамічної реклами.
          Обшивка колон виконана із нержавіючої сталі А 304 та неоновою підсвіткою або із композитного
          матеріалу фірми, Alubond, товщиною 4мм. Для обрамлення мийки (атіка) використовується елемент
          и виконані методом гарячого вакуумного формування із внутрішньою підсвіткою. Накриття постів
          виконано із дахового сендвіча товщиною 100 мм. або із профільованого листа товщиною 0.8 мм та
          захисним покриттям цинку 250 грм. на м. кВ фірми ArcelorMittal, а також з стільникового полікар
          бонату захищеного від ультрафіолету товщиною 10 мм. фірми Carboglass.</h2>
        <h3 className={s.docH3}>
          Освітлення мийки забезпечується лінійними LED світильниками фірми Maxus довжиною 1200 мм. 5 штук на пост та ступенем
          захисту ІР65 включення яких контролюється контролером Schneider.
        </h3>

      </div>
    </main>
  </>;
};

export default Nacr;