import React, { useEffect, useState } from "react";
import s from "../component/Home.module.css";
import "./Obl.css";
import image1 from '../image/svg/Fullscreenicon.svg'
import image2 from '../image/svg/Group31.svg'
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";


const DocumentsPage = ({ t, data, userOrder, setTotal, total, setUrl }) => {

  useEffect(() => {
    setUrl("documentation")
  }, [])

  const [color, setColor] = useState(false)
  const screen = window.screen.availWidth > 900


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
    // console.log(userOrder);
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

  const onChange = (e) => {
    data.forEach(item => {
      if (item.nameOfGoods === e.target.id) {
        if (e.target.checked) {
          setTotal((actual) => actual + item.prise);
          userOrder.push(item);
        } else {
          userOrder.forEach((el, index) => {
            if (item === el) {
              setTotal(total - item.prise);
              userOrder.splice(index, 1);
            }
          });
        }
      }
    });
  };

  let activeStyle = {
    backgroundColor: "#DF4242",
    color: "#FFFFFF",
    border: "none"
  };

  const style = { margin: "0 auto 60px 125px" };

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
              {/*<div className={s.divBut}>*/}
              {/*  <input type="checkbox" id={data[63].nameOfGoods} onChange={onChange}/>*/}
              {/*  <span className={s.itemTotal}>{data[63].total} грн</span>*/}
              {/*</div>*/}
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