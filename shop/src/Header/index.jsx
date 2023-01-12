import React from "react";
import "./Header.scss";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import image5 from "../image/footer.png";
import s from "../component/Home.module.css";


export const Header = ({ t, changeLanguage, lang }) => {

  const click = () => {
    const id = document.getElementsByClassName("menu__btn");
    id[0].style.visibility = "hidden";
    const id2 = document.getElementsByClassName("menu__box");
    id2[0].style.visibility = "visible";
  };

  const click2 = () => {
    const id = document.getElementsByClassName("menu__btn");
    id[0].style.visibility = "visible";
    const id2 = document.getElementsByClassName("menu__box");
    id2[0].style.visibility = "hidden";
  };

  return (
    <div className="root">
      <Container maxWidth="lg">
        <div className="inner">
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
              <button className={s.trBut+' '+`${lang == 'en' ? s.color : ''}`} onClick={() => changeLanguage("en")}>EN</button>
              <button className={s.trBut+' '+`${lang == 'ua' ? s.color : ''}`} onClick={() => changeLanguage("ua")}>UA</button>
            </div>
          </div>
          <div className="hamburger-menu" style={{ zIndex: "1" }}>
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle" onClick={click}>
              <span></span>
            </label>
            <span onClick={click2}>
            <ul className="menu__box">
              <li><a className="menu__item" target="_blank" href="https://sam-wash.com/">{t("mainPage")}</a></li>
              <li><a className="menu__item" target="_blank"
                     href="https://sam-wash.com/uk#about_us">{t("aboutUs")}</a></li>
              <li><a className="menu__item" target="_blank" href="#">{t("team")}</a></li>
              <li><a className="menu__item" target="_blank" href="#">{t("blog")}</a></li>
              <li><a className="menu__item" target="_blank" href="#">{t("contacts")}</a></li>
            </ul>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};
