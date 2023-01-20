import React, { useEffect, useState } from "react";
import s from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { listWash } from "../users";
import OnePost from "../page/listwash/OnePost";
// import image from '../image2'


const ListWash = ({ setOnFooter, t, lang, data }) => {

  const [colPost, setColPost] = useState(0)

  useEffect(() => {

    setOnFooter(true)

    return () => {
      setOnFooter(false)
    }
  }, [])

  let activeStyle = {
    backgroundColor: "DF4242",
    color: "#FFFFFF",
    border: "none"
  };

  // const container = (nameImg, nameImg2, imgNum, nameGoods, total, totalsSize, index) => {
  const container = (name, desc, desc2, city, img, imgNum, index) => {
    return (
      <div key={index} className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{ height: "315px" }}>
              {/*<img src={require("../image2/post2_2.jpg")} className={"base"} id={`img${imgNum}`} />*/}
              <img src={img} className={"base"} id={`img${imgNum}`} />
              {/*{size(imgNum)}*/}
            </div>
          </figure>
          <h5 className={s.itemName}>{name}</h5>
          {desc.map((item, i) => <ul key={i}  style={{textDecoration: 'none'}}><li className={s.itemDesc}>{item}</li></ul>)}
          <p className={s.itemDesc}>{desc2}</p>
          <span className={s.itemDesc}>місто {city}</span>
          {/*<div className={s.divBut}>*/}
          {/*  <div style={{ padding: 10 + "px", margin: "20px 15px" }}>*/}
          {/*    <span className={s.itemTotalSize} id="lightblue">{totalsSize}</span>*/}
          {/*  </div>*/}
          {/*  <span className={s.itemTotal}>{total} грн</span>*/}
          {/*</div>*/}
        </div>
      </div>
    );
  };

  return (
    <>
    <div>
      {
        lang == "ua" ?
          <div className={s.divTitle}>
            <span style={{color: 'white'}}>Кількість постів</span>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined}
                     className={s.spanTitle + " " + s.title1} to="/listWash/all" onClick={() => setColPost(0)}>{t("posts")}</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined}
                     className={s.spanTitle + " " + s.title1} to="/listWash/1" onClick={() => setColPost(1)}>1 {t("post")}</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                     to="/listWash/2" onClick={() => setColPost(2)}>2 {t("post")}</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                     to="/listWash/3" onClick={() => setColPost(3)}>3 {t("post")}</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                     to="/listWash/4" onClick={() => setColPost(4)}>4 {t("post")}</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                     to="/listWash/5" onClick={() => setColPost(5)}>5 {t("post")}</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                     to="/listWash/6" onClick={() => setColPost(6)}>6 {t("post")}</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                     to="/listWash/7" onClick={() => setColPost(7)}>7 {t("post")}</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                     to="/listWash/8" onClick={() => setColPost(8)}>8 {t("post")}</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                     to="/listWash/9" onClick={() => setColPost(9)}>9 {t("post")}</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                     to="/listWash/10" onClick={() => setColPost(10)}>10 {t("post")}</NavLink>
          </div>
          :
          <div className={s.divTitle}>
            <span style={{color: 'white'}}>Кількість постів</span>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined}
                     className={s.spanTitle + " " + s.title1} to="/listWash/all/en" onClick={() => setColPost(0)}>{t("posts")}</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined}
                     className={s.spanTitle + " " + s.title1} to="/listWash/1/en" onClick={() => setColPost(1)}>1 {t("post")}</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                     to="/listWash/2/en" onClick={() => setColPost(2)}>2 {t("post")}</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                     to="/listWash/3/en" onClick={() => setColPost(3)}>3 {t("post")}</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                     to="/listWash/4/en" onClick={() => setColPost(4)}>4 {t("post")}</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                     to="/listWash/5/en" onClick={() => setColPost(5)}>5 {t("post")}</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                     to="/listWash/6/en" onClick={() => setColPost(6)}>6 {t("post")}</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                     to="/listWash/7/en" onClick={() => setColPost(7)}>7 {t("post")}</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                     to="/listWash/8/en" onClick={() => setColPost(8)}>8 {t("post")}</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                     to="/listWash/9/en" onClick={() => setColPost(9)}>9 {t("post")}</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                     to="/listWash/10/en" onClick={() => setColPost(10)}>10 {t("post")}</NavLink>
          </div>
      }
    </div>

    <OnePost listWash={listWash} colPost={colPost} t={t} />
    </>
  )
}

export default ListWash