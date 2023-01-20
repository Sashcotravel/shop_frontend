import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { fetchOrder } from "../API/post";
import { useDispatch } from "react-redux";
import s from "../component/Home.module.css";
import image1 from "../image/svg/Fullscreenicon.svg";
import image2 from "../image/svg/Group31.svg";


const YourOrder = ({ setOnFooter }) => {

  const [order, setOrder] = useState({
    total: 0, createdAt: null, order: []
  });

  const { id } = useParams();

  const dispatch = useDispatch();

  let orderReq;

  useEffect(() => {
    (async function() {
      try {
        setOnFooter(true);
        let f = id.slice(0, id.length - 13);
        console.log(f);
        orderReq = await dispatch(fetchOrder(f));
        console.log(orderReq);
        setOrder((actual) => {
          return {
            ...actual, total: orderReq.payload.total,
            order: orderReq.payload.order,
            createdAt: orderReq.payload.createdAt
          };
        });
      } catch (e) {
        console.log(e);
      }
      return () => {
        setOnFooter(false);
      };
    })();
  }, []);

  const size = (num) => {
    return (
      window.screen.width > 900 ? <span className="block">
        <img style={{ width: "35px" }} src={image1} onClick={imgSize} id={`img${num}`} />
      </span> : ""
    );
  };

  const imgSize = (e) => {
    let twoImg = document.getElementById("lightCol");
    twoImg.src = "";
    if (window.screen.availWidth > 900) {
      let g = document.getElementById(e.target.id);
      if (g.src.slice(-3) === "jpg") {
        let con = document.getElementById("light");
        con.style.visibility = "visible";
        let twoImg = document.getElementById("lightCol");
        twoImg.src = g.src;
      }
    }
  };

  const hidden = (e) => {
    if (e.target.id === "light") {
      let con = document.getElementById("light");
      con.style.visibility = "hidden";
    }
  };

  const container = (nameImg, nameImg2, imgNum, nameGoods, total, totalsSize, index) => {
    return (
      <div key={index} className={s.container}>
        <div className={s.boxOne}>
          <figure>
            <div style={{ height: "315px" }}>
              <img src={(`/static/media/${nameImg}.${nameImg2}`)} className={"base"} id={`img${imgNum}`} />
              {/*<img src={require("../image/4RAV4(none).jpg")} className={"base"} id={`img${imgNum}`} />*/}
              {size(imgNum)}
            </div>
          </figure>
          <h5 className={s.itemName}>{nameGoods}</h5>
          <p className={s.itemDesc}>Description - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard</p>
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
        <figure className="figure">
          <div className="divImg">
            <span className="blockLarge" id="light">
              <img style={{ width: "35px" }} src={image2} onClick={hidden} id="light" />
            </span>
            <img src={(``)} className="imageLarge" id="lightCol" />
          </div>
        </figure>
      </div>

      <div className={s.thanksDiv}>
        <div>
          <span className={s.thanks}>Сума: {order.total}</span>
        </div>
        <div>
          <span className={s.thanks}>Коли замовленно: {order.createdAt?.slice(0, 10)}</span>
        </div>
        <div className={s.divMap}>
          {order.order?.map((item, index) =>
            container(item.src, item.src2, item.nameImg, item.nameOfGoods, item.total, item.size, index)
          )}
        </div>
      </div>
    </main>
  </>;
};

export default YourOrder;