import { useLayoutEffect, useState, useTransition } from "react";
import { useLocation } from "react-router-dom";
import i18next from "i18next";
import s from "./Home.module.css";




export const LanguageSwitcher = () => {
  const {i18n} = useTransition()
  const location = useLocation()

  let lang = localStorage.i18nextLng

  const switcher = (lng) => () => {
    i18next.changeLanguage(lng)
    window.location.replace(
      `/${lng}${location.pathname}`
    )
  }


  return (
    <div className={s.translateDiv}>
    <button className={s.trBut + " " + `${lang === "en" ? s.color : ""}`}
            onClick={switcher("en")}>EN
    </button>
    <button className={s.trBut + " " + `${lang === "ua" || lang === 'uk-UA'  || lang === '' ? s.color : ""}`}
            onClick={switcher("ua")}>UA
    </button>
  </div>
  )

}