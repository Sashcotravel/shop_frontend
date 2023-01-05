import React from 'react';
import './Header.scss';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom";
import image5 from '../image/footer.png'


export const Header = () => {

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
          <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>
            <ul className="menu__box">
              <li><a className="menu__item" target="_blank" href="https://sam-wash.com/">Головна сторінка</a></li>
              <li><a className="menu__item" target="_blank" href="https://sam-wash.com/uk#about_us">Про нас</a></li>
              <li><a className="menu__item" target="_blank" href="#">Команда</a></li>
              <li><a className="menu__item" target="_blank" href="#">Блог</a></li>
              <li><a className="menu__item" target="_blank" href="#">Контакти</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
