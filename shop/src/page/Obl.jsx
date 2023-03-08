import React, { useEffect, useState } from "react";
import s from "../component/Home.module.css";
import "./Obl.css";
import image1 from "../image/svg/Fullscreenicon.svg";
import image2 from "../image/svg/Group31.svg";
import { LazyLoadImage, LazyLoadComponent } from "react-lazy-load-image-component";


const Obl = ({ t, data, userOrder, setTotal, total, setUrl }) => {

  const [pina, setPina] = useState();

  useEffect(() => {
    setUrl("equipment")
    if(lang === 'ua'){
      document.title = "Обладнання для автомийок самообслуговування | Купити в Україні | SamWash"
      document.description = 'Великий вибір обладнання для автомийок самообслуговування за вигідними ' +
        'цінами від SamWash. Безкоштовна консультація та швидка доставка по всій Україні.'
    }
    if(lang === 'ru'){
      document.title = 'Купить оборудование для мойки самообслуживания | Цена в Украине | SamWash'
      document.description = 'Большой выбор оборудования для автомоек самообслуживания по выгодной цене от ' +
        'SamWash. Бесплатная консультация и быстрая доставка по всей Украине.'
    }
  }, [])

  const screen = window.screen.availWidth > 900
  let lang = localStorage.i18nextLng

  const addCount = (e) => {
    data.forEach(item => {
      if (item.nameOfGoods === e.target.title) {
        setPina(item);
        userOrder.forEach((el, index) => {
          if (item === el) {
            userOrder.splice(index, 1);
          }
        });
        item.size = item.size + 1;
        item.total = item.size * item.prise;
        setTotal((actual) => actual + item.prise);
        userOrder.push(item);
      }
    });
    // console.log(userOrder);
  };

  const addCount2 = (e) => {
    data.forEach(item => {
      if (item.nameOfGoods === e.target.title) {
        if(item.size < 1){
        setPina(item);
        userOrder.forEach((el, index) => {
          if (item === el) {
            userOrder.splice(index, 1);
          }
        });
          item.size = item.size + 1;
          item.total = item.size * item.prise;
          setTotal((actual) => actual + item.prise);
          userOrder.push(item);
        }
      }
    });
    // console.log(userOrder);
  };

  const addCountCheck = (e) => {
    data.forEach(item => {
      if (item.nameOfGoods === e.target.title) {
        setPina(item);
        userOrder.forEach((el, index) => {
          if (item === el) {
            userOrder.splice(index, 1);
          }
        });
        if (pina?.nameOfGoods === data[7].nameOfGoods || pina?.nameOfGoods === data[6].nameOfGoods) {
          userOrder.forEach((el, index) => {
            if (data[6] === el || data[7] === el) {
              userOrder.splice(index, 1);
              if (el.size !== 0) {
                setTotal(total - el.total);
              }
              el.size = 0;
              el.total = el.prise;
            }
          });
        }
        item.size = item.size + 1;
        item.total = item.size * item.prise;
        setTotal((actual) => actual + item.prise);
        userOrder.push(item);
      }
    });
    // console.log(userOrder);
  };

  const minesCount = (e) => {
    data.forEach(item => {
      if (item.nameOfGoods === e.target.title) {
        if (item.size === 0) {
          item.size = 0;
        } else {
          item.size = item.size - 1;
          if (item.size === 0) {
            item.checked = false;
            userOrder.forEach((el, index) => {
              if (item === el) {
                userOrder.splice(index, 1);
              }
            });
          }
          item.total = item.total - item.prise;
          if (item.total === 0) {
            item.total = item.prise;
          }
          setTotal(total - item.prise);
        }
      }
    });
  };

  const clickPina = (e) => {
    data.forEach(item => {
      item.checked = false;
      if (item.nameOfGoods === e.target.title) {
        setPina(item);
        userOrder.forEach((el, index) => {
          if (item === el) {
            userOrder.splice(index, 1);
          }
        });
        if (pina?.nameOfGoods === data[6].nameOfGoods) {
          userOrder.forEach((el, index) => {
            if (data[6] === el) {
              userOrder.splice(index, 1);
              if (el.size > 0) {
                // setTotal((actual) => actual - el.total)
                setTotal(total - el.total);
              }
              el.size = 0;
              el.total = el.prise;
            }
          });
        } else if (pina?.nameOfGoods === data[7].nameOfGoods) {
          userOrder.forEach((el, index) => {
            if (data[7] === el) {
              userOrder.splice(index, 1);
              if (el.size > 0) {
                // setTotal((actual) => actual - el.total)
                setTotal(total - el.total);
                el.size = 0;
                el.total = el.prise;
              }
            }
          });
        }
        // setTotal((actual) => actual + item.prise)
        userOrder.push(item);
        item.checked = true;
      }
    });
    // console.log(userOrder);
  };

  const imgSize = (e) => {
    if (window.screen.availWidth > 900) {
      let twoImg = document.getElementById("lightCol");
      let g = document.getElementById(e.target.id);
      if (e.target.id === "img4" || e.target.id === "img5") {
        let con = document.getElementById("light2");
        con.style.visibility = "visible";
        let twoImg = document.getElementById("lightCol2");
        twoImg.src = g.src;

      }  else {
        data.map(item => {
          if('img' + item.nameImg === e.target.id){
            let con = document.getElementById("light");
            con.style.visibility = "visible";
            twoImg.src = require(`../img/Аксесуари/big_jpeg/${item.nameWebp}`)
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

  const selectName = (number) => {
    return (
      data[number].size > 0
        ? <span className={s.inputTextGreen}>{t("selected")}</span>
        : <span className={s.inputText}>{t("chooseThisTypeOfCover")}</span>
    );
  };

  const size = (num) => {
    return (
      window.screen.width > 900 ? <span className="block">
        <LazyLoadImage style={{ width: "35px", height: '35px' }} src={image1}
                       onClick={imgSize} id={`img${num}`} alt='lose'/>
      </span> : ""
    );
  };

  const boxButWithCheck = (num) => {
    return (
      <div className={s.divBut}>
        <div>
          <button className={s.butMin}>
            <span onClick={minesCount} title={data[num].nameOfGoods} className={s.spanMin}>-</span>
          </button>
          <span className={s.itemTotalSize} id="lightblue">{data[num].size}</span>
          <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
            <span onClick={addCountCheck} title={data[num].nameOfGoods} className={s.spanAdd}>+</span>
          </button>
        </div>
        <span className={s.itemTotal} style={{ padding: 10 + "px" }}>{data[num].total} грн</span>
      </div>
    );
  };

  const boxBut = (num) => {
    return (
      <div className={s.divBut}>
        <div style={{ padding: 10 + "px", margin: "20px 15px" }}>
          <button className={s.butMin}>
            <span onClick={minesCount} title={data[num].nameOfGoods} className={s.spanMin}>-</span>
          </button>
          <span className={s.itemTotalSize} id="lightblue">{data[num].size}</span>
          <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
            <span onClick={addCount} title={data[num].nameOfGoods} className={s.spanAdd}>+</span>
          </button>
        </div>
        <span className={s.itemTotal}>{data[num].total} грн</span>
      </div>
    );
  };

  const theeFriends = (e) => {
    if (!userOrder.includes(data[41]) && !userOrder.includes(data[7])) {
      userOrder.forEach((item, index) => {
        if(item === data[12]){
          userOrder.splice(index, 1);
        }
      })
    } else if (!userOrder.includes(data[12])) {
      userOrder.push(data[12]);
    }
  };

  const popApp = () => {
    if(data[7].size < 2 && data[7].size !== 0 || data[6].size < 2 && data[6].size !== 0) {
      if(screen){
        document.getElementById('divPopapp').style.display = 'flex'
        document.getElementById('pina1').classList.add(`${s.pulse}`)
        document.getElementById('pina2').classList.add(`${s.pulse}`)
      } else {
        const element = document.getElementById('pina2');
          element.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('divPopapp2').style.display = 'flex'
        document.getElementById('pina1').classList.add(`${s.pulse}`)
        document.getElementById('pina2').classList.add(`${s.pulse}`)
      }
    }

  }

  const popApp2 = () => {
    if(screen){
      document.getElementById('divPopapp').style.display = 'none'
    } else {
      document.getElementById('divPopapp2').style.display = 'none'
    }
    document.getElementById('pina1').classList.remove(`${s.pulse}`)
    document.getElementById('pina2').classList.remove(`${s.pulse}`)
  }

  const closePopApp = () => {
    screen ? document.getElementById('divPopapp').style.display = 'none'
    : document.getElementById('divPopapp2').style.display = 'none'
  }

  const popApp3 = () => {
    if(data[20].size < 2 || data[19].size < 2) {
      if(screen){
        document.getElementById('divPopapp3').style.display = 'flex'
        document.getElementById('ter1').classList.add(`${s.pulse}`)
        document.getElementById('ter2').classList.add(`${s.pulse}`)
      } else {
        const element = document.getElementById('ter1');
        element.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('divPopapp4').style.display = 'flex'
        document.getElementById('ter1').classList.add(`${s.pulse}`)
        document.getElementById('ter2').classList.add(`${s.pulse}`)
      }
    }
  }

  const popApp4 = () => {
    if(screen){
      document.getElementById('divPopapp3').style.display = 'none'
    } else {
      document.getElementById('divPopapp4').style.display = 'none'
    }
    document.getElementById('ter1').classList.remove(`${s.pulse}`)
    document.getElementById('ter2').classList.remove(`${s.pulse}`)
  }

  const popApp5 = () => {
      if(screen){
        document.getElementById('divPopapp5').style.display = 'flex'
        document.getElementById('card').classList.add(`${s.pulse}`)
      } else {
        const element = document.getElementById('card');
        element.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('divPopapp6').style.display = 'flex'
        document.getElementById('card').classList.add(`${s.pulse}`)
      }
  }

  const popApp6 = () => {
    if(screen){
      document.getElementById('divPopapp5').style.display = 'none'
    } else {
      document.getElementById('divPopapp6').style.display = 'none'
    }
    document.getElementById('card').classList.remove(`${s.pulse}`)
  }

  const closePopApp2 = () => {
   if(screen){
     document.getElementById('divPopapp5').style.display = 'none'
   } else {
     document.getElementById('divPopapp6').style.display = 'none'
   }
  }



  return <>
    {screen && <div id="light" className={s.boxHideImage} onClick={hidden}>
      <figure className="figure" id="light">
        <div className="divImg" id="light">
            <span className="blockLarge" id="light">
              <LazyLoadImage style={{ width: "35px", height: '35px' }} src={image2} onClick={hidden} id="light" alt="закрити" />
            </span>
          <img src='' className="imageLarge" id="lightCol" />
        </div>
      </figure>
    </div>}
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
    {screen && <div onClick={popApp2} className={s.divPopapp} id='divPopapp'>
      <div className={s.popappDiv2}>
        <p style={{width: '390px'}}>Також ви можете придбати підігрів піни і її колір</p>
      </div>
      <span className={s.closeX} onClick={closePopApp}>&#10006;</span>
    </div>}
    {!screen && <div onClick={popApp2} className={s.divPopapp} id='divPopapp2'>
      <div className={s.popappDiv3}>
        <p style={{width: '390px'}}>Також ви можете придбати підігрів піни і її колір</p>
      </div>
      <span className={s.closeX} onClick={closePopApp}>&#10006;</span>
    </div>}
    {screen && <div onClick={popApp4} className={s.divPopapp} id='divPopapp3'>
      <div className={s.popappDiv2}>
        <p style={{width: '440px'}}>Щоб вибрати карти лояльності, спочатку потрібно придбати термінал</p>
      </div>
      <span className={s.closeX} onClick={closePopApp}>&#10006;</span>
    </div>}
    {!screen && <div onClick={popApp4} className={s.divPopapp} id='divPopapp4'>
      <div className={s.popappDiv3}>
        <p style={{width: '390px'}}>Щоб вибрати карти лояльності, спочатку потрібно придбати термінал</p>
      </div>
      <span className={s.closeX} onClick={closePopApp}>&#10006;</span>
    </div>}
    {screen && <div onClick={popApp6} className={s.divPopapp} id='divPopapp5'>
      <div className={s.popappDiv2}>
        <p style={{width: '440px'}}>Ви також можете придбати систету корпоративних карт</p>
      </div>
      <span className={s.closeX} onClick={closePopApp2}>&#10006;</span>
    </div>}
    {!screen && <div onClick={popApp6} className={s.divPopapp} id='divPopapp6'>
      <div className={s.popappDiv3}>
        <p style={{width: '390px'}}>Ви також можете придбати систету корпоративних карт</p>
      </div>
      <span className={s.closeX} onClick={closePopApp2}>&#10006;</span>
    </div>}

    <main>

      <div className={s.divBox}>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/Технічне обладнання-1.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/Технічне обладнання-1.webp")} />
                    <img src={require("../img/Аксесуари/small_jpeg/Технічне обладнання-1.jpg")} className="base"
                         id="img3" alt='Технологічне обладнання' loading='lazy' />
                  </picture>
                  {/*<LazyLoadImage src={require("../image2/teh4progandpausa.jpg")} className={"base"}*/}
                  {/*               id="img3" alt='Технологічне обладнання' loading='lazy'/>*/}
                  {size(3)}
                </div>
              </figure>
              <p className={s.itemName}>{data[0].nameOfGoods}</p>
              <p className={s.itemDesc}>Основне миття ГЕЛЕМ,
                ополіскування помякшеною водою,
                віск з осушенням,
                осмос для надання блиску,
                кнопка "Пауза" <br/>
                Система ANTIFROST TURBO ECO Електронна система управління Schneider Germany з 4х рівневою системою
                захисту для безперебійної роботи обладнання до -35 °С навіть при відсутності електроенергії чи
                водопостачання. Підключена система для економії води для системи antifrost до 90%.</p>
              {boxBut(0)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container} onClick={popApp}>     {/*  with check  */}
            <div className={s.boxOne} onClick={popApp}>
              <figure>
                <div style={{ height: "315px" }}>
                  <iframe id="img4" width="100%" height="100%" src="https://www.youtube.com/embed/ADgSpww7qiE"
                          title="Програма піна високий тиск" style={{border: 'none'}} />
                  {size(4)}
                </div>
              </figure>
              <h5 className={s.itemName}>{data[6].nameOfGoods}</h5>
              <p className={s.itemDesc}></p>
              <div>
                <input className={data[6].size > 0 ? s.check2 : s.check}
                       type="radio" name="pina" title={data[6].nameOfGoods} onChange={clickPina}
                       checked={data[6].checked} />
                {selectName(6)}
              </div>
              {boxButWithCheck(6)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container} onClick={popApp}>   {/*  with check  */}
            <div className={s.boxOne} onClick={theeFriends}>
              <figure>
                <div style={{ height: "315px" }}>
                  <iframe id="img5" width="100%" height='100%' src="https://www.youtube.com/embed/ENZjdyDPFos"
                          title='Програма піна низький тиск' style={{border: 'none'}}/>
                  {size(5)}
                </div>
              </figure>
              <h5 className={s.itemName}>{data[7].nameOfGoods}</h5>
              <p className={s.itemDesc}></p>
              <div>
                <input className={data[7].size > 0 ? s.check2 : s.check}
                       type="radio" name="pina" title={data[7].nameOfGoods} onChange={clickPina}
                       checked={data[7].checked} />
                {selectName(7)}
              </div>
              {boxButWithCheck(7)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent> {/* pina */}
          <div className={`${s.container}`}>
            <div className={s.boxOne} id='pina2'>
              <figure>
                <div style={{ height: "5px" }}>
                  {/*<picture>*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_jpeg/Технічне обладнання-1.jpg")} type="image/jpeg" />*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_WebP/Технічне обладнання-1.webp")} />*/}
                  {/*  <img src={require("../img/Аксесуари/small_jpeg/Технічне обладнання-1.jpg")} className="base"*/}
                  {/*       id="img103" alt='Кольорова' loading='lazy' />*/}
                  {/*</picture>*/}
                  {/*<LazyLoadImage src={require("")} className={"base"} id="img103" alt='Кольорова'/>*/}
                  {/*<img src={(`/static/media/${data[14].src}.${data[14].src2}`)} className={"base"} id="img19" />*/}
                  {/*{size(103)}*/}
                </div>
              </figure>
              <p className={s.itemName} style={{margin: '30px 0 0 10px'}}>{data[59].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(59)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/інвертор-1.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/інвертор-1.webp")} />
                    <img src={require("../img/Аксесуари/small_jpeg/інвертор-1.jpg")} className="base"
                         id="img19" alt='Інвертор' loading='lazy' />
                  </picture>
                  {/*<LazyLoadImage src={require("../image2/chastPer.jpg")} className={"base"} id="img19" alt='Інвертор'/>*/}
                  {/*<img src={(`/static/media/${data[14].src}.${data[14].src2}`)} className={"base"} id="img19" />*/}
                  {size(19)}
                </div>
              </figure>
              <p className={s.itemName}>{data[14].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(14)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent> {/* Кабель */}
          <div className={`${s.container}`}>
            <div className={s.boxOne} id='pina1'>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/кабель підігрівву подачі хімії-1.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/кабель підігрівву подачі хімії-1.webp")} />
                    <img src={require("../img/Аксесуари/small_jpeg/кабель підігрівву подачі хімії-1.jpg")} className="base"
                         id="img102" alt='Кабель' loading='lazy' />
                  </picture>
                  {/*<LazyLoadImage src={require("../image2/chastPer.jpg")} className={"base"} id="img102" alt='Кабель'/>*/}
                  {/*<img src={(`/static/media/${data[14].src}.${data[14].src2}`)} className={"base"} id="img19" />*/}
                  {size(102)}
                </div>
              </figure>
              <p className={s.itemName}>{data[58].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(58)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/Щітка-1.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/Щітка-1.webp")} />
                    <img src={require("../img/Аксесуари/small_jpeg/Щітка-1.jpg")} className="base"
                         id="img1" alt='Щітка' loading='lazy' />
                  </picture>
                  {/*<LazyLoadImage src={require("../image2/Brush.jpg")} className={"base"} id="img1" alt='Щітка'/>*/}
                  {/*<img src={(`/static/media/${data[8].src}.${data[8].src2}`)} className={"base"} id="img1" />*/}
                  {size(1)}
                </div>
              </figure>
              <p className={s.itemName}>{data[8].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(8)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "5px" }}>
                  {/*<LazyLoadImage src={require("../image/190287494_104260661860718_4702299049689622091_n.jpg")} className={"base"} id="img18" alt='Компресор'/>*/}
                  {/*<img src={(`/static/media/${data[12].src}.${data[12].src2}`)} className={"base"} id="img18" />*/}
                  {/*{size(18)}*/}
                </div>
              </figure>
              <p className={s.itemName} style={{margin: '30px 0 0 10px'}}>{data[12].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              <div className={s.divBut}>
                <div style={{ padding: 10 + "px", margin: "20px 15px" }}>
                  {/*<button className={s.butMin}>*/}
                  {/*  <span onClick={minesCount} title={data[12].nameOfGoods} className={s.spanMin}>-</span>*/}
                  {/*</button>*/}
                  {/*<span className={s.itemTotalSize} id="lightblue">{data[12].size}</span>*/}
                  {/*<button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>*/}
                  {/*  <span onClick={addCount} title={data[12].nameOfGoods} className={s.spanAdd}>+</span>*/}
                  {/*</button>*/}
                </div>
                <span className={s.itemTotal}>{data[12].total} грн</span>
              </div>
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/турбо щітка-1.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/турбо щітка-1.webp")} />
                    <img src={require("../img/Аксесуари/small_jpeg/турбо щітка-1.jpg")} className="base"
                         id="img2" alt='Турбо щітка-піна' loading='lazy' />
                  </picture>
                  {/*<LazyLoadImage src={require("../image2/turboBrush.jpg")} className={"base"} id="img2" alt='Турбо щітка-піна'/>*/}
                  {size(2)}
                </div>
              </figure>
              <p className={s.itemName}>{data[9].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(9)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/панель оператора-1.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/панель оператора-1.webp")} />
                    <img src={require("../img/Аксесуари/small_jpeg/панель оператора-1.jpg")} className="base"
                         id="img20" alt='Панель оператора' loading='lazy' />
                  </picture>
                  {/*<LazyLoadImage src={require("../image2/kasa.jpeg")} className={"base"} id="img20" alt='Панель оператора'/>*/}
                  {/*<img src={(`/static/media/${data[15].src}.${data[15].src2}`)} className={"base"} id="img20" />*/}
                  {size(20)}
                </div>
              </figure>
              <p className={s.itemName}>{data[15].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(15)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container} onClick={popApp3}>
            <div className={s.boxOne} id='card'>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/корпоративні карти-1.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/корпоративні карти-1.webp")} />
                    <img src={require("../img/Аксесуари/small_jpeg/корпоративні карти-1.jpg")} className="base"
                         id="img22" alt='Система корпоративних карт' loading='lazy' />
                  </picture>
                  {/*<LazyLoadImage src={require("../image2/siscorpost.jpg")} className={"base"} id="img22" alt='Система корпоративних карт'/>*/}
                  {size(22)}
                </div>
              </figure>
              <p className={s.itemName}>{data[17].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(17)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/апарат з продажу жетонів-1.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/апарат з продажу жетонів-1.webp")} />
                    <img src={require("../img/Аксесуари/small_jpeg/апарат з продажу жетонів-1.jpg")} className="base"
                         id="img23" alt='Апарат з обміну' loading='lazy' />
                  </picture>
                  {/*<LazyLoadImage src={require("../image2/termainal.jpg")} className={"base"} id="img23" alt='Апарат з обміну'/>*/}
                  {/*<img src={(`/static/media/${data[18].src}.${data[18].src2}`)} className={"base"} id="img23" />*/}
                  {size(23)}
                </div>
              </figure>
              <p className={s.itemName}>{data[18].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              <div className={s.divBut}>
                <div style={{ padding: 10 + "px", margin: "20px 15px" }}>
                  <button className={s.butMin}>
                    <span onClick={minesCount} title={data[18].nameOfGoods} className={s.spanMin}>-</span>
                  </button>
                  <span className={s.itemTotalSize} id="lightblue">{data[18].size}</span>
                  <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
                    <span onClick={addCount2} title={data[18].nameOfGoods} className={s.spanAdd}>+</span>
                  </button>
                </div>
                <span className={s.itemTotal}>{data[18].total} грн</span>
              </div>
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container} onClick={popApp5}>
            <div className={s.boxOne} id='ter1'>
              <figure>
                <div style={{ height: "315px" }}>
                  {/*<picture>*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_jpeg/апарат з продажу жетонів-1.jpg")} type="image/jpeg" />*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_WebP/апарат з продажу жетонів-1.webp")} />*/}
                  {/*  <img src={require("../img/Аксесуари/small_jpeg/апарат з продажу жетонів-1.jpg")} className="base"*/}
                  {/*       id="img24" alt='Платіжний термінал' loading='lazy' />*/}
                  {/*</picture>*/}
                  {/*<LazyLoadImage src={require("../image2/termainal.jpg")} className={"base"} id="img24" alt='Платіжний термінал'/>*/}
                  {/*<img src={(`/static/media/${data[19].src}.${data[19].src2}`)} className={"base"} id="img24" />*/}
                  {/*{size(24)}*/}
                </div>
              </figure>
              <p className={s.itemName}>{data[19].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              <div className={s.divBut}>
                <div style={{ padding: 10 + "px", margin: "20px 15px" }}>
                  <button className={s.butMin}>
                    <span onClick={minesCount} title={data[19].nameOfGoods} className={s.spanMin}>-</span>
                  </button>
                  <span className={s.itemTotalSize} id="lightblue">{data[19].size}</span>
                  <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
                    <span onClick={addCount2} title={data[19].nameOfGoods} className={s.spanAdd}>+</span>
                  </button>
                </div>
                <span className={s.itemTotal}>{data[19].total} грн</span>
              </div>
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container} onClick={popApp5}>
            <div className={s.boxOne} id='ter2'>
              <figure>
                <div style={{ height: "315px" }}>
                  {/*<picture>*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_jpeg/апарат з продажу жетонів-1.jpg")} type="image/jpeg" />*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_WebP/апарат з продажу жетонів-1.webp")} />*/}
                  {/*  <img src={require("../img/Аксесуари/small_jpeg/апарат з продажу жетонів-1.jpg")} className="base"*/}
                  {/*       id="img25" alt='Платіжний термінал' loading='lazy' />*/}
                  {/*</picture>*/}
                  {/*<LazyLoadImage src={require("../image2/termainal.jpg")} className={"base"} id="img25" alt='Платіжний термінал'/>*/}
                  {/*<img src={(`/static/media/${data[20].src}.${data[20].src2}`)} className={"base"} id="img25" />*/}
                  {/*{size(25)}*/}
                </div>
              </figure>
              <p className={s.itemName}>{data[20].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              <div className={s.divBut}>
                <div style={{ padding: 10 + "px", margin: "20px 15px" }}>
                  <button className={s.butMin}>
                    <span onClick={minesCount} title={data[20].nameOfGoods} className={s.spanMin}>-</span>
                  </button>
                  <span className={s.itemTotalSize} id="lightblue">{data[20].size}</span>
                  <button className={s.butPlas} style={{ backgroundColor: "#DF4242", border: "none" }}>
                    <span onClick={addCount2} title={data[20].nameOfGoods} className={s.spanAdd}>+</span>
                  </button>
                </div>
                <span className={s.itemTotal}>{data[20].total} грн</span>
              </div>
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne} onClick={theeFriends}>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/asset-3.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/asset-3.webp")} />
                    <img src={require("../img/Аксесуари/small_jpeg/asset-3.jpg")} className="base"
                         id="img36" alt='Пилосос' loading='lazy' />
                  </picture>
                  {/*<LazyLoadImage src={require("../image2/Two-stationVthree-phaseVacuumcleaner.jpg")}*/}
                  {/*               className={"base"} id="img36" alt='Пилосос' loading='lazy'/>*/}
                  {/*<img src={(`/static/media/${data[41].src}.${data[41].src2}`)} className={"base"} id="img36" />*/}
                  {size(36)}
                </div>
              </figure>
              <p className={s.itemName}>{data[41].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(41)}
            </div>
          </div>
        </LazyLoadComponent>

        <h2 className={s.docH2}>
          Технологічне обладнання зібрано на оцинкованій рамі і займає площу 2 м. кв. Розміри: ширина 0.8, довжина 2,5 м,
          висота 2 м. На рамі кріпиться двох колонна система пом'якшення води з клапаном керування Clack, система виготовлення
          осмосу 700 л/год з повторним використанням води (економить 10% води). Насоси високого тиску Interpump з регульованим тиском до 250 бар.
          Електродвигуни 2.2, 3.0, 4.0, 5.5, 7.5 кВт, які забезпечують тиск від 120 до 250 бар. Частотні перетворювачі
          Schneider, які забезпечують плавний пуск і економлять до 15% електроенергії. Дозуючу насоси фірми Seco, які
          дозволяють електронно дозувати та економити розхід хімічних засобів (5% хімічних засобів).
          Електро та пневмо клапани Італійської фірми Aigner дозволяють переключати високий тиск до 250 бар (дозволяє
          уникнути монтажу додаткового насосу та електродвигуна). З'єднані елементи мийки виконані з поліпропіленових та
          поліамідних труб та фітингів фірми Aquatherm (гарантійний термін 50 років). Зворотні клапани та клапани високого
          тиску виготовлені з нержавіючої сталі.
          Електрична шафа автомийки  самообслуговування SamWash
          Управління мийки здійснюється за допомогою промислового контроллера Schneider 241 серії, який розміщений в
          електричній шафі з кулером. Контроллер дозволяє економити до 20% води, електроенергії та хімічних засобів для
          миття автомобіля. Всі елементи електронного управління виключно фірми Schneider.
        </h2>

      </div>
    </main>
  </>;
};

export default Obl;


{/*<LazyLoadComponent> */}
{/*  <div className={s.container}>*/}
{/*    <div className={s.boxOne}>*/}
{/*      <figure>*/}
{/*        <div style={{ height: "315px" }}>*/}
{/*          <LazyLoadImage src={require("../image2/aprrevcoin.jpeg")} className={"base"} id="img21" alt='Панель оператора'/>*/}
{/*          /!*<img src={(`/static/media/${data[16].src}.${data[16].src2}`)} className={"base"} id="img21" />*!/*/}
{/*          {size(21)}*/}
{/*        </div>*/}
{/*      </figure>*/}
{/*      <p className={s.itemName}>{data[16].nameOfGoods}</p>*/}
{/*      <p className={s.itemDesc}></p>*/}
{/*      {boxBut(16)}*/}
{/*    </div>*/}
{/*  </div>*/}
{/*</LazyLoadComponent>*/}