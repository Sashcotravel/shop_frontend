import React, { useEffect, useState } from "react";
import s from "./Home.module.css";
import { Link, Navigate, NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { listWash } from "../users";
import image from "../image/svg/Route.svg";
import image2 from "../image/svg/Arrow.svg";
import Breadcrumbs from "../Breadcrumbs";
// import Post from "../page/listwash/Post";


let col = [0]
let col2 = 0
let oblUrl
let colP = 0
let obl = 'all'
let colPost = 0

const ListWash = ({ setOnFooter, t, lang, setPostOne, changeLanguage }) => {

  // const [colPost, setColPost] = useState(0);

  const location = useLocation()
  const { id } = useParams();
  const { post } = useParams();
  const navigator = useNavigate()

  const url = location.pathname.slice(location.pathname.length-2) === 'en'
  const url1 = location.pathname.slice(location.pathname.length-2)
  const url2 = location.pathname.slice(location.pathname.length-2) !== 'en'

  useEffect(() => {
    setOnFooter(true);
    if(url){
      changeLanguage('en')
      obl = oblFalse(id)
      click1Use(obl)
      colPost = Number(post)
      document.getElementById('select2').value = obl
      document.getElementById('select').value = post
      console.log('lol');
      console.log(url1);
    } else {
      changeLanguage('ua')
      obl = oblFalse(id)
      click1Use(obl)
      colPost = Number(post)
      document.getElementById('select2').value = obl
      document.getElementById('select').value = post
      console.log('lol2');
    }
    if(location.pathname === '/nashi-avtomiyki/wsi'){
      document.getElementById('select2').value = 'all'
      document.getElementById('select').value = 0
    }
    else if(location.pathname === '/nashi-avtomiyki/wsi/en'){
      document.getElementById('select2').value = 'all'
      document.getElementById('select').value = 0
    }
    else if (location.pathname === `/nashi-avtomiyki/wsi/${post}`) {
      colPost = Number(post)
      document.getElementById('select').value = post
    }
    else if (location.pathname === `/nashi-avtomiyki/wsi/${post}/en`) {
      colPost = Number(post)
      document.getElementById('select').value = post
    }
    else {
      obl = oblFalse(id)
      click1Use(obl)
      colPost = Number(post)
      document.getElementById('select2').value = obl
      document.getElementById('select').value = post
    }

    return () => {
      setOnFooter(false);
    };
  }, [lang]);


  const click1Use = (o) => {
    obl = o
    col = [0]
    col2 = -1
    listWash.forEach((item, i) => {
      if(url2){
        if (item.obl === o) {
          if(col2 === -1){
            col.pop()
          }
          if(item.colPost != col[col2]){
            col2++
            col.push(item.colPost)
          }
        }
      } else {
        if (item.obl2 === o) {
          if(col2 === -1){
            col.pop()
          }
          if(item.colPost != col[col2]){
            col2++
            col.push(item.colPost)

          }
        }
      }
    })
  }
  const onePost = (e) => {
    listWash.forEach(item => {
      if (e.target.id === item.imgNum.toString()) {
        setPostOne(item);
      }
    });
  };
  const container = ({ item, city, st, imgNum, map, city2 }) => {
    let oblUrl = oblTrue(obl)
    return (
      <div key={imgNum}>
        { st === undefined ? "" : <div className="addBlock">Власний об'єкт</div> }
        <div className="boxItem">
          <p className="pRed">SAMWASH</p>
          <div className="divRoad">
            <div>
              <span>{city}</span> <br />
              <span style={{ fontSize: "12px" }}>{city}</span>
            </div>
            <a href={map}>
              <img src={image} style={{ margin: "0 10px 0 0" }} width={"53.74px"} />
            </a>
          </div>
          {
            lang === 'ua' ?
              <NavLink onClick={onePost}
                       to={`/nashi-avtomiyki/miyka${oblUrl}${colP === 0 ? '' : '/' + colP}/${city2}`}>
                <button id={imgNum} className="redBut">{t("Details")}</button>
              </NavLink>
              :
              <NavLink onClick={onePost}
                       to={`/nashi-avtomiyki/miyka${oblUrl}${colP === 0 ? '' : '/' + colP}/${city2}/en`}>
                <button id={imgNum} className="redBut">{t("Details")}</button>
              </NavLink>
          }
        </div>
      </div>
    );
  };
  const oblTrue = (obl) => {
    if(url2){
      return obl === 'all' ? '/wsi' : obl === 'Закарпатська область' ? '/zakarpatska-oblast'
        : obl === 'Львівська область' ? '/lvivska-oblast' : obl === 'Франківська область' ? '/frankivska-oblast'
          : obl === 'Тернопільська область' ? '/ternopilska-oblast' : obl === 'Дніпропетровська область' ? '/dniprotrovska-oblast'
            : obl === 'Житомирська область' ? '/zhitomirska-oblast' : obl === 'Волинська область' ? '/volynska-oblast'
              : obl === 'Луганська область' ? '/luganska-oblast' : obl === 'Віницька область' ? '/vinnytska-oblast'
                : obl === 'Полтавська область' ? '/poltavska-oblast' : ''
    }
    else {
      return obl === 'all' ? '/wsi' : obl === 'Zakarpatska Oblast' ? '/zakarpatska-oblast'
        : obl === 'Lvivska Oblast' ? '/lvivska-oblast' : obl === 'Ivano-Frankivska Oblast' ? '/frankivska-oblast'
          : obl === 'Ternopilska Oblast' ? '/ternopilska-oblast' : obl === 'Dnipropetrovska Oblast' ? '/dniprotrovska-oblast'
            : obl === 'Zhytomyrska Oblast' ? '/zhitomirska-oblast' : obl === 'Volynska Oblast' ? '/volynska-oblast'
              : obl === 'Luhanska Oblast' ? '/luganska-oblast' : obl === 'Vinnytska Oblast' ? '/vinnytska-oblast'
                : obl === 'Poltavska Oblast' ? '/poltavska-oblast' : ''
    }
  }
  const oblFalse = (id) => {
    if(url2) {
      return id === 'wsi' ? 'Виберіть область' : id === 'zakarpatska-oblast' ? 'Закарпатська область'
        : id === 'lvivska-oblast' ? 'Львівська область' : id === 'frankivska-oblast' ? 'Франківська область'
          : id === 'ternopilska-oblast' ? 'Тернопільська область' : id === 'dniprotrovska-oblast' ? 'Дніпропетровська область'
            : id === 'zhitomirska-oblast' ? 'Житомирська область' : id === 'volynska-oblast' ? 'Волинська область'
              : id === 'luganska-oblast' ? 'Луганська область' : id === 'vinnytska-oblast' ? 'Віницька область'
                : id === 'poltavska-oblast' ? 'Полтавська область' : ''
    }
    else {
      return id === 'wsi' ? 'Select an Oblast' : id === 'zakarpatska-oblast' ? 'Zakarpatska Oblast'
        : id === 'lvivska-oblast' ? 'Lvivska Oblast' : id === 'frankivska-oblast' ? 'Ivano-Frankivska Oblast'
          : id === 'ternopilska-oblast' ? 'Ternopilska Oblast' : id === 'dniprotrovska-oblast' ? 'Dnipropetrovska Oblast'
            : id === 'zhitomirska-oblast' ? 'Zhytomyrska Oblast' : id === 'volynska-oblast' ? 'Volynska Oblast'
              : id === 'luganska-oblast' ? 'Luhansk Oblast' : id === 'vinnytska-oblast' ? 'Vinnytska Oblast'
                : id === 'poltavska-oblast' ? 'Poltavska Oblast' : ''
    }
  }
  const click1 = (e) => {
    obl = e.target.value
    col = [0]
    col2 = -1
    listWash.forEach((item, i) => {
      if (item.obl === e.target.value) {
        if(col2 === -1){
          col.pop()
        }
        if(item.colPost != col[col2]){
          col2++
          col.push(item.colPost)
        }
      } else if (item.obl2 === e.target.value){
        if(col2 === -1){
          col.pop()
        }
        if(item.colPost != col[col2]){
          col2++
          col.push(item.colPost)
        }
      }
    })
    if(col[0] === 0){
      document.getElementById('select').value = 0
    }
    // setColPost(col[0])
    colPost = col[0]
    let oblUrl = oblTrue(obl)
    if(obl === 'all'){
      if(url){
        navigator(`/nashi-avtomiyki/wsi/en`)
      } else {
        navigator(`/nashi-avtomiyki/wsi`)
      }
    }
    else if(obl !== 'all' && col[0] !== 0){
      if(url){
        navigator(`/nashi-avtomiyki${oblUrl}/${col[0]}/en`)
      } else {
        navigator(`/nashi-avtomiyki${oblUrl}/${col[0]}`)
      }
    }
  }
  const urlClick = (e) => {
    colP = e.target.value
    let oblUrl = oblTrue(obl)
    if(e.target.value === '0') {
      if(location.pathname.slice(location.pathname.length-2) === 'en'){
        navigator(`/nashi-avtomiyki${oblUrl}/en`)
      } else {
        navigator(`/nashi-avtomiyki${oblUrl}`)
      }
    } else {
      if(location.pathname.slice(location.pathname.length-2) === 'en'){
        navigator(`/nashi-avtomiyki${oblUrl}${colP === 0 ? '' : '/' + colP}/en`)
      } else {
        navigator(`/nashi-avtomiyki${oblUrl}${colP === 0 ? '' : '/' + colP}`)
      }
    }
  }

  const oblUrl = () => {
    colPost = Number(0)
    click1Use('all')
    document.getElementById('select2').value = 'all'
    document.getElementById('select').value = 0
  }
 const oblUrl2 = () => {
    click1Use('all')
    document.getElementById('select2').value = 'all'
  }


  return (
    <main>

      {/*{ location.pathname === "/" ? "" : <Breadcrumbs /> }*/}

      {
        lang === "ua" ?
          <div className="breadcrumbs">
            <Link className="breads" onClick={oblUrl} to="/nashi-avtomiyki/wsi">{t("OurCarWashes")}</Link>
            <Link className="breads" to={`/nashi-avtomiyki/${id}/${colPost}`}>
              {obl !== "all" ? ` / ${obl}` : obl === "wsi" ? "" : ""}</Link>
            <Link className="breads" onClick={oblUrl2} to={`/nashi-avtomiyki/wsi/${colPost}`}>
              {post !== undefined ? ` / ${colPost} ${t("postCol")}` : ""} </Link>
          </div>
          :
          <div className="breadcrumbs">
            <Link className="breads" onClick={oblUrl} to="/nashi-avtomiyki/wsi/en">{t("OurCarWashes")}</Link>
            <Link className="breads" to={`/nashi-avtomiyki/${id}/${colPost}/en`}>
              {obl !== "all" ? ` / ${obl}` : obl === "wsi" ? "" : ""}</Link>
            <Link className="breads" onClick={oblUrl2} to={`/nashi-avtomiyki/wsi/${colPost}/en`}>
              {post !== undefined ? ` / ${colPost} ${t("postCol")}` : ""} </Link>
          </div>
      }

      <h3 className={s.h3Title}>{t("title2")}</h3>

      { obl === "all" ? "" :
        <h4 className="h4Title">в {obl.split(" ")[0].slice(0, obl.split(" ")[0].length - 1)}ій області</h4> }

      <div>
        <div className="divItem"><img src={image2} className="slideStyle3" /></div>
        <select id='select2' className="select noneBorder slideStyle" onChange={click1}>
          <option value='all'>{t("SelectAnArea")}</option>
          <option>{url ? "Lvivska Oblast" : "Львівська область"}</option>
          <option>{url ? "Ivano-Frankivska Oblast" : "Франківська область"}</option>
          <option>{url ? "Zakarpatska Oblast" : "Закарпатська область"}</option>
          <option>{url ? "Ternopilska Oblast" : "Тернопільська область"}</option>
          <option>{url ? "Dnipropetrovska Oblast" : "Дніпропетровська область"}</option>
          <option>{url ? "Zhytomyrska Oblast" : "Житомирська область"}</option>
          <option>{url ? "Volynska Oblast" : "Волинська область"}</option>
          <option>{url ? "Luhanska Oblast" : "Луганська область"}</option>
          <option>{url ? "Vinnytska Oblast" : "Віницька область"}</option>
          <option>{url ? "Poltavska Oblast" : "Полтавська область"}</option>
        </select>
      </div>


      <div>
        <div className="divItem"><img src={image2} className="slideStyle3" /></div>
        <select className="select selects slideStyle2" onClick={urlClick} onChange={(e) => colPost = Number(e.target.value)}
                style={{ backgroundColor: "#29363b", paddingLeft: "107px" }} id='select' >
          {col?.map((item, i) => item === 0
            ? <option key={i} value="0">{t("NumberOfPosts")}</option> : '' ) }
          {col?.map((item, i) => item === 2
            ? <option key={i}>2</option> : item === 0 ? <option key={i}>2</option> : '' ) }
          {col?.map((item, i) => item === 3
            ? <option key={i}>3</option> : item === 0 ? <option key={i}>3</option> : '' ) }
          {col?.map((item, i) => item === 4
            ? <option key={i}>4</option> : item === 0 ? <option key={i}>4</option> : '' ) }
          {col?.map((item, i) => item === 5
            ? <option key={i}>5</option> : item === 0 ? <option key={i}>5</option> : '' ) }
          {col?.map((item, i) => item === 6
            ? <option key={i}>6</option> : item === 0 ? <option key={i}>6</option> : '' ) }
          {col?.map((item, i) => item === 7
            ? <option key={i}>7</option> : item === 0 ? <option key={i}>7</option> : '' ) }
          {col?.map((item, i) => item === 10
            ? <option key={i}>10</option> : item === 0 ? <option key={i}>10</option> : '' ) }
          {/*<option value="0">Кількість постів</option>*/}
          {/*<option>10</option>*/}
        </select>
      </div>

      <div className={s.divBox}>
        {
          !url ?
            listWash.map((item, i) => {
              if (item.colPost === colPost && item.obl === obl) {
                return container(item, item.city, item.st, item.imgNum, item.map, item.city2, i);
              } else if (item.obl === obl && colPost === 0) {
                return container(item, item.city, item.st, item.imgNum, item.map, item.city2, i);
              } else if (colPost === 0 && obl === "all") {
                return container(item, item.city, item.st, item.imgNum, item.map, item.city2, i);
              } else if (item.colPost === colPost && obl === "all") {
                return container(item, item.city, item.st, item.imgNum, item.map, item.city2, i);
              }
            })
            :
            listWash.map((item, i) => {
              if (item.colPost === colPost && item.obl2 === obl) {
                return container(item, item.city, item.st, item.imgNum, item.map, item.city2, i);
              } else if (item.obl2 === obl && colPost === 0) {
                return container(item, item.city, item.st, item.imgNum, item.map, item.city2, i);
              } else if (colPost === 0 && obl === "all") {
                return container(item, item.city, item.st, item.imgNum, item.map, item.city2, i);
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
                return container(item, item.city, item.st, item.imgNum, item.map, item.city2, i);
              }
            })
        }
      </div>

      {/*<Post listWash={listWash} colPost={colPost} t={t} setPost={setPost} lang={lang} />*/}
    </main>
  );
};

export default ListWash;