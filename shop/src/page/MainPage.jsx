import React, { useEffect, useLayoutEffect, useState } from "react";
import m from "./MainPage.module.css";
import s from "../component/Home.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import image1 from "../image/svg/sw logo.svg";
import image2 from "../image2/coverSMART.jpg";
import image3 from "../image/svg/SW icon.svg";



const MainPage = ({ t, setOnFooter }) => {

  const screen = window.screen.availWidth > 900

  const dispatch = useDispatch();

  useEffect(() => {
    setOnFooter(true);

    const percent = document.getElementById('percent')
    const preloader = document.getElementById('preloader')
    const anim1 = document.getElementById('anim1')
    const anim2 = document.getElementById('anim2')
    const anim3 = document.getElementById('anim3')
    const anim4 = document.getElementById('anim4')
    const anim5 = document.getElementById('anim5')
    const container1 = document.getElementById('container1')
    const mediaFiles = document.querySelectorAll('img, video, iframe')
    let i = 2

    Array.from(mediaFiles).forEach((file, index) => {
      file.onload = () => {
        i++
        percent.innerHTML = ((i * 100) / mediaFiles.length).toFixed()

        if(i === mediaFiles.length){
          preloader.classList.add(`${m.preloader__hide}`)
          anim1.classList.add(`${m.animTit}`)
          anim2.classList.add(`${m.animTit}`)
          anim3.classList.add(`${m.animTit}`)
          anim4.classList.add(`${m.animTit}`)
          anim5.classList.add(`${m.animTit}`)
          container1.classList.add(`${m.animCon}`)
          percent.innerHTML = '100'
        }
      }
    })



    return () => {
      setOnFooter(false);
    };
  }, []);

  const greenBut = () => {};

  const infoBig = () => {};




  return <div>

    <main style={{ backgroundColor: "#283338" }}>

      {/*<div className={m.preloader} id={m["preloader"]}>*/}
      <div className={`${m.preloader}`} id="preloader">
        <div className={m.preloader__loader}>
          <p><img src={image1} className={m.imgTit}/></p>
          <span className={m.preloader__percent}>
            {/*<p><img src={image1} style={{position: 'relative', left: '-70px'}} /></p>*/}
            <span id='percent'>0</span>%
          </span>
        </div>
      </div>

      <div className={m.animDiv1}>
        <div id='anim1' className={`${m.animPidDiv}`}></div>
        <div id='anim2' className={`${m.animPidDiv2}`}></div>
        <div id='anim3' className={`${m.animPidDiv3}`}></div>
        <div id='anim4' className={`${m.animPidDiv4}`}></div>
        <div id='anim5' className={`${m.animPidDiv5}`}></div>
      </div>

      {!screen && <img src={image1} className={m.image} />}
      {screen ? <div className={m.youtubecontainer}>
          <iframe className={m.startImage}
                  src="https://www.youtube.com/embed/aBA0fi0gua4?autoplay=1&mute=1&loop=1&playlist=aBA0fi0gua4&enablejsapi=1&showinfo=0&controls=0&modestbranding=1"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
        </div>
        : <div className={m.youtubecontainer}>
          <iframe className={m.startImage}
                  src="https://youtu.be/aBA0fi0gua4?autoplay=1&mute=1&loop=1&playlist=aBA0fi0gua4&enablejsapi=1&showinfo=0&controls=0&modestbranding=1"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
        </div>}


      {/*{screen && <div className={m.divStart}></div>}*/}
      <div className={m.divStart}></div>
      <div className={m.mainContainer}>

        <div id='container1' className={`${m.container1}`}>
          <h1 className={m.titleH1}>Шукаєш куди інвестувати?</h1>
          <h4 className={m.titleH4}>Побудуємо для тебе автомийку самообслуговування за 100 днів!</h4>
          <div className={m.greenButDiv}>
            <button className={m.greenBut} onClick={greenBut} style={{ cursor: "pointer" }}>
              <span>ЗАМОВИТИ КОНСУЛЬТЦІЮ</span><span
              className={m.spanArrow}></span>
            </button>
          </div>
        </div>


        <div className={m.div99}>
          <div className={m.container21}>
            <div className={m.percentDiv2}>
              <div className={m.percentDiv}>
                <p className={m.percentP}>чистий прибуток</p>
                <span className={m.percentPAnim}></span>
                <span className={m.percent}>%</span>

                {
                  screen ? <section style={{ marginTop: "50px" }}>
                    <svg className={m.circleChart} viewBox="1 1 33.83098862 33.83098862" width="400" height="400"
                         xmlns="http://www.w3.org/2000/svg"
                         style={{ overflowClipMargin: "border-box", padding: "20px" }}>
                      <circle className={m.circleChartBackground} stroke="black" stroke-width="4" fill="none"
                              cx="16.91549431"
                              cy="16.91549431" r="15.91549431" />
                      <circle className={m.circleChartCircle} stroke="#42df4c" stroke-width="4"
                              stroke-dasharray="75,100"
                              stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                      <g className={m.circleChartInfo}>
                        <text className={m.circleChartPercent} x="16.91549431" y="15.5" alignment-baseline="central"
                              text-anchor="middle" font-size="4" fill="#575758" stroke="none">EBITDA
                        </text>
                      </g>
                    </svg>
                  </section>
                    : <section style={{ marginTop: "20px", marginLeft: "0px" }}>
                    <svg className={m.circleChart} viewBox="1 1 33.83098862 33.83098862" width="250" height="250"
                         xmlns="http://www.w3.org/2000/svg"
                         style={{ overflowClipMargin: "border-box", padding: "20px" }}>
                      <circle className={m.circleChartBackground} stroke="black" stroke-width="4" fill="none"
                              cx="16.91549431"
                              cy="16.91549431" r="15.91549431" />
                      <circle className={m.circleChartCircle} stroke="#42df4c" stroke-width="4"
                              stroke-dasharray="75,100"
                              stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                      <g className={m.circleChartInfo}>
                        <text className={m.circleChartPercent} x="16.91549431" y="15.5" alignment-baseline="central"
                              text-anchor="middle" font-size="4" fill="#575758" stroke="none">EBITDA
                        </text>
                      </g>
                    </svg>
                  </section>
                }
              </div>
            </div>

            <div className={m.percentDiv2_2}>
              <p className={m.percentP + " " + m.addPercentP}>прямі витрати</p>
              <div className={m.divPerc}>
                <div>
                  <span className={m.percentPAnim2}></span>
                  <span className={m.percent2}>%</span>
                </div>
                <p className={m.percentP2}>електроенергія</p>
                <p className={m.percentP2}>зарплата</p>
                <p className={m.percentP2}>вода</p>
                <p className={m.percentP2}>піна</p>
                <p className={m.percentP2}>віск</p>
              </div>
            </div>
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
              <span className={m.wW}>ПРОЕТКУВАННЯ ТА УЗГОДЖЕННЯ</span>
            </div>
            <div className={m.divSpan + " " + m.span2}>
              <span className={m.spanB}>2</span>
              <span className={m.wW}>ДОКУМЕНТАЦІЯ, ДОЗВОЛИ</span>
            </div>
            <div className={m.divSpan + " " + m.span3}>
              <p className={m.spanB}>3</p>
              <p className={m.wW}>БУДІВНИЦТВО ТА ОБЛАДНЯННЯ ДІЛЯНКИ</p>
            </div>
            <div className={m.divSpan + " " + m.span4}>
              <span className={m.spanB}>4</span>
              <span className={m.wW}>НАКРИТТЯ ДЛЯ БОКСІВ ТА ТЕХ.ПРИМІЩЕННЯ</span>
            </div>
            <div className={m.divSpan + " " + m.span5}>
              <span className={m.spanB}>5</span>
              <span className={m.wW}>ОСВІТЛЕННЯ</span>
            </div>
            <div className={m.divSpan + " " + m.span6}>
              <span className={m.spanB}>6</span>
              <span className={m.wW}>ОБЛАДНАННЯ</span>
            </div>
            <div className={m.divSpan + " " + m.span7}>
              <span className={m.spanB}>7</span>
              <span className={m.wW}>АКСЕСУАРИ</span>
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
          <div className={m.imageBlock}>
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
                <img src={image2} id={m.img} />
                <p className={m.pSmart}>SMART</p>
                <p className={m.pPrise}>6 200 € за 1 пост</p>
                <p className={m.pBig2} onClick={infoBig}>БІЛЬШЕ ІНФОРМАЦІЇ >></p>
              </div>
            </div>
          </div>
        </div>

        <div className={m.container4_5}>
          <div className={m.container4_52}>
            <div className={m.container4_53}>
              {screen ? <>
                  <p className={m.p4_5}>Замовляючи автомийку у</p>
                  <p className={m.p4_52}>SamWash, Ви отримаєте не лише</p>
                  <p className={m.p4_52}>прибутковий бізнес, а й досвід, набутий</p>
                  <p className={m.p4_5}>за роки створень</p>
                  <p className={m.p4_5}>автомийок по всій Україні.</p>
                </>
                : <>
                  <p className={m.p4_5}>Замовляючи автомийку</p>
                  <p className={m.p4_52}>у SamWash, Ви</p>
                  <p className={m.p4_52}>отримаєте не лише</p>
                  <p className={m.p4_52}>прибутковий бізнес, а й</p>
                  <p className={m.p4_52}>досвід, набутий за</p>
                  <p className={m.p4_5}>роки створень</p>
                  <p className={m.p4_5}>автомийок по всій</p>
                  <p className={m.p4_5}>Україні.</p>
                </>
              }
            </div>
          </div>
        </div>

        <div className={m.container5_2}>
          <div className={m.slideStyleBack}></div>
          <div className={m.container5}>
            <div className={m.container5_3}>
              { !screen && <span className={m.p5}>9 800 € за 1 пост</span> }

              <p className={m.title5P}>Все ваше обладнання буде таке ж, як на автомийках Німеччини, Італії чи
                Франнції:</p>
              <ul className={m.ul}>
                <li className={m.li}><img className={m.imageS} src={image3} />
                  <span className={m.spanIm}>насоси фірми Interpump з Італії</span></li>
                <li className={m.li}><img className={m.imageS} src={image3} />
                  <span className={m.spanIm}>електроніка фірми Sсhneider з Німеччини</span></li>
                <li className={m.li}><img className={m.imageS} src={image3} />
                  <span className={m.spanIm}>...</span></li>
              </ul>
              <span className={m.pBig23+' '+m.pBig23_3} onClick={infoBig}>БІЛЬШЕ ІНФОРМАЦІЇ >></span>
            </div>

            {screen && <div className={m.div12}>
              <span className={m.p5}>9 800 € за 1 пост</span>
            </div>}
          </div>
        </div>

        <div className={m.container6}>
          <div className={m.container6_2}>
            <p className={m.p6}>У вас буде найменша технічна кімната серед конкурентів (10²), а це:</p>

            <ul className={m.ul} style={{ color: "black" }}>
              <li className={m.li}><img className={m.imageS} src={image3} />
                <span className={m.spanIm}>менші витрати на будівництво</span></li>
              <li className={m.li}><img className={m.imageS} src={image3} />
                <span className={m.spanIm}>більше площі для боксів</span></li>
              <li className={m.li}><img className={m.imageS} src={image3} />
                <span className={m.spanIm}>менші витрати на опалення взимку</span></li>
            </ul>

            <span className={m.pBig23+' '+m.butGreen2} onClick={infoBig}>БІЛЬШЕ ІНФОРМАЦІЇ >></span>
          </div>
        </div>

        <div className={m.container7_2}>
          <div className={m.slideStyleBack}></div>
          <div className={m.container7}>
            <div className={m.container7_3}>
              { !screen && <span className={m.p5}>6 800 € за 1 прилад</span> }
              <p className={m.p16} style={{ maxWidth: "1052px" }}>Ми можемо поставити на Вашу автомийку найпотужніший
                порохотяг в Україні.</p>

              <ul className={m.ul}>
                <li className={m.li}><img className={m.imageS} src={image3} />
                  <span className={m.spanIm}>працює одразу на 2 поста</span></li>
                <li className={m.li}><img className={m.imageS} src={image3} />
                  <span className={m.spanIm}>...</span></li>
                <li className={m.li}><img className={m.imageS} src={image3} />
                  <span className={m.spanIm}>термін активної експлуатації - більше 10 років</span></li>
              </ul>

              <span className={m.pBig23+' '+m.pBig23_2} onClick={infoBig}>БІЛЬШЕ ІНФОРМАЦІЇ >></span>
            </div>

            {screen && <div className={m.div12}>
              <span className={m.p5}>6 800 € за 1 прилад</span>
            </div>}
          </div>
        </div>

        <div className={m.container8}>
          <div className={m.container8_2}>
            { !screen && <span className={m.p5}>6 700 €</span> }
            <p className={m.p6}>Платіжний термінал: уся інформація та статистика у вашому смартфоні.</p>

            <ul className={m.ul} style={{ color: "black" }}>
              <li className={m.li}><img className={m.imageS} src={image3} />
                <span className={m.spanIm}>всі види оплат для зручності ваших клієнтів</span></li>
              <li className={m.li}><img className={m.imageS} src={image3} />
                <span className={m.spanIm}>картки лояльності</span></li>
              <li className={m.li}><img className={m.imageS} src={image3} />
                <span className={m.spanIm}>вся інформація в режимі реального часу у вашому смартфоні</span></li>
            </ul>

            <span className={m.pBig23+' '+m.greenBut3} onClick={infoBig}>БІЛЬШЕ ІНФОРМАЦІЇ >></span>
          </div>
          {screen && <div className={m.div12}>
            <span className={m.p5}>6 700 €</span>
          </div> }
        </div>

        <div className={m.container9_2}>
          <div className={m.slideStyleBack}></div>
          <div className={m.container9}>
            <div className={m.container9_3}>
              <p className={m.p6+' '+m.p9}>Безконтактна оплата по QR-коду</p>

              <ul className={m.ul}>
                <li className={m.li}><img className={m.imageS} src={image3} />
                  <span className={m.spanIm}>всі види оплат для зручності ваших клієнтів</span></li>
                <li className={m.li}><img className={m.imageS} src={image3} />
                  <span className={m.spanIm}>картки лояльності</span></li>
                <li className={m.li}><img className={m.imageS} src={image3} />
                  <span className={m.spanIm}>вся інформація в режимі реального часу у вашому смартфоні</span></li>
              </ul>

              <span className={m.pBig23+' '+m.greenBut4} onClick={infoBig}>БІЛЬШЕ ІНФОРМАЦІЇ >></span>
            </div>

            {screen && <div className={m.div12}>
              <span className={m.p5}>6 800 €</span>
            </div>}

          </div>
        </div>

        <div className={m.container10_5}>

        </div>

        <div className={m.container10_2}>
          <div className={m.container10}>
            { screen ? <>
                <p className={m.p10}>Ми несемо</p>
                <p className={m.p10_2}>відповідальність за нашу репутацію,</p>
                <p className={m.p10_2}>тому обслуговуємо усі автомийки</p>
                <p className={m.p10}>SamWash і після запуску</p>
            </>
              : <>
                <p className={m.p10}>Ми несемо</p>
                <p className={m.p10_2}>відповідальність за</p>
                <p className={m.p10_2}>нашу репутацію, тому</p>
                <p className={m.p10_2}>обслуговуємо усі</p>
                <p className={m.p10}>автомийки SamWash і</p>
                <p className={m.p10}>після запуску</p>
              </>

            }

            <div className={m.div10}>
              {screen &&<span className={m.span10}>Гарантія 2 роки на все обладнання</span>}
              <span className={m.p102}>Ви можете в цьому переконатись, відвідавши будь-яку мийку SamWash, які збудовані нами
              протягом останніх 12-ти років.</span>
              <div className={m.greenButDiv + " " + m.divGreen10}>
                <Link to="/nashi-avtomiyki/wsi">
                  <button className={m.greenBut} style={{ cursor: "pointer" }}>
                    <span style={{ zIndex: "2", position: "relative" }}>СПИСОК АВТОМИЙОК</span>
                    <span className={m.spanArrow}></span>
                  </button>
                </Link>
              </div>
              {!screen &&<span className={m.span10}>Гарантія 2 роки на все обладнання</span>}
            </div>
          </div>
        </div>

        <div className={m.mapCart}>
          <iframe width='100%' height={screen ? '900px' : '400px'} allowFullScreen className="embed-responsive-item" src="
                https://www.google.com/maps/d/embed?mid=1jsm87_-WVn3DspwNkz85WWD5dnBCHYU&ehbc=2E312F">
          </iframe>
        </div>

        <div className={m.container11_2}>

          {screen ? <>
              <div className={m.container11}>
                <p className={m.p11}>Хочеш автомийку вже, а</p>
              </div>
              <div className={m.container11_4}>
                <p className={m.p11}>грошей на даний момент не достатньо?</p>
              </div>
              <div className={m.container11_4+' '+m.c12}>
                <p className={m.p11}>Всього за 30% від загальної вартості, Ви</p>
              </div>
              <div className={m.container11+' '+m.c11}>
                <p className={m.p11}>стаєте повноправним</p>
                <p className={m.p11}>власником бізнесу, який</p>
                <p className={m.p11}>відразу після запуску</p>
                <p className={m.p11}>приносить прибуток!</p>
              </div>
            </>
            : <>
              <p className={m.p11}>Хочеш автомийку вже, а грошей на даний момент не достатньо? Всього за
                30% від загальної вартості, Ви стаєте повноправним власником бізнесу,
                який відразу після запуску приносить прибуток!</p>
            </>}

          <div className={m.container11_6}>
            <p className={m.p11_2}>Лізинг на обладнання та накриття до 3-х років під 10% річних (при першому внеску 30%)</p>

            <div className={m.greenButDiv}>
              <button className={m.greenBut} onClick={greenBut} style={{ cursor: "pointer" }}>
                <span style={{ zIndex: "2", position: "relative" }}>ЗАМОВИТИ КОНСУЛЬТЦІЮ</span><span
                className={m.spanArrow}></span>
              </button>
            </div>
          </div>
        </div>

      </div>

    </main>

    <footer className={m.footerDiv}>
      <div className={m.footerDiv3}>
        <span className={m.footerSpan}>info@samwash.com</span>
        <span className={m.footerSpan}>+38 (098) 732 83 99</span>
      </div>
    </footer>

  </div>;
};

export default MainPage;