import React, { useEffect, useState } from "react";
import s from "./component/Home.module.css";
import "./App.css";
import { useTranslation } from "react-i18next";
import { Link, Route, Routes, useNavigate, NavLink, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { Users } from "./users";
import Table from "./old/Table";
import Home from "./old/Home";
import Thanks from "./component/Thanks";
import Obl from "./page/Obl";
import Nacr from "./page/Nacr";
import Acses from "./page/Acses";
import Footer from "./component/Footer";
import { useDispatch } from "react-redux";
import { fetchMail, fetchMailDima, fetchMailUser, fetchPay } from "./API/post";
import App2 from "./test/App2";
import Build from "./page/build";
import YourOrder from "./page/YourOrder";
import MainPage from "./page/MainPage";
import ListWash from "./component/ListWash";
import OnePost from "./page/listwash/OnePost";
import Breadcrumbs from "./Breadcrumbs";


let userOrder = [];
let urlKalk = '/obladnannya'
let nameKalk = 'equipment'

const App = () => {

  const [lang, setLang] = useState("ua");
  const [total, setTotal] = useState(0);
  const [checked, setChecked] = useState(false);
  const [dateT, setDate] = useState("");
  const [checked2, setChecked2] = useState(false);
  const [selected, setSelected] = useState(null);
  const [userData, setUserData] = useState({
    name: "", phone: "", email: "", cite: "", date: ""
  });
  const [onFooter, setOnFooter] = useState(false);
  const [onMain, setOnMain] = useState(false);
  const [postOne, setPostOne] = useState(null)

  const { t, i18n } = useTranslation();

  const { id } = useParams();

  const location = useLocation()

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const url = location.pathname.slice(location.pathname.length-2) === 'en'
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
      navigate("/thanks");
    }
  };

  const hiddeItem = (e) => {
      let con = document.getElementById("lightblue2");
      con.style.visibility = "hidden";
  };

  let activeStyle = {
    backgroundColor: "DF4242",
    color: "#FFFFFF",
    border: "none"
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLang(language);
    if (language === "en") {
      if(window.location.pathname === '/'){
        navigate('/en')
      } else if(url){}
      else {
        navigate(`${window.location.pathname}/en`);
      }
    } else {
      if(url){
        navigate(`${window.location.pathname.slice(0, window.location.pathname.length -3)}`);
      }
    }
  };

  urlKalk = location.pathname
  const clickBread = (e) => {
    nameKalk = e.target.id
  }

  return (
    <div className="App">
      <Header t={t} changeLanguage={changeLanguage} lang={lang} />
        <>
          {
            onFooter ? ""
              : <>

                {
                  <div className="breadcrumbs">
                    <Link className="breads" to={urlKalk}>{t(`${nameKalk}`)}</Link>
                  </div>
                }

                {/*{*/}
                {/*  location.pathname === '/' ? '' : <Breadcrumbs />*/}
                {/*}*/}

                <div className={s.divName}>
                  <h3 className={s.h3Title}>{t("title")}</h3>
                  <h6 className={s.h6Title}>{t("step")}:</h6>
                </div>
                {
                  lang == 'ua' ?
                  <div className={s.divTitle} onClick={clickBread}>
                  <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} id='equipment'
                           className={s.spanTitle + " " + s.title1} to="/obladnannya">{t("equipment")}</NavLink>
                  <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                           to="/nakritya" id='cover'>{t("cover")}</NavLink>
                  <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                           to="/aksesyari" id='accessories'>{t("accessories")}</NavLink>
                  <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                           to="/budivnitstvo" id='construction'>{t("construction")}</NavLink>
                  <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                           to="/doc" id='documentation'>{t("documentation")}</NavLink>
                </div>
                :
                    <div className={s.divTitle} onClick={clickBread}>
                      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} id='equipment'
                               className={s.spanTitle + " " + s.title1} to="/obladnannya/en">{t("equipment")}</NavLink>
                      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                               to="/nakritya/en" id='cover'>{t("cover")}</NavLink>
                      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                               to="/aksesyari/en" id='accessories'>{t("accessories")}</NavLink>
                      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                               to="/budivnitstvo/en" id='construction'>{t("construction")}</NavLink>
                      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                               to="/doc/en" id='documentation'>{t("documentation")}</NavLink>
                    </div>
                }
              </>
          }

          {
            // lang == 'ua' ?
              <Routes>
                <Route path="/" element={<MainPage t={t} setOnFooter={setOnFooter} />} />
                <Route path="/thanks" element={<Thanks setOnFooter={setOnFooter} />} />
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
                <Route path="/nashi-avtomiyki" element={<ListWash setOnFooter={setOnFooter} changeLanguage={changeLanguage}
                                                                  t={t} setPostOne={setPostOne} lang={lang} />} />
                <Route path="/nashi-avtomiyki/wsi" element={<ListWash setOnFooter={setOnFooter} changeLanguage={changeLanguage}
                                                                      t={t} setPostOne={setPostOne} lang={lang} />} />
                <Route path="/nashi-avtomiyki/:id" element={<ListWash setOnFooter={setOnFooter} changeLanguage={changeLanguage}
                                                                      t={t} setPostOne={setPostOne} lang={lang} />} />
                <Route path="/nashi-avtomiyki/:id/:post" element={<ListWash setOnFooter={setOnFooter} changeLanguage={changeLanguage}
                                                                            t={t} setPostOne={setPostOne} lang={lang} />} />
                <Route path="/nashi-avtomiyki/miyka/:id/:post/:idMiyka" element={<OnePost setPostOne={setPostOne}
                  setOnFooter={setOnFooter} postOne={postOne} t={t} lang={lang} />} />
                <Route path="/nashi-avtomiyki/miyka/:id/:idMiyka" element={<OnePost setPostOne={setPostOne}
                  setOnFooter={setOnFooter} postOne={postOne} t={t} lang={lang} />} />
              {/*</Routes>*/}
              {/*:*/}
              {/*<Routes>*/}
                <Route path="/en" element={<MainPage t={t} setOnFooter={setOnFooter} />} />
                <Route path="/thanks/en" element={<Thanks setOnFooter={setOnFooter} />} />
                <Route path="/obladnannya/en" element={<Obl t={t} data={Users} userOrder={userOrder}
                                                    setTotal={setTotal} total={total} />} />
                <Route path="/en" element={<MainPage t={t} setOnFooter={setOnFooter} />} />
                <Route path="/nacr/en" element={<Nacr t={t} data={Users} userOrder={userOrder}
                                                      setTotal={setTotal} total={total} />} />
                <Route path="/acses/en" element={<Acses t={t} data={Users} userOrder={userOrder}
                                                        setTotal={setTotal} total={total} />} />
                <Route path="/build/en" element={<Build t={t} data={Users} userOrder={userOrder}
                                                        setTotal={setTotal} total={total} />} />
                <Route path="/test/en" element={<App2 data={Users} />} />
                <Route path="/your-order/:id/en" element={<YourOrder setOnFooter={setOnFooter} />} />
                <Route path="/nashi-avtomiyki/en" element={<ListWash setOnFooter={setOnFooter} changeLanguage={changeLanguage}
                                                                     t={t} setPostOne={setPostOne} lang={lang} />} />
                <Route path="/nashi-avtomiyki/wsi/en" element={<ListWash setOnFooter={setOnFooter} changeLanguage={changeLanguage}
                                                                         t={t} setPostOne={setPostOne} lang={lang} />} />
                <Route path="/nashi-avtomiyki/:id/en" element={<ListWash setOnFooter={setOnFooter} changeLanguage={changeLanguage}
                                                                         t={t} setPostOne={setPostOne} lang={lang} />} />
                <Route path="/nashi-avtomiyki/:id/:post/en" element={<ListWash setOnFooter={setOnFooter} changeLanguage={changeLanguage}
                                                                               t={t} setPostOne={setPostOne} lang={lang} />} />
                <Route path="/nashi-avtomiyki/miyka/:id/:post/:idMiyka/en" element={<OnePost setPostOne={setPostOne}
                                                                                          setOnFooter={setOnFooter} postOne={postOne} t={t} lang={lang} />} />
                <Route path="/nashi-avtomiyki/miyka/:id/:idMiyka/en" element={<OnePost setPostOne={setPostOne}
                                                                                    setOnFooter={setOnFooter} postOne={postOne} t={t} lang={lang} />} />
              </Routes>
          }

          <div id="lightblue2" className={s.orderBlock}>
            <div className={s.userdata}>
              <div className={s.ix}>
                <span style={{ margin: "5px 15px 0 0", color: "#BBB9B9", cursor: "pointer" }}
                      onClick={hiddeItem} id='x1'>&#10006;</span>
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
              {/*<div className={s.boxCheck2}>*/}
              {/*  <input onChange={checkedClick2} className={s.inputCheck}*/}
              {/*         type="checkbox" checked={checked2} />*/}
              {/*  <span>{t("orderAConsultation")}</span>*/}
              {/*</div>*/}
              {/*{*/}
              {/*  // checked2 &&*/}
                {/*// ?  <input id="date" type="date" onBlur={valueDate} />*/}
                {/*// ? <Datepicker controls={["calendar", "time"]} locale={localeUa}*/}
                {/*//               value={selected} onChange={selectedChange}*/}
                {/*//               placeholder='встановити дату'/>*/}
                {/*// ? <DatePicker/>*/}
                {/*// : ""*/}
               {/*}*/}

              <br />
              <button className={s.footerBut} style={{ width: "50%" }} onClick={useSubmit}>{t("send")}</button>
            </div>
          </div>

          {
            onFooter ? ""
              : <>
                {
                  lang == 'ua' ?
                    <div className={s.divTitle}>
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
                    :
                    <div className={s.divTitle}>
                      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined}
                               className={s.spanTitle + " " + s.title1} to="/obladnannya/en">{t("equipment")}</NavLink>
                      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                               to="/nakritya/en">{t("cover")}</NavLink>
                      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                               to="/aksesyari/en">{t("accessories")}</NavLink>
                      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                               to="/budivnitstvo/en">{t("construction")}</NavLink>
                      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                               to="/doc/en">{t("documentation")}</NavLink>
                    </div>
                }
                <div className={s.empty}></div>
                {
                  userOrder.length > 0 && <Footer total={total} noScroll={noScroll} t={t} setOnFooter={setOnFooter} />
                }
              </>
          }

        </>
    </div>
  );
};

export default App;
