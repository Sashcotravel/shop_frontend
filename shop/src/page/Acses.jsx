import React, { useEffect, useState } from "react";
import s from "../component/Home.module.css";
import "./Obl.css";
import image1 from "../image/svg/Fullscreenicon.svg";
import image2 from "../image/svg/Group31.svg";
import { LazyLoadImage, LazyLoadComponent } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";


const Acses = ({ t, data, userOrder, setTotal, total, setUrl }) => {

  const [color, setColor] = useState(false)
  const screen = window.screen.availWidth > 900

  useEffect(() => {
    window.scrollTo(0, 0);
    setUrl("accessories")
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
  const imgSize = (e) => {
    if (window.screen.availWidth > 900) {
      let twoImg = document.getElementById("lightCol");
      twoImg.src = ''
      data.map(item => {
        if('img' + item.nameImg === e.target.id){
          let con = document.getElementById("light");
          con.style.visibility = "visible";
          twoImg.src = require(`../img/Аксесуари/big_jpeg/${item.nameWebp}`)
        }
      })
    }
  };
  const hidden = (e) => {
    if (e.target.id === "light") {
      let con = document.getElementById("light");
      con.style.visibility = "hidden";
    }
  };
  const size = (num) => {
    return (
      window.screen.width > 900 ? <span className="block">
        <img style={{ width: "35px", height: '35px' }} src={image1} onClick={imgSize} id={`img${num}`} loading='lazy' alt='close'/>
      </span> : ""
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

  let activeStyle = {
    backgroundColor: "#DF4242",
    color: "#FFFFFF",
    border: "none"
  };

  const changeColor = () => {
    if(screen){
      if(window.scrollY >= 500) {setColor('comp')}
      else {setColor(false)}
    }

    if(!screen){
      if(window.scrollY >= 260) {setColor('mob')}
      else {setColor(false)}
    }
  }

  window.addEventListener('scroll', changeColor)


  return <>
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

    <main>

      <div className={`${s.divTitle} ${color === 'mob' ? s.styleUpManu : color === 'comp' ? s.styleUpManu2 : s.startPosition}`} >
        <div><NavLink style={({ isActive }) => isActive ? activeStyle : undefined}
                      className={s.spanTitle} to="/obladnannya">{t("equipment")}</NavLink></div>
        <div> <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                       to="/nakritya">{t("cover")}</NavLink></div>
        <div><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle+' '+s.spanTit2}
                      to="/vidkriti-box">{t("openBox")}</NavLink></div>
        <div><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                      to="/aksesyari">{t("accessories")}</NavLink></div>
        <div><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                      to="/budivnitstvo">{t("construction")}</NavLink></div>
        <div><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className={s.spanTitle}
                      to="/documentacia">{t("documentation")}</NavLink></div>
      </div>

      <div className={s.divBox}>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "315px" }}>
                  {/*<picture>*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_jpeg/asset-2.jpg")} type="image/jpeg" />*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_WebP/asset-2.webp")} />*/}
                  {/*  <img src={require("../img/Аксесуари/small_WebP/asset-2.webp")} className="base" id="img12" alt="Когутик" />*/}
                  {/*</picture>*/}
                  {/*<LazyLoadImage src={require("../image2/cohpros.jpg")} className="base" id="img12" alt="Когутик"/>*/}
                  {/*<img src={require("../image2/cohpros.jpg")} className={"base"} id="img12" alt='Когутик' loading='lazy'/>*/}
                  {/*{size(12)}*/}
                </div>
              </figure>
              <p className={s.itemName}>{data[30].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(30)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/Тримачі для -1.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/Тримачі для -1.webp")} />
                    <img src={require("../img/Аксесуари/small_jpeg/Тримачі для -1.jpg")} className="base"
                         id="img30" alt='Тримачі для 4 ковриків' loading='lazy' />
                  </picture>
                  {size(30)}
                </div>
              </figure>
              <p className={s.itemName}>{data[36].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(36)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <picture>
                  <source srcSet={require("../img/Аксесуари/small_jpeg/1000zhet.jpg")} type="image/jpeg" />
                  <source srcSet={require("../img/Аксесуари/small_WebP/1000zhet.webp")} />
                  <img src={require("../img/Аксесуари/small_WebP/1000zhet.webp")} className="base"
                       id="img27" alt='Жетони' loading='lazy' />
                </picture>
                  {size(27)}
                </div>
              </figure>
              <p className={s.itemName}>{data[22].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(22)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/тримач на -1.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/тримач на -1.webp")} />
                    <img src={require("../img/Аксесуари/small_WebP/тримач на -1.webp")} className="base"
                         id="img31" alt='Тримачі для 4 ковриків' loading='lazy' />
                  </picture>
                  {size(31)}
                </div>
              </figure>
              <p className={s.itemName}>{data[37].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(37)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "315px" }}>
                  {/*<picture>*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_jpeg/тримач на -1.jpg")} type="image/jpeg" />*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_WebP/тримач на -1.webp")} />*/}
                  {/*  <img src={require("../img/Аксесуари/small_WebP/тримач на -1.webp")} className="base"*/}
                  {/*       id="img32" alt='Тримачі для 4 ковриків' loading='lazy' />*/}
                  {/*</picture>*/}
                  {/*<LazyLoadImage src={require("../image2/tr4cowcunk2.jpg")} className={"base"}*/}
                  {/*               id="img32" alt='Тримачі для 4 ковриків' loading='lazy' />*/}
                  {/*<img src={(`/static/media/${data[38].src}.${data[38].src2}`)} className={"base"} id="img32" />*/}
                  {/*{size(32)}*/}
                </div>
              </figure>
              <p className={s.itemName}>{data[38].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(38)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/на один пост.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/на один пост.webp")} />
                    <img src={require("../img/Аксесуари/small_WebP/на один пост.webp")} className="base"
                         id="img33" alt='Тримачі для 4 ковриків' loading='lazy' />
                  </picture>
                  {size(33)}
                </div>
              </figure>
              <p className={s.itemName}>{data[39].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(39)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "315px" }}>
                  {/*<picture>*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_jpeg/на один пост.jpg")} type="image/jpeg" />*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_WebP/на один пост.webp")} />*/}
                  {/*  <img src={require("../img/Аксесуари/small_WebP/на один пост.webp")} className="base"*/}
                  {/*       id="img35" alt='Прищепки' loading='lazy' />*/}
                  {/*</picture>*/}
                  {/*<LazyLoadImage src={require("../image2/sa.jpg")} className={"base"} id="img35" alt='Прищепки' />*/}
                  {/*{size(35)}*/}
                </div>
              </figure>
              <p className={s.itemName}>{data[40].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(40)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/asset-2.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/asset-2.webp")} />
                    <img src={require("../img/Аксесуари/small_WebP/asset-2.webp")} className="base" id="img12" alt="Когутик" />
                  </picture>
                  {size(12)}
                </div>
              </figure>
              <p className={s.itemName}>{data[57].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(57)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/IMG_-2.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/IMG_-2.webp")} />
                    <img src={require("../img/Аксесуари/small_jpeg/IMG_-2.jpg")} className="base"
                         id="img37" alt='Рукомийник' loading='lazy' />
                  </picture>
                  {size(37)}
                </div>
              </figure>
              <p className={s.itemName}>{data[42].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(42)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "315px" }}>
                  {/*<picture>*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_jpeg/IMG_-2.jpg")} type="image/jpeg" />*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_WebP/IMG_-2.webp")} />*/}
                  {/*  <img src={require("../img/Аксесуари/small_jpeg/IMG_-2.jpg")} className="base"*/}
                  {/*       id="img38" alt='Рукомийник' loading='lazy' />*/}
                  {/*</picture>*/}
                  {/*<LazyLoadImage src={require("../image2/rukpram.jpg")} className={"base"} id="img38" alt='Рукомийник'/>*/}
                  {/*<img src={(`/static/media/${data[43].src}.${data[43].src2}`)} className={"base"} id="img38" />*/}
                  {/*{size(38)}*/}
                </div>
              </figure>
              <p className={s.itemName}>{data[43].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(43)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/stolik.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/stolik.webp")} />
                    <img src={require("../img/Аксесуари/small_jpeg/stolik.jpg")} className="base"
                         id="img39" alt='Столик' loading='lazy' />
                  </picture>
                  {size(39)}
                </div>
              </figure>
              <p className={s.itemName}>{data[44].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(44)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "315px" }}>
                  {/*<picture>*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_jpeg/stolik.jpg")} type="image/jpeg" />*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_WebP/stolik.webp")} />*/}
                  {/*  <img src={require("../img/Аксесуари/small_jpeg/stolik.jpg")} className="base"*/}
                  {/*       id="img100" alt='Індикатор' loading='lazy' />*/}
                  {/*</picture>*/}
                  {/*<LazyLoadImage src={require("../image2/lighteningpanel.jpg")} className={"base"} id="img100" alt='Індикатор' />*/}
                  {/*<img src={(`/static/media/${data[45].src}.${data[45].src2}`)} className={"base"} id="img40" />*/}
                  {/*{size(100)}*/}
                </div>
              </figure>
              <p className={s.itemName}>{data[56].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(56)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "315px" }}>
                  {/*<picture>*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_jpeg/stolik.jpg")} type="image/jpeg" />*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_WebP/stolik.webp")} />*/}
                  {/*  <img src={require("../img/Аксесуари/small_jpeg/stolik.jpg")} className="base"*/}
                  {/*       id="img40" alt='Індикатор' loading='lazy' />*/}
                  {/*</picture>*/}
                  {/*<LazyLoadImage src={require("../image2/lighteningpanel.jpg")} className={"base"} id="img40" alt='Індикатор' />*/}
                  {/*<img src={(`/static/media/${data[45].src}.${data[45].src2}`)} className={"base"} id="img40" />*/}
                  {/*{size(40)}*/}
                </div>
              </figure>
              <p className={s.itemName}>{data[45].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(45)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/Layer -1.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/Layer -1.webp")} />
                    <img src={require("../img/Аксесуари/small_jpeg/Layer -1.jpg")} className="base"
                         id="img41" alt='Індикатор' loading='lazy' />
                  </picture>
                  {size(41)}
                </div>
              </figure>
              <p className={s.itemName}>{data[46].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(46)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "315px" }}>
                  {/*<picture>*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_jpeg/Layer -1.jpg")} type="image/jpeg" />*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_WebP/Layer -1.webp")} />*/}
                  {/*  <img src={require("../img/Аксесуари/small_jpeg/Layer -1.jpg")} className="base"*/}
                  {/*       id="img42" alt='Індикатор' loading='lazy' />*/}
                  {/*</picture>*/}
                  {/*<LazyLoadImage src={require("../image2/inpan1.jpg")} className={"base"} id="img42" alt='Індикатор' />*/}
                  {/*<img src={(`/static/media/${data[47].src}.${data[47].src2}`)} className={"base"} id="img42" />*/}
                  {/*{size(42)}*/}
                </div>
              </figure>
              <p className={s.itemName}>{data[47].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(47)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div>
                  <picture>
                    <source srcSet={require("../img/Аксесуари/small_jpeg/для килимків -1.jpg")} type="image/jpeg" />
                    <source srcSet={require("../img/Аксесуари/small_WebP/для килимків -1.webp")} />
                    <img src={require("../img/Аксесуари/small_jpeg/для килимків -1.jpg")} className="base"
                         id="img43" alt='Вибивачка ковриків' loading='lazy' />
                  </picture>
                  {size(43)}
                </div>
              </figure>
              <p className={s.itemName}>{data[48].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(48)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "315px" }}>
                  {/*<picture>*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_jpeg/для килимків -1.jpg")} type="image/jpeg" />*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_WebP/для килимків -1.webp")} />*/}
                  {/*  <img src={require("../img/Аксесуари/small_jpeg/для килимків -1.jpg")} className="base"*/}
                  {/*       id="img44" alt='Урна для сміття' loading='lazy' />*/}
                  {/*</picture>*/}
                  {/*<LazyLoadImage src={require("../image2/trash.jpg")} className={"base"} id="img44" alt='Урна для сміття'/>*/}
                  {/*<img src={(`/static/media/${data[49].src}.${data[49].src2}`)} className={"base"} id="img44" />*/}
                  {/*{size(44)}*/}
                </div>
              </figure>
              <p className={s.itemName}>{data[49].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(49)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "315px" }}>
                  {/*<picture>*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_jpeg/для килимків -1.jpg")} type="image/jpeg" />*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_WebP/для килимків -1.webp")} />*/}
                  {/*  <img src={require("../img/Аксесуари/small_jpeg/для килимків -1.jpg")} className="base"*/}
                  {/*       id="img109" alt='Технічне приміщення' loading='lazy' />*/}
                  {/*</picture>*/}
                  {/*<LazyLoadImage src={require("../image2/sendvish.jpg")} className={"base"} id="img109" alt='Технічне приміщення' />*/}
                  {/*{size(109)}*/}
                </div>
              </figure>
              <p className={s.itemName}>{data[65].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(65)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "315px" }}>
                  {/*<picture>*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_jpeg/для килимків -1.jpg")} type="image/jpeg" />*/}
                  {/*  <source srcSet={require("../img/Аксесуари/small_WebP/для килимків -1.webp")} />*/}
                  {/*  <img src={require("../img/Аксесуари/small_jpeg/для килимків -1.jpg")} className="base"*/}
                  {/*       id="img49" alt='Технічне приміщення' loading='lazy' />*/}
                  {/*</picture>*/}
                  {/*<LazyLoadImage src={require("../image2/sendvish.jpg")} className={"base"} id="img49" alt='Технічне приміщення' />*/}
                  {/*<img src={(`/static/media/${data[55].src}.${data[55].src2}`)} className={"base"} id="img49" />*/}
                  {/*{size(49)}*/}
                </div>
              </figure>
              <p className={s.itemName}>{data[55].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(55)}
            </div>
          </div>
        </LazyLoadComponent>

      </div>
    </main>
  </>;
};

export default Acses;