import React, { useState } from "react";
import s from "./component/Home.module.css";
import "./App.css";
import { useTranslation } from 'react-i18next'
import { Link, Route, Routes, useNavigate, NavLink } from "react-router-dom";
import { Header } from "./Header";
import { Users } from "./users";
import Table from "./component/Table";
import Home from "./component/Home";
import Senks from "./component/Senks";
import Obl from "./page/Obl";
import Nacr from "./page/Nacr";
import Acses from "./page/Acses";
import Footer from "./component/Footer";
import { useDispatch } from "react-redux";
import { fetchMail, fetchMailUser, fetchPay } from "./API/post";
import App2 from "./test/App2";


let userOrder = [];

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

  const { t, i18n } = useTranslation()

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const noScroll = () => {
    let con = document.getElementById("lightblue");
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
      let con = document.getElementById("lightblue");
      con.style.visibility = "hidden";
      let obj = {
        total: total,
        order: userOrder,
        user: userData
      };
      await dispatch(fetchPay(obj))
        .then(res => console.log(res.meta));
      dispatch(fetchMail(obj));
      if (!checked) {
        dispatch(fetchMailUser(obj));
      }
      Users.forEach(user => user.size = 0);
      Users.forEach(user => user.total = user.prise);
      nullAll();
      navigate("/senks");
    }
  };

  const hiddeItem = () => {
    let con = document.getElementById("lightblue");
    con.style.visibility = "hidden";
  };

  let activeStyle = {
    backgroundColor: "DF4242",
    color: '#FFFFFF',
    border: 'none'
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    setLang(language)
  }


  return (
    <div className="App">
      <Header t={t} />
      {/*<Home data={Users} />*/}

      {
        onFooter ? ""
          : <>
          <div className={s.translateDiv}>
            <button className={s.trBut+' '+`${lang == 'en' ? s.color : ''}`} onClick={() => changeLanguage("en")}>EN</button>
            <button className={s.trBut+' '+`${lang == 'ua' ? s.color : ''}`} onClick={() => changeLanguage("ua")}>UA</button>
          </div>
            <div className={s.divName}>
              <h3 className={s.h3Title}>{t("title")}</h3>
              <h6 className={s.h6Title}>{t("step")}:</h6>
            </div>
            <div className={s.divTitle}>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle+' '+s.title1} to="/">{t("equipment")}</NavLink>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle} to="/nacr">{t("cover")}</NavLink>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle} to="/acses">{t("accessories")}</NavLink>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle} to="/bud">{t("construction")}</NavLink>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle} to="/doc">{t("documentation")}</NavLink>
            </div>
          </>
      }

      <div id="lightblue" className={s.orderBlock}>
        <div className={s.userdata}>
          <div className={s.ix}>
            <span style={{ margin: '5px 15px 0 0', color: '#BBB9B9', cursor: 'pointer' }} onClick={hiddeItem}>&#10006;</span>
          </div>
          <p className={s.titleUser}>{t("getAnOffer")}</p>
          <br />
          <p className={s.descSpan}>{t("desc")}</p>
          <br />
          <input className={s.inputUser} type="text" title="name"
                 placeholder={`${t("enterName")}`} onChange={(e) => {
            setUserData((actual) => {
              return { ...actual, [e.target.title]: e.target.value };
            });
          }} />
          <input className={s.inputUser} type="email" title="email"
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
              checked2
                // ?  <input id="date" type="date" onBlur={valueDate} />
                // ? <Datepicker controls={["calendar", "time"]} locale={localeUa}
                //               value={selected} onChange={selectedChange}
                //               placeholder='встановити дату'/>
                // ? <DatePicker/>
                // : ""
            }

          <br />
          <button className={s.footerBut} style={{ width: "50%" }} onClick={useSubmit}>{t("send")}</button>
        </div>
      </div>

      <Routes>
        {/*<Route path="/table" element={<Table data={Users} />} />*/}
        {/*<Route path='/' element={<Home data={Users} />} />*/}
        <Route path="/senks" element={<Senks setOnFooter={setOnFooter} />} />
        <Route path="/" element={<Obl t={t} data={Users} userOrder={userOrder}
                                      setTotal={setTotal} total={total} />} />
        <Route path="/nacr" element={<Nacr t={t} data={Users} userOrder={userOrder}
                                           setTotal={setTotal} total={total} />} />
        <Route path="/acses" element={<Acses t={t} data={Users} userOrder={userOrder}
                                             setTotal={setTotal} total={total} />} />
        <Route path="/test" element={<App2 data={Users} />} />
      </Routes>

      {
        onFooter ? ""
          : <>
            <div className={s.divTitle}>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle+' '+s.title1} to="/">{t("equipment")}</NavLink>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle} to="/nacr">{t("cover")}</NavLink>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle} to="/acses">{t("accessories")}</NavLink>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle} to="/bud">{t("construction")}</NavLink>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle} to="/doc">{t("documentation")}</NavLink>
            </div>
            <div className={s.empty}></div>
            <Footer total={total} noScroll={noScroll} t={t} setOnFooter={setOnFooter} />
          </>
      }

      {/*{*/}
      {/*  onFooter ? ""*/}
      {/*    : <Footer total={total} noScroll={noScroll} setOnFooter={setOnFooter} />*/}
      {/*}*/}
    </div>
  );
};

export default App;
