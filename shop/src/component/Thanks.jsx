import React, { useEffect, useLayoutEffect } from "react";
import {Link} from "react-router-dom";
import s from './Home.module.css'
import image4 from "../image/svg/sw logo.svg";
import FooterMain from "./FooterMain";


const Thanks = ({ setOnFooter, t, checked, meneger }) => {

  useLayoutEffect(() => {
    setOnFooter(true)
  }, [])

  useEffect(() => {
    setOnFooter(true)
    return () => {
      setOnFooter(false)
    }
  }, [])


    return (
      <div className={s.divBlock}>
        <img src={image4} className={s.imageThanks} alt='lable'/>
        <div style={{zIndex: 2, height: '78vh'}}>
          <div className={`${s.breadcrumbs}`}>
            <Link className="breads" style={{ color: "#7D7D80" }} to="/">{t(`home`)}</Link>
            <span className="breads"> / {t(`pageThanks`)}</span>
          </div>

          <div className={s.boxDiv}>

            <div className={s.divTit}>
              <h1 className={s.thanksTitle}>{t(`titleThanks`)}</h1>
            </div>

            <div className={s.divP}>
              {!checked && <p className={s.thanksP}>Наш менеджер зв'яжеться з Вами найближчим часом.</p>}
              {meneger && <p className={s.thanksP}>Також ми відправили копію вашої заявки на Ваш e-mail, який Ви вказали.</p>}
            </div>

          </div>

            <a className={s.butThanks+' '+s.lineThanks} href="/">{t(`mainPageTo`)}</a>

        </div>
        <FooterMain />
      </div>
    )
}

export default Thanks