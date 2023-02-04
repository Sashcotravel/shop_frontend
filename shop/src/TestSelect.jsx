import React, { useEffect, useState } from "react";
import s from "./component/Home.module.css";
import { Link, Navigate, NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { listWash } from "./users";
import image from "./image/svg/Route.svg";
import image2 from "./image/svg/Arrow.svg";
import FooterMain from "./component/FooterMain";
// import Post from "../page/listwash/Post";




let obl = 'all'
let colPost = 0
let col = []

const ListWash123 = ({ setOnFooter, t, lang, setPostOne, changeLanguage }) => {


  const location = useLocation();
  const { id } = useParams();
  const { post } = useParams();
  const navigator = useNavigate();


  useEffect(() => {
    setOnFooter(true);
    return () => {
      setOnFooter(false);
    };
  }, []);


  const oblTrue = (obl) => {
      return obl === "all" ? "/wsi" : obl === "Закарпатська область" ? "/zakarpatska-oblast"
        : obl === "Львівська область" ? "/lvivska-oblast" : obl === "Франківська область" ? "/frankivska-oblast"
          : obl === "Тернопільська область" ? "/ternopilska-oblast" : obl === "Дніпропетровська область" ? "/dniprotrovska-oblast"
            : obl === "Житомирська область" ? "/zhitomirska-oblast" : obl === "Волинська область" ? "/volynska-oblast"
              : obl === "Луганська область" ? "/luganska-oblast" : obl === "Вінницька область" ? "/vinnytska-oblast"
                : obl === "Полтавська область" ? "/poltavska-oblast" : "";
  };
  const container = ({ item, city, vOb, imgNum, map, city2, st }) => {
    return (
      <div key={imgNum}>
        {vOb === undefined ? "" : <div className="addBlock">ВЛАСНИЙ ОБ'ЄКТ</div>}
        <div className="boxItem">
          <p className="pRed">SAMWASH</p>
          <div className="divRoad">
            <div>
              <p className='titlePName'>{city}</p>
              <p className='titlePName2'>{st !== undefined && st !== '' ? `вул. ${st}` : ''}</p>
            </div>
            <a href={map}>
              <img src={image} style={{ margin: "0 10px 0 0" }} width={"53.74px"} />
            </a>
          </div>
        </div>
      </div>
    );
  };
  const oblSelect = (e) => {
    let idObl = e.target.value
    obl = idObl
    let oblUrl = oblTrue(obl);
    if (idObl === "all") {
      navigator(`/test/nashi-avtomiyki/wsi`);
    }
    else if (colPost !== 0){
      navigator(`/test/nashi-avtomiyki${oblUrl}/${colPost}`);
    }
    else if (post !== idObl){
      navigator(`/test/nashi-avtomiyki${oblUrl}`);
    }
    col = []
    listWash.map(item => {
      if(item.obl === idObl){
        col.push(item.colPost)
      }
    })
    console.log(col);
  };
  const urlClick = (e) => {
    let idPost = e.target.value
    colPost = Number(idPost)
    let oblUrl = oblTrue(obl);
    if (post !== idPost) {
      if(idPost === '0' && obl === 'all'){
        navigator(`/test/nashi-avtomiyki/wsi`);
      } else if (idPost === '0' && obl !== 'all'){
        navigator(`/test/nashi-avtomiyki/wsi`);
      }else if (colPost !== 0 && obl !== 'all'){
        navigator(`/test/nashi-avtomiyki${oblUrl}/${colPost}`);
      } else {
        navigator(`/test/nashi-avtomiyki/${idPost}`);
      }
    }
  };

  const style = {
    margin: "auto 128px"
  };


  return (
    <>
      <main style={window.screen.availWidth > 900 ? style : undefined}>

        <div className="divBoxTitASel">
          <div>
            {/*<h3 className={s.h3Title}>{t("title2")}</h3>*/}
            <h1 className="titleH2">{t("title2")}</h1>
            {obl === "all" ? "" :
              <h4 className="titleH4">в {obl.split(" ")[0]
                .slice(0, obl.split(" ")[0].length - 1)}ій {t("oblast")}</h4>}
          </div>
          <div style={window.screen.availWidth > 900 ? { marginLeft: "21px" } : { margin: "0 auto" } }>
            <div>
              <div className="divItem"><img src={image2} className="slideStyle3" /></div>
              <select id="select2" className="select noneBorder slideStyle" onChange={oblSelect}>
                <option value="all">{t("SelectAnArea")}</option>
                <option>{"Львівська область"}</option>
                <option>{"Франківська область"}</option>
                <option>{"Закарпатська область"}</option>
                <option>{"Тернопільська область"}</option>
                <option>{"Дніпропетровська область"}</option>
                <option>{"Житомирська область"}</option>
                <option>{"Волинська область"}</option>
                <option>{"Луганська область"}</option>
                <option>{"Вінницька область"}</option>
                <option>{"Полтавська область"}</option>
              </select>
            </div>
            <div>
              <div className="divItem"><img src={image2} className="slideStyle3" /></div>
              <select className="select selects slideStyle2" onChange={urlClick}
                      // onChange={(e) => colPost = Number(e.target.value)}
                      style={{ backgroundColor: "#29363b", paddingLeft: "107px" }} id="select">
                <option value="0">Кількість постів</option>
                { col.some(item => item === 2) === true ? <option>2</option> : col.length === 0
                  ? <option>2</option> : '' }
                { col.some(item => item === 3) === true ? <option>3</option> : col.length === 0
                  ? <option>3</option> : '' }
                { col.some(item => item === 4) === true ? <option>4</option> : col.length === 0
                  ? <option>4</option> : '' }
                { col.some(item => item === 5) === true ? <option>5</option> : col.length === 0
                  ? <option>5</option> : '' }
                { col.some(item => item === 6) === true ? <option>6</option> : col.length === 0
                  ? <option>6</option> : '' }
                { col.some(item => item === 7) === true ? <option>7</option> : col.length === 0
                  ? <option>7</option> : '' }
                { col.some(item => item === 10) === true ? <option>10</option> : col.length === 0
                  ? <option>10</option> : '' }
              </select>
            </div>
          </div>
        </div>


        <div className={s.divBox12}>
          {
            location.pathname.slice(location.pathname.length - 2) !== "en" ?
              listWash.map((item, i) => {
                if (item.colPost === colPost && item.obl === obl) {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i);
                } else if (item.obl === obl && colPost === 0) {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i);
                } else if (colPost === 0 && obl === "all") {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i);
                } else if (item.colPost === colPost && obl === "all") {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i);
                } else if (item.colPost === colPost && item.obl2 === obl) {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i);
                } else if (colPost === 0 && item.obl2 === obl) {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i);
                }
              })
              :
              listWash.map((item, i) => {
                if (item.colPost === colPost && item.obl2 === obl) {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i);
                } else if (item.obl2 === obl && colPost === 0) {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i);
                } else if (colPost === 0 && obl === "all") {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i);
                  // return <div key={index} className='boxItem'>
                  //                     <p className='pRed'>SAMWASH</p>
                  //                   <div className='divRoad'>
                  //                     <div>
                  //                       <span>{item.city}</span> <br/>
                  //                       <span style={{fontSize: '12px'}}>{item.city}</span>
                  //                     </div>
                  //                     <img src={image} style={{margin: '0 10px 0 0'}} width={'53.74px'} />
                  //                   </div>
                  //                     <NavLink onClick={onePost} to='/listWash/post'>
                  //                       <button className='redBut'>Детальніше</button>
                  //                     </NavLink>
                  //                   </div>
                } else if (item.colPost === colPost && obl === "all") {
                  return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i);
                }
              })
          }
        </div>


        {/*<Post listWash={listWash} colPost={colPost} t={t} setPost={setPost} lang={lang} />*/}
      </main>

    </>
  );
};

export default ListWash123;