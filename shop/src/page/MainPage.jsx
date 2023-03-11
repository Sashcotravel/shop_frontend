import React, { memo, useEffect, useLayoutEffect, useMemo, useState } from "react";
import m from "./MainPage.module.css";
import s from "../component/Home.module.css";
import { useDispatch } from "react-redux";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import image1 from "../image/svg/preloader.svg";
import image2 from "../image/svg/SMART.webp";
import image21 from "../image/svg/PIXEL 2.webp";
import image212 from "../image/svg/MARCO copy.webp";
import image2123 from "../image/svg/MARCHELLO.webp";
import image21234 from "../image2/coverMARCO1.jpg";
import image212345 from "../image/svg/UFO.webp";
import image3 from "../image/svg/SW icon.svg";
import image4 from "../image/svg/output.mp4";
import image5 from "../image/svg/Group 103.svg";
import image6 from "../image/svg/map icon.svg";
import { fetchCaptcha, fetchMailDimaZam } from "../API/post";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { defaultTheme } from './Theme'
import { listWash, coordinates } from '../users'
import { Carousel } from "./carousel/Carousel";
import { LazyLoadImage, LazyLoadComponent } from "react-lazy-load-image-component";
import { reCaptchaExecute  } from 'recaptcha-v3-react-function-async'



const MainPage = ({ t, setOnFooter, setMeneger, setChecked }) => {

  const [userData, setUserData] = useState({
    name: "", phone: "", email: "" });
  const [formPass, setFormPass] = useState({
    phone: false, email: false });

  let lang = localStorage.i18nextLng
  const screen = window.screen.availWidth > 900
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const arrow = 'стрілка'
  const key = '6LeDKr8kAAAAAOvhuveRpPUklVNHNdIID4YtceQl'

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAX7re_mdCccwAFdJFDpkAyODXH-WRBvXg"
  })

  const defaultOption = {
    panControl: true, mapTypeControl: false, scaleControl: false, streetViewControl: false,
    rotateControl: false, fullscreenControl: false, disableDoubleClickZoom: true, styles: defaultTheme
  }

  useEffect(() => {
    if(lang === 'ua'){
      document.title = "Купити мийку самообслуговування під ключ | Вигідна ціна | SamWash";
      document.description = 'Шукаєте мийку самообслуговування під ключ? Звертайтесь до нас! ' +
        'Ми займатимемося повним циклом будівництва автомийок та забезпечимо їх ефективність та якість.'
    }
    if(lang === 'ru'){
      document.title = 'Купить мойку самообслуживания под ключ | Выгодная цена | SamWash'
      document.description = 'Ищете мойку самообслуживания под ключ? Обращайтесь к нам! Мы будем' +
        ' заниматься полным циклом строительства автомоек и обеспечим их эффективность и качество.'
    }
  }, [])

  const Map = () => {
    const center = useMemo(() => ({ lat: 48.385, lng: 31.183 }), [])

    return <GoogleMap zoom={7} center={center} mapContainerClassName={m.map_container}
                      options={defaultOption}>
      { coordinates.map((item, index) => {
            let center = item.center;
            return <MarkerF position={center} icon={image6} key={index} onClick={() => navigate(item.url) } title={item.title} />})}
    </GoogleMap>
  }

  function Home () {
    if(!isLoaded) return <div>Завантаження...</div>
    return <Map />
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setOnFooter(true);
    return () => {
      setOnFooter(false);
    };
  }, [])

  useLayoutEffect(  () => {
    // caches.keys().then((names) => {
    //   names.forEach((name) => {
    //     caches.delete(name);
    //   });
    // });

    const percent = document.getElementById('percent')
    const preloader = document.getElementById('preloader')
    const anim1 = document.getElementById('anim1')
    const anim2 = document.getElementById('anim2')
    const anim3 = document.getElementById('anim3')
    const anim4 = document.getElementById('anim4')
    const anim5 = document.getElementById('anim5')
    const container1 = document.getElementById('container1')
    const mediaFiles = document.querySelectorAll('iframe, svg, img')
    let i = 0

    Array.from(mediaFiles).forEach((file, index) => {
      file.onload = () => {
        i++
        percent.innerHTML = ((i * 100) / mediaFiles.length).toFixed()
        // if(i === mediaFiles.length - 5){
        if(i === 3){
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
    if(formPass.email || formPass.phone){
      setMeneger(false)
      setChecked(false)
      navigate('/thanks')
      // let gtoken = await reCaptchaExecute(key, 'setting')
      // let res = await dispatch(fetchCaptcha({gtoken}))
      // if(res.payload){
        // let con = document.getElementById("lightblue");
        // con.style.visibility = "hidden";
        let obj = { user: userData };
        dispatch(fetchMailDimaZam(obj));
      // }
    }
  };

  const greenBut = () => { noScroll() };

  const infoBig = () => {};

  const Video = props => {
    const src = getVideoSrc(window.innerWidth);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const onLoadedData = () => { setIsVideoLoaded(true) };

    return (
      <div className="container">
        <img src={image3} className={`${m.video_thumb} ${m.tiny}`} alt="thumb"
          style={{ opacity: isVideoLoaded ? 0 : 1 }} />

        <LazyLoadComponent>
          <video autoPlay playsInline muted loop src={src} onLoadedData={onLoadedData}
                 style={{ opacity: isVideoLoaded ? 1 : 0 }} data-loaded='lazy'/>
        </LazyLoadComponent>
      </div>
    );
  };

  const getVideoSrc = width => { return image4 };

  useEffect(() => {
    let section_counter = document.querySelector("#section_counter")
    let counters = document.querySelectorAll(`.${m.counter_item}, .${m.counter_item2}, #pes1`)
    let counter2 = document.querySelectorAll(`#pes3`)
    let section_counter2 = document.querySelector("#section_counter2")
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

  const onBlur = (e) => {
    let email = document.getElementById('email')
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!re.test(String(e.target.value).toLowerCase())){
      if(formPass.phone === false){
        email.style.border = '2px solid red'
        email.style.backgroundCo1or = 'transparent'
        setFormPass((actual) => { return { ...actual, email: false } })
      }
      else {
        email.style.border = 'none'
        email.style.borderBottom = '2px solid grey'
        email.style.backgroundColor = 'transparent'
      }
    } else {
      email.style.border = 'none'
      email.style.borderBottom = '2px solid grey'
      email.style.backgroundColor = 'transparent'
      setFormPass((actual) => { return { ...actual, email: true } })
    }
  }

  const onBlur2 = (e) => {
    let phone = document.getElementById("phone");
    let regex = new RegExp(/^(\+|00)[1-9][0-9 \-\(\)\.]{10,32}$/);
    if (regex.test(e.target.value.toString()) === true) {
      phone.style.border = "none";
      phone.style.borderBottom = "2px solid grey";
      phone.style.backgroundColor = "transparent";
      setFormPass((actual) => {return { ...actual, phone: true }});
    } else {
      if (formPass.email === false) {
        phone.style.border = "2px solid red";
        phone.style.backgroundCo1or = "transparent";
        setFormPass((actual) => {return { ...actual, phone: false };});
      } else {
        phone.style.border = "none";
        phone.style.borderBottom = "2px solid grey";
        phone.style.backgroundColor = "transparent";
      }
    }
  };

  const phoneClick = (e) => {
    if(userData.phone === ''){
      setUserData((actual) => {return { ...actual, phone: '+' }})
    }
  }


  return <div>

    <main style={{ backgroundColor: "#283338" }}>

      {/*This site is protected by reCAPTCHA and the Google*/}
      {/*<a href="https://policies.google.com/privacy">Privacy Policy</a> and*/}
      {/*<a href="https://policies.google.com/terms">Terms of Service</a> apply.*/}

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
                 placeholder={`${t("enterName")}`} value={userData.name} onChange={(e) => {
            setUserData((actual) => {
              return { ...actual, [e.target.title]: e.target.value };});}} />
          <input className={s.inputUser} type="email" title="email" id="email" onBlur={onBlur}
                 placeholder={`${t("enterEmail")}`} value={userData.email} onChange={(e) => {
            setUserData((actual) => {
              return { ...actual, [e.target.title]: e.target.value };});}} />
          <input className={s.inputUser} style={{ width: "90%" }} type="text" title="phone" id="phone" onBlur={onBlur2}
                 placeholder={`${t("enterYourPhoneNumber")}`} value={userData.phone} onChange={ (e) => {
            setUserData((actual) => {
              return { ...actual, [e.target.title]: e.target.value }});}} onClick={phoneClick} />
          <br />
          <button className={s.footerBut} style={{ width: "50%", margin: "30px auto" }}
                  onClick={useSubmit} disabled={!formPass.email && !formPass.phone}>{t("send")}</button>
        </div>
      </div>

      <div className={`${m.preloader}`} id="preloader">
        <div className={m.preloader__loader}>
          <p><img src={image1} className={m.imgTit} alt='logo'/></p>
          <span className={m.preloader__percent}>
            <span id='percent'>0</span>
            <span>%</span>
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
          <h1 className={m.titleH1}>{t("main.searchWhat")}</h1>
          <h2 className={m.titleH4}>{t("main.build100")}</h2>
          <div className={m.greenButDiv}>
            <button className={m.greenBut} onClick={greenBut} style={{ cursor: "pointer" }}>
              <span>{t("main.zam")}</span><span className={m.spanArrow}>
              <img src={image5}  className={m.imgClass} alt='Замовити консультацію'/>
            </span>
            </button>
          </div>
        </div>

        <div className={m.div99}>
            <div className={m.container21}>

              <div className={m.percentDiv2}>
                <div className={m.percentDiv}>
                  <p className={m.percentP}>{t("main.prod1")}</p>
                  <section id="section_counter" className={m.section_counter}>
                    <div className={m.counter_item}>
                      <span id="pes1" className={m.percentPAnim} data-target={75}>0</span>
                      <span className={m.percent}>%</span>
                    </div>
                  </section>

                  <div>
                    <section className={m.circleDiv}>
                      <svg className={m.circleChart} viewBox="1 1 33.83098862 33.83098862" width="400" height="400"
                           xmlns="http://www.w3.org/2000/svg"
                           style={{ overflowClipMargin: "border-box", padding: "20px" }}>
                        <circle className={m.circleChartBackground} stroke="black" strokeWidth="4" fill="none"
                                cx="16.91549431" cy="16.91549431" r="15.91549431" />
                        <circle className={m.circleChartCircle} stroke="#42df4c" strokeWidth="4"
                                strokeDasharray="75,100"
                                strokeLinecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                      </svg>
                    </section>
                    <p className={m.circleChartInfo}>EBITDA</p>
                  </div>
                </div>
              </div>

              <div className={m.percentDiv2_2}>
                <p className={m.percentP + " " + m.addPercentP}>{t("main.prod2")}</p>
                <div className={m.divPerc}>
                  <section className={m.section_counter}>
                    <div className={m.counter_item2}>
                      <span id="pes1" className={m.percentPAnim2} data-target={25}>0</span>
                      <span className={m.percent2}>%</span>
                    </div>
                  </section>
                  <p className={m.percentP2}>{t("main.energe")}</p>
                  <p className={m.percentP2}>{t("main.salary")}</p>
                  <p className={m.percentP2}>{t("main.water")}</p>
                  <p className={m.percentP2}>{t("main.foam")}</p>
                  <p className={m.percentP2}>{t("main.wax")}</p>
                </div>
              </div>
            </div>
          </div>

        <LazyLoadComponent>
          <div className={m.container2}>
            {
              lang === 'en' ? <p className={m.pH}>{t("main.carWashes")}</p>
                : <>
                  <p className={m.pH}>{t("main.carWashes")}</p>
                  <p className={m.pH2}>{t("main.self-service")}</p>
                </>
            }
            <p className={m.pP}>{t("main.youWillReceive")}</p>

            <div>
              <div className={m.divSpan}>
                <span className={m.spanB}>1</span>
                <span className={m.wW}>{t("main.DESIGN")}</span>
              </div>
              <div className={m.divSpan + " " + m.span2}>
                <span className={m.spanB}>2</span>
                <span className={m.wW}>{t("main.DOCUMENTATION")}</span>
              </div>
              <div className={m.divSpan + " " + m.span3}>
                <p className={m.spanB}>3</p>
                <p className={m.wW}>{t("main.CONSTRUCTION")}</p>
              </div>
              <div className={m.divSpan + " " + m.span4}>
                <span className={m.spanB}>4</span>
                <span className={m.wW}>{t("main.COVERS")}</span>
              </div>
              <div className={m.divSpan + " " + m.span5}>
                <span className={m.spanB}>5</span>
                <span className={m.wW}>{t("main.LIGHTING")}</span>
              </div>
              <div className={m.divSpan + " " + m.span6}>
                <span className={m.spanB}>6</span>
                <span className={m.wW}>{t("main.EQUIPMENT")}</span>
              </div>
              <div className={m.divSpan + " " + m.span7}>
                <span className={m.spanB}>7</span>
                <span className={m.wW}>{t("main.ACCESSORIES")}</span>
              </div>
              <div className={m.divSpan}>
                <span className={m.spanB + " " + m.span8}>8</span>
                <div>
                  <p style={{ marginTop: "20px" }}>{t("main.LAUNCHING")}</p>
                  <p className={m.span8Z}>{t("main.Self-sufficiency")}</p>
                </div>
              </div>
            </div>
          </div>
        </LazyLoadComponent>

        <div className={m.container3}>
          <div>
            <span className={m.pDos2}>{t("main.whyUs")}</span>
          </div>
          <section id="section_counter2" className={m.section_counter2}>
            <div className={m.imageBlock}>
              <p className={m.pYear} id="pes3" data-target={12}>0</p>
              <p className={m.pDos}>{t("main.yearsOfExperience")}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p className={m.pYear} id="pes3" data-target={250}>0</p>
              <p className={m.pDos+' '+m.pBack}>{t("main.boxes")} <br /> {t("main.turnkey")}</p>
            </div>
          </section>
        </div>

        <LazyLoadComponent>
          <div className={m.container4}>
            <div className={m.container4_2}>
              <p className={m.h4}>{t("main.biggestChoice")}</p>
              {
                lang === 'en' ? <p className={m.h421}>{t("main.coveringsInUkraine")}</p>
                  : <p className={m.h42}>{t("main.coveringsInUkraine")}</p>
              }
              <p className={m.p4}>{t("main.yourSinkWillStand")}</p>
            </div>

            <Carousel>
              <div className={m.sliderDiv}>
                <div className={m.divInfo}>
                  <p className={m.pSmart}>SMART</p><p className={m.pPrise}>6 200 € {t("main.forPost")}</p>
                  <p onClick={infoBig}><Link className={m.pBig2} to='/nakritya'>{t("main.MOREINFORMATION")} >></Link></p>
                </div>
                <figure>
                  <div className={`${m.divImgSlider} ${m.addClass}`}>
                    {/*<img src={image2} className={m.imgClass2} alt='SMART' loading="eager" />*/}
                    <LazyLoadImage src={image2} className={m.imgClass2} alt="SMART" />
                  </div>
                </figure>
              </div>

              <div className={m.sliderDiv}>
                <div className={m.divInfo}>
                  <p className={m.pSmart}>PIXEL</p><p className={m.pPrise}>7 200 € {t("main.forPost")}</p>
                  <p onClick={infoBig}><Link className={m.pBig2} to='/nakritya'>{t("main.MOREINFORMATION")} >></Link></p>
                </div>
                {/*<div className={m.divImgSlider}><img src={image21} className={m.imgClass2} alt='PIXEL' loading="lazy"/></div>*/}
                <figure>
                  <div className={m.divImgSlider}><LazyLoadImage src={image21} className={m.imgClass2} alt='PIXEL' /></div>
                </figure>
              </div>

              <div className={m.sliderDiv}>
                <div className={m.divInfo}>
                  <p className={m.pSmart}>MARCO</p><p className={m.pPrise}>8 200 € {t("main.forPost")}</p>
                  <p onClick={infoBig}><Link className={m.pBig2} to='/nakritya'>{t("main.MOREINFORMATION")} >></Link></p>
                </div>
                {/*<div className={m.divImgSlider}><img src={image212} className={m.imgClass2} alt='MARCO' loading="lazy"/></div>*/}
                <figure>
                  <div className={m.divImgSlider}><LazyLoadImage src={image212} className={m.imgClass2} alt='MARCO' /></div>
                </figure>
              </div>

              {/*<div className={m.sliderDiv}>*/}
              {/*  <div className={m.divInfo}>*/}
              {/*    <p className={m.pSmart}>MARCO 2</p><p className={m.pPrise}>8 200 € {t("main.forPost")}</p>*/}
              {/*    <p className={m.pBig2} onClick={infoBig}>{t("main.MOREINFORMATION")} >></p>*/}
              {/*  </div>*/}
              {/*  /!*<div className={m.divImgSlider}><img src={image21234} className={m.imgClass2} alt='MARCO 2' loading="lazy"/></div>*!/*/}
              {/*  <div className={m.divImgSlider}><LazyLoadImage src={image21234} className={m.imgClass2} alt='MARCO 2' /></div>*/}
              {/*</div>*/}

              <div className={m.sliderDiv}>
                <div className={m.divInfo}>
                  <p className={m.pSmart}>MARCHELLO</p><p className={m.pPrise}>12 800 € {t("main.forPost")}</p>
                  <p onClick={infoBig}><Link className={m.pBig2} to='/nakritya'>{t("main.MOREINFORMATION")} >></Link></p>
                </div>
                {/*<div className={m.divImgSlider}><img src={image2123} className={m.imgClass2} alt='MARCHELLO' loading="lazy"/></div>*/}
                <figure>
                  <div className={m.divImgSlider}><LazyLoadImage src={image2123} className={m.imgClass2} alt='MARCHELLO' /></div>
                </figure>
              </div>

              <div className={m.sliderDiv}>
                <div className={m.divInfo}>
                  <p className={m.pSmart}>UFO</p><p className={m.pPrise}>13 500 € {t("main.forPost")}</p>
                  <p onClick={infoBig}><Link className={m.pBig2} to='/nakritya'>{t("main.MOREINFORMATION")} >></Link></p>
                </div>
                {/*<div className={m.divImgSlider}><img src={image212345} className={m.imgClass2} alt='UFO' loading="lazy"/></div>*/}
                <figure>
                  <div className={m.divImgSlider}><LazyLoadImage src={image212345} className={m.imgClass2} alt='UFO' /></div>
                </figure>
              </div>
            </Carousel>

          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={m.container4_5}>
            <div className={m.container4_52}>
              <div className={m.container4_53}>
                {screen ? <>
                    <p className={m.p4_5}>{t("main.ordering")}</p>
                    <p className={m.p4_52}>{t("main.youWill")}</p>
                    <p className={m.p4_52}>{t("main.profitable")}</p>
                    <p className={m.p4_5}>{t("main.creation")}</p>
                    <p className={m.p4_5}>{t("main.throughout")}</p>
                  </>
                  : <>
                    <p className={m.p4_5}>{t("main.ordering2")}</p>
                    <p className={m.p4_52}>{t("main.youWill2")}</p>
                    <p className={m.p4_52}>{t("main.youWill3")}</p>
                    <p className={m.p4_52}>{t("main.profitable2")}</p>
                    <p className={m.p4_52}>{t("main.profitable3")}</p>
                    <p className={m.p4_5}>{t("main.creation2")}</p>
                    <p className={m.p4_5}>{t("main.throughout2")}</p>
                    <p className={m.p4_5}>{t("main.throughout3")}</p>
                  </>
                }
              </div>
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={m.container5_2}>
            <div className={m.slideStyleBack}></div>
            <div className={m.container5}>
              <div className={m.container5_3}>
                { !screen && <span className={m.p5}>9 800 € {t("main.forPost1")}</span> }
                <p className={m.title5P}>{t("main.allYourEquipment")}</p>
                <ul className={m.ul}>
                  <li className={m.li}><img className={m.imageS} src={image3} alt={arrow}/>
                    <span className={m.spanIm}>{t("main.pumps")}</span></li>
                  <li className={m.li}><img className={m.imageS} src={image3} alt={arrow}/>
                    <span className={m.spanIm}>{t("main.Schneider")}</span></li>
                  <li className={m.li}><img className={m.imageS} src={image3} alt={arrow}/>
                    <span className={m.spanIm}>{t("main.ISO")}</span></li>
                </ul>
                <span onClick={infoBig}><Link className={m.pBig23+' '+m.pBig23_3} to='/nakritya'>{t("main.MOREINFORMATION")} >></Link></span>
              </div>
              {screen && <div className={m.div12}>
                <span className={m.p5}>9 800 € {t("main.forPost1")}</span>
              </div>}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={m.container6}>
            <div className={m.container6_2}>
              <p className={m.p6}>{t("main.competitors")}</p>
              <ul className={m.ul} style={{ color: "black" }}>
                <li className={m.li}><img className={m.imageS} src={image3} alt={arrow}/>
                  <span className={m.spanIm}>{t("main.construction")}</span></li>
                <li className={m.li}><img className={m.imageS} src={image3} alt={arrow}/>
                  <span className={m.spanIm}>{t("main.space")}</span></li>
                <li className={m.li}><img className={m.imageS} src={image3} alt={arrow}/>
                  <span className={m.spanIm}>{t("main.heating")}</span></li>
              </ul>
              <span onClick={infoBig}><Link className={m.pBig23+' '+m.butGreen2} to='/nakritya'>{t("main.MOREINFORMATION")} >></Link></span>
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={m.container7_2}>
            <div className={m.slideStyleBack}></div>
            <div className={m.container7}>
              <div className={m.container7_3}>
                { !screen && <span className={m.p5}>6 800 € {t("main.forDevice")}</span> }
                <p className={m.p16}>{t("main.powerfulVacuum")}</p>
                <ul className={m.ul}>
                  <li className={m.li}><img className={m.imageS} src={image3} alt={arrow}/>
                    <span className={m.spanIm}>{t("main.worksFor")}</span></li>
                  <li className={m.li}><img className={m.imageS} src={image3} alt={arrow}/>
                    <span className={m.spanIm}>{t("main.power6kW")}</span></li>
                  <li className={m.li}><img className={m.imageS} src={image3} alt={arrow}/>
                    <span className={m.spanIm}>{t("main.periodOf")}</span></li>
                </ul>
                <span onClick={infoBig}><Link className={m.pBig23+' '+m.pBig23_2} to='/obladnannya'>{t("main.MOREINFORMATION")} >></Link></span>
              </div>

              {screen && <div className={m.div12}>
                <span className={m.p5}>6 800 € {t("main.forDevice")}</span>
              </div>}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={m.container8}>
            <div className={m.container8_2}>
              { !screen && <span className={m.p5}>6 700 €</span> }
              <p className={m.p6}>{t("main.Payment")}</p>

              <ul className={m.ul} style={{ color: "black" }}>
                <li className={m.li}><img className={m.imageS} src={image3} alt={arrow}/>
                  <span className={m.spanIm}>{t("main.allTypes")}</span></li>
                <li className={m.li}><img className={m.imageS} src={image3} alt={arrow}/>
                  <span className={m.spanIm}>{t("main.loyalty")}</span></li>
                <li className={m.li}><img className={m.imageS} src={image3} alt={arrow}/>
                  <span className={m.spanIm}>{t("main.smartphone")}</span></li>
              </ul>
              <span onClick={infoBig}><Link className={m.pBig23+' '+m.greenBut3} to='/obladnannya'>{t("main.MOREINFORMATION")} >></Link></span>
            </div>
            {screen && <div className={m.div12}>
              <span className={m.p5}>6 700 €</span>
            </div> }
          </div>
        </LazyLoadComponent>

        {/*<LazyLoadComponent>*/}
        {/*  <div className={m.container9_2}>*/}
        {/*    <div className={m.slideStyleBack}></div>*/}
        {/*    <div className={m.container9}>*/}
        {/*      <div className={m.container9_3}>*/}
        {/*        <p className={m.p6+' '+m.p9}>{t("main.payment")}</p>*/}

        {/*        <ul className={m.ul}>*/}
        {/*          <li className={m.li}><img className={m.imageS} src={image3} alt={arrow}/>*/}
        {/*            <span className={m.spanIm}>{t("main.convenience")}</span></li>*/}
        {/*          <li className={m.li}><img className={m.imageS} src={image3} alt={arrow}/>*/}
        {/*            <span className={m.spanIm}>...</span></li>*/}
        {/*          <li className={m.li}><img className={m.imageS} src={image3} alt={arrow}/>*/}
        {/*            <span className={m.spanIm}>{t("main.operation")}</span></li>*/}
        {/*        </ul>*/}

        {/*        <span className={m.pBig23+' '+m.greenBut4} onClick={infoBig}>{t("main.MOREINFORMATION")} >></span>*/}
        {/*      </div>*/}

        {/*      {screen && <div className={m.div12}>*/}
        {/*        <span className={m.p5}>6 800 €</span>*/}
        {/*      </div>}*/}

        {/*    </div>*/}
        {/*  </div>*/}
        {/*</LazyLoadComponent>*/}

        <LazyLoadComponent>
          <div className={m.container10_5}></div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={m.container10_2}>
            <div className={m.container10}>
              { screen ? <>
                  <p className={m.p10}>{t("main.weCarry")}</p>
                  <p className={m.p10_2}>{t("main.acknowledgment")}</p>
                  <p className={m.p10_2}>{t("main.serviceable")}</p>
                  <p className={m.p10}>{t("main.launch")}</p>
                </>
                : <>
                  <p className={m.p10}>{t("main.weCarry")}</p>
                  <p className={m.p10_2}>{t("main.acknowledgment2")}</p>
                  <p className={m.p10_2}>{t("main.acknowledgment3")}</p>
                  <p className={m.p10_2}>{t("main.serviceable2")}</p>
                  <p className={m.p10}>{t("main.serviceable3")}</p>
                  <p className={m.p10}>{t("main.launch2")}</p>
                </>
              }

              <div className={m.div10}>
                {screen &&<span className={m.span10}>{t("main.warranty")}</span>}
                <span className={m.p102}>{t("main.youCanSee")}</span>
                <div className={m.greenButDiv + " " + m.divGreen10}>
                  <a href="/nashi-avtomiyki/wsi">
                    <button className={m.greenBut} style={{ cursor: "pointer" }}>
                      <span>{t("main.LISTOFCARWASHS")}</span>
                      <span className={m.spanArrow}>
                      <img src={image5} className={m.imgClass} alt={arrow}/>
                    </span>
                    </button>
                  </a>
                </div>
                {!screen &&<span className={m.span10}>{t("main.warranty")}</span>}
              </div>
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={m.mapCart}> { Home() } </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={m.container11_2}>

            {screen ? <>
                <div className={m.container11}>
                  <p className={m.p11}>{t("main.already")}</p>
                </div>
                <div className={m.container11_4}>
                  <p className={m.p11}>{t("main.enough")}</p>
                </div>
                <div className={m.container11_4+' '+m.c12}>
                  <p className={m.p11}>{t("main.only")}</p>
                </div>
                <div className={m.container11+' '+m.c11}>
                  <p className={m.p11}>{t("main.become")}</p>
                  <p className={m.p11}>{t("main.business")}</p>
                  <p className={m.p11}>{t("main.immediately")}</p>
                  <p className={m.p11}>{t("main.profit")}</p>
                </div>
              </>
              : <>
                <p className={m.p11}>{t("main.businessOwner")}</p>
              </>}

            <div className={m.container11_6}>
              <p className={m.p11_2}>{t("main.leasing")}</p>
              <div className={m.greenButDiv}>
                <button className={m.greenBut} onClick={greenBut} style={{ cursor: "pointer" }}>
                  <span>{t("main.MOREINFORMATION")}</span><span className={m.spanArrow}>
              <img src={image5} className={m.imgClass} alt={arrow}/>
            </span>
                </button>
              </div>
            </div>
          </div>
        </LazyLoadComponent>

      </div>

    </main>

    <LazyLoadComponent>
      <footer className={m.footerDiv}>
        <div className={m.footerDiv3}>
          <span className={m.footerSpan}><a style={{color: 'white'}} href="mailto:info@samwash.com">info@samwash.com</a></span>
          {
            screen ? <span className={m.footerSpan}>+38 (050) 59 23 772</span>
              : <span className={m.footerSpan}><a href="tel:+380505923772" style={{color: 'white'}}>+38 (050) 59 23 772</a></span>
          }
        </div>
      </footer>
    </LazyLoadComponent>

  </div>;
};

export default MainPage;