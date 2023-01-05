import React, { useState } from "react";
import s from "./Home.module.css";
import "./App.css";
import { Link, Route, Routes, useNavigate, NavLink } from "react-router-dom";
import { Header } from "./Header";
import { Users } from "./users";
import Table from "./Table";
import Home from "./Home";
import Senks from "./Senks";
import Obl from "./page/Obl";
import Nacr from "./page/Nacr";
import Acses from "./page/Acses";
import Footer from "./Footer";
import moment from 'moment';
import { useDispatch } from "react-redux";
import { fetchMail, fetchMailUser, fetchPay } from "./API/post";
import App2 from "./test/App2";


let userOrder = [];

const App = () => {

  const [date1, setDate1] = useState(null);
  const [date, setDatex] = useState('');
  const [total, setTotal] = useState(0);
  const [checked, setChecked] = useState(false);
  const [dateT, setDate] = useState("");
  const [checked2, setChecked2] = useState(false);
  const [selected, setSelected] = useState(null);
  const [userData, setUserData] = useState({
    name: "", phone: "", email: "", cite: "", date: ""
  });
  const [onFooter, setOnFooter] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const noScroll = () => {
    // function noscroll() {
    //   window.scrollTo(0, 0);
    // }
    // function noscroll() {
      window.scroll(0, 0);
    // }

    window.addEventListener("scroll", window.scroll(0, 0));
    let con = document.getElementById("lightblue");
    con.style.visibility = "visible";

    // return () => {window.removeEventListener("scroll", noscroll);}
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
    console.log(ev.value);
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

  return (
    <div className="App">
      <Header />
      {/*<Home data={Users} />*/}

      {
        onFooter ? ""
          : <>
            <div className={s.divName}>
              <h3 style={{ margin: "14px 0 10px 20px" }} className={s.h3Title}>Калькулятор автомийки</h3>
              <h6 style={{ margin: "20px 0 10px 20px" }} className={s.h6Title}>Етапи виробництва:</h6>
            </div>
            <div className={s.divTitle}>
              <span style={{ margin: "0 8px 0 20px" }} activeClassName={s.active} className={s.spanTitle}><NavLink className={s.linkTitle} to="/">Обладнання</NavLink></span>
              <span className={s.spanTitle}><NavLink activeClassName={s.active} className={s.linkTitle} to="/nacr">Накриття</NavLink></span>
              <span className={s.spanTitle}><NavLink activeClassName={s.active} className={s.linkTitle} to="/acses">Аксесуари</NavLink></span>
              <span className={s.spanTitle}><NavLink activeClassName={s.active} className={s.linkTitle} to="/bud">Будівництво</NavLink></span>
              <span className={s.spanTitle}><NavLink activeClassName={s.active} className={s.linkTitle} to="/doc">Документація</NavLink></span>
            </div>
          </>
      }

      <div id="lightblue" className={s.orderBlock}>
        <div className={s.userdata}>
          <div className={s.ix}>
            <span style={{ margin: '5px 15px 0 0', color: '#BBB9B9' }} onClick={hiddeItem}>&#10006;</span>
          </div>
          <p className={s.titleUser}>Отримати пропозицію</p>
          <br />
          <p className={s.descSpan}>Введіть свої дані, і вибраний Вами прорахунок надійде на Ваш e-mail. А також з
            Вами зв'яжеться наш спеціаліст для уточнення інформації та консультації.</p>
          <br />
          <input className={s.inputUser} type="text" title="name"
                 placeholder="Веддіть Ім'я" onChange={(e) => {
            setUserData((actual) => {
              return { ...actual, [e.target.title]: e.target.value };
            });
          }} />
          <input className={s.inputUser} type="email" title="email"
                 placeholder="Веддіть e-mail" onChange={(e) => {
            setUserData((actual) => {
              return { ...actual, [e.target.title]: e.target.value };
            });
          }} />
          <input className={s.inputUser} type="number" title="phone"
                 placeholder="Веддіть телефон" onChange={(e) => {
            setUserData((actual) => {
              return { ...actual, [e.target.title]: e.target.value };
            });
          }} />
          <br />
          <div className={s.boxCheck}>
            <input className={s.inputCheck} type="checkbox"
                   checked={checked} onChange={checkedClick} />
            <p>Не дзвоніть мені</p>
          </div>
          <div className={s.boxCheck2}>
              <input onChange={checkedClick2} className={s.inputCheck}
                     type="checkbox" checked={checked2} />
            <span>Замовити консультацію</span>
          </div>
            {
              checked2
                // ?  <input id="date" type="date" onBlur={valueDate} />
                // ? <Datepicker controls={["calendar", "time"]} locale={localeUa}
                //               value={selected} onChange={selectedChange}
                //               placeholder='встановити дату'/>
                ? moment().subtract(10, 'days').calendar()
                : ""
            }

          <br />
          <button className={s.footerBut} style={{ width: "50%" }} onClick={useSubmit}>Надіслати</button>
        </div>
      </div>

      <Routes>
        <Route path="/table" element={<Table data={Users} />} />
        {/*<Route path='/' element={<Home data={Users} />} />*/}
        <Route path="/senks" element={<Senks setOnFooter={setOnFooter} />} />
        <Route path="/" element={<Obl data={Users} userOrder={userOrder}
                                      setTotal={setTotal} total={total} />} />
        <Route path="/nacr" element={<Nacr data={Users} userOrder={userOrder}
                                           setTotal={setTotal} total={total} />} />
        <Route path="/acses" element={<Acses data={Users} userOrder={userOrder}
                                             setTotal={setTotal} total={total} />} />
        <Route path="/test" element={<App2 data={Users} />} />
      </Routes>

      {
        onFooter ? ""
          : <>
            <div className={s.divTitle}>
              <span style={{ margin: "0 8px 0 20px" }} className={s.spanTitle}><Link className={s.linkTitle} to="/">Обладнання</Link></span>
              <span className={s.spanTitle}><Link className={s.linkTitle} to="/nacr">Накриття</Link></span>
              <span className={s.spanTitle}><Link className={s.linkTitle} to="/acses">Аксесуари</Link></span>
              <span className={s.spanTitle}><Link className={s.linkTitle} to="/bud">Будівництво</Link></span>
              <span className={s.spanTitle}><Link className={s.linkTitle} to="/doc">Документація</Link></span>
            </div>
            <div className={s.empty}></div>
            <Footer total={total} noScroll={noScroll} setOnFooter={setOnFooter} />
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
