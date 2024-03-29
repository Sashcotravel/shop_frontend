import React, { useEffect } from "react";
import FooterMain from "../../component/FooterMain";
import s from "../../component/Home.module.css";


const Error = ({ setOnFooter, t }) => {

  useEffect(() => {
    setOnFooter(true)
    return () => {
      setOnFooter(false)
    }
  }, [])


  return (
    <>
    <div className={s.errorDiv}>
      <p className={s.errorP}>404</p>
      <p className={s.errorP2}>{t('error')}</p>

      <a className={s.butThanks+' '+s.lineThanks} style={{marginLeft: '0'}} href="/">{t(`mainPageTo`)}</a>

    </div>

      <FooterMain />
    </>
  )
}

export default Error