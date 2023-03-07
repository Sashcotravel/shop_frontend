import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "../component/Home.module.css";
import image1 from "../image/svg/Fullscreenicon.svg";
import image2 from "../image/svg/Group31.svg";
import instance from "../API/API";
import { getRequireSource } from "@babel/preset-env/lib/polyfills/utils";


const YourOrder = ({ setOnFooter }) => {

  const [order, setOrder] = useState({
    total: 0, createdAt: null, order: []
  });

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

  const imgSize = (e) => {
    if (window.screen.availWidth > 900) {
      let g = document.getElementById(e.target.id);
      let con = document.getElementById("light");
      con.style.visibility = "visible";
      let twoImg = document.getElementById("lightCol");
      twoImg.src = g.src;
    }
  };

  const hidden = (e) => {
    if (e.target.id === "light") {
      let con = document.getElementById("light");
      con.style.visibility = "hidden";
    }
  };

  const container = (img, imgNum, nameGoods, total, totalsSize, index) => {
    let g = '/favicon(1).ico'
    return (
      <div key={index} className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{ height: "315px" }}>
              <img src={g} className={"base"} id={`img${imgNum}`} />
              {/*<div style={{backgroundImage: `url("/logo192.png`}} className={"base"} id={`img${imgNum}`} />*/}
              {/*{size(imgNum)}*/}
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

      <div id="light" className={s.boxHideImage} onClick={hidden}>
        <figure className="figure" id="light">
          <div className="divImg" id="light">
            <span className="blockLarge" id="light">
              <img style={{ width: "35px", height: '35px' }} src={image2} onClick={hidden} id="light" />
            </span>
            <img src='' className="imageLarge" id="lightCol" />
          </div>
        </figure>
      </div>

      <div className={s.thanksDiv}>
        <div style={{textAlign: 'start', width: '100%'}}>
          <span className={s.thanks}>Сума: {order.total}</span>
        </div>
        <div style={{textAlign: 'start', width: '100%'}}>
          <span className={s.thanks}>Коли замовленно: {order.createdAt?.slice(0, 10)}</span>
        </div>
        <div className={s.divMap}>
          {order.order?.map((item, index) =>
            container('../image2/coverSMART.jpg', item.nameImg, item.nameOfGoods, item.total, item.size, index)
          )}
          {
            container('../image2/coverSMART.jpg', 3, 'lol', 12, 2, 1)
          }
        </div>
      </div>


    </main>
  </>;
};

export default YourOrder;