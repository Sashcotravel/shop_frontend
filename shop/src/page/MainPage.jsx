import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import m from "./MainPage.module.css";
import s from "../component/Home.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import image1 from "../image/svg/preloader.svg";
import image2 from "../image2/coverSMART.jpg";
import image21 from "../image2/coverPIXEL.jpg";
import image212 from "../image2/coverMARCO.jpg";
import image2123 from "../image2/coverMARCHELLO.jpg";
import image21234 from "../image2/coverMARCO1.jpg";
import image212345 from "../image2/karkasUfo.jpg";
import image3 from "../image/svg/SW icon.svg";
import image4 from "../image/svg/output.mp4";
import image5 from "../image/svg/Group 103.svg";
import image6 from "../image/svg/map icon.svg";
import { fetchMailDimaZam } from "../API/post";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { defaultTheme } from './Theme'
import { Carousel } from "./carousel/Carousel";



const MainPage = ({ t, setOnFooter }) => {

  const [userData, setUserData] = useState({
    name: "", phone: "", email: "" });

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAX7re_mdCccwAFdJFDpkAyODXH-WRBvXg"
  })

  function Home () {
    if(!isLoaded) return <div>Завантаження...</div>
    // return <Map />
  }

  const defaultOption = {
    panControl: true, mapTypeControl: false, scaleControl: false, streetViewControl: false,
    styles: defaultTheme,
    rotateControl: false, fullscreenControl: false, disableDoubleClickZoom: true
  }


  const coordinat = [
    {
      center: {lat: 49.4042, lng: 24.6073},
      title: 'SAMWASH Ужгород'
    },
    {
      center: {lat: 49.8223, lng: 23.9562},
      title: 'SAMWASH ХУСТ'
    },
  ]

  const Map = () => {

    const center = useMemo(() => ({ lat: 48.385, lng: 31.183 }), [])

    const Marker = (coordinat) => {
      coordinat.map(item => {
        let center = item.center
        return <MarkerF position={center} icon={image6} />
      })
    }


    const center2 = useMemo(() => ({ lat: 49.4042, lng: 24.6073 }), [])
    const center3 = useMemo(() => ({ lat: 49.8223, lng: 23.9562 }), [])
    const center4 = useMemo(() => ({ lat: 50.7435, lng: 25.3114 }), [])
    const center5 = useMemo(() => ({ lat: 49.2718, lng: 23.8084, }), [])


    return <GoogleMap zoom={7} center={center} mapContainerClassName={m.map_container}
                      options={defaultOption}>
      <MarkerF position={center2} icon={image6}/>
      <MarkerF position={center3} icon={image6} />
      <MarkerF position={center4} icon={image6} />
      <MarkerF position={center5} icon={image6} />
      {/*{ Marker(coordinat) }*/}
    </GoogleMap>
  }


  const screen = window.screen.availWidth > 900

  const dispatch = useDispatch();


  useLayoutEffect(() => {
    setOnFooter(true);

    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });


    const percent = document.getElementById('percent')
    const preloader = document.getElementById('preloader')
    const anim1 = document.getElementById('anim1')
    const anim2 = document.getElementById('anim2')
    const anim3 = document.getElementById('anim3')
    const anim4 = document.getElementById('anim4')
    const anim5 = document.getElementById('anim5')
    const container1 = document.getElementById('container1')
    // const mediaFiles = document.querySelectorAll('video, iframe, svg')
    const mediaFiles = document.querySelectorAll('iframe, svg, img')
    let i = 0

    // console.log(mediaFiles);

    Array.from(mediaFiles).forEach((file, index) => {
      file.onload = () => {
        i++
        // console.log(file, i);
        percent.innerHTML = ((i * 100) / mediaFiles.length).toFixed()
        if(i === mediaFiles.length - 5){
          percent.innerHTML = '100'
          preloader.classList.add(`${m.preloader__hide}`)
          anim1.classList.add(`${m.animTit}`)
          anim2.classList.add(`${m.animTit}`)
          anim3.classList.add(`${m.animTit}`)
          anim4.classList.add(`${m.animTit}`)
          anim5.classList.add(`${m.animTit}`)
          container1.classList.add(`${m.animCon}`)
        }
      }
    })

    return () => { setOnFooter(false) };
  }, []);

  const hiddeItem = () => {
    let con = document.getElementById("lightblue");
    con.style.visibility = "hidden";
  };

  const blurClose = (e) => {
    if(e.target.id === "lightblue"){
      let con = document.getElementById("lightblue");
      con.style.visibility = "hidden";
    }
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
    dispatch(fetchMailDimaZam(obj));
    // dispatch(fetchMailUser(obj));

  };

  const greenBut = () => { noScroll() };

  const infoBig = () => {};

  const Video = props => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const src = getVideoSrc(window.innerWidth);
    const onLoadedData = () => { setIsVideoLoaded(true) };

    return (
      <div className="container">
        <img src={image3} className={`${m.video_thumb} ${m.tiny}`} alt="thumb"
          style={{ opacity: isVideoLoaded ? 0 : 1 }}
        />

        {/*<video autoPlay playsInline muted loop src={src} onLoadedData={onLoadedData}*/}
        <video autoPlay playsInline muted loop src={src} onLoadedData={onLoadedData}
          style={{ opacity: isVideoLoaded ? 1 : 0 }}/>
      </div>
    );
  };

  const getVideoSrc = width => {
    // if (width >= 1080) return desktopVideo;
    // if (width >= 720) return tabletVideo;
    // return mobileVideo;
    return image4
  };


  useEffect(() => {
    let section_counter = document.querySelector("#section_counter")
    let counters = document.querySelectorAll(`.${m.counter_item}, .${m.counter_item2}, #pes1`)
    let counter2 = document.querySelectorAll(`#pes3`)
    let section_counter2 = document.querySelector("#section_counter2")
    // let counters2 = document.querySelectorAll(`#pes3`)
    let speed = 100

    const count = (counters) => {
      counters.forEach((counter, index) => {
        function UpdateCounter(){
          const targetNumber = +counter.dataset.target
          const initialNumber = +counter.innerText
          const incPerCount = targetNumber / speed
          if(initialNumber < targetNumber) {
            counter.innerText = Math.ceil(initialNumber + incPerCount)
            setTimeout(UpdateCounter, 40)
          }
        }
        UpdateCounter()

        if(counter.parentElement.style.animation){ counter.parentElement.style.animation = ''}
        else { counter.parentElement.style.animation = `slider-up .3s ease forward ${index / counters.length + 0.5}s`}
      })
    }

    let CounterObserver = new IntersectionObserver((entries, observer) => {
      let [entry] = entries
      if(!entry.isIntersecting) return
      count(counters)

    },
      {
      root: null,
      threshold: 0.4
    })
    CounterObserver.observe(section_counter)

    let CounterObserver2 = new IntersectionObserver((entries, observer) => {
      let [entry] = entries
      if(!entry.isIntersecting) return
      count(counter2)
    },
      {
      root: null,
      threshold: 0.4
    })
    CounterObserver2.observe(section_counter2)

  }, [])


  return <div>

    <main style={{ backgroundColor: "#283338" }}>

      <div id="lightblue" onClick={blurClose} className={s.orderBlock} style={{ left: "0" }}>
        <div className={s.userdata2}>
          <div className={s.ix}>
                <span style={{ margin: "5px 15px 0 0", color: "#BBB9B9", cursor: "pointer" }}
                      onClick={hiddeItem}>&#10006;</span>
          </div>
          <p className={s.titleUser}>{t("getAnOffer")}</p>
          <br />
          <p className={s.descSpan}>{t("desc")}</p>
          <br />
          <input className={s.inputUser} type="name" title="name"
                 placeholder={`${t("enterName")}`} onChange={(e) => {
            setUserData((actual) => {
              return { ...actual, [e.target.title]: e.target.value };
            });
          }} />
          <input className={s.inputUser} type="email" title="email" required
                 placeholder={`${t("enterEmail")}`} onChange={(e) => {
            setUserData((actual) => {
              return { ...actual, [e.target.title]: e.target.value };
            });
          }} />
          <input className={s.inputUser} style={{ width: "90%" }} type="text" title="phone"
                 placeholder={`${t("enterYourPhoneNumber")}`} onChange={(e) => {
            setUserData((actual) => {
              return { ...actual, [e.target.title]: e.target.value };
            });
          }} />
          <br />
          <div className={s.footerBut} style={{ width: "50%", margin: "30px auto" }}
               onClick={useSubmit}>{t("send")}</div>
        </div>
      </div>

      <div className={`${m.preloader}`} id="preloader">
        <div className={m.preloader__loader}>
          <p><img src={image1} className={m.imgTit}/></p>
          <span className={m.preloader__percent}>
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

      {screen ? <div className={m.youtubecontainer}><Video/></div>
        : <div className={m.youtubecontainer}><Video/></div>}


      <div className={m.divStart}></div>
      <div className={m.mainContainer}>

        <div id='container1' className={`${m.container1}`}>
          <h1 className={m.titleH1}>Шукаєш куди інвестувати?</h1>
          <h4 className={m.titleH4}>Побудуємо для тебе автомийку самообслуговування за 100 днів!</h4>
          <div className={m.greenButDiv}>
            <button className={m.greenBut} onClick={greenBut} style={{ cursor: "pointer" }}>
              <span>ЗАМОВИТИ КОНСУЛЬТЦІЮ</span><span className={m.spanArrow}>
              <img src={image5}  className={m.imgClass} />
            </span>
            </button>
          </div>
        </div>


        <div className={m.div99}>
          <div className={m.container21}>
            <div className={m.percentDiv2}>
              <div className={m.percentDiv}>
                <p className={m.percentP}>чистий прибуток</p>
                <section id='section_counter' className={m.section_counter}>
                  <div className={m.counter_item}>
                    <span id='pes1' className={m.percentPAnim} data-target={75}>0</span>
                    <span className={m.percent}>%</span>
                  </div>
                </section>

                <div>
                  <section className={m.circleDiv}>
                    <svg className={m.circleChart} viewBox="1 1 33.83098862 33.83098862" width="400" height="400"
                         xmlns="http://www.w3.org/2000/svg"
                         style={{ overflowClipMargin: "border-box", padding: "20px" }}>
                      <circle className={m.circleChartBackground} stroke="black" stroke-width="4" fill="none"
                              cx="16.91549431" cy="16.91549431" r="15.91549431" />
                      <circle className={m.circleChartCircle} stroke="#42df4c" stroke-width="4"
                              stroke-dasharray="75,100"
                              stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                    </svg>
                  </section>
                  <p className={m.circleChartInfo}>EBITDA</p>
                </div>
              </div>
            </div>

            <div className={m.percentDiv2_2}>
              <p className={m.percentP + " " + m.addPercentP}>прямі витрати</p>
              <div className={m.divPerc}>
                <section className={m.section_counter}>
                  <div className={m.counter_item2}>
                    <span id='pes1' className={m.percentPAnim2} data-target={25}>0</span>
                    <span className={m.percent2}>%</span>
                  </div>
                </section>
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
              <p className={m.wW}>БУДІВНИЦТВО ТА ОБЛАДНАННЯ ДІЛЯНКИ</p>
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
          <section id='section_counter2' className={m.section_counter2}>
            <div className={m.imageBlock}>
              <p className={m.pYear} id='pes3' data-target={12}>0</p>
              <p className={m.pDos}>років досвіду</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p className={m.pYear} id='pes3' data-target={250}>0</p>
              <p className={m.pDos} style={{ width: "210px" }}>боксів <br /> під ключ</p>
            </div>
          </section>
        </div>

        <div className={m.container4}>
          <div className={m.container4_2}>
            <p className={m.h4}>Найбільший вибір</p>
            <p className={m.h42}>накриттів в Україні</p>
            <p className={m.p4}>Ваша мийка буде якісно виділятись на фоні конкурентів, привертатиме увагу
              і виглядатиме профейсіно та стильно!</p>
          </div>

          <Carousel>
            <div className={m.sliderDiv}>
              <div className={m.divInfo}>
                <p className={m.pSmart}>SMART</p><p className={m.pPrise}>6 200 € за пост</p>
                <p className={m.pBig2} onClick={infoBig}>БІЛЬШЕ ІНФОРМАЦІЇ >></p>
              </div>
              <div className={m.divImgSlider}><img src={image2} className={m.imgClass2} /></div>
            </div>

            <div className={m.sliderDiv}>
              <div className={m.divInfo}>
                <p className={m.pSmart}>PIXEL</p><p className={m.pPrise}>7 200 € за пост</p>
                <p className={m.pBig2} onClick={infoBig}>БІЛЬШЕ ІНФОРМАЦІЇ >></p>
              </div>
              <div className={m.divImgSlider}><img src={image21} className={m.imgClass2} /></div>
            </div>

            <div className={m.sliderDiv}>
              <div className={m.divInfo}>
                <p className={m.pSmart}>MARCO</p><p className={m.pPrise}>7 700 € за пост</p>
                <p className={m.pBig2} onClick={infoBig}>БІЛЬШЕ ІНФОРМАЦІЇ >></p>
              </div>
              <div className={m.divImgSlider}><img src={image212} className={m.imgClass2} /></div>
            </div>

            <div className={m.sliderDiv}>
              <div className={m.divInfo}>
                <p className={m.pSmart}>MARCO 2</p><p className={m.pPrise}>8 200 € за пост</p>
                <p className={m.pBig2} onClick={infoBig}>БІЛЬШЕ ІНФОРМАЦІЇ >></p>
              </div>
              <div className={m.divImgSlider}><img src={image21234} className={m.imgClass2} /></div>
            </div>

            <div className={m.sliderDiv}>
              <div className={m.divInfo}>
                <p className={m.pSmart}>MARCHELLO</p><p className={m.pPrise}>12 800 € за пост</p>
                <p className={m.pBig2} onClick={infoBig}>БІЛЬШЕ ІНФОРМАЦІЇ >></p>
              </div>
              <div className={m.divImgSlider}><img src={image2123} className={m.imgClass2} /></div>
            </div>

            <div className={m.sliderDiv}>
              <div className={m.divInfo}>
                <p className={m.pSmart}>UFO</p><p className={m.pPrise}>13 500 € за пост</p>
                <p className={m.pBig2} onClick={infoBig}>БІЛЬШЕ ІНФОРМАЦІЇ >></p>
              </div>
              <div className={m.divImgSlider}><img src={image212345} className={m.imgClass2} /></div>
            </div>
          </Carousel>

            {/*<div>*/}
            {/*  <img src={image2} id={m.img} />*/}
            {/*  <p className={m.pSmart}>SMART</p>*/}
            {/*  <p className={m.pPrise}>6 200 € за 1 пост</p>*/}
            {/*  <p className={m.pBig2} onClick={infoBig}>БІЛЬШЕ ІНФОРМАЦІЇ >></p>*/}
            {/*</div>*/}

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
              <p className={m.p16}>Ми можемо поставити на Вашу автомийку найпотужніший
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

        <div className={m.container10_5}></div>

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
                    <span>СПИСОК АВТОМИЙОК</span>
                    <span className={m.spanArrow}>
                      <img src={image5} className={m.imgClass} />
                    </span>
                  </button>
                </Link>
              </div>
              {!screen &&<span className={m.span10}>Гарантія 2 роки на все обладнання</span>}
            </div>
          </div>
        </div>

        <div className={m.mapCart}>
          {/*<iframe width='100%' height={screen ? '900px' : '400px'} options={{ gestureHandling: "greedy" }}*/}
          {/*        allowFullScreen className="embed-responsive-item" src="*/}
          {/*      https://www.google.com/maps/d/embed?mid=1jsm87_-WVn3DspwNkz85WWD5dnBCHYU&ehbc=2E312F">*/}
          {/*</iframe>*/}
          { Home() }
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
                <span>ЗАМОВИТИ КОНСУЛЬТЦІЮ</span><span className={m.spanArrow}>
              <img src={image5} className={m.imgClass} />
            </span>
              </button>
            </div>
          </div>
        </div>

      </div>

    </main>

    <footer className={m.footerDiv}>
      <div className={m.footerDiv3}>
        <span className={m.footerSpan}>info@samwash.com</span>
        <span className={m.footerSpan}>+38 (050) 59 23 772</span>
      </div>
    </footer>

  </div>;
};

export default MainPage;





// {/*<iframe className={m.startImage}*/}
// {/*        src="https://www.youtube.com/embed/aBA0fi0gua4?autoplay=1&mute=1&loop=1&playlist=aBA0fi0gua4&enablejsapi=1&showinfo=0&controls=0&modestbranding=1"*/}
// {/*        frameBorder={0}*/}
// {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
// {/*        allowFullScreen />*/}