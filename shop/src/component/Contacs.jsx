import React, { useEffect, useLayoutEffect, useState } from "react";
import s from "./Home.module.css";
import image4 from "../image/svg/sw logo.svg";
import { Link } from "react-router-dom";
import FooterMain from "./FooterMain";
import { fetchMailDimaZam, fetchOrder } from "../API/post";
import { useDispatch } from "react-redux";



const Contacts = ({ setOnFooter, t }) => {

  const [userData, setUserData] = useState({
    name: "", phone: "", email: "", post: ""});
  const [formPass, setFormPass] = useState({
    phone: false, email: false });

  let lang = localStorage.i18nextLng
  const screen = window.screen.availWidth > 900
  const dispatch = useDispatch();

  useEffect(() => {
    if(lang === 'ua'){
      document.title = "Контакти відділу продажів | SamWash";
      document.description = 'Звяжіться з нами, будь-яким зручним для вас способом. вказаним ' +
        'на сайті та отримайте якісну консультацію по будівництву автомийок самообслуговування під ключ.'
    }
    if(lang === 'ru'){
      document.title = 'Контакты отдела продаж | SamWash'
      document.description = 'Свяжитесь с нами любым удобным для вас способом. указанным на сайте' +
        ' и получите качественную консультацию по строительству автомоек самообслуживания под ключ.'
    }
  }, [])

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

  const onBlur = (e) => {
    let email = document.getElementById('email')
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!re.test(String(e.target.value).toLowerCase())){
      if(formPass.phone === false){
        email.style.border = '2px solid red'
        email.style.backgroundCo1or = 'transparent'
        setFormPass((actual) => { return { ...actual, email: false } })
      }
      else {
        email.style.border = 'none'
        email.style.borderBottom = '2px solid grey'
        email.style.backgroundColor = 'transparent'
      }
    } else {
      email.style.border = 'none'
      email.style.borderBottom = '2px solid grey'
      email.style.backgroundColor = 'transparent'
      setFormPass((actual) => { return { ...actual, email: true } })
    }
  }

  const onBlur2 = (e) => {
    let phone = document.getElementById("phone");
    let regex = new RegExp(/^(\+|00)[1-9][0-9 \-\(\)\.]{10,32}$/);
    if (regex.test(e.target.value.toString()) === true) {
      phone.style.border = "none";
      phone.style.borderBottom = "2px solid grey";
      phone.style.backgroundColor = "transparent";
      setFormPass((actual) => {return { ...actual, phone: true }});
    } else {
      if (formPass.email === false) {
        phone.style.border = "2px solid red";
        phone.style.backgroundCo1or = "transparent";
        setFormPass((actual) => {return { ...actual, phone: false };});
      } else {
        phone.style.border = "none";
        phone.style.borderBottom = "2px solid grey";
        phone.style.backgroundColor = "transparent";
      }
    }
  };

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
                    <p className={s.p_1}>+38 (050) 59 23 772</p>
                    <p className={s.p_1}><a style={{color: 'white'}} href="mailto:info@samwash.com">info@samwash.com</a></p>
                  </div>
                </div>

                <div className={s.div1Cont}>
                  <p className={s.h2_1+' '+s.p_1_3}>{t(`feedback`)}</p>
                  <div className={s.divInput1}>
                    <input className={s.inputUser+' '+s.input1} type="text" title="name"
                           placeholder={`${t("enterName")}`} onChange={(e) => {
                      setUserData((actual) => {
                        return { ...actual, [e.target.title]: e.target.value };
                      });
                    }} />
                    <input className={s.inputUser+' '+s.input1} type="email" title="email" id="email" onBlur={onBlur}
                           placeholder={`${t("enterEmail")}`} onChange={(e) => {
                      setUserData((actual) => {
                        return { ...actual, [e.target.title]: e.target.value };
                      });
                    }} />
                    <input className={s.inputUser+' '+s.input1} type="text" title="phone" id="phone" onBlur={onBlur2}
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
                    <p className={s.p_1}><a href="tel:+380505923772" style={{color: 'white'}}>+38 (050) 59 23 772</a></p>
                    <p className={s.p_1}><a style={{color: 'white'}} href="mailto:info@samwash.com">info@samwash.com</a></p>
                  </div>
                </div>

                <div className={s.div1Cont}>
                  <p className={s.h2_1+' '+s.p_1_2}>{t(`feedback`)}</p>
                  <p className={s.h2_2}>{t(`descCont`)}</p>
                  <div className={s.divInput1}>
                    <input className={s.inputUser+' '+s.input1} type="text" title="name"
                           placeholder={`${t("enterName")}`} onChange={(e) => {
                      setUserData((actual) => {
                        return { ...actual, [e.target.title]: e.target.value };
                      });
                    }} />
                    <input className={s.inputUser+' '+s.input1} type="email" title="email" id="email" onBlur={onBlur}
                           placeholder={`${t("enterEmail")}`} onChange={(e) => {
                      setUserData((actual) => {
                        return { ...actual, [e.target.title]: e.target.value };
                      });
                    }} />
                    <input className={s.inputUser+' '+s.input1} type="text" title="phone" id="phone" onBlur={onBlur2}
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