import React, { useEffect } from "react";
import s from "./Home.module.css";
import { Link, NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { listWash } from "../users";
import image from "../image/svg/Route.svg";
import image1 from "../image/svg/Location_icon.svg";
import image3 from "../image/svg/Ω.svg";
import FooterMain from "./FooterMain";
// import Post from "../page/listwash/Post";
import { LazyLoadImage, LazyLoadComponent } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";


// let col = [0];
let col = [];
let col2 = 0;
let oblUrl;
let colP = 0;
let obl = "all";
let colPost;
let allObl = [];

const ListWash = ({ setOnFooter, t, setPostOne }) => {

  const location = useLocation();
  const { id } = useParams();
  const { post } = useParams();
  const navigator = useNavigate();

  const win = window.screen.availWidth > 900;
  const url = localStorage.i18nextLng === "en";
  const url1 = localStorage.i18nextLng === "ua";
  let lang = localStorage.i18nextLng
  const loc = location.pathname;
  let descLoc = post === undefined || post === "NaN" || post === "wsi"

  const o = win ? -156 : -115;


  useEffect(() => {
    if(lang === 'ua'){
      if (post === undefined || post === "NaN" || post === "wsi") {
        document.title = `Мийки самообслуговування в ${obl} | Автомийки SamWash`;
        document.description = `Адреси автомийок самообслуговування SamWas, ${obl}. 
      Обирай автомийку поряд з тобою, за вигідгою ціною, та з якісним обладнанням. Телефонуй просто зараз!`
      }
      if (loc === `/nashi-avtomiyki/${id}/${post}` && post !== 'wsi'){
        document.title = `Мийки самообслуговування в ${obl} на ${post} поста | Автомийки SamWash`;
        document.description = `Адреси автомийок самообслуговування SamWash в ${obl} 
        на ${post} поста. Обирай автомийку поряд з тобою, за вигідгою ціною. Телефонуй просто зараз!`
      }
      document.title = "Мийки самообслуговування в Україні | Автомийки SamWash";
      document.description = 'Адреси автомийок самообслуговування SamWash по всій Україні. Обирай ' +
        'автомийку поряд з тобою, за вигідгою ціною, та з якісним обладнанням. Телефонуй просто зараз!'
    }
    if(lang === 'en'){
      if (post === undefined || post === "NaN" || post === "wsi") {
        document.title = `Self-service sinks in ${obl} | Car washes SamWash`;
        document.description = `Addresses of SamWas self-service car washes, ${obl}. 
      Choose a car wash near you, at an affordable price, and with quality equipment. Call now!`
      }
      if (loc === `/nashi-avtomiyki/${id}/${post}` && post !== 'wsi'){
        document.title = `Self-service sinks in ${obl} on ${post} posts | Car washes SamWash`;
        document.description = `Addresses of SamWas self-service car washes, ${obl} 
        on ${post} posts. Choose a car wash near you, at an affordable price, and with quality equipment. Call now!`
      }
      document.title = "Self-service sinks in Ukraine | SamWash car washes";
      document.description = 'Addresses of SamWash self-service car washes throughout Ukraine. Choose ' +
        'a car wash near you, at an affordable price, and with quality equipment. Call now!'
    }
    if(lang === 'ru'){
      if (post === undefined || post === "NaN" || post === "wsi") {
        document.title = `Мойки самообслуживания во ${obl} | Автомойки SamWash`;
        document.description = `Адреси автомийок самообслуговування SamWas, ${obl}. 
      Обирай автомийку поряд з тобою, за вигідгою ціною, та з якісним обладнанням. Телефонуй просто зараз!`
      }
      if (loc === `/nashi-avtomiyki/${id}/${post}` && post !== 'wsi'){
        document.title = `Мойки самообслуживания во ${obl} на ${post} поста | Автомойки SamWash`;
        document.description = `Адреса автомоек самообслуживания SamWash во ${obl} 
        на ${post} поста. Выбирай автомойку рядом с тобой, по выгодной цене. Звони прямо сейчас!`
      }

      document.title = 'Мойки самообслуживания в Украине | Автомойки SamWash'
      document.description = `Адреса автомоек самообслуживания SamWas, ${obl}. Выбирай 
      автомойку рядом с тобой, по выгодной цене, и с качественным оборудованием. Звони прямо сейчас!`
    }
  }, [])


  useEffect(() => {
    window.scrollTo(0, 0);
    setOnFooter(true);
    if (loc === "/nashi-avtomiyki/wsi") {
      document.getElementById("all").checked = true;
      document.getElementById("0").checked = true;
    }
    else if (loc === `/nashi-avtomiyki/wsi/${post}`) {
      oblUrl2();
      document.title = `Автомийки SamWash на ${post} боксів | SamWash Group`;
      document.getElementById("all").checked = true;
      document.getElementById(`${post}`).checked = true;
    }
    else if (url) {
      obl = oblFalse(id);
      click1Use(obl);
      document.getElementById("select2").value = obl;
      let oblAs = oblFalse2(id);
      document.getElementById(oblAs).checked = true;
      if (post === undefined || post === "NaN" || post === "wsi") {
        document.getElementById("0").checked = true;
        colPost = Number(0);
      }
      else {
        colPost = Number(post);
        // document.getElementById("select").value = post;
        document.getElementById(`${post}`).checked = true;
      }
    }
    else if (localStorage.i18nextLng === "ru") {
      obl = oblFalse(id);
      click1Use(obl);
      document.getElementById("select2").value = obl;
      let oblAs = oblFalse2(id);
      document.getElementById(oblAs).checked = true;
      if (post === undefined || post === "NaN" || post === "wsi") {
        document.getElementById("0").checked = true;
        colPost = Number(0);
      }
      else {
        colPost = Number(post);
        // document.getElementById("select").value = post;
        document.getElementById(`${post}`).checked = true;
      }
    }
    else if (url1) {
      obl = oblFalse(id);
      click1Use(obl);
      document.getElementById(obl).checked = true;
      document.getElementById("select2").value = obl;
      if (post === undefined || post === "NaN" || post === "wsi") {
        colPost = Number(0);
        document.getElementById("0").checked = true;
      } else {
        colPost = Number(post);
        document.getElementById(`${post}`).checked = true;
      }
    }
    else {
      obl = oblFalse(id);
      click1Use(obl);
      colPost = Number(post);
      document.getElementById(obl).checked = true;
      document.getElementById(`${post}`).checked = true;
    }

    return () => {
      setOnFooter(false);
    };
  }, [col.length]);


  const click1Use = (o) => {
    obl = o;
    col = [];
    col2 = -1;
    allObl = [];
    listWash.forEach((item, i) => {
      if (url1) {
        if (item.obl === o) {
          allObl.push(item);
          if (col2 === -1) {
            col.pop();
          }
          if (item.colPost !== col[col2]) {
            col2++;
            col.push(item.colPost);
          }
        }
      } else if (localStorage.i18nextLng === "ru") {
        if (item.obl === o) {
          allObl.push(item);
          if (col2 === -1) {
            col.pop();
          }
          if (item.colPost !== col[col2]) {
            col2++;
            col.push(item.colPost);
          }
        }
      } else {
        if (item.obl2 === o) {
          allObl.push(item);
          if (col2 === -1) {
            col.pop();
          }
          if (item.colPost !== col[col2]) {
            col2++;
            col.push(item.colPost);
          }
        }
      }
    });
  };

  const onePost = (e) => {
    listWash.forEach(item => {
      if (e.target.id === item.imgNum.toString()) {
        setPostOne(item);
      }
    });
  };

  const container = ({ item, city, vOb, imgNum, map, city2, st, proect }) => {
    let oblUrl = oblTrue(obl);
    return (
      <div key={imgNum} className="zPoz">
        {vOb === undefined ? "" : proect === undefined ? <div className="addBlock">{t("ownBuild")}</div> : ''}
        {proect === undefined ? "" : <div className="addBlock projectClass">{t("projectBuild")}</div>}
        <div className="boxItem">
          <p className="pRed">SAMWASH</p>
          <div className="divRoad">
            <div>
              <p className="titlePName">{city}</p>
              <p className="titlePName2">{st !== undefined && st !== "" ? `вул. ${st}` : ""}</p>
            </div>
            <a href={map} target="_blank" title="Прокласти маршрут">
              <img src={image} style={{ margin: "0 10px 0 0" }} width={"53.74px"} height={"53.74px"} alt="road" />
            </a>
          </div>
          {<NavLink onClick={onePost} to={`/nashi-avtomiyki/miyka${oblUrl}${"/" + colPost}/${city2}`}>
            <button key={imgNum} id={imgNum} className="redBut">{t("Details")}</button>
          </NavLink>}
        </div>
      </div>
    );
  };

  const oblTrue = (obl) => {
    if (localStorage.i18nextLng === "ua") {
      return obl === "all" ? "/wsi" : obl === "Закарпатська область" ? "/zakarpatska-oblast"
        : obl === "Львівська область" ? "/lvivska-oblast" : obl === "Франківська область" ? "/frankivska-oblast"
          : obl === "Тернопільська область" ? "/ternopilska-oblast" : obl === "Дніпропетровська область" ? "/dniprotrovska-oblast"
            : obl === "Житомирська область" ? "/zhitomirska-oblast" : obl === "Волинська область" ? "/volynska-oblast"
              : obl === "Луганська область" ? "/luganska-oblast" : obl === "Вінницька область" ? "/vinnytska-oblast"
                : obl === "Полтавська область" ? "/poltavska-oblast" : "";
    } else if (localStorage.i18nextLng === "ru") {
      return obl === "all" ? "/wsi" : obl === "Закарпатська область" ? "/zakarpatska-oblast"
        : obl === "Львівська область" ? "/lvivska-oblast" : obl === "Франківська область" ? "/frankivska-oblast"
          : obl === "Тернопільська область" ? "/ternopilska-oblast" : obl === "Дніпропетровська область" ? "/dniprotrovska-oblast"
            : obl === "Житомирська область" ? "/zhitomirska-oblast" : obl === "Волинська область" ? "/volynska-oblast"
              : obl === "Луганська область" ? "/luganska-oblast" : obl === "Вінницька область" ? "/vinnytska-oblast"
                : obl === "Полтавська область" ? "/poltavska-oblast" : "";
    } else {
      return obl === "all" ? "/wsi" : obl === "Zakarpatska Oblast" ? "/zakarpatska-oblast"
        : obl === "Lvivska Oblast" ? "/lvivska-oblast" : obl === "Ivano-Frankivska Oblast" ? "/frankivska-oblast"
          : obl === "Ternopilska Oblast" ? "/ternopilska-oblast" : obl === "Dnipropetrovska Oblast" ? "/dniprotrovska-oblast"
            : obl === "Zhytomyrska Oblast" ? "/zhitomirska-oblast" : obl === "Volynska Oblast" ? "/volynska-oblast"
              : obl === "Luhanska Oblast" ? "/luganska-oblast" : obl === "Vinnytska Oblast" ? "/vinnytska-oblast"
                : obl === "Poltavska Oblast" ? "/poltavska-oblast" : "";
    }
  };

  const oblFalse = (id) => {
    if (localStorage.i18nextLng === "ua" || localStorage.i18nextLng === "ru") {
      return id === "wsi" ? "Виберіть область" : id === "zakarpatska-oblast" ? "Закарпатська область"
        : id === "lvivska-oblast" ? "Львівська область" : id === "frankivska-oblast" ? "Франківська область"
          : id === "ternopilska-oblast" ? "Тернопільська область" : id === "dniprotrovska-oblast" ? "Дніпропетровська область"
            : id === "zhitomirska-oblast" ? "Житомирська область" : id === "volynska-oblast" ? "Волинська область"
              : id === "luganska-oblast" ? "Луганська область" : id === "vinnytska-oblast" ? "Вінницька область"
                : id === "poltavska-oblast" ? "Полтавська область" : "";
    } else {
      return id === "wsi" ? "Select an Oblast" : id === "zakarpatska-oblast" ? "Zakarpatska Oblast"
        : id === "lvivska-oblast" ? "Lvivska Oblast" : id === "frankivska-oblast" ? "Ivano-Frankivska Oblast"
          : id === "ternopilska-oblast" ? "Ternopilska Oblast" : id === "dniprotrovska-oblast" ? "Dnipropetrovska Oblast"
            : id === "zhitomirska-oblast" ? "Zhytomyrska Oblast" : id === "volynska-oblast" ? "Volynska Oblast"
              : id === "luganska-oblast" ? "Luhansk Oblast" : id === "vinnytska-oblast" ? "Vinnytska Oblast"
                : id === "poltavska-oblast" ? "Poltavska Oblast" : "";
    }
  };

  const oblFalse2 = (id) => {
    return id === "wsi" ? "Виберіть область" : id === "zakarpatska-oblast" ? "Закарпатська область"
      : id === "lvivska-oblast" ? "Львівська область" : id === "frankivska-oblast" ? "Франківська область"
        : id === "ternopilska-oblast" ? "Тернопільська область" : id === "dniprotrovska-oblast" ? "Дніпропетровська область"
          : id === "zhitomirska-oblast" ? "Житомирська область" : id === "volynska-oblast" ? "Волинська область"
            : id === "luganska-oblast" ? "Луганська область" : id === "vinnytska-oblast" ? "Вінницька область"
              : id === "poltavska-oblast" ? "Полтавська область" : "";
  };

  const click1 = (e) => {
    e.target.checked = true;
    document.getElementById("rich-select-dropdown-button").checked = false;
    obl = e.target.title;
    col = [];
    col2 = -1;
    allObl = [];
    listWash.map(item => {
      if (item.obl === obl) {
        allObl.push(item);
        col.push(item.colPost);
        // } else if (item.obl2 === e.target.value) {
      }
      else if (item.obl2 === e.target.title) {
        allObl.push(item);
        col.push(item.colPost);
      }
    });
    if (col.length === 0) {
      document.getElementById("select").value = "0";
    }
    colPost = 0;
    let oblUrl = oblTrue(obl);
    if (obl === "all") {
      navigator(`/nashi-avtomiyki/wsi`);
      document.getElementById("0").checked = true;
    }
    else if (obl !== "all" && allObl.length !== 0) {
      navigator(`/nashi-avtomiyki${oblUrl}/wsi`);
    }
    else if (obl !== "all" && col[0] !== 0) {
      navigator(`/nashi-avtomiyki${oblUrl}/${col[0]}`);
    }
  };

  const urlClick = (e) => {
    e.target.checked = true;
    document.getElementById("rich-select-dropdown-button2").checked = false;
    colP = e.target.id;
    colPost = Number(colP);
    let oblUrl = oblTrue(obl);
    if (e.target.id === "0" && obl === "all") {
      navigator(`/nashi-avtomiyki/wsi`);
    }
    else if (e.target.id !== "0" && obl === "all") {
      navigator(`/nashi-avtomiyki/wsi/${colP}`);
    }  else if (e.target.id === "0" && obl !== "all") {
      navigator(`/nashi-avtomiyki${oblUrl}/wsi`);
    } else {
      navigator(`/nashi-avtomiyki${oblUrl}${colP === 0 ? "" : "/" + colP}`);
    }
  };

  const oblUrl123 = () => {
    colPost = Number(0);
    click1Use("all");
    document.getElementById("select2").value = "all";
    document.getElementById("select").value = 0;
  };

  const oblUrl2 = () => {
    click1Use("all");
    document.getElementById("select2").value = "all";
  };


  if (loc === "/nashi-avtomiyki/wsi") {
    colPost = Number(0);
    obl = "all";
    col = [];
    allObl = [];
  }
  else if (loc === `/nashi-avtomiyki/wsi/${post}`) {
    obl = "all";
    colPost = Number(post);
    document.title = `Автомийки SamWash на ${post} боксів | SamWash Group`;
  }
  else if (loc === `/nashi-avtomiyki/${id}/wsi` && url) {
    colPost = Number(0);
  }
  else if (loc === `/nashi-avtomiyki/${id}/wsi`) {
    colPost = Number(0);
    document.title = `Автомийки SamWash в ${obl.split(" ")[0].slice(0, obl.split(" ")[0].length - 1)}ій області`;
  }
  else if (loc === `/nashi-avtomiyki/${id}/${post}`) {
    obl = oblFalse(id);
    colPost = Number(post);
  }


  const style = { margin: "auto 128px" };

  const postColIn = (colPost, className) => {
    if (colPost === 0) {
      return "";
    } else if (colPost === 1) {
      return <span className={`${className}`}>{t("on")} {colPost} {t("postCol1")}</span>;
    } else if (colPost === 2 || colPost === 3 || colPost === 4) {
      return <span className={`${className}`}>{t("on")} {colPost} {t("postCol2")}</span>;
    } else {
      return <span className={`${className}`}>{t("on")} {colPost} {t("postCol")}</span>;
    }
  };

  const optionF = (num, id, obl, name) => {
    return (
      <div className="rich-select-option">
        <input key={num} type="radio" name="game" id={id} title={obl} />
        {/*<input type="radio" name='' id={id} title={obl} />*/}
        <div className="rich-select-option-body">
          <label tabIndex="-1">
            <img src={image1} alt="" />
            <span>{name}</span>
          </label>
        </div>
      </div>
    );
  };

  const option2F = (id, name) => {
    return (
      <div className="rich-select-option">
        <div className="rich-select-option-body">
          <label htmlFor={id} tabIndex="-1"
            // onClick="document.getElementById('rich-select-dropdown-button').click();">
                 onClick={() => document.getElementById("rich-select-dropdown-button").click()}>
            <img src={image1} alt="" />{name}
          </label>
        </div>
      </div>
    );
  };

  const optionF1 = (id, obl, name) => {
    return (
      <div className="rich-select-option2">
        <input type="radio" name="game1" id={id} title={obl} />
        {/*<input type="radio" name={id} id={id} title={obl} />*/}
        <div className="rich-select-option-body2">
          <label tabIndex="-1">
            <img src={image3} alt="" />
            <span>{name}</span>
          </label>
        </div>
      </div>
    );
  };

  const option2F2 = (id, name) => {
    return (
      <div className="rich-select-option2">
        <div className="rich-select-option-body2">
          <label htmlFor={id} tabIndex="-1"
            // onClick="document.getElementById('rich-select-dropdown-button').click();">
                 onClick={() => document.getElementById("rich-select-dropdown-button2").click()}>
            <img src={image3} alt="" />{name}
          </label>
        </div>
      </div>
    );
  };



  return (
    <>

      <main style={window.screen.availWidth > 900 ? style : undefined}>
        <div className="slideStyleBack"></div>

        {
          localStorage.i18nextLng === "ua" ?
            <div className="breadcrumbs">
              <Link className="breads colorBread" to="/">{t("home")}</Link>
              <Link className={colPost === 0 && obl === "all" ? "breads" : "breads colorBread"}
                    onClick={oblUrl123} to="/nashi-avtomiyki/wsi"> / {t("OurCarWashes")}</Link>
              {obl === "all" ? "" : obl === "wsi" ? "" : location.pathname !== `/nashi-avtomiyki/wsi/${post}` ?
                <Link className={colPost === 0 ? "breads" : "breads colorBread"} to={`/nashi-avtomiyki/${id}/wsi`}>
                  {obl === "all" ? "" : obl === "wsi" ? "" : location.pathname !== `/nashi-avtomiyki/wsi/${post}` ? ` / ${obl}` : ""}</Link> : ""
              }
              {
                colPost === 0 ? "" : colPost === undefined ? ""
                  : <Link className="breads" onClick={oblUrl2} to={`/nashi-avtomiyki/wsi/${colPost}`}>
                    {colPost !== 0 ? "/ " : ""} {postColIn(colPost, "breads")} </Link>
              }
            </div>
            :
            localStorage.i18nextLng === "ru" ?
              <div className="breadcrumbs">
                <Link className="breads colorBread" to="/">{t("home")}</Link>
                <Link className={colPost === 0 && obl === "all" ? "breads" : "breads colorBread"}
                      onClick={oblUrl123} to="/nashi-avtomiyki/wsi"> / {t("OurCarWashes")}</Link>
                {obl === "all" ? "" : obl === "wsi" ? "" : location.pathname !== `/nashi-avtomiyki/wsi/${post}` ?
                  <Link className={colPost === 0 ? "breads" : "breads colorBread"} to={`/nashi-avtomiyki/${id}/wsi`}>
                    {obl === "all" ? "" : obl === "wsi" ? "" : location.pathname !== `/nashi-avtomiyki/wsi/${post}` ? ` / ${obl}` : ""}</Link> : ""
                }
                {
                  colPost === 0 ? "" : colPost === undefined ? ""
                    : <Link className="breads" onClick={oblUrl2} to={`/nashi-avtomiyki/wsi/${colPost}`}>
                      {colPost !== 0 ? "/ " : ""} {postColIn(colPost, "breads")} </Link>
                }
              </div>
              :
            <div className="breadcrumbs">
              <Link className="breads colorBread" to="/">{t("home")}</Link>
              <Link className={colPost === 0 && obl === "all" ? "breads" : "breads colorBread"}
                    onClick={oblUrl123} to="/nashi-avtomiyki/wsi"> / {t("OurCarWashes")}</Link>
              {
                obl === "all" ? "" : obl === "wsi" ? "" : location.pathname !== `/nashi-avtomiyki/wsi/${post}` ?
                  <Link className={colPost === 0 ? "breads" : "breads colorBread"} to={`/nashi-avtomiyki/${id}/wsi`}>
                    {obl === "all" ? "" : obl === "wsi" ? "" : location.pathname !== `/nashi-avtomiyki${post}/wsi` ? ` / ${obl}` : ""}</Link> : ""
              }
              <Link className="breads" onClick={oblUrl2} to={`/nashi-avtomiyki/wsi/${colPost}`}>
                {colPost !== 0 ? "/ " : ""} {postColIn(colPost, "breads")} </Link>
            </div>
        }


          <div className="divBoxTitASel zPoz">
            <div>
              <h1 className="titleH2">{t("title2")}</h1>

              {
                localStorage.i18nextLng === "en" ?
                  obl !== "all" && colPost !== 0 ? <h2 className="titleH4">
                      in {obl} {postColIn(colPost, "titleH4321")}</h2>
                    : obl !== "all" ? <h3 className="titleH4">in {obl}</h3>
                      : colPost > 0 ?
                        <p style={{ textAlign: "start", margin: "40px 0 40px" }}>{postColIn(colPost, "titleH4")}</p> : ""
                  :
                  obl !== "all" && colPost !== 0 ? <h2 className="titleH4">в {obl.split(" ")[0]
                      .slice(0, obl.split(" ")[0].length - 1)}ій {t("oblast")} {postColIn(colPost, "titleH4321")}</h2>
                    : obl !== "all" ? <h4 className="titleH4">в {obl.split(" ")[0]
                        .slice(0, obl.split(" ")[0].length - 1)}ій {t("oblast")}</h4>
                      : colPost > 0 ?
                        <p style={{ textAlign: "start", margin: "40px 0 40px" }}>{postColIn(colPost, "titleH4")}</p> : ""
              }
            </div>
            <div style={window.screen.availWidth > 900 ? { marginLeft: "21px" } : { margin: "0 auto" }}>
              <div>
                {/*<LazyLoadComponent>*/}
                <div className="rich-select custom-select">
                  <div className="rich-select-dropdown" id="select2" onChange={click1}>
                    {optionF(1, "all", "all", t("SelectAnArea"))}
                    {optionF(6, "Дніпропетровська область", url ? "Dnipropetrovska Oblast" : "Дніпропетровська область", url ? "Dnipropetrovska Oblast" : "Дніпропетровська область")}
                    {optionF(5, "Тернопільська область", url ? "Ternopilska Oblast" : "Тернопільська область", url ? "Ternopilska Oblast" : "Тернопільська область")}
                    {optionF(4, "Закарпатська область", url ? "Zakarpatska Oblast" : "Закарпатська область", url ? "Zakarpatska Oblast" : "Закарпатська область")}
                    {optionF(7, "Житомирська область", url ? "Zhytomyrska Oblast" : "Житомирська область", url ? "Zhytomyrska Oblast" : "Житомирська область")}
                    {optionF(3, "Франківська область", url ? "Ivano-Frankivska Oblast" : "Франківська область", url ? "Ivano-Frankivska Oblast" : "Франківська область")}
                    {optionF(11, "Полтавська область", url ? "Poltavska Oblast" : "Полтавська область", url ? "Poltavska Oblast" : "Полтавська область")}
                    {optionF(8, "Волинська область", url ? "Volynska Oblast" : "Волинська область", url ? "Volynska Oblast" : "Волинська область")}
                    {optionF(9, "Луганська область", url ? "Luhanska Oblast" : "Луганська область", url ? "Luhanska Oblast" : "Луганська область")}
                    {optionF(10, "Вінницька область", url ? "Vinnytska Oblast" : "Вінницька область", url ? "Vinnytska Oblast" : "Вінницька область")}
                    {optionF(2, "Львівська область", url ? "Lvivska Oblast" : "Львівська область", url ? "Lvivska Oblast" : "Львівська область")}
                  </div>

                  <input type="checkbox" id="rich-select-dropdown-button" aria-label="Select" className="rich-select-dropdown-button"/>
                  <label htmlFor="rich-select-dropdown-button"></label>
                  <div className="rich-select-options">
                    {option2F("all", t("SelectAnArea"))}
                    {option2F("Дніпропетровська область", url ? "Dnipropetrovska Oblast" : "Дніпропетровська область")}
                    {option2F("Тернопільська область", url ? "Ternopilska Oblast" : "Тернопільська область")}
                    {option2F("Закарпатська область", url ? "Zakarpatska Oblast" : "Закарпатська область")}
                    {option2F("Житомирська область", url ? "Zhytomyrska Oblast" : "Житомирська область")}
                    {option2F("Франківська область", url ? "Ivano-Frankivska Oblast" : "Франківська область")}
                    {option2F("Полтавська область", url ? "Poltavska Oblast" : "Полтавська область")}
                    {option2F("Волинська область", url ? "Volynska Oblast" : "Волинська область")}
                    {option2F("Луганська область", url ? "Luhanska Oblast" : "Луганська область")}
                    {option2F("Вінницька область", url ? "Vinnytska Oblast" : "Вінницька область")}
                    {option2F("Львівська область", url ? "Lvivska Oblast" : "Львівська область")}
                  </div>
                </div>
                {/*</LazyLoadComponent>*/}
              </div>
              <div>

                <div className="rich-select2 custom-select">
                  <div className="rich-select-dropdown2" id="select" onChange={urlClick}>
                    {allObl.length === 0 && optionF1(0, 0, t("NumberOfPosts"))}
                    {allObl.length !== 0 && optionF1(0, 0, t("posts"))}
                    {col.some(item => item === 2) && optionF1(2, 2, 2) || col.length === 0 && optionF1(2, 2, 2)}
                    {col.some(item => item === 3) && optionF1(3, 3, 3) || col.length === 0 && optionF1(3, 3, 3)}
                    {col.some(item => item === 4) && optionF1(4, 4, 4) || col.length === 0 && optionF1(4, 4, 4)}
                    {col.some(item => item === 5) && optionF1(5, 5, 5) || col.length === 0 && optionF1(5, 5, 5)}
                    {col.some(item => item === 6) && optionF1(6, 6, 6) || col.length === 0 && optionF1(6, 6, 6)}
                    {col.some(item => item === 7) && optionF1(7, 7, 7) || col.length === 0 && optionF1(7, 7, 7)}
                    {col.some(item => item === 10) && optionF1(10, 10, 10) || col.length === 0 && optionF1(10, 10, 10)}
                  </div>

                  <input type="checkbox" id="rich-select-dropdown-button2" aria-label="Select2" className="rich-select-dropdown-button2"/>
                  <label htmlFor="rich-select-dropdown-button2"></label>
                  <div className="rich-select-options2">
                    {allObl.length === 0 && option2F2(0, t("NumberOfPosts"))}
                    {allObl.length !== 0 && option2F2(0, t("posts"))}
                    {col.some(item => item === 2) && option2F2(2, 2) || col.length === 0 && option2F2(2, 2)}
                    {col.some(item => item === 3) && option2F2(3, 3) || col.length === 0 && option2F2(3, 3)}
                    {col.some(item => item === 4) && option2F2(4, 4) || col.length === 0 && option2F2(4, 4)}
                    {col.some(item => item === 5) && option2F2(5, 5) || col.length === 0 && option2F2(5, 5)}
                    {col.some(item => item === 6) && option2F2(6, 6) || col.length === 0 && option2F2(6, 6)}
                    {col.some(item => item === 7) && option2F2(7, 7) || col.length === 0 && option2F2(7, 7)}
                    {col.some(item => item === 10) && option2F2(10, 10) || col.length === 0 && option2F2(10, 10)}
                  </div>
                </div>

              </div>
            </div>
          </div>



        <LazyLoadComponent>
          <div className={s.divBox12} style={{ zIndex: "1", position: "relative" }}>
            {
              listWash.map((item, i) => {
                if (item.colPost === colPost && item.obl === obl && item.vOb !== undefined) {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i, item.proect);
                } else if (item.obl === obl && colPost === 0 && item.vOb !== undefined) {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i, item.proect);
                } else if (colPost === 0 && obl === "all" && item.vOb !== undefined) {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i, item.proect);
                } else if (item.colPost === colPost && obl === "all" && item.vOb !== undefined) {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i, item.proect);
                } else if (item.colPost === colPost && item.obl2 === obl && item.vOb !== undefined) {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i, item.proect);
                } else if (colPost === 0 && item.obl2 === obl && item.vOb !== undefined) {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i, item.proect);
                } else if (item.vOb !== undefined && colPost === 0 && obl === "all") {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i, item.proect);
                }
              }) }
            {
              listWash.map((item, i) => {
                if (item.colPost === colPost && item.obl === obl && item.vOb === undefined) {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i, item.proect);
                } else if (item.obl === obl && colPost === 0  && item.vOb === undefined) {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i, item.proect);
                } else if (colPost === 0 && obl === "all"  && item.vOb === undefined) {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i, item.proect);
                } else if (item.colPost === colPost && obl === "all"  && item.vOb === undefined) {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i, item.proect);
                } else if (item.colPost === colPost && item.obl2 === obl  && item.vOb === undefined) {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i, item.proect);
                } else if (colPost === 0 && item.obl2 === obl && item.vOb === undefined) {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i, item.proect);
                }
              })
            }
          </div>
        </LazyLoadComponent>

        {/*<Post listWash={listWash} colPost={colPost} t={t} setPost={setPost} lang={lang} />*/}
      </main>

      <LazyLoadComponent>
        <FooterMain o={o} />
      </LazyLoadComponent>

    </>
  );
};

export default ListWash;