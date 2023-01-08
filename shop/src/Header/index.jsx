import React from 'react';
import './Header.scss';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom";
import image5 from '../image/footer.png'


export const Header = ({ t }) => {

  const click = () => {
    const id = document.getElementsByClassName("menu__box");
    id.style.visibility = 'hidden'
  }

  return (
    <div className='root'>
      <Container maxWidth="lg">
        <div className='inner'>
          <div>
            <Link to="/">
              <img className='logo' src={image5} />
            </Link>
          </div>
          <div>
            <span className='nomer'>+38 (063) 23 56 478</span>
          </div>
          <div className="hamburger-menu" style={{zIndex: '1'}}>
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>
            <span onClick={click} className='spanX'>&#10006;</span>
            <ul className="menu__box">
              <li><a className="menu__item" target="_blank" href="https://sam-wash.com/">{t("mainPage")}</a></li>
              <li><a className="menu__item" target="_blank" href="https://sam-wash.com/uk#about_us">{t("aboutUs")}</a></li>
              <li><a className="menu__item" target="_blank" href="#">{t("team")}</a></li>
              <li><a className="menu__item" target="_blank" href="#">{t("blog")}</a></li>
              <li><a className="menu__item" target="_blank" href="#">{t("contacts")}</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
