import React from "react";
import "./Header.scss";
import Container from "@mui/material/Container";
import { Link, Route, Routes, useNavigate, NavLink, useParams } from "react-router-dom";
import image5 from "../image/footer.png";
import s from "../component/Home.module.css";


export const Header = ({ t, changeLanguage, lang }) => {

  const click = () => {
    const id = document.getElementsByClassName("menu__btn");
    // id[0].style.visibility ="hidden"
    // if(id[0].style.visibility === "visible"){
    //   id[0].style.visibility = "hidden"
    // } else {
    //   id[0].style.visibility = "visible"
    // }
    const id2 = document.getElementsByClassName("menu__box");
    // // id2[0].style.visibility = "visible";
    if(id2[0].style.visibility === "visible"){
      id2[0].style.visibility = "hidden"
    } else {
      id2[0].style.visibility = "visible"
    }
  };

  // const click2 = () => {
  //   const id = document.getElementsByClassName("menu__btn");
  //   id[0].style.visibility = "visible";
  //   const id2 = document.getElementsByClassName("menu__box");
  //   id2[0].style.visibility = "hidden";
  //   console.log('lol2');
  // };

  return (
    <header>
      <div className="root">
        {/*<Container maxWidth="lg">*/}
        {/*  <div className="inner">*/}
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
              window.screen.width > 900
                ?
                <div className='manu'>
                  {/*<div className="menu__item">*/}
                    <Link className="menu__item"  to="/">{t("mainPage")}</Link>
                  {/*</div>*/}
                  {/*<div className="menu__item">*/}
                    <Link className="menu__item" to="/obl">{t("aboutUs")}</Link>
                  {/*</div>*/}
                  <div className="menu__item">Про нас</div>
                  <div className="menu__item">{t("blog")}</div>
                  <div className="menu__item">{t("contacts")}</div>
                </div>
                : <>
                  <div className="hamburger-menu" style={{ zIndex: "1" }}>
                    <input id="menu__toggle" type="checkbox" onClick={click} />
                    <label className="menu__btn" htmlFor="menu__toggle">
                      <span></span>
                    </label>
                    <span>
                      <ul className="menu__box">
                         <li><NavLink className="menu__item" to="/">{t("mainPage")}</NavLink></li>
                          <li><NavLink className="menu__item"
                           to="/obl">{t("aboutUs")}</NavLink></li>
                        <li><a className="menu__item" href="#">{t("team")}</a></li>
                        <li><a className="menu__item" href="#">{t("blog")}</a></li>
                        <li><a className="menu__item" style={{borderBottom: '1px solid whitesmoke'}} href="#">{t("contacts")}</a></li>
                      </ul>
                    </span>
                  </div>
                </>
            }
          </div>
        {/*</Container>*/}
      {/*</div>*/}
    </header>
  );
};
