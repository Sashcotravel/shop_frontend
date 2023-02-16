import React, { useEffect } from "react";
import "./Header.scss";
import Container from "@mui/material/Container";
import { Link, Route, Routes, useNavigate, NavLink, useParams, useLocation } from "react-router-dom";
import image5 from "../image/footer.png";
import image1 from "../image/svg/BurgerMenuIcon.svg";
import s from "../component/Home.module.css";
import { LanguageSwitcher } from "../component/language";


export const Header = ({ t }) => {

  const oneClick = (e) => {
    if(e.target.id === 'img'){
      // document.getElementById("divHidden").style.visibility = 'hidden'
      document.getElementById("divHidden").style.width = '80%'
      // document.getElementById("hidden").style.visibility = 'hidden'
      document.getElementById("hidden").style.width = '98vw'
      // document.getElementById("menu__box").style.width = '300px'
      document.getElementById("menu__box").style.width = '80%'
      document.getElementById("close").style.visibility = 'visible'
    }
  }

  const twoClick = (e) => {
    if(e.target.id === 'close'){
      document.getElementById("divHidden").style.width = '0'
      document.getElementById("hidden").style.width = '0'
      document.getElementById("menu__box").style.width = '0'
      document.getElementById("close").style.visibility = 'hidden'
    }
  }

  const threeClick = (e) => {
    document.getElementById("divHidden").style.width = '0%'
    document.getElementById("hidden").style.width = '0%'
    document.getElementById("menu__box").style.width = '0'
    document.getElementById("close").style.visibility = 'hidden'
  }

  const fourClick = (e) => {
    // document.getElementById("divHidden").style.visibility = 'visible'
    document.getElementById("divHidden").style.width = '0%'
    // document.getElementById("hidden").style.visibility = 'visible'
    document.getElementById("hidden").style.width = '0%'
    document.getElementById("menu__box").style.width = '0'
    document.getElementById("close").style.visibility = 'hidden'
  }

  const screen = window.screen.width < 900

  const bot = { borderBottom: 'none' }

  const width = { width: '33%' }

  let activeStyle = {
    backgroundColor: "#DF4242",
    color: "#FFFFFF",
    border: "none"
  };

  const uaHeader = () => {
    if (screen === true) {
      return <div className="humManu" id="menu__toggle" style={{ zIndex: "1", width: '20%' }}>
        <img onClick={oneClick} id='img' src={image1} />
          <div className='divManu' id="divHidden">
            <ul className="menu__box" id="menu__box">
              <p className='close' id='close' onClick={twoClick}></p>
              <li><NavLink onClick={threeClick} style={({ isActive }) => isActive ? activeStyle : undefined}
                           className="menu__item" to={"/"}>{t("mainPage")}</NavLink></li>
              <li><NavLink onClick={threeClick} style={({ isActive }) => isActive ? activeStyle : undefined}
                           className="menu__item" to="/obladnannya">{t("aboutUs")}</NavLink></li>
              <li><NavLink onClick={threeClick} style={({ isActive }) => isActive ? activeStyle : undefined}
                           className="menu__item"
                                       to="/nashi-avtomiyki/wsi">{t("team")}</NavLink></li>
              <li><NavLink onClick={threeClick} style={({ isActive }) => isActive ? activeStyle : undefined}
                     className="menu__item" to="/blog">{t("blog")}</NavLink></li>
              <li><NavLink onClick={threeClick} style={({ isActive }) => isActive ? activeStyle : undefined}
                     className="menu__item" style={{ borderBottom: "1px solid whitesmoke" }}
                           to="/contacts">{t("contacts")}</NavLink></li>
            </ul>
          </div>
      </div>;
    }
    else {
      return <div className="manu">
        <Link className="menu__item" to="/">{t("mainPage")}</Link>
        <Link className="menu__item" to="/obladnannya">{t("aboutUs")}</Link>
        <Link className="menu__item" to="/nashi-avtomiyki/wsi">{t("team")}</Link>
        <div className="menu__item">{t("blog")}</div>
        <div className="menu__item">{t("contacts")}</div>
      </div>;
    }
  };

  // const enHeader = () => {
  //   if (screen === true) {
  //     return <div className="humManu" id="menu__toggle" style={{ zIndex: "1" }}>
  //       <img onClick={oneClick} id="img" src={image1} />
  //       <div className="divManu" id="divHidden">
  //         <ul className="menu__box">
  //           <p className="close" id="close" onClick={twoClick}></p>
  //           <li><NavLink onClick={threeClick} className="menu__item" to="/en">{t("mainPage")}</NavLink></li>
  //           <li><NavLink onClick={threeClick} className="menu__item"
  //                        to="/obladnannya/en">{t("aboutUs")}</NavLink></li>
  //           <li><NavLink onClick={threeClick} className="menu__item"
  //                        to="/nashi-avtomiyki/wsi/en">{t("team")}</NavLink></li>
  //           <li><a onClick={threeClick} className="menu__item" href="#">{t("blog")}</a></li>
  //           <li><a onClick={threeClick} className="menu__item" style={{ borderBottom: "1px solid whitesmoke" }}
  //                  href="#">{t("contacts")}</a></li>
  //         </ul>
  //       </div>
  //     </div>;
  //   }
  //  else {
  //    return <div className="manu">
  //       <Link className="menu__item" to="/en">{t("mainPage")}</Link>
  //       <Link className="menu__item" to="/obladnannya/en">{t("aboutUs")}</Link>
  //       <Link className="menu__item" to="/nashi-avtomiyki/wsi/en">{t("team")}</Link>
  //       <div className="menu__item">{t("blog")}</div>
  //       <div className="menu__item">{t("contacts")}</div>
  //     </div>;
  //   }
  // }

  return (
    <header>
      <div className="root" style={screen ? bot : undefined}>
        <div style={screen ? width : undefined}>
          <Link to="/">
            <img className="logo" src={image5} />
          </Link>
        </div>
        <div style={screen ? width : undefined}>
          {
            window.screen.width < 900
              ? <span><a className="nomer" href="tel:+380505923772">+38 (050) 59 23 772</a></span>
              : <span className="nomer">+38 (050) 59 23 772</span>
          }
          <LanguageSwitcher />
        </div>
        {
          // localStorage.i18nextLng === 'ua' ? uaHeader() : enHeader()
          uaHeader()
        }
        <div className="divContainer" id="hidden" onClick={fourClick}></div>
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