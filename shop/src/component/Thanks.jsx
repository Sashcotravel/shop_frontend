import React, { useEffect } from 'react'
import {Link} from "react-router-dom";
import s from './Home.module.css'
import image4 from "../image/svg/sw logo.svg";


const Thanks = ({ setOnFooter, t, checked }) => {

  useEffect(() => {

    setOnFooter(true)

    return () => {
      setOnFooter(false)
    }
  }, [])


    return (
      <div className={s.divBlock}>
        <img src={image4} className={s.imageThanks} />
        <div style={{zIndex: 2}}>
          <div className={`${s.breadcrumbs}`}>
            <Link className="breads" style={{ color: "#7D7D80" }} to="/">{t(`home`)}</Link>
            <span className="breads"> / {t(`pageThanks`)}</span>
          </div>

          <div className={s.boxDiv}>

            <div className={s.divTit}>
              <h1 className={s.thanksTitle}>{t(`titleThanks`)}</h1>
            </div>

            <div className={s.divP}>
              <p className={s.thanksP}>Також ми відправили копію вашої заявки на Ваш e-mail, який Ви вказали.</p>
              {!checked && <p className={s.thanksP}>Наш менеджер зв'яжеться з Вами найближчим часом.</p>}
            </div>

          </div>

            <Link className={s.butThanks+' '+s.lineThanks} to="/">{t(`mainPageTo`)}</Link>

        </div>
      </div>
    )
}

export default Thanks