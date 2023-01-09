import React from "react";
import "./Header.scss";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import image5 from "../image/footer.png";


export const Header = ({ t }) => {

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
            <span className="nomer">+38 (063) 23 56 478</span>
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
