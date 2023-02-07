import React, { useEffect } from "react";
import "../Obl.css";
import image from "../../image/svg/Group 59.svg";
import image2 from "../../image2/coverMARCHELLO.jpg";
import image3 from "../../image/svg/Group31.svg";
import { Link, useLocation, useParams } from "react-router-dom";
import { listWash } from "../../users";
import FooterMain from "../../component/FooterMain";
import { Fancybox, Carousel } from "@fancyapps/ui";


const OnePost = ({ postOne, setOnFooter, t, setPostOne }) => {

  const { idMiyka } = useParams();
  const { id } = useParams();
  const { post } = useParams();
  const location = useLocation();


  const o = -115
  const url2 = location.pathname.slice(location.pathname.length - 2) !== "en";


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


  let one = postOne?.obl
  let two = postOne?.obl2

  const oblTrue = (one, two) => {
    if (url2) {
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

  const style = {
    margin: '10px auto 60px 100px'
  }

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

  return (
    <>

        <div className={`boxPost2`}>
          <div className={postOne?.city === "Хуст" ? "divIm1" : postOne?.city === "Тернопіль" ? "divIm1" : ""}></div>
          <div className={postOne?.city === "Хуст" ? "divIm2" : postOne?.city === "Тернопіль" ? "divIm2" : ""}></div>

            {
              localStorage.i18nextLng === 'ua' ?
                <div className="breadcrumbs zI" style={ window.screen.availWidth > 900 ? style : undefined}>
                  <Link className="breads" to="/">{t("home")}</Link>
                  <Link className="breads" to="/nashi-avtomiyki/wsi">/ {t("OurCarWashes")}</Link>
                  <Link className="breads" to={`/nashi-avtomiyki${fg}/${postOne?.colPost}`}>
                    {` / ${postOne?.obl}`}</Link>
                  <Link className="breads" to={`/nashi-avtomiyki/wsi/${postOne?.colPost}`}>
                    {/*{` / ${postOne?.colPost} ${t("postCol")}`} </Link>*/}
                    / {postColIn(postOne?.colPost, 'breads')} </Link>
                </div>
                :
                <div className="breadcrumbs zI" style={ window.screen.availWidth > 900 ? style : undefined}>
                  <Link className="breads" to="/">{t("home")}</Link>
                  <Link className="breads" to="/nashi-avtomiyki/wsi">/ {t("OurCarWashes")}</Link>
                  <Link className="breads" to={`/nashi-avtomiyki${fg}/${postOne?.colPost}`}>
                    {` / ${postOne?.obl2}`}</Link>
                  <Link className="breads" to={`/nashi-avtomiyki/wsi/${postOne?.colPost}`}>
                    {/*{` / ${postOne?.colPost} ${t("postCol")}`} </Link>*/}
                    / {postColIn(postOne?.colPost, 'breads')} </Link>
                </div>
            }

            <h1 className="titlePost zI">SamWash {postOne?.city}</h1>
            <p className="dataTitle zI">{postOne?.city}</p>
            <br />


          <figure className="containerStyle zI">
            {/*<div className="flex flex-wrap gap-5 justify-center max-w-5xl mx-auto px-6 overflow-y-hidden">*/}
            {postOne?.src.map((item, index) => {
              if (item.slice(0, 4) === "http") {
                return  <a key={index} data-fancybox="gallery" href={item}>
                  <iframe key={index} className="imageBox" src={item} />
                </a>
              }
              return <a key={index} data-fancybox="gallery" href={item}>
              <img className="rounded imageBox" key={index} src={item} />
              </a>
            })}
            {/*</div>*/}
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

          <p className='invest'>{t("youCan")}</p>

          <div onClick={road} className="hosh">{t("IWant")}</div>

        {/*</div>*/}
      </div>

      <FooterMain o={o} />
    </>
  );
};

export default OnePost;





// const hidden2 = (e) => {
//   if (e.target.id === "light2") {
//     let con = document.getElementById("light2");
//     con.style.visibility = "hidden";
//   }
// };
// const imgSize = (e) => {
//   let twoImg = document.getElementById("lightCol2");
//   twoImg.src = "";
//   if (window.screen.availWidth > 900) {
//     let g = document.getElementById('lightCol2');
//     postOne?.src.forEach(item => {
//       if(item.slice(0,5) === 'https'){
//         let con = document.getElementById("light2");
//         con.style.visibility = "visible";
//         twoImg.src = item
//       }})
//   }
// };

// <div id="light2" className={s.boxHideImage} style={{zIndex: '2'}} onClick={hidden2}>
//   <figure className="figure" id="light2">
//     <div className="divImg" id="light2">
//             <span className="blockLarge12" id="light2">
//               <img style={{ width: "35px" }} src={image3} onClick={hidden2} id="light2" />
//             </span>
//       {/*<img src={''} className="imageLarge" id="lightCol" />*/}
//       <iframe className="imageLarge2" id="lightCol2" width="80vw" height='80vh' src="https://www.youtube.com/embed/wvo65hmKvtA"/>
//     </div>
{/*  </figure>*/}
{/*</div>*/}

// if (item.slice(0, 4) === "http") {
//   return <div>
//     <iframe key={index} className="imageBox" src={item} />
//     {
//       window.screen.width > 900 ? <span className="block12">
//                     <img style={{ width: "35px" }} src={image1} onClick={imgSize} id={postOne?.imgNum} />
//                     </span> : ""
//     }
//   </div>
// }
// return <img className="imageBox" key={index} src={item} />;