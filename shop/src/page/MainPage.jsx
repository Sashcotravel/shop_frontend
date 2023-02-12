import React, { useEffect, useState } from "react";
import m from "./MainPage.module.css";
import s from "../component/Home.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import image1 from "../image/322173-1600x900.jpg";
import image2 from "../image2/coverSMART.jpg";
import image3 from "../image/svg/SW icon.svg";


const MainPage = ({ t, setOnFooter }) => {

  const [userData, setUserData] = useState({
    name: "", phone: "", email: "", cite: "", date: ""
  });

  const dispatch = useDispatch();

  const hiddeItem = () => {
    let con = document.getElementById("lightblue");
    con.style.visibility = "hidden";
  };

  const noScroll = () => {
    let con = document.getElementById("lightblue");
    con.style.visibility = "visible";
  };

  const useSubmit = async () => {
    let con = document.getElementById("lightblue");
    con.style.visibility = "hidden";
    let obj = {
      user: userData
    };
    // const d = await dispatch(fetchPay(obj));
    // dispatch(fetchMail(obj));
    // dispatch(fetchMailDima(obj));
    // dispatch(fetchMailUser(obj));

  };

  useEffect(() => {
    setOnFooter(true);
    return () => {
      setOnFooter(false);
    };
  }, []);

  const greenBut = () => {
  };

  const infoBig = () => {
  };


  return <div>

    <main style={{ backgroundColor: "#283338" }}>
      {/*<main style={{backgroundColor: '#283338'}}>*/}

      <img src={image1} className={m.startImage} />
      {/*<iframe className={m.startImage} allow="autoplay; encrypted-media"*/}
      {/*        src="https://www.youtube.com/embed/aBA0fi0gua4?autoplay=1&mute=1"/>*/}
      {/*<iframe width="100%" height='100%' src="https://www.youtube.com/embed/aBA0fi0gua4" ></iframe>*/}
      <div className={m.mainContainer}>


        <div className={m.container1}>
          <h1 className={m.titleH1}>Шукаєш куди інвестувати?</h1>
          <h4 className={m.titleH4}>Побудуємо для тебе автомийку самообслуговування за 100 днів!</h4>
          <div className={m.greenButDiv}>
            <button className={m.greenBut} onClick={greenBut}>
              <span style={{ zIndex: "2", position: "relative" }}>ЗАМОВИТИ КОНСУЛЬТЦІЮ</span><span
              className={m.spanArrow}></span>
            </button>
          </div>
        </div>


        {/*</div>*/}
        <div className={m.container21}>
          <div className={m.percentDiv2}>
            <div className={m.percentDiv}>
              <p className={m.percentP}>чистий прибуток</p>
              <span className={m.percentPAnim}></span>
              <span className={m.percent}>%</span>

              <div className={m.container}>
                <div className={m.uiwidgets}>
                  <div className={m.uivalues}>EBITDA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={m.percentDiv2_2}>
          <p className={m.percentP + " " + m.addPercentP}>прямі витрати</p>
          <div className={m.divPerc}>
            <div>
              <span className={m.percentPAnim2} style={{ margin: "auto", color: "white" }}></span>
              <span className={m.percent} style={{ color: "white" }}>%</span>
            </div>
            <p className={m.percentP2}>електроенергія</p>
            <p className={m.percentP2}>зарплата</p>
            <p className={m.percentP2}>вода</p>
            <p className={m.percentP2}>піна</p>
            <p className={m.percentP2}>віск</p>
          </div>
        </div>

        <div className={m.container2}>
          <p className={m.pH}>Створюємо автомийки</p>
          <p className={m.pH2}>самообслуговування</p>
          <p className={m.pP}>Ви отримаєте повністю готову до запуску автомийку, яка з першого дня буде приносити
            прибуток.</p>

          <div>
            <div className={m.divSpan}>
              <span className={m.spanB}>1</span>
              <span>ПРОЕТКУВАННЯ ТА УЗГОДЖЕННЯ</span>
            </div>
            <div className={m.divSpan + " " + m.span2}>
              <span className={m.spanB}>2</span>
              <span>ДОКУМЕНТАЦІЯ, ДОЗВОЛИ</span>
            </div>
            <div className={m.divSpan + " " + m.span3}>
              <span className={m.spanB}>3</span>
              <span>БУДІВНИЦТВО ТА ОБЛАДНЯННЯ ДІЛЯНКИ</span>
            </div>
            <div className={m.divSpan + " " + m.span4}>
              <span className={m.spanB}>4</span>
              <span>НАКРИТТЯ ДЛЯ БОКСІВ ТА ТЕХ.ПРИМІЩЕННЯ</span>
            </div>
            <div className={m.divSpan + " " + m.span5}>
              <span className={m.spanB}>5</span>
              <span>ОСВІТЛЕННЯ</span>
            </div>
            <div className={m.divSpan + " " + m.span6}>
              <span className={m.spanB}>6</span>
              <span>ОБЛАДНАННЯ</span>
            </div>
            <div className={m.divSpan + " " + m.span7}>
              <span className={m.spanB}>7</span>
              <span>АКСЕСУАРИ</span>
            </div>
            <div className={m.divSpan}>
              <span className={m.spanB + " " + m.span8}>8</span>
              <div>
                <p style={{ marginTop: "20px" }}>ЗАПУСК!</p>
                <p className={m.span8Z}>Cамоокупність мийки до 3-х років*</p>
              </div>
            </div>
          </div>
        </div>


        <div className={m.container3}>
          <div>
            <span className={m.pDos2}>Чому ми?</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className={m.pYear}>12</p>
            <p className={m.pDos}>років досвіду</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className={m.pYear}>250</p>
            <p className={m.pDos} style={{ width: "210px" }}>боксів <br /> під ключ</p>
          </div>
        </div>

        <div className={m.container4}>
          <div className={m.container4_2}>
            <p className={m.h4}>Найбільший вибір</p>
            <p className={m.h42}>накриттів в Україні</p>
            <p className={m.p4}>Ваша мийка буде якісно виділятись на фоні конкурентів, привертатиме увагу
              і виглядатиме профейсіно та стильно!</p>

            <div>
              <div>
                <img src={image2} width="400px" />
                <p className={m.pSmart}>SMART</p>
                <p className={m.pPrise}>6 200 € за 1 пост</p>
                <p className={m.pBig2} onClick={infoBig}>БІЛЬШЕ ІНФОРМАЦІЇ >></p>
              </div>
            </div>
          </div>
        </div>

        <div className={m.container4_5}>
          <div className={m.container4_52}>
            <p className={m.p4_5}>Замовляючи автомийку у</p>
            <p className={m.p4_52}>SamWash, Ви отримаєте не лише</p>
            <p className={m.p4_52}>прибутковий бізнес, а й досвід, набутий</p>
            <p className={m.p4_5}>за роки створень</p>
            <p className={m.p4_5}>автомийок по всій Україні.</p>
          </div>
        </div>

        <div className={m.container5_2}>
          <div className={m.slideStyleBack}></div>
          <div className={m.container5}>
            <div className={m.container5_3}>
              <p className={m.title5P}>Все ваше обладнання буде таке ж, як на автомийках Німеччини, Італії чи
                Франнції:</p>
              <ul className={m.ul}>
                <li><img src={image3} /> <span style={{ position: "relative", top: "4px" }}>насоси фірми Interpump з Італії</span></li>
                <li><img src={image3} /> <span style={{ position: "relative", top: "4px" }}>електроніка фірми Schneider з Німеччини</span></li>
                <li><img src={image3} /> <span style={{ position: "relative", top: "4px" }}>???</span></li>
              </ul>
              <span className={m.pBig23} onClick={infoBig}>БІЛЬШЕ ІНФОРМАЦІЇ >></span>
            </div>

            <div className={m.div12}>
              <span className={m.p5}>9 800 € за 1 пост</span>
            </div>
          </div>
        </div>

        <div className={m.container6}>
          <div className={m.container6_2}>
            <p className={m.p6}>У вас буде найменша технічна кімната серед конкурентів (10²), а це:</p>

            <ul className={m.ul} style={{ color: "black" }}>
              <li><img src={image3} /> <span
                style={{ position: "relative", top: "4px" }}>менші витрати на будівництво</span></li>
              <li><img src={image3} /> <span style={{ position: "relative", top: "4px" }}>більше площі для боксів</span>
              </li>
              <li><img src={image3} /> <span style={{ position: "relative", top: "4px" }}>менші витрати на опалення взимку</span>
              </li>
            </ul>

            <span className={m.pBig23+' '+m.butGreen2} onClick={infoBig}>БІЛЬШЕ ІНФОРМАЦІЇ >></span>
          </div>
        </div>

        <div className={m.container7_2}>
          <div className={m.slideStyleBack}></div>
          <div className={m.container7}>
            <div className={m.container7_3}>
              <p className={m.p16} style={{ maxWidth: "1052px" }}>Ми можемо поставити на Вашу автомийку найпотужніший
                порохотяг в Україні.</p>

              <ul className={m.ul} style={{ color: "black" }}>
                <li><img src={image3} /> <span style={{ position: "relative", top: "4px", color: "white" }}>працює одразу на 2 поста</span></li>
                <li><img src={image3} /> <span style={{ position: "relative", top: "4px", color: "white" }}>термін активної експлуатації - більше 10 років</span></li>
                <li><img src={image3} /> <span style={{ position: "relative", top: "4px", color: "white" }}>...</span></li>
              </ul>
              <span className={m.pBig23} onClick={infoBig}>БІЛЬШЕ ІНФОРМАЦІЇ >></span>
            </div>

            <div className={m.div12}>
              <span className={m.p5}>6 800 € за 1 прилад</span>
            </div>
          </div>
        </div>

        <div className={m.container8}>
          <div className={m.container8_2}>
            <p className={m.p6}>Платіжний термінал: уся інформація та статистика у вашому смартфоні.</p>

            <ul className={m.ul} style={{ color: "black" }}>
              <li><img src={image3} /> <span style={{ position: "relative", top: "4px" }}>всі види оплат для зручності ваших клієнтів</span></li>
              <li><img src={image3} /> <span style={{ position: "relative", top: "4px" }}>картки лояльності</span></li>
              <li><img src={image3} /> <span style={{ position: "relative", top: "4px" }}>вся інформація в режимі реального часу у вашому смартфоні</span>
              </li>
            </ul>

            <span className={m.pBig23+' '+m.greenBut3} onClick={infoBig}>БІЛЬШЕ ІНФОРМАЦІЇ >></span>
          </div>
          <div className={m.div12}>
            <span className={m.p5}>6 700 €</span>
          </div>
        </div>

        <div className={m.container7_2}>
          <div className={m.slideStyleBack}></div>
          <div className={m.container9}>
            <div className={m.container7_3}>
              <p className={m.p6} style={{ maxWidth: "600px", color: '#D9D9D9' }}>Безконтактна оплата</p>

              <ul className={m.ul} style={{ color: "black" }}>
                <li><img src={image3} /> <span style={{ position: "relative", top: "4px", color: "white" }}>всі види оплат для зручності ваших клієнтів</span></li>
                <li><img src={image3} /> <span style={{ position: "relative", top: "4px", color: "white" }}>картки лояльності</span></li>
                <li><img src={image3} /> <span style={{ position: "relative", top: "4px", color: "white" }}>вся інформація в режимі реального часу у вашому смартфоні</span></li>
              </ul>
              <span className={m.pBig23+' '+m.greenBut4} onClick={infoBig}>БІЛЬШЕ ІНФОРМАЦІЇ >></span>
            </div>

            <div className={m.div12}>
              <span className={m.p5}>6 800 €</span>
            </div>

          </div>
        </div>

        <div className={m.container10_5}>

        </div>

        <div className={m.container10}>
          <p className={m.p10}>Ми несемо відповідальність за нашу репутацію, тому обслуговуємо усі автомийки SamWash і
            після запуску</p>

          <div className={m.div10}>
            <p className={m.p102}>Ви можете в цьому переконатись, відвідавши будь-яку мийку SamWash, які створені нами
              протягом останніх 12-ти років.</p>
            <div className={m.greenButDiv}>
              <Link to="/nashi-avtomiyki/wsi">
              <button className={m.greenBut} style={{cursor: 'pointer'}}>
                <span style={{ zIndex: "2", position: "relative" }}>СПИСОК АВТОМИЙОК</span>
                <span className={m.spanArrow}></span>
              </button>
              </Link>
            </div>

          </div>
        </div>

      </div>

      <div>
        <iframe width="100%" height="900px;" allowFullScreen className="embed-responsive-item" src="
                https://www.google.com/maps/d/embed?mid=1jsm87_-WVn3DspwNkz85WWD5dnBCHYU&ehbc=2E312F
                "></iframe>
      </div>

    </main>

    {/*<footer className={m.footerDiv}>*/}
    {/*  <p className={m.titleFooter}>Залишились запитання?</p>*/}
    {/*  <div className={m.footerDiv2}>*/}
    {/*    <p className={m.footerP}>Маємо на них відповіді! Зв'яжіться з нами або залишіть свої контакти</p>*/}
    {/*    <button className={m.footerBut}>Безкоштовна консультація</button>*/}
    {/*  </div>*/}
    {/*  <div className={m.footerDiv3}>*/}
    {/*    <span className={m.footerSpan}>info@samwash.com</span>*/}
    {/*    <span className={m.footerSpan}>+38 (098) 732 83 99</span>*/}
    {/*  </div>*/}
    {/*</footer>*/}

  </div>;
};

export default MainPage;