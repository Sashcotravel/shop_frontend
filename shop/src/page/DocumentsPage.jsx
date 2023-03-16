import React, { useEffect, useState } from "react";
import s from "../component/Home.module.css";
import "./Obl.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";


const DocumentsPage = ({ t, data, userOrder, setTotal, total, setUrl }) => {

  useEffect(() => {
    setUrl("documentation")
  }, [])

  const [color, setColor] = useState(false)
  const screen = window.screen.availWidth > 900
  


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

  window.addEventListener('scroll', changeColor, { passive: true })


  return (
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

        {/*<LazyLoadComponent>*/}
        {/*  <div className={s.container}>*/}
        {/*    <div className={s.boxOne} style={{padding: '10px 0 0 10px'}}>*/}
        {/*      <p className={s.itemName}>{data[60].nameOfGoods}</p>*/}
        {/*      <p className={s.itemDesc}></p>*/}
        {/*      {boxBut(60)}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</LazyLoadComponent>*/}

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne+' '+s.boxOne2}>
              <p className={s.itemName}>{data[63].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              <span className={s.itemTotal} style={{margin: '35px 100px 0 0', display: 'block', width: '260px'}}>Приблизна вартість {data[63].total} грн,</span>
              <p className={s.itemName} style={{margin: '-5px 0 0 10px', color: 'white'}}>до обговорення</p>
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne+' '+s.boxOne2}>
              <p className={s.itemName}>{data[64].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              <span className={s.itemTotal} style={{margin: '35px 100px 0 0', display: 'block', width: '260px'}}>Приблизна вартість {data[64].total} грн,</span>
              <p className={s.itemName} style={{margin: '-5px 0 0 10px', color: 'white'}}>до обговорення</p>
            </div>
          </div>
        </LazyLoadComponent>

        <h2 className={s.docH2}>Проєкт виконується під керівництвом компанії СамВаш та з усіма нормами ДБН України, що
          підтверджено Укрдержбудекспертизою по всіх наших об'єктах, які ми будували (ДБН Б.2.2-12.2018,
          ДСП-173, ДБН В.2.3-5-2018, ДБН Б.1.1-14:12)</h2>
        <h3 className={s.docH3}>При використанні приямків H подібної форми вміст шламу (піску) складає 7 м. куб. і займає
          площу 4,5 м. кв. Це дозволяє зекономити до 20 000 грн в рік. Технологічне приміщення займає
          площу 14,4 м. кв, що дає можливість розмістити ємкості запасу води від 10 до 15 м. куб.
          Загальна площа технологічного приміщення складає 25 м. кв, в інших виробників орієнтовно 50 м.
          кв, що дозволяє зекономити біля 300 000 грн при будівництві.</h3>

      </div>

    </main>
  );
};

export default DocumentsPage;