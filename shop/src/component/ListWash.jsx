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

const ListWash = ({ setOnFooter, t, lang, setPost }) => {

  // const [colPost, setColPost] = useState(0);


  const location = useLocation()
  const { id } = useParams();
  const { post } = useParams();
  const navigator = useNavigate()


  useEffect(() => {
    setOnFooter(true);

    if(location.pathname === '/nashi_avtomiyki/wsi'){}
    else if (location.pathname === `/nashi_avtomiyki/wsi/${post}`) {
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
  }, []);

  const click1Use = (o) => {
    obl = o
    col = [0]
    col2 = -1
    listWash.forEach((item, i) => {
      if (item.obl === o) {
        if(col2 === -1){
          col.pop()
        }
        if(item.colPost != col[col2]){
          col2++
          col.push(item.colPost)
        }
      }
    })
  }
  const onePost = (e) => {
    listWash.forEach(item => {
      if (e.target.id === item.imgNum.toString()) {
        setPost(item);
      }
    });
  };
  const container = ({ item, city, st, imgNum, map }) => {
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
          <NavLink onClick={onePost}
                   to={`/nashi_avtomiyki/miyka${oblUrl}${colP === 0 ? '' : '/' + colP}/${imgNum}`}>
            <button id={imgNum} className="redBut">Детальніше</button>
          </NavLink>
        </div>
      </div>
    );
  };
  const oblTrue = (obl) => {
    return obl === 'all' ? '/wsi' : obl === 'Закарпатська область' ? '/zakarpatska_oblast'
      : obl === 'Львівська область' ? '/lvivska_oblast' : obl === 'Франківська область' ? '/frankivska_oblast'
        : obl === 'Тернопільська область' ? '/ternopilska_oblast' : obl === 'Дніпропетровська область' ? '/dniprotrovska_oblast'
          : obl === 'Житомирська область' ? '/zhitomirska_oblast' : obl === 'Волинська область' ? '/volynska_oblast'
            : obl === 'Луганська область' ? '/luganska_oblast' : obl === 'Віницька область' ? '/vinnytska_oblast'
              : obl === 'Полтавська область' ? '/poltavska_oblast' : ''
  }
  const oblFalse = (id) => {
    return id === 'wsi' ? 'Виберіть область' : id === 'zakarpatska_oblast' ? 'Закарпатська область'
      : id === 'lvivska_oblast' ? 'Львівська область' : id === 'frankivska_oblast' ? 'Франківська область'
        : id === 'ternopilska_oblast' ? 'Тернопільська область' : id === 'dniprotrovska_oblast' ? 'Дніпропетровська область'
          : id === 'zhitomirska_oblast' ? 'Житомирська область' : id === 'volynska_oblast' ? 'Волинська область'
            : id === 'luganska_oblast' ? 'Луганська область' : id === 'vinnytska_oblast' ? 'Віницька область'
              : id === 'poltavska_oblast' ? 'Полтавська область' : ''
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
      }
    })
    if(col[0] === 0){
      document.getElementById('select').value = 0
    }
    // setColPost(col[0])
    colPost = col[0]
    let oblUrl = oblTrue(obl)
    if(obl === 'all'){
      navigator(`/nashi_avtomiyki/wsi`)
    }
    else if(obl !== 'all' && col[0] !== 0){
      navigator(`/nashi_avtomiyki${oblUrl}/${col[0]}`)
    }
  }
  const urlClick = (e) => {
    colP = e.target.value
    let oblUrl = oblTrue(obl)
    if(e.target.value === '0') {
      navigator(`/nashi_avtomiyki${oblUrl}`)
    } else {
      navigator(`/nashi_avtomiyki${oblUrl}${colP === 0 ? '' : '/' + colP}`)
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
        <div className='breadcrumbs'>
          <Link className='breads' onClick={oblUrl} to='/nashi_avtomiyki/wsi'>Наші автомийки</Link>
          <Link className='breads' to={`/nashi_avtomiyki/${id}/${colPost}`}>
          { obl !== 'all' ? ` / ${obl}` : ''}</Link>
          <Link className='breads' onClick={oblUrl2}  to={`/nashi_avtomiyki/wsi/${colPost}`}>
          { post !== undefined ? ` / ${colPost} поста` : '' } </Link>
        </div>
      }

      <h3 className={s.h3Title}>{t("title2")}</h3>

      {obl === "all" ? "" :
        <h4 className="h4Title">в {obl.split(" ")[0].slice(0, obl.split(" ")[0].length - 1)}ій області</h4>}

      <div>
        <div className="divItem"><img src={image2} className="slideStyle3" /></div>
        <select id='select2' className="select noneBorder slideStyle" onChange={click1}>
          <option value="all">Виберіть область</option>
          <option>Львівська область</option>
          <option>Франківська область</option>
          <option>Закарпатська область</option>
          <option>Тернопільська область</option>
          <option>Дніпропетровська область</option>
          <option>Житомирська область</option>
          <option>Волинська область</option>
          <option>Луганська область</option>
          <option>Віницька область</option>
          <option>Полтавська область</option>
        </select>
      </div>


      <div>
        <div className="divItem"><img src={image2} className="slideStyle3" /></div>
        <select className="select selects slideStyle2" onClick={urlClick} onChange={(e) => colPost = Number(e.target.value)}
                style={{ backgroundColor: "#29363b", paddingLeft: "107px" }} id='select' >
          {/*<option value="0">Всі</option>*/}
          {col?.map((item, i) => item === 0
            ? <option key={i} value="0">Кількість постів</option> : '' ) }
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
          {/*<option>2</option>*/}
          {/*<option>3</option>*/}
          {/*<option>4</option>*/}
          {/*<option>5</option>*/}
          {/*<option>6</option>*/}
          {/*<option>7</option>*/}
          {/*<option>10</option>*/}
        </select>
      </div>

      <div className={s.divBox}>
        {
          // lang === 'ua'
          //   ?
          listWash.map((item, i) => {
            if (item.colPost === colPost && item.obl === obl) {
              return container(item, item.city, item.st, item.imgNum, item.map, i);
            } else if (item.obl === obl && colPost === 0) {
              return container(item, item.city, item.st, item.imgNum, item.map, i);
            } else if (colPost === 0 && obl === "all") {
              return container(item, item.city, item.st, item.imgNum, item.map, i);
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
              return container(item, item.city, item.st, item.imgNum, item.map, i);
            }
          })
          //   : listWash.map((item, index) => {
          //     if (item.colPost === colPost) {
          //       return<NavLink onClick={onePost} to='/listWash/post/en'>
          //         {container(item.name, item.desc, item.desc2, item.city, item.src, item.imgNum, index)}
          //       </NavLink>
          //     } else if (colPost === 0) {
          //       return <NavLink onClick={onePost} to='/listWash/post/en'>
          //         {container(item.name, item.desc, item.desc2, item.city, item.src, item.imgNum, index)}
          //       </NavLink>
          //     }
          //   })
        }
      </div>

      <div>


        {/*{*/}
        {/*  lang == "ua" ?*/}
        {/*    <div className={s.divTitle}>*/}
        {/*      <span style={{color: 'white'}}>Кількість постів</span>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined}*/}
        {/*               className={s.spanTitle + " " + s.title1} to="/listWash/all" onClick={() => setColPost(0)}>{t("posts")}</NavLink>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined}*/}
        {/*               className={s.spanTitle + " " + s.title1} to="/listWash/1" onClick={() => setColPost(1)}>1 {t("post")}</NavLink>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}*/}
        {/*               to="/listWash/2" onClick={() => setColPost(2)}>2 {t("post")}</NavLink>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}*/}
        {/*               to="/listWash/3" onClick={() => setColPost(3)}>3 {t("post")}</NavLink>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}*/}
        {/*               to="/listWash/4" onClick={() => setColPost(4)}>4 {t("post")}</NavLink>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}*/}
        {/*               to="/listWash/5" onClick={() => setColPost(5)}>5 {t("post")}</NavLink>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}*/}
        {/*               to="/listWash/6" onClick={() => setColPost(6)}>6 {t("post")}</NavLink>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}*/}
        {/*               to="/listWash/7" onClick={() => setColPost(7)}>7 {t("post")}</NavLink>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}*/}
        {/*               to="/listWash/8" onClick={() => setColPost(8)}>8 {t("post")}</NavLink>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}*/}
        {/*               to="/listWash/9" onClick={() => setColPost(9)}>9 {t("post")}</NavLink>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}*/}
        {/*               to="/listWash/10" onClick={() => setColPost(10)}>10 {t("post")}</NavLink>*/}
        {/*    </div>*/}
        {/*    :*/}
        {/*    <div className={s.divTitle}>*/}
        {/*      <span style={{color: 'white'}}>Кількість постів</span>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined}*/}
        {/*               className={s.spanTitle + " " + s.title1} to="/listWash/all/en" onClick={() => setColPost(0)}>{t("posts")}</NavLink>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined}*/}
        {/*               className={s.spanTitle + " " + s.title1} to="/listWash/1/en" onClick={() => setColPost(1)}>1 {t("post")}</NavLink>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}*/}
        {/*               to="/listWash/2/en" onClick={() => setColPost(2)}>2 {t("post")}</NavLink>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}*/}
        {/*               to="/listWash/3/en" onClick={() => setColPost(3)}>3 {t("post")}</NavLink>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}*/}
        {/*               to="/listWash/4/en" onClick={() => setColPost(4)}>4 {t("post")}</NavLink>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}*/}
        {/*               to="/listWash/5/en" onClick={() => setColPost(5)}>5 {t("post")}</NavLink>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}*/}
        {/*               to="/listWash/6/en" onClick={() => setColPost(6)}>6 {t("post")}</NavLink>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}*/}
        {/*               to="/listWash/7/en" onClick={() => setColPost(7)}>7 {t("post")}</NavLink>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}*/}
        {/*               to="/listWash/8/en" onClick={() => setColPost(8)}>8 {t("post")}</NavLink>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}*/}
        {/*               to="/listWash/9/en" onClick={() => setColPost(9)}>9 {t("post")}</NavLink>*/}
        {/*      <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}*/}
        {/*               to="/listWash/10/en" onClick={() => setColPost(10)}>10 {t("post")}</NavLink>*/}
        {/*    </div>*/}
        {/*}*/}
      </div>

      {/*<Post listWash={listWash} colPost={colPost} t={t} setPost={setPost} lang={lang} />*/}
    </main>
  );
};

export default ListWash;