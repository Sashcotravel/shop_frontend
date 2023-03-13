import React, { useEffect, useState, Suspense, useLayoutEffect, memo } from "react";
import s from "./component/Home.module.css";
import "./App.css";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Link, Route, Routes, NavLink, HashRouter } from "react-router-dom";
import { Header } from "./Header";
import { Users } from "./users";
import MainPage from "./page/MainPage";
import Obl from "./page/Obl";
import Nacr from "./page/Nacr";
import Acses from "./page/Acses";
import { useDispatch } from "react-redux";
import { fetchCaptcha, fetchMail, fetchMailDima, fetchMailUser, fetchPay } from "./API/post";
import ListWash from "./component/ListWash";
import { removeLngPrefix } from "./18n";
import i18next from "i18next";
import FooterMain from "./component/FooterMain";
import Footer from "./component/Footer";
import { loadReCaptcha, reCaptchaExecute } from 'recaptcha-v3-react-function-async'
import OpenBox from "./page/OpenBox";
import DocumentsPage from "./page/DocumentsPage";
import Error from "./page/error/Error";


// import Thanks from "./component/Thanks";
// import Build from "./page/build";
// import Contacts from "./component/Contacs";
// const ListWash = React.lazy(() => import('./component/ListWash'))
// import YourOrder from "./page/YourOrder";
// import Table from "./old/Table";
// import Home from "./old/Home";
// import OnePost from "./page/listwash/OnePost";
// const Nacr = React.lazy(() => import("./page/Nacr"));
// const Acses = React.lazy(() => import("./page/Acses"));
const YourOrder = React.lazy(() => import("./page/YourOrder"));
const OnePost = React.lazy(() => import("./page/listwash/OnePost"));
const Contacts = React.lazy(() => import("./component/Contacs"));
const Build = React.lazy(() => import("./page/build"));
const Thanks = React.lazy(() => import("./component/Thanks"));



let userOrder = [];
let obj = {}

const App = () => {

  const [userData, setUserData] = useState({
    name: "", phone: "", email: "", cite: "", date: '' });
  const [formPass, setFormPass] = useState({
    phone: false, email: false });
  const [total, setTotal] = useState(0);
  const [checked, setChecked] = useState(false);
  const [dateT, setDate] = useState("");
  const [checked2, setChecked2] = useState(false);
  const [selected, setSelected] = useState(null);
  const [onFooter, setOnFooter] = useState(false);
  const [onMain, setOnMain] = useState(false);
  const [postOne, setPostOne] = useState(null);
  const [meneger, setMeneger] = useState(true);
  const [url, setUrl] = useState(true);
  const [color, setColor] = useState(false)

  const { t, i18n: { language } } = useTranslation();
  const dispatch = useDispatch()
  const key = '6LeDKr8kAAAAAOvhuveRpPUklVNHNdIID4YtceQl'
  const screen = window.screen.availWidth > 600

  useLayoutEffect(() => {
    const currentPathname = window.location.pathname;
    const newPathname = `/${language}${removeLngPrefix(currentPathname)}`;

    if (currentPathname === '/ua/') { window.location.pathname = '/' }
    // else if (currentPathname !== newPathname) {
      // window.location.replace(newPathname)
    // }
  }, []);

  useEffect(() => {
    if(language === 'uk-UA'){
      const switcher = (lng) => {
        i18next.changeLanguage(lng)
        // window.location.replace(``)
      }

      switcher('ua')
    }
    // if(language === 'uk-UA'){
    //   const switcher = (lng) => {
    //     i18next.changeLanguage(lng)
    //     window.location.replace(`/${lng}${window.location.pathname}`)
    //   }
    //
    //   switcher('ua')
    // }
    if(language === 'en-US'){
      const switcher = (lng) => {
        i18next.changeLanguage(lng)
        window.location.replace(`/${lng}${window.location.pathname}`)
      }

      switcher('en')
    }
    if(language === 'ru-RU'){
      const switcher = (lng) => {
        i18next.changeLanguage(lng)
        window.location.replace(`/${lng}${window.location.pathname}`)
      }

      switcher('ru')
    }
    else if (window.location.pathname.slice(0, 7) === '/ua/ua/'){
      window.location.replace(``)
    }
    else if (window.location.pathname.slice(0, 4) === '/ua/'){
      window.location.pathname = '/' + window.location.pathname.slice(4)
      // window.location.replace(``)
    }
    else if (window.location.pathname === '/ua/'){
      window.location.pathname = '/'
      // window.location.replace(``)
    }
    else if (window.location.pathname.slice(0, 7) === '/' && language === 'en'){
      window.location.replace(`/en/`)
    }
    else if (window.location.pathname.slice(0, 7) === '/' && language === 'ru'){
      window.location.replace(`/ru/`)
    }
    else if (window.location.pathname.slice(0, 7) === '/en/en/'){
      window.location.replace(`/en/`)
    }
    else if (window.location.pathname.slice(0, 7) === '/ua/en/'){
      window.location.replace(`/en/`)
    }
    else if (window.location.pathname.slice(0, 7) === '/en/ua/'){
      window.location.replace(``)
    }
    else if (window.location.pathname.slice(0, 7) === '/ua/ru/'){
      window.location.replace(`/ru/`)
    }
    else if (window.location.pathname.slice(0, 7) === '/ru/ru/'){
      window.location.replace(`/ru/`)
    }
    else if (window.location.pathname.slice(0, 7) === '/ru/ua/'){
      window.location.replace(`/ru/`)
    }
    else if (window.location.pathname.slice(0, 7) === '/ru/en/'){
      window.location.replace(`/ru/`)
    }
  }, []);

  useEffect (()=>{
    loadReCaptcha('6LeDKr8kAAAAAOvhuveRpPUklVNHNdIID4YtceQl')
      .then(() => {console.log('ReCaptcha loaded')})
      .catch((e) => {console.error('Error when load ReCaptcha', e)})
  }, [])


  const noScroll = () => {
    let con = document.getElementById("lightblue2");
    con.style.visibility = "visible";
  };

  const checkedClick = () => {
    if (checked) { setChecked(false) }
    else { setChecked(true) }
  };

  const checkedClick2 = () => {
    if (checked2) {setChecked2(false) }
    else { setChecked2(true) }
  };

  const selectedChange = (ev) => {
    setSelected(ev.value);
    // let date = ev.value.toString();
    // setDate(date.slice(0, 25));
    // setUserData((actual) => {
    //   return { ...actual, date: date.slice(0, 25) };
    // });
  };

  const nullAll = () => {
    setUserData((actual) => {
      return { ...actual, name: "", phone: "", email: "", cite: "" };
    });
    setTotal(0);
    userOrder = [];
  };

  const hiddeItem = () => {
    let con = document.getElementById("lightblue2");
    con.style.visibility = "hidden";
  };

  const blurClose = (e) => {
    if(e.target.id === "lightblue2"){
      let con = document.getElementById("lightblue2");
      con.style.visibility = "hidden";
    }
  };

  let activeStyle = {
    backgroundColor: "#DF4242",
    color: "#FFFFFF",
    border: "none"
  };

  const style = { margin: "0 auto 60px 125px" };

  const onBlur = (e) => {
    let email = document.getElementById('email')
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!re.test(String(e.target.value).toLowerCase())){
      if(formPass.phone === false) {
        email.style.border = '2px solid red'
        email.style.backgroundCo1or = 'transparent'
        setFormPass((actual) => {
          return { ...actual, email: false }
        })
      }else {
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

  const changeBlur = (e) => {
    setUserData((actual) => {
      return { ...actual, [e.target.title]: e.target.value };
    });
    let phone = document.getElementById("phone");
    let regex = new RegExp(/^(\+|00)[1-9][0-9 \-\(\)\.]{10,32}$/);
    if (regex.test(e.target.value.toString()) === true) {
      phone.style.border = "none";
      phone.style.borderBottom = "2px solid grey";
      phone.style.backgroundColor = "transparent";
      setFormPass((actual) => {
        return { ...actual, phone: true };
      });
    } else {
      if (formPass.email === false) {
        phone.style.border = "2px solid red";
        phone.style.backgroundCo1or = "transparent";
        setFormPass((actual) => {
          return { ...actual, phone: false };
        });
      } else {
        phone.style.border = "none";
        phone.style.borderBottom = "2px solid grey";
        phone.style.backgroundColor = "transparent";
      }
    }
  };

  const useSubmit = async () => {
    if (total > 0) {
      if (formPass.email || formPass.phone) {
        obj = { total: total, order: userOrder, user: userData, checked };
        const d = await dispatch(fetchPay(obj));
        Users.forEach(user => user.size = 0);
        Users.forEach(user => user.total = user.prise);
        nullAll();
        setMeneger(true);
        hiddeItem();
        // let gtoken = await reCaptchaExecute(key, 'setting')
        // let res = await dispatch(fetchCaptcha({gtoken}))
        // if(res.payload){
        let link = "http://localhost:3000/your-order/" + d.payload;
        console.log(link);
        // dispatch(fetchMail(obj));
        // dispatch(fetchMailDima(obj));
        // dispatch(fetchMailUser(obj));
        // }
      }
    }
  };

  const phoneClick = () => {
    if(userData.phone === ''){
      setUserData((actual) => {return { ...actual, phone: '+' }})
    }
  }


  return (
    // <Router basename={`/${language}/`}>
    <Router basename={language === 'ua' ? '/' : `/${language}/`}>
      <div className="App">
        <Header t={t} />
        <>
          {
            onFooter ? ""
              : <>
                <div className="breadcrumbs" style={window.screen.availWidth > 900 ? style : undefined}>
                    <Link className="breads" to='/' style={{color: '#7d7d80'}}>{t("home")}</Link>
                    <span className="breads"> / {t(`${url}`)}</span>
                </div>

                <div className={s.divName}>
                  <h1 className={s.h3Title}>{t("title")}</h1>
                  { window.screen.width > 900 &&
                    <span className={s.pTitle}>Короткий текст-пояснення про що цей калькулятор: що можна
                    порахувати вартість нової мийки, або шо можна замовити тільки
                    частину обладнання яке цікавить, або просто ознайомитись з
                    нашими цінами та асортиментом;)</span> }
                </div>

                <div className={s.divH6}>
                  <h2 className={s.h6Title}>{t("step")}:</h2>
                </div>

              </>
          }

          <Suspense fallback={<h1 style={{ color: "white" }}>Завантаження...</h1>}>
            <Routes>
                <Route path={`/${language}/`} element={<MainPage t={t} setOnFooter={setOnFooter} setMeneger={setMeneger} setChecked={setChecked}/>} />
                <Route path={`/`} element={<MainPage t={t} setOnFooter={setOnFooter} setMeneger={setMeneger} setChecked={setChecked}/>} />
                <Route path="/thanks" element={<Thanks setOnFooter={setOnFooter} t={t} checked={checked} meneger={meneger} />} />
                <Route path="/contacts" element={<Contacts setOnFooter={setOnFooter} t={t} />} />
                <Route path="/obladnannya" element={<Obl t={t} data={Users} userOrder={userOrder} setUrl={setUrl}
                                                         setTotal={setTotal} total={total} />} />
                <Route path="/nakritya" element={<Nacr t={t} data={Users} userOrder={userOrder} setUrl={setUrl}
                                                       setTotal={setTotal} total={total} />} />
                <Route path="/vidkriti-box" element={<OpenBox t={t} data={Users} userOrder={userOrder} setUrl={setUrl}
                                                              setTotal={setTotal} total={total} />} />
                <Route path="/documentacia" element={<DocumentsPage t={t} data={Users} userOrder={userOrder} setUrl={setUrl}
                                                                    setTotal={setTotal} total={total} />} />
                <Route path="/aksesyari" element={<Acses t={t} data={Users} userOrder={userOrder} setUrl={setUrl}
                                                         setTotal={setTotal} total={total} />} />
                <Route path="/budivnitstvo" element={<Build t={t} data={Users} userOrder={userOrder} setUrl={setUrl}
                                                            setTotal={setTotal} total={total} />} />
                <Route path="/your-order/:id" element={<YourOrder setOnFooter={setOnFooter} />} />
                <Route path="/nashi-avtomiyki"
                       element={<ListWash setOnFooter={setOnFooter} t={t} setPostOne={setPostOne} />} />
                <Route path="/nashi-avtomiyki/wsi"
                       element={<ListWash setOnFooter={setOnFooter} t={t} setPostOne={setPostOne} />} />
                <Route path="/nashi-avtomiyki/:id"
                       element={<ListWash setOnFooter={setOnFooter} t={t} setPostOne={setPostOne} />} />
                <Route path="/nashi-avtomiyki/:id/:post"
                       element={<ListWash setOnFooter={setOnFooter} t={t} setPostOne={setPostOne} />} />
                <Route path="/nashi-avtomiyki/miyka/:id/:post/:idMiyka" element={<OnePost setPostOne={setPostOne} setOnFooter={setOnFooter}
                                                                                          postOne={postOne} t={t} setMeneger={setMeneger} setChecked={setChecked} />} />
                <Route path="/nashi-avtomiyki/miyka/:id/:idMiyka" element={<OnePost setPostOne={setPostOne} setOnFooter={setOnFooter}
                                                                                    postOne={postOne} t={t} setMeneger={setMeneger} setChecked={setChecked} />} />
                <Route path='*' element={<Error setOnFooter={setOnFooter} t={t} />}/>
            </Routes>
          </Suspense>

          <div id="lightblue2" onClick={blurClose} className={s.orderBlock}>
            <div className={s.userdata}>
              <div className={s.ix}>
                <span style={{ margin: "5px 15px 0 0", color: "#BBB9B9", cursor: "pointer" }}
                      onClick={hiddeItem} id="x1">&#10006;</span>
              </div>
              <p className={s.titleUser}>{t("getAnOffer")}</p>
              <br />
              <p className={s.descSpan}>{t("desc")}</p>
              <br />
              <input className={s.inputUser} type="name" title="name"
                     placeholder={`${t("enterName")}`} value={userData.name}  onChange={(e) => {
                setUserData((actual) => {
                  return { ...actual, [e.target.title]: e.target.value };
                });
              }} />
              <input className={s.inputUser} type="email" title="email" id="email" onBlur={onBlur}
                     placeholder={`${t("enterEmail")}`} value={userData.email} onChange={(e) => {
                setUserData((actual) => {
                  return { ...actual, [e.target.title]: e.target.value };
                });
              }} />
              <input className={s.inputUser} type="text" title="phone" id="phone"
                     placeholder={`${t("enterYourPhoneNumber")}`} value={userData.phone} onChange={changeBlur} onClick={phoneClick} />
              <br />
              <div className={s.boxCheck}>
                <input className={s.inputCheck} type="checkbox"
                       checked={checked} onChange={checkedClick} />
                <p>{t("don'tCallMe")}</p>
              </div>
              {/*<div className={s.boxCheck2}>*/}
              {/*  <input onChange={checkedClick2} className={s.inputCheck}*/}
              {/*         type="checkbox" checked={checked2} />*/}
              {/*  <span>{t("orderAConsultation")}</span>*/}
              {/*</div>*/}
              {
                // checked2 &&
              // ?  <input id="date" type="date" onBlur={valueDate} />
              // ? <Datepicker controls={["calendar", "time"]} locale={localeUa}
              //               value={selected} onChange={selectedChange}
              //               placeholder='встановити дату'/>
              // ? <DatePicker/>
              // : ""
              }

              <br />
              <div style={{margin: 'auto', display: 'flex', justifyContent: 'center'}}>
                <button className={s.footerBut+' '+s.size}
                        // style={{ width: "50%", backgroundColor: '#42DF4C' }}
                        onClick={useSubmit} disabled={!formPass.email && !formPass.phone}>
                  { formPass.email || formPass.phone ?
                      <Link style={{ color: "#FFFFFF" }} to="/thanks">{t("send")}</Link>
                      : t("send") }
                </button>
              </div>
            </div>
          </div>

          {
            onFooter ? ""
              : <>
                {
                  <div className={s.divTitle}>
                    <div><NavLink style={({ isActive }) => isActive ? activeStyle : undefined}
                                  className={s.spanTitle} to="/obladnannya">{t("equipment")}</NavLink></div>
                    <div> <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                                   to="/nakritya">{t("cover")}</NavLink></div>
                    <div><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle+' '+s.spanTit2}
                                  to="/vidkriti-box">{t("openBox")}</NavLink></div>
                    <div><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                                  to="/aksesyari">{t("accessories")}</NavLink></div>
                    <div><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                                  to="/budivnitstvo">{t("construction")}</NavLink></div>
                    <div><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                                  to="/documentacia">{t("documentation")}</NavLink></div>
                  </div>
                }
                <div className={s.empty}></div>
                {
                  userOrder.length > 0 && <Footer total={total} noScroll={noScroll} t={t} setOnFooter={setOnFooter} />
                }
                <FooterMain o={0} />
              </>
          }

        </>
      </div>
    </Router>
  );
};

export default App;
