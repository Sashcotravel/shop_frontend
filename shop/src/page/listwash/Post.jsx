import React from "react";
import s from "../../component/Home.module.css";
// import OnePost from "./OnePost";
import { NavLink } from "react-router-dom";



const Post = ({ listWash, colPost, setPost, lang }) => {

  const container = (name, desc, desc2, city, img, imgNum, index) => {
    return (
      <div key={index} className={s.container} id={imgNum} >
        <div className={s.boxOne} id={imgNum}>
          <figure>
            <div style={{ height: "315px" }}>
              {/*<img src={require("../image2/post2_2.jpg")} className={"base"} id={`img${imgNum}`} />*/}
              <img src={img[0]} className={"base"} id={imgNum} />
            </div>
          </figure>
          <h5 className={s.itemName} id={imgNum}>{name}</h5>
          {desc.map((item, i) => <ul style={{ textDecoration: "none" }} id={imgNum}>
            <li key={i} className={s.itemDesc} id={imgNum}>{item}</li>
          </ul>)}
          <p className={s.itemDesc} id={imgNum}>{desc2}</p>
          <span className={s.itemDesc} id={imgNum}>місто {city}</span>
        </div>
      </div>
    );
  };

  const onePost = (e) => {
    listWash.forEach(item => {
      if(e.target.id === item.imgNum.toString()){
        setPost(item)
      }
    })
  }

  return (
    <>
      {
        <div className={s.divBox}>
            {
              lang === 'ua'
                ?
                listWash.map((item, index) => {
                if (item.colPost === colPost) {
                  return<NavLink onClick={onePost} to='/listWash/post'>
                    {container(item.name, item.desc, item.desc2, item.city, item.src, item.imgNum, index)}
                  </NavLink>
                } else if (colPost === 0) {
                  return <NavLink onClick={onePost} to='/listWash/post'>
                    {container(item.name, item.desc, item.desc2, item.city, item.src, item.imgNum, index)}
                  </NavLink>
                }
              })
              : listWash.map((item, index) => {
                  if (item.colPost === colPost) {
                    return<NavLink onClick={onePost} to='/listWash/post/en'>
                      {container(item.name, item.desc, item.desc2, item.city, item.src, item.imgNum, index)}
                    </NavLink>
                  } else if (colPost === 0) {
                    return <NavLink onClick={onePost} to='/listWash/post/en'>
                      {container(item.name, item.desc, item.desc2, item.city, item.src, item.imgNum, index)}
                    </NavLink>
                  }
                })
            }
          </div>
      }
    </>
  );
};

export default Post;