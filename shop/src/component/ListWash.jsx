import React, { useEffect, useState } from "react";
import s from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { listWash } from "../users";
import Post from "../page/listwash/Post";
import image from "../image/svg/Route.svg";
import image2 from "../image/svg/Arrow.svg";


const ListWash = ({ setOnFooter, t, lang, setPost }) => {

  const [colPost, setColPost] = useState(0);
  const [obl, setObl] = useState("all");

  useEffect(() => {
    setOnFooter(true);
    return () => {
      setOnFooter(false);
    };
  }, []);

  const onePost = (e) => {
    listWash.forEach(item => {
      if (e.target.id === item.imgNum.toString()) {
        setPost(item);
      }
    });
  };

  const container = ({ item, city, st, imgNum, index }) => {
    return (
      <div>
        {
          st === undefined ? "" : <div className="addBlock">
            Власний об'єкт
          </div>
        }
        <div key={index} className="boxItem">
          <p className="pRed">SAMWASH</p>
          <div className="divRoad">
            <div>
              <span>{city}</span> <br />
              <span style={{ fontSize: "12px" }}>{city}</span>
            </div>
            <img src={image} style={{ margin: "0 10px 0 0" }} width={"53.74px"} />
          </div>
          <NavLink onClick={onePost} to="/listWash/post">
            <button id={imgNum} className="redBut">Детальніше</button>
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <main>
      <h3 className={s.h3Title}>{t("title2")}</h3>

      {obl === "all" ? "" :
        <h4 className="h4Title">в {obl.split(" ")[0].slice(0, obl.split(" ")[0].length - 1)}ій області</h4>}

      <div>
        <div className="divItem"><img src={image2} className="slideStyle3" /></div>
        <select className="select noneBorder slideStyle" onChange={(e) => setObl(e.target.value)}>
          <option value="all">Виберіть область</option>
          <option value="all">Всі</option>
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
        <select className="select selects slideStyle2" onChange={(e) => setColPost(Number(e.target.value))}
                style={{ backgroundColor: "#29363b", paddingLeft: "107px" }}>
          <option value="0">Кількість постів</option>
          <option value="0">Всі</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>10</option>
        </select>
      </div>

      <div className={s.divBox}>
        {
          // lang === 'ua'
          //   ?
          listWash.map((item, index) => {
            if (item.colPost === colPost && item.obl === obl) {
              return container(item, item.city, item.st, item.imgNum, index);
            } else if (item.obl === obl && colPost === 0) {
              return container(item, item.city, item.st, item.imgNum, index);
            } else if (colPost === 0 && obl === "all") {
              return container(item, item.city, item.st, item.imgNum, index);
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
              return container(item, item.city, item.st, item.imgNum, index);
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