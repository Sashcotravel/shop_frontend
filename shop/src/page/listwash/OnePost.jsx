import React, { useEffect, useState } from "react";
import "../Obl.css";
import image from "../../image/svg/Group 59.svg";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { listWash } from "../../users";
import FooterMain from "../../component/FooterMain";
import { Fancybox, Carousel } from "@fancyapps/ui";
import { LazyLoadImage, LazyLoadComponent } from "react-lazy-load-image-component";
import s from "../../component/Home.module.css";
import { useDispatch } from "react-redux";
import { fetchMailDimaMika, fetchMailUserMiyka } from "../../API/post";


const OnePost = ({ postOne, setOnFooter, t, setPostOne, setMeneger, setChecked }) => {

  const [userData, setUserData] = useState({
    name: "", phone: "", email: "" });
  const [formPass, setFormPass] = useState({
    phone: false, email: false });

  const { idMiyka } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  let one = postOne?.obl
  let two = postOne?.obl2
  const o = -115
  const url2 = location.pathname.slice(location.pathname.length - 2) !== "en";
  let lang = localStorage.i18nextLng


  useEffect(() => {
    if(lang === 'ua'){
      document.title = `Мийка самообслуговування ${postOne?.city} вул. ${postOne?.st} | Автомийка SamWash`;
      document.description = `Автомийка самообслуговування ${postOne?.city} вул. ${postOne?.st}. 
      Актуальні ціни на самомийку. Якісно та швидко. Тел. +38 (050) 59 23 772 `
    }
    if(lang === 'en'){
      document.title = `Self-service sink ${postOne?.city} st. ${postOne?.st} | Car wash SamWash`;
      document.description = `Self-service car wash ${postOne?.city} st. ${postOne?.st}. 
      Current prices for self-washing. Qualitatively and quickly. Tel. +38 (050) 59 23 772 `
    }
    if(lang === 'ru'){
      document.title = `Мойка самообслуживания ${postOne?.city} ул. ${postOne?.st} | Car wash SamWash`
      document.description = `Автомойка самообслуживания SamWash ${postOne?.city} ул. ${postOne?.st}.
       Актуальные цены. Качественно и быстро.Тел. +38 (050) 59 23 772`
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
    setOnFooter(true);
    if (postOne === null) {
      listWash.map((item, i) => {
        if (item.city2 === idMiyka) {
          setPostOne(item);}});
    }

    return () => {
      setOnFooter(false);
    };
  }, []);

  const road = () => {
    let link = 'https://calculator.samwash.ua' + location.pathname
    if(formPass.email || formPass.phone){
      setMeneger(false)
      setChecked(false)
      navigate('/thanks')
      let obj = { user: userData, link };
      dispatch(fetchMailDimaMika(obj));
      dispatch(fetchMailUserMiyka(obj));
    }
  };

  const oblTrue = (one, two) => {
    if (localStorage.i18nextLng === "ua" || localStorage.i18nextLng === "ru") {
      return one === "all" ? "/wsi" : one === "Закарпатська область" ? "/zakarpatska-oblast"
        : one === "Львівська область" ? "/lvivska-oblast" : one === "Франківська область" ? "/frankivska-oblast"
          : one === "Тернопільська область" ? "/ternopilska-oblast" : one === "Дніпропетровська область" ? "/dniprotrovska-oblast"
            : one === "Житомирська область" ? "/zhitomirska-oblast" : one === "Волинська область" ? "/volynska-oblast"
              : one === "Луганська область" ? "/luganska-oblast" : one === "Вінницька область" ? "/vinnytska-oblast"
                : one === "Полтавська область" ? "/poltavska-oblast" : "";
    }
    else {
      return two === "all" ? "/wsi" : two === "Zakarpatska Oblast" ? "/zakarpatska-oblast"
        : two === "Lvivska Oblast" ? "/lvivska-oblast" : two === "Ivano-Frankivska Oblast" ? "/frankivska-oblast"
          : two === "Ternopilska Oblast" ? "/ternopilska-oblast" : two === "Dnipropetrovska Oblast" ? "/dniprotrovska-oblast"
            : two === "Zhytomyrska Oblast" ? "/zhitomirska-oblast" : two === "Volynska Oblast" ? "/volynska-oblast"
              : two === "Luhanska Oblast" ? "/luganska-oblast" : two === "Vinnytska Oblast" ? "/vinnytska-oblast"
                : two === "Poltavska Oblast" ? "/poltavska-oblast" : "";
    }
  };

  let fg = oblTrue(one, two)

  const style = { margin: '0 auto 60px 100px' }

  const postColIn = (colPost, className) => {
    if(colPost === 0){
      return ''
    } else if (colPost === 1){
      return <span className={`${className}`}>{t('on')} {colPost} {t('postCol1')}</span>
    } else if (colPost === 2 || colPost === 3 || colPost === 4){
      return <span className={`${className}`}>{t('on')} {colPost} {t('postCol2')}</span>
    } else {
      return <span className={`${className}`}>{t('on')} {colPost} {t('postCol')}</span>
    }
  }

  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: {
      Carousel: {
        fill: false,
        center: true,
      },
    },
  });

  const blurClose = (e) => {
    if(e.target.id === "lightblue"){
      let con = document.getElementById("lightblue");
      con.style.visibility = "hidden";
    }
  };

  const hiddeItem = () => {
    let con = document.getElementById("lightblue");
    con.style.visibility = "hidden";
  };

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

  const phoneClick = (e) => {
    if(userData.phone === ''){
      setUserData((actual) => {return { ...actual, phone: '+' }})
    }
  }

  const noScroll = () => {
    let con = document.getElementById("lightblue");
    con.style.visibility = "visible";
  };



  return (
    <>

      <div id="lightblue" onClick={blurClose} className={s.orderBlock} style={{ left: "0" }}>
        <div className={s.userdata2}>
          <div className={s.ix}>
                <span style={{ margin: "5px 15px 0 0", color: "#BBB9B9", cursor: "pointer" }}
                      onClick={hiddeItem}>&#10006;</span>
          </div>
          <p className={s.titleUser}>{t("getAnOffer")}</p>
          <br />
          <p className={s.descSpan}>{t("descCon")}</p>
          <br />
          <input className={s.inputUser} type="name" title="name"
                 placeholder={`${t("enterName")}`} value={userData.name} onChange={(e) => {
            setUserData((actual) => {
              return { ...actual, [e.target.title]: e.target.value };});}} />
          <input className={s.inputUser} type="email" title="email" id="email" onBlur={onBlur}
                 placeholder={`${t("enterEmail")}`} value={userData.email} onChange={(e) => {
            setUserData((actual) => {
              return { ...actual, [e.target.title]: e.target.value };});}} />
          <input className={s.inputUser} style={{ width: "90%" }} type="text" title="phone" id="phone" onBlur={onBlur2}
                 placeholder={`${t("enterYourPhoneNumber")}`} value={userData.phone} onChange={ (e) => {
            setUserData((actual) => {
              return { ...actual, [e.target.title]: e.target.value }});}} onClick={phoneClick} />
          <br />
          <button className={s.footerBut} style={{ width: "50%", margin: "30px auto", backgroundColor: '#42DF4C' }}
                  onClick={road} disabled={!formPass.email && !formPass.phone}>{t("send")}</button>
        </div>
      </div>

        <div className={`boxPost2`}>

          <div className={postOne?.city === "Хуст" ? "divIm1" : postOne?.city === "Тернопіль" ? "divIm1" : ""}></div>
          <div className={postOne?.city === "Хуст" ? "divIm2" : postOne?.city === "Тернопіль" ? "divIm2" : ""}></div>

            {
              localStorage.i18nextLng === 'ua' || localStorage.i18nextLng === 'ru' ?
                <div className="breadcrumbs zI" style={ window.screen.availWidth > 900 ? style : undefined}>
                  <Link className="breads colorBread" to="/">{t("home")}</Link>
                  <Link className="breads colorBread" to="/nashi-avtomiyki/wsi">/ {t("OurCarWashes")}</Link>
                  <Link className="breads colorBread" to={`/nashi-avtomiyki${fg}/${postOne?.colPost}`}>
                    {` / ${postOne?.obl}`}</Link>
                  <Link className="breads" to={`/nashi-avtomiyki/wsi/${postOne?.colPost}`}>
                    {/*{` / ${postOne?.colPost} ${t("postCol")}`} </Link>*/}
                    / {postColIn(postOne?.colPost, 'breads')} </Link>
                </div>
                :
                <div className="breadcrumbs zI" style={ window.screen.availWidth > 900 ? style : undefined}>
                  <Link className="breads colorBread" to="/">{t("home")}</Link>
                  <Link className="breads colorBread" to="/nashi-avtomiyki/wsi">/ {t("OurCarWashes")}</Link>
                  <Link className="breads colorBread" to={`/nashi-avtomiyki${fg}/${postOne?.colPost}`}>
                    {` / ${postOne?.obl2}`}</Link>
                  <Link className="breads" to={`/nashi-avtomiyki/wsi/${postOne?.colPost}`}>
                    {/*{` / ${postOne?.colPost} ${t("postCol")}`} </Link>*/}
                    / {postColIn(postOne?.colPost, 'breads')} </Link>
                </div>
            }

            <h1 className="titlePost zI">SamWash {postOne?.city}</h1>
            <p className="dataTitle zI">{postOne?.city}</p>
            <br />

          <LazyLoadComponent>
          <figure className="containerStyle zI">
            {/*<div className="flex flex-wrap gap-5 justify-center max-w-5xl mx-auto px-6 overflow-y-hidden">*/}
            {postOne?.src.map((item, index) => {
              if (item.slice(0, 4) === "http") {
                return<a key={index} data-fancybox="gallery" href={item}>
                  <iframe key={index} className="imageBox" src={item} title='video'/>
                </a>
              }
              return <a key={index} data-fancybox="gallery" href={item}>
              <img className="rounded imageBox" key={index} src={item} alt='image' loading='lazy'/>
              </a>
            })}
            {/*</div>*/}
          </figure>
          </LazyLoadComponent>

        <LazyLoadComponent>
          <div className="divButP">
            <p className="pSt">вул. {postOne?.st}, м. {postOne?.city}, {postOne?.obl.split(" ")[0]} обл.</p>

            <a href={postOne?.map} style={{ color: "white" }} target="_blank">
              <div className="marshBut">
                <img style={{ position: "relative", left: "10px", width: "14%", height: "100%" }} src={image}
                     alt="road" />
                <span style={{ position: "relative", right: "10px" }}>{t("MakeARoute")}</span>
              </div>
            </a>
          </div>
        </LazyLoadComponent>

          <p className="serv">{t("CarWashServices")}</p>

          <div className="servDiv">
            {postOne?.desc.map((item, index) => <div className="servDiv2" key={index}>
              <span className="spanGrad"></span>
              <span className="spanNameG">{item}</span>
            </div>)}
          </div>

          <p className="desc2">{postOne?.desc2}</p>

          <p className="invest">{t("youCan")}</p>

          <div onClick={noScroll} className="hosh">{t("IWant")}</div>

        {/*</div>*/}
      </div>

      <FooterMain o={o} />
    </>
  );
};

export default OnePost;