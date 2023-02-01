import React, { useEffect } from "react";
import "../Obl.css";
import ImageSlider from "./ImageSlider";
import image from "../../image/svg/Group 59.svg";
import image2 from "../../image2/coverMARCHELLO.jpg";
import Breadcrumbs from "../../Breadcrumbs";
import { Link, useLocation, useParams } from "react-router-dom";
import { listWash } from "../../users";
import FooterMain from "../../component/FooterMain";


const OnePost = ({ postOne, setOnFooter, t, lang, setPostOne }) => {

  const { idMiyka } = useParams();
  const { id } = useParams();
  const { post } = useParams();

  const o = -115

  useEffect(() => {
    setOnFooter(true);
    if (postOne === null) {
      listWash.map((item, i) => {
        if (item.city2 === idMiyka) {
          setPostOne(item);
        }
      });
    }

    return () => {
      setOnFooter(false);
    };
  }, []);
  const road = () => {

  };



  return (
    <>

        <div className={`boxPost2`}>
          <div className={postOne?.city === "Хуст" ? "divIm1" : postOne?.city === "Тернопіль" ? "divIm1" : ""}></div>
          <div className={postOne?.city === "Хуст" ? "divIm2" : postOne?.city === "Тернопіль" ? "divIm2" : ""}></div>

            {
              lang === "ua" ?
                <div className="breadcrumbs zI">
                  <Link className="breads" to="/nashi-avtomiyki/wsi">{t("OurCarWashes")}</Link>
                  <Link className="breads" to={`/nashi-avtomiyki/${id}/${post}`}>
                    {id === "wsi" ? "" : id === undefined ? "" : id !== "all" ? ` / ${postOne?.obl}` : ""}</Link>
                  <Link className="breads" to={`/nashi-avtomiyki/wsi/${post}`}>
                    {post === undefined ? '' : post === '0' ? '' : ` / ${post} ${t("postCol")}`} </Link>
                </div>
                :
                <div className="breadcrumbs zI">
                  <Link className="breads" to="/nashi-avtomiyki/wsi/en">{t("OurCarWashes")}</Link>
                  <Link className="breads" to={`/nashi-avtomiyki/${id}/${post}/en`}>
                    {id === "wsi" ? "" : id === undefined ? "" : id !== "all" ? ` / ${postOne.obl2}` : ""}</Link>
                  <Link className="breads" to={`/nashi-avtomiyki/wsi/${post}/en`}>
                    {post === undefined ? '' : post === '0' ? '' : ` / ${post} ${t("postCol")}`} </Link>
                </div>
            }

            <h4 className="titlePost zI">SamWash {postOne?.city}</h4>
            <p className="dataTitle zI">{postOne?.city}</p>
            <br />

          <figure className="containerStyle zI">
            {postOne?.src.map((item, index) => {
              if (item.slice(0, 4) === "http") {
                return <iframe key={index} className="imageBox" src={item} />;
              }
              return <img className="imageBox" key={index} src={item} />;
            })}
          </figure>

          <div className='divButP'>
            <p className="pSt">вул. {postOne?.st}, м. {postOne?.city}, {postOne?.obl.split(" ")[0]} обл.</p>

            <a href={postOne?.map} style={{ color: "white" }}>
              <div className="marshBut">
                <img style={{ position: "relative", left: "10px", width: "14%" }} src={image} />
                <span style={{ position: "relative", right: "10px" }}>{t("MakeARoute")}</span>
              </div>
            </a>
          </div>



          <p className="serv">{t("CarWashServices")}</p>

          <div className="servDiv">
            {postOne?.desc.map((item, index) => <div className="servDiv2" key={index}>
              <span className="spanGrad"></span>
              <span className='spanNameG' >{item}</span>
            </div>)}
          </div>
          <p className="desc2">{postOne?.desc2}</p>

          <p className='invest'>Ти можеш інвестувати в таку саму автомийку</p>

          <div onClick={road} className="hosh">{t("IWant")}</div>

        </div>
      {/*</div>*/}

      <FooterMain o={o} />
    </>
  );
};

export default OnePost;