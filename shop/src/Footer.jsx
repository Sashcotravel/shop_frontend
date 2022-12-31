import React, { useEffect, useState } from "react";
import s from "./Home.module.css";


const Footer = ({ total, noScroll }) => {

  return <>

    <div className={s.footerDiv}>
      <div className={s.footerDiv2}>
        <span className={s.font}>{total} грн</span>
        <button onClick={noScroll} className={s.footerBut+ ' ' +s.font}>Отримати пропозицію</button>
      </div>
    </div>


  </>
}

export default Footer