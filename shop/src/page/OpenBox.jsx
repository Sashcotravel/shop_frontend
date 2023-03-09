import React, { useEffect } from "react";
import s from "../component/Home.module.css";
import "./Obl.css";
import image1 from '../image/svg/Fullscreenicon.svg'
import image2 from '../image/svg/Group31.svg'
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";


const OpenBox = ({ t, data, userOrder, setTotal, total, setUrl }) => {

  useEffect(() => {
    setUrl("openBox")
  }, [])

  const addCount = (e) => {
    data.forEach(item => {
      if (item.nameOfGoods === e.target.title) {
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

  const size = (num) => {
    return (
      window.screen.width > 900 ? <span className="block">
        <img style={{width: '35px', height: '35px'}} src={image1} onClick={imgSize} id={`img${num}`} alt='size'/>
      </span> : ""
    );
  };

  const size2 = (num) => {
    return (
      window.screen.width > 900 ? <span className="block">
        <img style={{width: '35px', height: '35px'}} src={image1} onClick={imgSize2} id={`img${num}`} alt='size'/>
      </span> : ""
    );
  };

  const imgSize = (e) => {
    if (window.screen.availWidth > 900) {
      let twoImg = document.getElementById("lightCol");
      twoImg.src = ''
      let g = document.getElementById(e.target.id);
      data.map(item => {
        if('img' + item.nameImg === e.target.id){
          let con = document.getElementById("light");
          con.style.visibility = "visible";
          twoImg.src = require(`../img/Аксесуари/big_jpeg/${item.nameWebp}`)
        }
      })
    }
  };

  const imgSize2 = (e) => {
    if (window.screen.availWidth > 900) {
      let g = document.getElementById(e.target.id);
      twoImg.src = ''
      let con = document.getElementById("light2");
      con.style.visibility = "visible";
      let twoImg = document.getElementById("lightCol2");
      twoImg.src = g.src;
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

  return (
    <>
      <div id="light" className={s.boxHideImage} onClick={hidden}>
        <figure className='figure' id="light">
          <div className='divImg' id="light">
            <span className='blockLarge' id="light">
              <img style={{width: '35px', height: '35px'}} src={image2} onClick={hidden} id="light" alt='size'/>
            </span>
            <img src='' className="imageLarge" id="lightCol" />
          </div>
        </figure>
      </div>
      <div id="light2" className={s.boxHideImage} onClick={hidden}>
        <figure className="figure">
          <div className="divImg" id="light2">
            <span className="blockLarge" id="light2">
              <LazyLoadImage style={{ width: "35px", height: '35px' }} src={image2}
                             onClick={hidden} id="light2" alt="закрити" loading='lazy' />
            </span>
            <iframe className="imageLarge2" id="lightCol2" width="100%" height="100%"
                    src='' title='video' />
          </div>
        </figure>
      </div>

      <div className={s.divBox}>


        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <iframe id="img16" width="100%" height="100%" src="https://www.youtube.com/embed/5vCS5brR5ic"
                          title="ТКомплект" style={{border: 'none'}} />
                  {size2(16)}
                </div>
              </figure>
              <p className={s.itemName}>{data[10].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(10)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <iframe id="img17" width="100%" height="100%" src="https://www.youtube.com/embed/5vCS5brR5ic"
                          title="ТКомплект" style={{border: 'none'}} />
                  {size2(17)}
                </div>
              </figure>
              <p className={s.itemName}>{data[11].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(11)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/для фури Пантограф-1.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/для фури Пантограф-1.webp")} />
                    <img src={require("../img/Аксесуари/small_jpeg/для фури Пантограф-1.jpg")} className="base"
                         id="img29" alt='Відкритий пост для фури' loading='lazy' />
                  </picture>
                  {/*<LazyLoadImage src={require("../image2/vidpostfur.jpg")} className={"base"}*/}
                  {/*               id="img29" alt='Відкритий пост для фури' loading='lazy'/>*/}
                  {size(29)}
                </div>
              </figure>
              <p className={s.itemName}>{data[35].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(35)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/Т-подібний для бусів-1.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/Т-подібний для бусів-1.webp")} />
                    <img src={require("../img/Аксесуари/small_jpeg/Т-подібний для бусів-1.jpg")} className="base"
                         id="img13" alt='Т-подібний відкритий пост' loading='lazy' />
                  </picture>
                  {/*<LazyLoadImage src={require("../image2/tpod.jpg")} className={"base"} id="img13" alt='Т-подібний відкритий пост' loading='lazy'/>*/}
                  {/*<img src={require("../image/IMG_0065(2).jpg")} className={"base"} id="img13" alt='Т-подібний відкритий пост' loading='lazy'/>*/}
                  {size(13)}
                </div>
              </figure>
              <p className={s.itemName}>{data[31].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(31)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/П-подібний-1.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/П-подібний-1.webp")} />
                    <img src={require("../img/Аксесуари/small_jpeg/П-подібний-1.jpg")} className="base"
                         id="img14" alt='П-подібний відкритий пост' loading='lazy' />
                  </picture>
                  {/*<LazyLoadImage src={require("../image2/tpod.jpg")} className={"base"} id="img14" alt='П-подібний відкритий пост' loading='lazy'/>*/}
                  {size(14)}
                </div>
              </figure>
              <p className={s.itemName}>{data[32].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(32)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/Т-подіний з захистом-1.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/Т-подіний з захистом-1.webp")} />
                    <img src={require("../img/Аксесуари/small_jpeg/Т-подіний з захистом-1.jpg")} className="base"
                         id="img15" alt='Т-подібний із захистом відкритий пост' loading='lazy' />
                  </picture>
                  {/*<LazyLoadImage src={require("../image2/ppodvidpostbut.jpg")} className={"base"}*/}
                  {/*               id="img15" alt='Т-подібний із захистом відкритий пост' loading='lazy'/>*/}
                  {/*<img src={(`/static/media/${data[33].src}.${data[33].src2}`)} className={"base"} id="img15" />*/}
                  {size(15)}
                </div>
              </figure>
              <p className={s.itemName}>{data[33].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(33)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/П-з захистом-1.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/П-з захистом-1.webp")} />
                    <img src={require("../img/Аксесуари/small_jpeg/П-з захистом-1.jpg")} className="base"
                         id="img28" alt='П-подібний із захистом відкритий пост' loading='lazy' />
                  </picture>
                  {/*<LazyLoadImage src={require("../image2/ppodvidpostbut.jpg")} className={"base"}*/}
                  {/*               id="img28" alt='П-подібний із захистом відкритий пост' loading='lazy'/>*/}
                  {/*<img src={(`/static/media/${data[34].src}.${data[34].src2}`)} className={"base"} id="img28" />*/}
                  {size(28)}
                </div>
              </figure>
              <p className={s.itemName}>{data[34].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(34)}
            </div>
          </div>
        </LazyLoadComponent>
      </div>

    </>
  );
};

export default OpenBox;