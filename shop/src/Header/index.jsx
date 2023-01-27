import React from "react";
import "./Header.scss";
import Container from "@mui/material/Container";
import { Link, Route, Routes, useNavigate, NavLink, useParams } from "react-router-dom";
import image5 from "../image/footer.png";
import s from "../component/Home.module.css";


export const Header = ({ t, changeLanguage, lang }) => {

  const click = () => {
    const id = document.getElementById("menu__toggle");
    const id2 = document.getElementsByClassName("menu__box");
    const id3 = document.getElementById("divHidden");
    if(id2[0].style.visibility === "visible"){
      id2[0].style.visibility = "hidden"
      id3.style.visibility = "hidden";
      id.checked = true
    } else {
      id.checked = false
      id2[0].style.visibility = "visible"
      id3.style.visibility = "visible";
    }
  };

  const click2 = (e) => {
    const id = document.getElementById("menu__toggle");
    const id2 = document.getElementsByClassName("menu__box");
    const id3 = document.getElementById("divHidden");
    if(e.target.id === 'divHidden') {
      if (id2[0].style.visibility === "visible") {
        id2[0].style.visibility = "hidden"
        id3.style.visibility = "hidden"
        id.checked = false
      } else {
        id2[0].style.visibility = "visible"
      }
    }
  };

  const click3 = () => {
    const id = document.getElementById("menu__toggle");
    const id2 = document.getElementsByClassName("menu__box");
    const id3 = document.getElementById("divHidden");
    id.checked = false
    id2[0].style.visibility = "hidden"
    id3.style.visibility = "hidden";
  }

  const screen = window.screen.width < 900

  const uaHeader = () => {
    if (screen === true) {
      return <div className="hamburger-menu" style={{ zIndex: "1" }}>
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span onClick={click}></span>
        </label>
        <span>
          <div className="divBox" id="divHidden" onClick={click2}>
            <ul className="menu__box">
              <li><NavLink onClick={click3} className="menu__item" to="/">{t("mainPage")}</NavLink></li>
              <li><NavLink onClick={click3} className="menu__item"
                                       to="/obladnannya">{t("aboutUs")}</NavLink></li>
              <li><NavLink onClick={click3} className="menu__item"
                                       to="/nashi_avtomiyki/wsi">{t("team")}</NavLink></li>
              <li><a onClick={click3} className="menu__item" href="#">{t("blog")}</a></li>
              <li><a onClick={click3} className="menu__item" style={{ borderBottom: "1px solid whitesmoke" }}
                               href="#">{t("contacts")}</a></li>
            </ul>
          </div>
        </span>
      </div>;
    }
    else {
      return <div className="manu">
        {/*<div className="menu__item">*/}
        <Link className="menu__item" to="/">{t("mainPage")}</Link>
        {/*</div>*/}
        {/*<div className="menu__item">*/}
        <Link className="menu__item" to="/obladnannya">{t("aboutUs")}</Link>
        <Link className="menu__item" to="/nashi_avtomiyki/wsi">{t("team")}</Link>
        <div className="menu__item">{t("blog")}</div>
        <div className="menu__item">{t("contacts")}</div>
      </div>;
    }
  };

  const enHeader = () => {
    if (screen === true) {
      return <div className="hamburger-menu" style={{ zIndex: "1" }}>
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span onClick={click}></span>
        </label>
        <span>
          <div className="divBox" id="divHidden" onClick={click2}>
            <ul className="menu__box">
              <li><NavLink onClick={click3} className="menu__item" to="/en">{t("mainPage")}</NavLink></li>
              <li><NavLink onClick={click3} className="menu__item"
                                       to="/obladnannya/en">{t("aboutUs")}</NavLink></li>
              <li><NavLink onClick={click3} className="menu__item"
                                     to="/nashi_avtomiyki/wsi/en">{t("team")}</NavLink></li>
              <li><a onClick={click3} className="menu__item" href="#">{t("blog")}</a></li>
              <li><a onClick={click3} className="menu__item" style={{ borderBottom: "1px solid whitesmoke" }}
                               href="#">{t("contacts")}</a></li>
            </ul>
          </div>
        </span>
      </div>;
    }
    else {
      return <div className="manu">
        <Link className="menu__item" to="/en">{t("mainPage")}</Link>
        <Link className="menu__item" to="/obladnannya/en">{t("aboutUs")}</Link>
        <Link className="menu__item" to="/nashi_avtomiyki/wsi/en">{t("team")}</Link>
        <div className="menu__item">{t("blog")}</div>
        <div className="menu__item">{t("contacts")}</div>
      </div>;
    }
  }

  return (
    <header>
      <div className="root">
            <div>
              <Link to="/">
                <img className="logo" src={image5} />
              </Link>
            </div>
            <div>
              {
                window.screen.width < 900
                  ? <span><a className="nomer" href="tel:+380505923772">+38 (050) 59 23 772</a></span>
                  : <span className="nomer">+38 (050) 59 23 772</span>
              }
              <div className={s.translateDiv}>
                <button className={s.trBut + " " + `${lang == "en" ? s.color : ""}`}
                        onClick={() => changeLanguage("en")}>EN
                </button>
                <button className={s.trBut + " " + `${lang == "ua" ? s.color : ""}`}
                        onClick={() => changeLanguage("ua")}>UA
                </button>
              </div>
            </div>
          {
            lang === 'ua' ? uaHeader() : enHeader()
          }
          </div>
    </header>
  );
};







{/*{*/}
{/*  window.screen.width > 900*/}
{/*    ?*/}
{/*    <div className='manu'>*/}
{/*      /!*<div className="menu__item">*!/*/}
{/*        <Link className="menu__item"  to="/">{t("mainPage")}</Link>*/}
{/*      /!*</div>*!/*/}
{/*      /!*<div className="menu__item">*!/*/}
{/*        <Link className="menu__item" to="/obl">{t("aboutUs")}</Link>*/}
{/*      /!*</div>*!/*/}
{/*      <div className="menu__item">Про нас</div>*/}
{/*      <div className="menu__item">{t("blog")}</div>*/}
{/*      <div className="menu__item">{t("contacts")}</div>*/}
{/*    </div>*/}
{/*    : <>*/}
{/*      <div className="hamburger-menu" style={{ zIndex: "1" }}>*/}
{/*        <input id="menu__toggle" type="checkbox" />*/}
{/*        <label className="menu__btn" htmlFor="menu__toggle">*/}
{/*          <span onClick={click}></span>*/}
{/*        </label>*/}
{/*        <span>*/}
{/*          <div className='divBox' id='divHidden' onClick={click2}>*/}
{/*          <ul className="menu__box">*/}
{/*             <li><NavLink className="menu__item" to="/">{t("mainPage")}</NavLink></li>*/}
{/*              <li><NavLink className="menu__item"*/}
{/*                           to="/obl">{t("aboutUs")}</NavLink></li>*/}
{/*            <li><a className="menu__item" href="#">{t("team")}</a></li>*/}
{/*            <li><a className="menu__item" href="#">{t("blog")}</a></li>*/}
{/*            <li><a className="menu__item" style={{ borderBottom: "1px solid whitesmoke" }}*/}
{/*                   href="#">{t("contacts")}</a></li>*/}
{/*          </ul>*/}
{/*            </div>*/}
{/*        </span>*/}
{/*      </div>*/}
{/*    </>*/}
{/*}*/}