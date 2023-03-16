import React, { useEffect, useLayoutEffect, useState } from "react";
import s from "./Home.module.css";
import image4 from "../image/svg/sw logo.svg";
import { Link } from "react-router-dom";
import FooterMain from "./FooterMain";
import { fetchMailDimaZam, fetchOrder } from "../API/post";
import { useDispatch } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet, HelmetProvider } from 'react-helmet-async';


let numPhone = 0
let numEmail = 0

const Contacts = ({ setOnFooter, t }) => {

  const [userData, setUserData] = useState({
    name: "", phone: "", email: "", post: ""});
  const [formPass, setFormPass] = useState({
    phone: false, email: false });

  let lang = localStorage.i18nextLng
  const screen = window.screen.availWidth > 900
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if(lang === 'ua'){
  //     document.title = "Контакти відділу продажів | SamWash";
  //     document.description = 'Звяжіться з нами, будь-яким зручним для вас способом. вказаним на сайті та отримайте якісну консультацію по будівництву автомийок самообслуговування під ключ.'
  //   }
  //   if(lang === 'en'){
  //     document.title = "Contacts of the sales department SamWash";
  //     document.description = 'Contact us in any way convenient for you. specified on the ' +
  //       'website and get quality advice on the construction of turnkey self-service car washes.'
  //   }
  //   if(lang === 'ru'){
  //     document.title = 'Контакты отдела продаж | SamWash'
  //     document.description = 'Свяжитесь с нами любым удобным для вас способом. указанным на сайте' +
  //       ' и получите качественную консультацию по строительству автомоек самообслуживания под ключ.'
  //   }
  // }, [])

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
    numEmail = 1
    let phone = document.getElementById("phone");
    let email = document.getElementById('email')

    setUserData((actual) => {
      return { ...actual, [e.target.title]: e.target.value };})

    const re = /^\S+@\S+\.\S+$/
    if(!re.test(e.target.value)){
      if(formPass.phone === false){
        email.style.border = '2px solid red'
        email.style.backgroundCo1or = 'transparent'
        if(numPhone > 0){
          phone.style.border = '2px solid red'
          phone.style.backgroundColor = 'transparent'
        }
        setFormPass((actual) => { return { ...actual, email: false } })
        setFormPass((actual) => {return { ...actual, phone: false };});
      }
      else {
        phone.style.border = "none";
        phone.style.borderBottom = "2px solid grey";
        phone.style.backgroundColor = "transparent";
        email.style.border = 'none'
        email.style.borderBottom = '2px solid grey'
        email.style.backgroundColor = 'transparent'
      }
    } else {
      email.style.border = 'none'
      email.style.borderBottom = '2px solid grey'
      email.style.backgroundColor = 'transparent'
      phone.style.border = "none";
      setFormPass((actual) => {return { ...actual, email: true }});
      phone.style.borderBottom = "2px solid grey";
      phone.style.backgroundColor = "transparent";
    }
  }

  const onBlur2 = (e) => {
    numPhone = 1
    if (Number(e.target.value)) {
      setUserData((actual) => {
        return { ...actual, [e.target.title]: e.target.value }})
    }
    else {
      if(e.target.value.length === 1){
        setUserData((actual) => {
          return { ...actual, [e.target.title]: '+' }})
      }
    }

    let phone = document.getElementById("phone");
    let email = document.getElementById('email')
    let regex = new RegExp(/^(\+|00)[1-9][0-9 \-\(\)\.]{10,32}$/);
    if (regex.test(e.target.value.toString()) === true) {
      phone.style.border = "none";
      phone.style.borderBottom = "2px solid grey";
      phone.style.backgroundColor = "transparent";
      setFormPass((actual) => {return { ...actual, phone: true }});
      email.style.border = 'none'
      email.style.borderBottom = '2px solid grey'
      email.style.backgroundColor = 'transparent'
    } else {
      if (formPass.email === false) {
        phone.style.border = "2px solid red";
        phone.style.backgroundCo1or = "transparent";
        if(numEmail > 0){
          email.style.border = '2px solid red'
          email.style.backgroundColor = 'transparent'
        }
        setFormPass((actual) => {return { ...actual, phone: false };});
        setFormPass((actual) => { return { ...actual, email: false } })
      }
      else {
        email.style.border = 'none'
        email.style.borderBottom = '2px solid grey'
        email.style.backgroundColor = 'transparent'
        phone.style.border = "none";
        phone.style.borderBottom = "2px solid grey";
        phone.style.backgroundColor = "transparent";
      }
    }
  };

  const phoneClick = (e) => {
    if(userData.phone === ''){
      setUserData((actual) => {return { ...actual, phone: '+' }})
    }
  }

  return (
    <div className={s.divBlock}>

      <HelmetProvider>
        <Helmet>
          <html lang={localStorage.i18nextLng} />
          <meta charSet="utf-8" />
          <title>{t("contactTit")}</title>
          <meta name="description" content={t("contacDesc")} />
        </Helmet>
      </HelmetProvider>

      <LazyLoadImage src={image4} className={s.imageThanks} alt='lable'/>
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
                    <p className={s.p_1}><a style={{color: 'white'}} href="mailto:info@samwash.ua">info@samwash.ua</a></p>
                  </div>
                </div>

                <div className={s.div1Cont}>
                  <p className={s.h2_1+' '+s.p_1_3}>{t(`feedback`)}</p>
                  <div className={s.divInput1}>
                    <input className={s.inputUser+' '+s.input1} type="text" title="name" placeholder={`${t("enterName")}`}
                           onChange={(e) => {setUserData((actual) => {
                        return { ...actual, [e.target.title]: e.target.value };
                      });
                    }} />
                    <input className={s.inputUser+' '+s.input1} type="text" title="phone" id="phone" value={userData.phone}
                           placeholder={`${t("enterYourPhoneNumber")}`} onChange={onBlur2} onClick={phoneClick} />
                    <input className={s.inputUser+' '+s.input1} type="email" title="email" id="email" value={userData.email}
                           placeholder={`${t("enterEmail")}`} onChange={onBlur} />
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
                    <p className={s.p_1}><a style={{color: 'white'}} href="mailto:info@samwash.ua">info@samwash.ua</a></p>
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
                    <input className={s.inputUser+' '+s.input1} type="text" title="phone" id="phone" value={userData.phone}
                           placeholder={`${t("enterYourPhoneNumber")}`} onChange={onBlur2} onClick={phoneClick} />
                    <input className={s.inputUser+' '+s.input1} type="email" title="email" id="email" value={userData.email}
                           placeholder={`${t("enterEmail")}`} onChange={onBlur} />
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