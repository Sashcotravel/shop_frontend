import React, { useEffect, useState, Suspense, useLayoutEffect } from "react";
import s from "./component/Home.module.css";
import "./App.css";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Link, Route, Routes, useNavigate, NavLink, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { Users } from "./users";
import Table from "./old/Table";
import Home from "./old/Home";
import Thanks from "./component/Thanks";
import Obl from "./page/Obl";
// import Nacr from "./page/Nacr";
// import Acses from "./page/Acses";
import Footer from "./component/Footer";
import { useDispatch } from "react-redux";
import { fetchMail, fetchMailDima, fetchMailUser, fetchPay } from "./API/post";
import App2 from "./test/App2";
import Build from "./page/build";
import MainPage from "./page/MainPage";
// import YourOrder from "./page/YourOrder";
import ListWash from "./component/ListWash";
// import OnePost from "./page/listwash/OnePost";
import FooterMain from "./component/FooterMain";
import ListWash123 from "./TestSelect";
import { LanguageSwitcher, removeLngPrefix } from "./18n";
import i18next from "i18next";


let userOrder = [];
let urlKalk = "/obladnannya";
let nameKalk = "equipment";

const App = () => {

  const [total, setTotal] = useState(0);
  const [checked, setChecked] = useState(false);
  const [dateT, setDate] = useState("");
  const [checked2, setChecked2] = useState(false);
  const [selected, setSelected] = useState(null);
  const [userData, setUserData] = useState({
    name: "", phone: "", email: "", cite: "", date: "" });
  const [onFooter, setOnFooter] = useState(false);
  const [onMain, setOnMain] = useState(false);
  const [postOne, setPostOne] = useState(null);

  const { t, i18n: { language } } = useTranslation();

  const { id } = useParams();

  const dispatch = useDispatch();

  // const ListWash = React.lazy(() => import('./component/ListWash'))
  const YourOrder = React.lazy(() => import("./page/YourOrder"));
  const OnePost = React.lazy(() => import("./page/listwash/OnePost"));
  const Nacr = React.lazy(() => import("./page/Nacr"));
  const Acses = React.lazy(() => import("./page/Acses"));

  useLayoutEffect(() => {
    const currentPathname = window.location.pathname;
    const newPathname = `/${language}${removeLngPrefix(currentPathname)}`;

    if (currentPathname !== newPathname) {
      window.location.replace(newPathname);
    }


  }, []);

  useEffect(() => {
    if(language === 'uk-UA'){
      const switcher = (lng) => {
        i18next.changeLanguage(lng)
        window.location.replace(
          `/${lng}${window.location.pathname}`
        )
      }

      switcher('ua')
    }
    if(language === 'en-US'){
      const switcher = (lng) => {
        i18next.changeLanguage(lng)
        window.location.replace(
          `/${lng}${window.location.pathname}`
        )
      }

      switcher('ua')
    }
    else if (window.location.pathname === '/ua/ua/'){
      window.location.replace(
        `/ua/`
      )
    }
    else if (window.location.pathname === '/en/en/'){
      window.location.replace(
        `/en/`
      )
    }
    else if (window.location.pathname === '/ua/en/'){
      window.location.replace(
        `/ua/`
      )
    }
    else if (window.location.pathname === '/en/ua/'){
      window.location.replace(
        `/en/`
      )
    }
  }, []);


  const noScroll = () => {
    let con = document.getElementById("lightblue2");
    con.style.visibility = "visible";
  };

  const checkedClick = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  const checkedClick2 = () => {
    if (checked2) {
      setChecked2(false);
    } else {
      setChecked2(true);
    }
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
    // let con = document.querySelectorAll("[id='lightblue']")
    // con.forEach(e => e.value = '')
  };

  const useSubmit = async () => {
    if (total > 0) {
      let con = document.getElementById("lightblue2");
      con.style.visibility = "hidden";
      let obj = {
        total: total,
        order: userOrder,
        user: userData
      };
      const d = await dispatch(fetchPay(obj));
      let link = "http://localhost:3000/your-order/" + d.payload;
      console.log(link);
      dispatch(fetchMail(obj));
      dispatch(fetchMailDima(obj));
      dispatch(fetchMailUser(obj));

      Users.forEach(user => user.size = 0);
      Users.forEach(user => user.total = user.prise);
      nullAll();
    }
  };

  const hiddeItem = (e) => {
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

  urlKalk = window.document.location.pathname.slice(3)
  const clickBread = (e) => { nameKalk = e.target.id };

  const style = { margin: "10px auto 60px 125px" };

  return (
    <Router basename={`/${language}/`}>
      <div className="App">
        <Header t={t} />
        <>
          {
            onFooter ? ""
              : <>

                {
                  <div className="breadcrumbs" style={window.screen.availWidth > 900 ? style : undefined}>
                    <Link className="breads" to={urlKalk}>{t(`${nameKalk}`)}</Link>
                  </div>
                }

                {/*{*/}
                {/*  location.pathname === '/' ? '' : <Breadcrumbs />*/}
                {/*}*/}

                <div className={s.divName}>
                  <h3 className={s.h3Title}>{t("title")}</h3>
                  {
                    window.screen.width > 900 &&
                    <span className={s.pTitle}>Короткий текст-пояснення про що цей калькулятор: що можна
                    порахувати вартість нової мийки, або шо можна замовити тільки
                    частину обладнання яке цікавить, або просто ознайомитись з
                    нашими цінами та асортиментом;)</span>
                  }
                </div>

                <div className={s.divH6}>
                  <h6 className={s.h6Title}>{t("step")}:</h6>
                </div>

                {
                  <div className={s.divTitle} onClick={clickBread}>
                    <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} id="equipment"
                             className={s.spanTitle} to="/obladnannya">{t("equipment")}</NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                             to="/nakritya" id="cover">{t("cover")}</NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                             to="/aksesyari" id="accessories">{t("accessories")}</NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                             to="/budivnitstvo" id="construction">{t("construction")}</NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                             to="/doc" id="documentation">{t("documentation")}</NavLink>
                  </div>
                }
              </>
          }

          {
            <Suspense fallback={<h1 style={{ color: "white" }}>Завантаження...</h1>}>
              <Routes>
                {/*<Route path={`/${language}/`} element={<MainPage t={t} setOnFooter={setOnFooter} />} />*/}
                <Route path="/" element={<MainPage t={t} setOnFooter={setOnFooter} />} />
                <Route path="/uk-UA/" element={<MainPage t={t} setOnFooter={setOnFooter} />} />
                <Route path="/thanks" element={<Thanks setOnFooter={setOnFooter} t={t} checked={checked} />} />
                <Route path="/obladnannya" element={<Obl t={t} data={Users} userOrder={userOrder}
                                                         setTotal={setTotal} total={total} />} />
                <Route path="/nakritya" element={<Nacr t={t} data={Users} userOrder={userOrder}
                                                       setTotal={setTotal} total={total} />} />
                <Route path="/aksesyari" element={<Acses t={t} data={Users} userOrder={userOrder}
                                                         setTotal={setTotal} total={total} />} />
                <Route path="/budivnitstvo" element={<Build t={t} data={Users} userOrder={userOrder}
                                                            setTotal={setTotal} total={total} />} />
                <Route path="/test" element={<App2 data={Users} />} />
                <Route path="/your-order/:id" element={<YourOrder setOnFooter={setOnFooter} />} />
                <Route path="/nashi-avtomiyki"
                       element={<ListWash setOnFooter={setOnFooter} t={t} setPostOne={setPostOne} />} />
                <Route path="/nashi-avtomiyki/wsi"
                       element={<ListWash setOnFooter={setOnFooter} t={t} setPostOne={setPostOne}  />} />
                <Route path="/nashi-avtomiyki/:id"
                       element={<ListWash setOnFooter={setOnFooter} t={t} setPostOne={setPostOne}  />} />
                <Route path="/nashi-avtomiyki/:id/:post"
                       element={<ListWash setOnFooter={setOnFooter} t={t} setPostOne={setPostOne}  />} />
                <Route path="/nashi-avtomiyki/miyka/:id/:post/:idMiyka" element={<OnePost setPostOne={setPostOne}
                                                                                          setOnFooter={setOnFooter}
                                                                                          postOne={postOne} t={t}
                                                                                           />} />
                <Route path="/nashi-avtomiyki/miyka/:id/:idMiyka" element={<OnePost setPostOne={setPostOne}
                                                                                    setOnFooter={setOnFooter}
                                                                                    postOne={postOne} t={t}
                                                                                     />} />
                {/* TEST START  */}

                <Route path="/test/nashi-avtomiyki/:id"
                       element={<ListWash123 setOnFooter={setOnFooter} t={t} setPostOne={setPostOne}/>} />
                <Route path="/test/nashi-avtomiyki/wsi"
                       element={<ListWash123 setOnFooter={setOnFooter} t={t} setPostOne={setPostOne} />} />
                <Route path="/test/nashi-avtomiyki/:id/:post"
                       element={<ListWash123 setOnFooter={setOnFooter} t={t} setPostOne={setPostOne}/>} />

                {/* TEST END  */}


                {/*  <Route path="/en" element={<MainPage t={t} setOnFooter={setOnFooter} />} />*/}
                {/*  <Route path="/thanks/en" element={<Thanks setOnFooter={setOnFooter} />} />*/}
                {/*  <Route path="/obladnannya/en" element={<Obl t={t} data={Users} userOrder={userOrder}*/}
                {/*                                              setTotal={setTotal} total={total} />} />*/}
                {/*  <Route path="/nakritya/en" element={<Nacr t={t} data={Users} userOrder={userOrder}*/}
                {/*                                            setTotal={setTotal} total={total} />} />*/}
                {/*  <Route path="/aksesyari/en" element={<Acses t={t} data={Users} userOrder={userOrder}*/}
                {/*                                              setTotal={setTotal} total={total} />} />*/}
                {/*  <Route path="/budivnitstvo/en" element={<Build t={t} data={Users} userOrder={userOrder}*/}
                {/*                                                 setTotal={setTotal} total={total} />} />*/}
                {/*  <Route path="/test/en" element={<App2 data={Users} />} />*/}
                {/*  <Route path="/your-order/:id/en" element={<YourOrder setOnFooter={setOnFooter} />} />*/}
                {/*  <Route path="/nashi-avtomiyki/en"*/}
                {/*         element={<ListWash setOnFooter={setOnFooter} changeLanguage={changeLanguage}*/}
                {/*                            t={t} setPostOne={setPostOne} lang={lang} />} />*/}
                {/*  <Route path="/nashi-avtomiyki/wsi/en"*/}
                {/*         element={<ListWash setOnFooter={setOnFooter} changeLanguage={changeLanguage}*/}
                {/*                            t={t} setPostOne={setPostOne} lang={lang} />} />*/}
                {/*  <Route path="/nashi-avtomiyki/:id/en"*/}
                {/*         element={<ListWash setOnFooter={setOnFooter} changeLanguage={changeLanguage}*/}
                {/*                            t={t} setPostOne={setPostOne} lang={lang} />} />*/}
                {/*  <Route path="/nashi-avtomiyki/:id/:post/en"*/}
                {/*         element={<ListWash setOnFooter={setOnFooter} changeLanguage={changeLanguage}*/}
                {/*                            t={t} setPostOne={setPostOne} lang={lang} />} />*/}
                {/*  <Route path="/nashi-avtomiyki/miyka/:id/:post/:idMiyka/en" element={<OnePost setPostOne={setPostOne}*/}
                {/*                                                                               setOnFooter={setOnFooter}*/}
                {/*                                                                               postOne={postOne} t={t}*/}
                {/*                                                                               lang={lang} />} />*/}
                {/*  <Route path="/nashi-avtomiyki/miyka/:id/:idMiyka/en" element={<OnePost setPostOne={setPostOne}*/}
                {/*                                                                         setOnFooter={setOnFooter}*/}
                {/*                                                                         postOne={postOne} t={t}*/}
                {/*                                                                         lang={lang} />} />*/}
                {/*  <Route path="/test/nashi-avtomiyki/:id/en"*/}
                {/*         element={<ListWash123 setOnFooter={setOnFooter} changeLanguage={changeLanguage}*/}
                {/*                               t={t} setPostOne={setPostOne} lang={lang} />} />*/}
              </Routes>
            </Suspense>
          }

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
                     placeholder={`${t("enterName")}`} onChange={(e) => {
                setUserData((actual) => {
                  return { ...actual, [e.target.title]: e.target.value };
                });
              }} />
              <input className={s.inputUser} type="email" title="email" required
                     placeholder={`${t("enterEmail")}`} onChange={(e) => {
                setUserData((actual) => {
                  return { ...actual, [e.target.title]: e.target.value };
                });
              }} />
              <input className={s.inputUser} type="text" title="phone"
                     placeholder={`${t("enterYourPhoneNumber")}`} onChange={(e) => {
                setUserData((actual) => {
                  return { ...actual, [e.target.title]: e.target.value };
                });
              }} />
              <br />
              <div className={s.boxCheck}>
                <input className={s.inputCheck} type="checkbox"
                       checked={checked} onChange={checkedClick} />
                <p>{t("don'tCallMe")}</p>
              </div>
              <div className={s.boxCheck2}>
                <input onChange={checkedClick2} className={s.inputCheck}
                       type="checkbox" checked={checked2} />
                <span>{t("orderAConsultation")}</span>
              </div>
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
              <button className={s.footerBut} style={{ width: "50%", backgroundColor: '#42DF4C' }} onClick={useSubmit}><Link style={{color: '#FFFFFF'}} to='/thanks'>{t("send")}</Link></button>
            </div>
          </div>

          {
            onFooter ? ""
              : <>
                {
                    <div className={s.divTitle} style={{ marginTop: "90px" }}>
                      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined}
                               className={s.spanTitle + " " + s.title1} to="/obladnannya">{t("equipment")}</NavLink>
                      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                               to="/nakritya">{t("cover")}</NavLink>
                      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                               to="/aksesyari">{t("accessories")}</NavLink>
                      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                               to="/budivnitstvo">{t("construction")}</NavLink>
                      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                               to="/doc">{t("documentation")}</NavLink>
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
