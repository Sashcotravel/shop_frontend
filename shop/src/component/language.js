import { useTransition } from "react";
import { useLocation } from "react-router-dom";
import i18next from "i18next";
import s from "./Home.module.css";




export const LanguageSwitcher = () => {
  const location = useLocation()

  let lang = localStorage.i18nextLng
  const screen = window.screen.availWidth > 900

  const switcher2 = (lng) => () => {
    i18next.changeLanguage(lng)
    window.location.replace(
      `/${lng}${location.pathname}`
    )
  }

  const switcher = (lng) => {
    i18next.changeLanguage(lng)
    window.location.replace(
      `/${lng}${location.pathname}`
    )
  }

  const langClick = (e) => {
    if(e.target.title !== lang){
      switcher(e.target.title)
    }
  }

  return (
    <div className={s.translateDiv}>
      {/*{screen ?*/}
        <button className={s.trBut}>
          <span className={s.pLang + " " + s.hovP2}>{lang.toUpperCase()}</span>
          {/*{lang === "en" ? 'EN' : 'UA'}*/}
          <p className={`${s.pLang} ${s.hovP}`} title="ua" onClick={langClick}>UA</p>
          <p className={`${s.pLang} ${s.hovP}`} title="en" onClick={langClick}>EN</p>
          <p className={`${s.pLang} ${s.hovP}`} title="ru" onClick={langClick}>RU</p>
        </button>

        {/*: <button className={s.trBut + " " + s.color} onClick={switcher2(lang === "en" ? "en" : lang === "ru" ? "ru" : 'ua')}>*/}
      {/*    { lang === "en" ? "en" : lang === "ru" ? "ru" : 'ua' }*/}
      {/*  </button>*/}
      {/*}*/}
    {/*<button className={s.trBut + " " + `${lang === "ua" || lang === 'uk-UA'  || lang === '' ? s.color : ""}`}*/}
    {/*        onClick={switcher("ua")}>UA*/}
    {/*</button>*/}
  </div>
  )

}