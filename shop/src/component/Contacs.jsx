import React, { useEffect, useState } from "react";
import s from "./Home.module.css";
import image4 from "../image/svg/sw logo.svg";
import { Link } from "react-router-dom";
import FooterMain from "./FooterMain";
import { fetchMailDimaZam } from "../API/post";
import { useDispatch } from "react-redux";



const Contacts = ({ setOnFooter, t }) => {

  const [userData, setUserData] = useState({
    name: "", phone: "", email: "", post: ""});

  const screen = window.screen.availWidth > 900
  const dispatch = useDispatch();

  useEffect(() => {
    setOnFooter(true)

    return () => {
      setOnFooter(false)
    }
  }, [])

  const sendPost = () => {
    let obj = { user: userData };
    dispatch(fetchMailDimaZam(obj));
  }


  return (
    <div className={s.divBlock}>
      <img src={image4} className={s.imageThanks} alt='lable'/>
      <div className={s.divMain}>
        <div className={`${s.breadcrumbs} ${s.bread2} ${s.breadcrumbs2}`}>
          <Link className="breads" style={{ color: "#7D7D80" }} to="/">{t(`home`)}</Link>
          <span className="breads"> / {t(`contacts`)}</span>
        </div>

        <h1 className={s.thanksTitle2}>{t(`contacts`)}</h1>

        <div className={s.div2Box}>

          {
            screen ? <>
                <div className={s.div1Cont}>
                  <h2 className={s.h2_1+' '+s.p_1_2}>{t(`department`)}</h2>
                  <div>
                    <p className={s.p_1}>+38 (098) 732 83 99</p>
                    <p className={s.p_1}>info@samwash.com</p>
                  </div>
                </div>

                <div className={s.div1Cont}>
                  <p className={s.h2_1+' '+s.p_1_3}>{t(`feedback`)}</p>
                  <div className={s.divInput1}>
                    <input className={s.inputUser+' '+s.input1} type="text" title="name" required
                           placeholder={`${t("enterName")}`} onChange={(e) => {
                      setUserData((actual) => {
                        return { ...actual, [e.target.title]: e.target.value };
                      });
                    }} />
                    <input className={s.inputUser+' '+s.input1} type="email" title="email" required
                           placeholder={`${t("enterEmail")}`} onChange={(e) => {
                      setUserData((actual) => {
                        return { ...actual, [e.target.title]: e.target.value };
                      });
                    }} />
                    <input className={s.inputUser+' '+s.input1} type="text" title="phone" required
                           placeholder={`${t("enterYourPhoneNumber")}`} onChange={(e) => {
                      setUserData((actual) => {
                        return { ...actual, [e.target.title]: e.target.value };
                      });
                    }} />
                  </div>
                </div>

                <div className={s.div1Cont+' '+s.div1Cont2}>
                  <p className={s.h2_2}>{t(`descCont`)}</p>
                  <textarea className={s.textArea} title="post"
                         placeholder={`${t("mail")}`} onChange={(e) => {
                    setUserData((actual) => {
                      return { ...actual, [e.target.title]: e.target.value };
                    });
                  }} />

                  <Link className={s.greenButSend+' '+s.lineThanks} onClick={sendPost} to="/">{t(`send`)}</Link>

                </div>
              </>
              : <>
                <div className={s.div1Cont}>
                  <h2 className={s.h2_1+' '+s.p_1_2}>{t(`department`)}</h2>
                  <div>
                    <p className={s.p_1}>+38 (098) 732 83 99</p>
                    <p className={s.p_1}>info@samwash.com</p>
                  </div>
                </div>

                <div className={s.div1Cont}>
                  <p className={s.h2_1+' '+s.p_1_2}>{t(`feedback`)}</p>
                  <p className={s.h2_2}>{t(`descCont`)}</p>
                  <div className={s.divInput1}>
                    <input className={s.inputUser+' '+s.input1} type="text" title="name" required
                           placeholder={`${t("enterName")}`} onChange={(e) => {
                      setUserData((actual) => {
                        return { ...actual, [e.target.title]: e.target.value };
                      });
                    }} />
                    <input className={s.inputUser+' '+s.input1} type="email" title="email" required
                           placeholder={`${t("enterEmail")}`} onChange={(e) => {
                      setUserData((actual) => {
                        return { ...actual, [e.target.title]: e.target.value };
                      });
                    }} />
                    <input className={s.inputUser+' '+s.input1} type="text" title="phone" required
                           placeholder={`${t("enterYourPhoneNumber")}`} onChange={(e) => {
                      setUserData((actual) => {
                        return { ...actual, [e.target.title]: e.target.value };
                      });
                    }} />
                    <textarea className={s.textArea} title="post"
                              placeholder={`${t("mail")}`} onChange={(e) => {
                      setUserData((actual) => {
                        return { ...actual, [e.target.title]: e.target.value };
                      });
                    }} />
                  </div>
                </div>

                <div className={s.div1Cont+' '+s.div1Cont2}>
                  <Link className={s.greenButSend+' '+s.lineThanks} onClick={sendPost} to="/">{t(`send`)}</Link>
                </div>
              </>
          }

        </div>

      </div>

      <FooterMain />
    </div>
  )
}

export default Contacts