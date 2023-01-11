import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { fetchOrder } from "../API/post";
import { useDispatch } from "react-redux";
import s from "../component/Home.module.css";



const YourOrder = ({ setOnFooter }) => {

  const [order, setOrder] = useState({
    total: 0, createdAt: null, order: []
  })

  const { id } = useParams();

  const dispatch = useDispatch();

  let orderReq;

  useEffect(() => {
    (async function() {
      try {
        setOnFooter(true);
        orderReq = await dispatch(fetchOrder(id));
        console.log(orderReq);
        setOrder((actual) => {
          return { ...actual, total: orderReq.payload.total,
            order: orderReq.payload.order,
            createdAt: orderReq.payload.createdAt};
        });
      } catch (e) {
        console.log(e);
      }
      return () => {
        setOnFooter(false);
      };
    })();
  }, []);


  return <>
      <div>
        <span className={s.thanks}>Сума: {order.total}</span>
        <span className={s.thanks}>Коли замовленно:  {order.createdAt?.slice(0, 10)}</span>
        <span className={s.thanks}>{order.order?.map(item =>
          <>
          <span className={s.thanks}>Назва товару: {item.nameOfGoods}</span>
          <span className={s.thanks}>Ціна товару: {item.prise}</span>
          <span className={s.thanks}>Кількість товару: {item.size}</span>
          <span className={s.thanks}>Всього товару: {item.total}</span>
          </>
        )}</span>
      </div>
  </>;
};

export default YourOrder;