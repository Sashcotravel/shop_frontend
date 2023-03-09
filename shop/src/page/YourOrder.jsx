import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "../component/Home.module.css";
import image1 from "../image/svg/Fullscreenicon.svg";
import image2 from "../image/svg/Group31.svg";
import instance from "../API/API";
import { Users } from "../users";
import { LazyLoadImage } from "react-lazy-load-image-component";


const YourOrder = ({ setOnFooter }) => {

  const [order, setOrder] = useState({
    total: 0, createdAt: null, order: []
  });
  const screen = window.screen.availWidth > 900

  const { id } = useParams();

  // let orderReq;

  useEffect(() => {
    (async function() {
      try {
        setOnFooter(true);
        let f = id.slice(0, id.length - 13);
        // orderReq = await dispatch(fetchOrder(f));
        const { data } = await instance.get(`/order/fetchOrder/${f}`);
        setOrder((actual) => {
          return {
            ...actual, total: data.total,
            order: data.order,
            createdAt: data.createdAt
          };
        });
      }
      catch (e) { console.log(e) }
      return () => {
        setOnFooter(false);
      };
    })();
  }, []);

  const size = (num) => {
    return (
      window.screen.width > 900 ? <span className="block">
        <img style={{ width: "35px", height: '35px' }} src={image1} onClick={imgSize} id={`img${num}`} alt='size'/>
      </span> : ""
    );
  };

  // const imgSize123 = (e) => {
  //   if (window.screen.availWidth > 900) {
  //     let twoImg = document.getElementById("lightCol");
  //     let g = document.getElementById(e.target.id);
  //     Users.map(item => {
  //       if('img' + item.nameImg === e.target.id){
  //         let con = document.getElementById("light");
  //         con.style.visibility = "visible";
  //         twoImg.src = `/big_jpeg/${item.nameWebp}`
  //       }
  //     })
  //   }
  // };

  const imgSize = (e) => {
    if (window.screen.availWidth > 900) {
      let twoImg = document.getElementById("lightCol");
      let g = document.getElementById(e.target.id);
      if (e.target.id === "img4" || e.target.id === "img5" || e.target.id === "img17" || e.target.id === "img16") {
        let con = document.getElementById("light2");
        con.style.visibility = "visible";
        let twoImg = document.getElementById("lightCol2");
        twoImg.src = g.src;

      }  else {
        Users.map(item => {
          if('img' + item.nameImg === e.target.id){
            let con = document.getElementById("light");
            con.style.visibility = "visible";
            twoImg.src = `/big_jpeg/${item.nameWebp}`
          }
        })
      }
    }
  };

  const hidden = (e) => {
    if (e.target.id === "light") {
      let con = document.getElementById("light");
      con.style.visibility = "hidden";
    } else if (e.target.id === "light2") {
      let con = document.getElementById("light2");
      con.style.visibility = "hidden";
    }
  };


  const container = (img, imgNum, nameGoods, total, totalsSize, index) => {
    return (
      <div key={index} className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div>
              {
                img.slice(0, 4) === 'http' ?
                <iframe id={`img${imgNum}`} width="100%" height="100%" src={img}
                title="Програма піна високий тиск" style={{border: 'none'}} />
                : <img src={`/big_jpeg/${img}`} className={"base"} id={`img${imgNum}`} />
              }
              {/*<img src={`/big_jpeg/${img}`} className={"base"} id={`img${imgNum}`} />*/}
              {/*<div style={{backgroundImage: `url("/logo192.png`}} className={"base"} id={`img${imgNum}`} />*/}
              {size(imgNum)}
            </div>
          </figure>
          <h5 className={s.itemName}>{nameGoods}</h5>
          <p className={s.itemDesc}></p>
          <div className={s.divBut}>
            <div style={{ padding: 10 + "px", margin: "20px 15px" }}>
              <span className={s.itemTotalSize} id="lightblue">{totalsSize}</span>
            </div>
            <span className={s.itemTotal}>{total} грн</span>
          </div>
        </div>
      </div>
    );
  };


  return <>
    <main>

      {screen && <div id="light" className={s.boxHideImage} onClick={hidden}>
        <figure className="figure" id="light">
          <div className="divImg" id="light">
            <span className="blockLarge" id="light">
              <img style={{ width: "35px", height: '35px' }} src={image2} onClick={hidden} id="light" alt='open'/>
            </span>
            <img src='' className="imageLarge" id="lightCol" />
          </div>
        </figure>
      </div> }
      {screen && <div id="light2" className={s.boxHideImage} onClick={hidden}>
        <figure className="figure">
          <div className="divImg" id="light2">
            <span className="blockLarge" id="light2">
              <LazyLoadImage style={{ width: "35px", height: '35px' }} src={image2}
                             onClick={hidden} id="light2" alt="закрити" loading='lazy' />
            </span>
            <iframe className="imageLarge2" id="lightCol2" width="100%" height="100%"
                    src='' style={{border: 'none'}} />
          </div>
        </figure>
      </div>}

      <div className={s.thanksDiv}>
        <div style={{textAlign: 'start', width: '100%'}}>
          <span className={s.thanks}>Сума: {order.total}</span>
        </div>
        <div style={{textAlign: 'start', width: '100%'}}>
          <span className={s.thanks}>Коли замовленно: {order.createdAt?.slice(0, 10)}</span>
        </div>
        <div className={s.divMap}>
          {order.order?.map((item, index) =>
            container(item.nameWebp, item.nameImg, item.nameOfGoods, item.total, item.size, index)
          )}
        </div>
      </div>


    </main>
  </>;
};

export default YourOrder;