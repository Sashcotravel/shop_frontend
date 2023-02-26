import React from "react";
import s from "../component/Home.module.css";
import "./Obl.css";
import image1 from "../image/svg/Fullscreenicon.svg";
import image2 from "../image/svg/Group31.svg";
import { LazyLoadImage, LazyLoadComponent } from "react-lazy-load-image-component";


const Acses = ({ t, data, userOrder, setTotal, total }) => {

  const screen = window.screen.availWidth > 900

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
    let twoImg = document.getElementById("lightCol");
    twoImg.src = "";
    if (window.screen.availWidth > 900) {
      let g = document.getElementById(e.target.id);
      if (g.src.slice(-3) === "jpg") {
        let con = document.getElementById("light");
        con.style.visibility = "visible";
        let twoImg = document.getElementById("lightCol");
        twoImg.src = g.src;
      } else if (g.src.slice(-4) === "jpeg") {
        let con = document.getElementById("light");
        con.style.visibility = "visible";
        let twoImg = document.getElementById("lightCol");
        twoImg.src = g.src;
      }else if (g.src.slice(-3) === "png") {
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

  return <>
    {screen && <div id="light" className={s.boxHideImage} onClick={hidden}>
      <figure className="figure">
        <div className="divImg">
            <span className="blockLarge" id="light">
              <img style={{ width: "35px", height: '35px' }} src={image2} onClick={hidden} id="light" alt='open'/>
            </span>
          <img src={(`../image2/tpod.jpg`)} className="imageLarge" id="lightCol" />
        </div>
      </figure>
    </div> }

    <main>
      <div className={s.divBox}>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              {/*<div className={"img29 base"} id="img29">*/}
              {/*  {size(29)}*/}
              {/*</div>*/}
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/vidpostfur.jpg")} className={"base"}
                                 id="img29" alt='Відкритий пост для фури' loading='lazy'/>
                  {/*<img src={require("../image2/vidpostfur.jpg")} className={"base"}*/}
                  {/*     id="img29" alt='Відкритий пост для фури' loading='lazy'/>*/}
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
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/cohpros.jpg")} className="base" id="img12" alt="Когутик"/>
                  {/*<img src={require("../image2/cohpros.jpg")} className={"base"} id="img12" alt='Когутик' loading='lazy'/>*/}
                  {size(12)}
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
              {/*<div className={"img13 base"} id="img13">*/}
              {/*  {size(13)}*/}
              {/*</div>*/}
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image/IMG_0065(2).jpg")} className={"base"} id="img13" alt='Т-подібний відкритий пост' loading='lazy'/>
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
              {/*<div className={"img14 base"} id="img14">*/}
              {/*  {size(14)}*/}
              {/*</div>*/}
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/ppodvidpostbut.jpg")} className={"base"} id="img14" alt='П-подібний відкритий пост' loading='lazy'/>
                  {/*<img src={(`/static/media/${data[32].src}.${data[32].src2}`)} className={"base"} id="img14" />*/}
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
              {/*<div className={"img15 base"} id="img15">*/}
              {/*  {size(15)}*/}
              {/*</div>*/}
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/tpod.jpg")} className={"base"}
                                 id="img15" alt='Т-подібний із захистом відкритий пост' loading='lazy'/>
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
              {/*<div className={"img28 base"} id="img28">*/}
              {/*  {size(28)}*/}
              {/*</div>*/}
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/ppodvidpost.jpg")} className={"base"}
                                 id="img28" alt='П-подібний із захистом відкритий пост' loading='lazy'/>
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

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              {/*<div className={"img30 base"} id="img30">*/}
              {/*  {size(30)}*/}
              {/*</div>*/}
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/tr4cowcunk.jpg")} className={"base"}
                                 id="img30" alt='Тримачі для 4 ковриків' loading='lazy'/>
                  {/*<img src={(`/static/media/${data[36].src}.${data[36].src2}`)} className={"base"} id="img30" />*/}
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
              {/*<div className={"img31 base"} id="img31">*/}
              {/*  {size(31)}*/}
              {/*</div>*/}
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image/wisk.jpg")} className={"base"}
                                 id="img31" alt='Тримачі для 4 ковриків' loading='lazy'/>
                  {/*<img src={(`/static/media/${data[37].src}.${data[37].src2}`)} className={"base"} id="img31" />*/}
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
              {/*<div className={"img32 base"} id="img32">*/}
              {/*  {size(32)}*/}
              {/*</div>*/}
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/tr4cowcunk2.jpg")} className={"base"}
                                 id="img32" alt='Тримачі для 4 ковриків' loading='lazy' />
                  {/*<img src={(`/static/media/${data[38].src}.${data[38].src2}`)} className={"base"} id="img32" />*/}
                  {size(32)}
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
              {/*<div className={"img33 base"} id="img33">*/}
              {/*  {size(33)}*/}
              {/*</div>*/}
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/tr4cow1.jpg")} className={"base"}
                                 id="img33" alt='Тримачі для 4 ковриків' loading='lazy'/>
                  {/*<img src={(`/static/media/${data[39].src}.${data[39].src2}`)} className={"base"} id="img33" />*/}
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
              {/*<div className={"img35 base"} id="img35">*/}
              {/*  {size(35)}*/}
              {/*</div>*/}
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/sa.jpg")} className={"base"} id="img35" alt='Прищепки' />
                  {/*<img src={(`/static/media/${data[40].src}.${data[40].src2}`)} className={"base"} id="img35" />*/}
                  {size(35)}
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
              {/*<div className={"img37 base"} id="img37">*/}
              {/*  {size(37)}*/}
              {/*</div>*/}
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/rukcir.jpg")} className={"base"} id="img37" alt='Рукомийник' />
                  {/*<img src={(`/static/media/${data[42].src}.${data[42].src2}`)} className={"base"} id="img37" />*/}
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
              {/*<div className={"img38 base"} id="img38">*/}
              {/*  {size(38)}*/}
              {/*</div>*/}
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/rukpram.jpg")} className={"base"} id="img38" alt='Рукомийник'/>
                  {/*<img src={(`/static/media/${data[43].src}.${data[43].src2}`)} className={"base"} id="img38" />*/}
                  {size(38)}
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
              {/*<div className={"img39 base"} id="img39">*/}
              {/*  {size(39)}*/}
              {/*</div>*/}
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/tablener2.jpg")} className={"base"} id="img39" alt='Індикатор' />
                  {/*<img src={(`/static/media/${data[44].src}.${data[44].src2}`)} className={"base"} id="img39" />*/}
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
                  <LazyLoadImage src={require("../image2/lighteningpanel.jpg")} className={"base"} id="img40" alt='Індикатор' />
                  {/*<img src={(`/static/media/${data[45].src}.${data[45].src2}`)} className={"base"} id="img40" />*/}
                  {size(40)}
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
              {/*<div className={"img41 base"} id="img41">*/}
              {/*  {size(41)}*/}
              {/*</div>*/}
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/lighteningpanel2.png")} className={"base"} id="img41" alt='Індикатор' />
                  {/*<img src={(`/static/media/${data[46].src}.${data[46].src2}`)} className={"base"} id="img41" />*/}
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
                  <LazyLoadImage src={require("../image2/inpan1.jpg")} className={"base"} id="img42" alt='Індикатор' />
                  {/*<img src={(`/static/media/${data[47].src}.${data[47].src2}`)} className={"base"} id="img42" />*/}
                  {size(42)}
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
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/wubcow.jpg")} className={"base"} id="img43" alt='Вибивачка ковриків' />
                  {/*<img src={(`/static/media/${data[48].src}.${data[48].src2}`)} className={"base"} id="img43" />*/}
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
                  <LazyLoadImage src={require("../image2/trash.jpg")} className={"base"} id="img44" alt='Урна для сміття'/>
                  {/*<img src={(`/static/media/${data[49].src}.${data[49].src2}`)} className={"base"} id="img44" />*/}
                  {size(44)}
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
                  <LazyLoadImage src={require("../image2/reshnas.jpg")} className={"base"} id="img45" alt='Решітковий настил' />
                  {/*<img src={(`/static/media/${data[50].src}.${data[50].src2}`)} className={"base"} id="img45" />*/}
                  {size(45)}
                </div>
              </figure>
              <p className={s.itemName}>{data[50].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(50)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/reshnas2.jpg")} className={"base"} id="img46" alt='Решітковий настил' />
                  {/*<img src={(`/static/media/${data[51].src}.${data[51].src2}`)} className={"base"} id="img46" />*/}
                  {size(46)}
                </div>
              </figure>
              <p className={s.itemName}>{data[51].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(51)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/reshnas2.jpg")} className={"base"} id="img47" alt='Решітковий настил' />
                  {/*<img src={(`/static/media/${data[52].src}.${data[52].src2}`)} className={"base"} id="img47" />*/}
                  {size(47)}
                </div>
              </figure>
              <p className={s.itemName}>{data[52].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(52)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/reshnas2.jpg")} className={"base"} id="img48" alt='Решітковий настил' />
                  {/*<img src={(`/static/media/${data[53].src}.${data[53].src2}`)} className={"base"} id="img48" />*/}
                  {size(48)}
                </div>
              </figure>
              <p className={s.itemName}>{data[53].nameOfGoods}</p>
              <p className={s.itemDesc}></p>
              {boxBut(53)}
            </div>
          </div>
        </LazyLoadComponent>

        <LazyLoadComponent>
          <div className={s.container}>
            <div className={s.boxOne}>
              <figure>
                <div style={{ height: "315px" }}>
                  <LazyLoadImage src={require("../image2/sendvish.jpg")} className={"base"} id="img49" alt='Технічне приміщення' />
                  {/*<img src={(`/static/media/${data[55].src}.${data[55].src2}`)} className={"base"} id="img49" />*/}
                  {size(49)}
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