import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Link, Route, Routes, useNavigate, NavLink, useParams, useLocation } from "react-router-dom";
import image5 from "../image/svg/samwash_logo_vector-01.svg";
import image1 from "../image/svg/BurgerMenuIcon.svg";
import image2 from "../image/svg/icons8-phone-50.png";
import s from "../component/Home.module.css";
import { LanguageSwitcher } from "../component/language";


export const Header = ({ t }) => {


  const [color, setColor] = useState(false)

  const changeColor = () => {
    if(window.scrollY >= 90) {setColor(true)}
    else {setColor(false)}
  }

  window.addEventListener('scroll', changeColor)

  const oneClick = (e) => {
    if(e.target.id === 'img'){
      if(window.screen.width > 600){
        document.getElementById("menu__box").style.width = '50%'
        document.getElementById("divHidden").style.width = '50%'
      } else {
        document.getElementById("divHidden").style.width = '80%'
        document.getElementById("menu__box").style.width = '80%'
      }
      document.getElementById("close").style.visibility = 'visible'
      document.getElementById("hidden").style.width = '98vw'
      // document.getElementById("divHidden").style.visibility = 'hidden'
      // document.getElementById("hidden").style.visibility = 'hidden'
      // document.getElementById("menu__box").style.width = '300px'
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
    document.getElementById("divHidden").style.width = '0%'
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
      return <div className="humManu" id="menu__toggle">
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
        <Link className="menu__item2" to="/nashi-avtomiyki/wsi">{t("autowash")}</Link>
        <Link className="menu__item2" to="/obladnannya">{t("obladnanya")}</Link>
        <Link className="menu__item2" to="/nakritya">{t("cover2")}</Link>
        <Link className="menu__item2" to="/obladnannya">{t("calculator")}</Link>
        <div className="menu__item2">{t("blog")}</div>
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
  // localStorage.i18nextLng === 'ua' ? uaHeader() : enHeader()


  return (
    <header>
        {screen ? <>

          <div className={"root header-bg"} style={screen ? bot : undefined}>
            <div style={{ width: "20%" }}>
              <Link to="/">
                <img className="logo" src={image5} />
              </Link>
            </div>

            <div className="manDiv">
              <div className="man2Div">
                <div className="telDiv">
                  <span><a className="nomer" href="tel:+380505923772"><img className='imgClass' src={image2} /></a></span>
                </div>
                <div>
                  <LanguageSwitcher />
                </div>
              </div>

              {uaHeader()}
            </div>
          </div>
          </>
          : <div className={color ? "root header-bg" : "root"} style={screen ? bot : undefined}>

            <div className='logoDiv'>
              <Link to="/" style={{position: 'relative', left: '60px'}}>
                <img className="logo" src={image5} />
              </Link>
              <p className='napis'>SELF SERVICE CAR WASH</p>
            </div>

            <div className='divLineManu'>

              <div>
                {uaHeader()}
              </div>
              <div className='divManuLang'>
                <LanguageSwitcher />
              </div>
              <div className="mobTelDiv">
                <span className="textNom">+38 (050) 59 23 772</span>
              </div>

            </div>

          </div>
        }
        <div className="divContainer" id="hidden" onClick={fourClick}></div>
    </header>
    // <header>
    //   <div className={color ? "root header-bg" : 'root'} style={screen ? bot : undefined}>
    //     <div style={screen ? width : undefined}>
    //       <Link to="/">
    //         <img className="logo" src={image5} />
    //       </Link>
    //     </div>
    //     {
    //       window.screen.width < 900
    //         ? <div>
    //           <span><a className="nomer" href="tel:+380505923772"></a></span>
    //         </div>
    //
    //
    //
    //         : <span className="nomer">+38 (050) 59 23 772</span>
    //     }
    //     <div style={screen ? width : undefined}>
    //       <LanguageSwitcher />
    //     </div>
    //     {
    //       // localStorage.i18nextLng === 'ua' ? uaHeader() : enHeader()
    //       uaHeader()
    //     }
    //     <div className="divContainer" id="hidden" onClick={fourClick}></div>
    //   </div>
    // </header>
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