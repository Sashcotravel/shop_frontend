import React, { useEffect, useState } from "react";
import m from "./MainPage.module.css";
import s from "../component/Home.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import image1 from '../image/322173-1600x900.jpg'


const MainPage = ({ t, setOnFooter }) => {

  const [userData, setUserData] = useState({
    name: "", phone: "", email: "", cite: "", date: ""
  });

  const dispatch = useDispatch();

  const hiddeItem = () => {
    let con = document.getElementById("lightblue");
    con.style.visibility = "hidden";
  };

  const noScroll = () => {
    let con = document.getElementById("lightblue");
    con.style.visibility = "visible";
  };

  const useSubmit = async () => {
    let con = document.getElementById("lightblue");
    con.style.visibility = "hidden";
    let obj = {
      user: userData
    };
    // const d = await dispatch(fetchPay(obj));
    // dispatch(fetchMail(obj));
    // dispatch(fetchMailDima(obj));
    // dispatch(fetchMailUser(obj));

  };

  useEffect(() => {
    setOnFooter(true);
    return () => {
      setOnFooter(false);
    };
  }, []);

  const greenBut = () => {}



  return <div>

    <main>
      <div id="lightblue" className={s.orderBlock} style={{ left: "0" }}>
        <div className={s.userdata2}>
          <div className={s.ix}>
                <span style={{ margin: "5px 15px 0 0", color: "#BBB9B9", cursor: "pointer" }}
                      onClick={hiddeItem}>&#10006;</span>
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
          <input className={s.inputUser} style={{ width: "90%" }} type="text" title="phone"
                 placeholder={`${t("enterYourPhoneNumber")}`} onChange={(e) => {
            setUserData((actual) => {
              return { ...actual, [e.target.title]: e.target.value };
            });
          }} />
          <br />
          <div className={s.footerBut} style={{ width: "50%", margin: "30px auto" }}
               onClick={useSubmit}>{t("send")}</div>
        </div>
      </div>
      <img src={image1} className={m.startImage} />
      <div className={m.mainContainer}>
        {/*<iframe width='100%' height="100%" allowFullScreen className="embed-responsive-item"*/}
        {/*        src="https://www.youtube.com/watch?v=FDMu3FT9PVU">*/}
        {/*</iframe>*/}

        <h1 className={m.titleH1}>Шукаєш куди інвестувати?</h1>
        <h4 className={m.titleH4}>Побудуємо для тебе автомийку самообслуговування за 100 днів!</h4>
        <button className={m.greenBut} onClick={greenBut}>Безкоштовна консультація</button>
      </div>

      <div className={m.percentDiv}>
        <p className={m.percentP}>чистий прибуток</p>
        <span className={m.percentPAnim}></span>
        <span className={m.percent}>%</span>

        <div className={m.container}>
          <div className={m.uiwidgets}>
            <div className={m.uivalues}>EBITDA</div>
          </div>
        </div>
        <p className={m.percentP}>прямі витрати</p>
      </div>


    </main>

    <footer id="order">
      {/*<div>*/}
      {/*  <iframe width="100%" height="480px;" allowFullScreen className="embed-responsive-item" src="*/}
      {/*          https://www.google.com/maps/d/embed?mid=1jsm87_-WVn3DspwNkz85WWD5dnBCHYU&ehbc=2E312F*/}
      {/*          "></iframe>*/}
      {/*</div>*/}
    </footer>

  </div>;
};

export default MainPage;