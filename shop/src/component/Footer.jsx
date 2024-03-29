import React from "react";
import s from "./Home.module.css";


const Footer = ({ t, total, noScroll }) => {

  return <>
    <footer>
    <div className={s.footerDiv}>
      <div className={s.footerDiv2}>
        <span style={{color: 'white'}} className={s.font}>Загальна ціна {total} грн</span>
        <button onClick={noScroll} className={s.footerBut+ ' ' +s.font}>{t("offer")}</button>
      </div>
    </div>
    </footer>
  </>
}

export default Footer