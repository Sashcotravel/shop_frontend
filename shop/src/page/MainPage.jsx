import React, { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import m from './MainPage.module.css'
import s from "../component/Home.module.css";
import { fetchPay } from "../API/post";
import { Users } from "../users";
import { useDispatch } from "react-redux";


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

  return <div className={m.back}>

    <main className={m.container}>

      <div id="lightblue" className={s.orderBlock} style={{left: '0'}}>
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
          <input className={s.inputUser} style={{width: '90%'}} type="text" title="phone"
                 placeholder={`${t("enterYourPhoneNumber")}`} onChange={(e) => {
            setUserData((actual) => {
              return { ...actual, [e.target.title]: e.target.value };
            });
          }} />
          <br />
          <div className={s.footerBut} style={{ width: "50%", margin: '30px auto' }} onClick={useSubmit}>{t("send")}</div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12 my-3 my-md-5">
          <h2>Будівництво автомийки <br/>самообслуговування SamWash</h2>
        </div>
        <div className="col-12 col-md-8 offset-md-4 my-md-5">
          <p>
            Проєкт виконується з усіма нормами ДБН України, що підтверджено Укрдержбудекспертизою по всіх наших
            об'єктах,
            які ми будували (ДБН Б.2.2-12.2018, ДСП-173, ДБН В.2.3-5-2018, ДБН Б.1.1-14:12).
          </p>
        </div>
        <div className="col-12 col-md-4">
          <p>
            При використанні приямків H подібної форми вміст шламу (піску) складає 7 м. куб. і займає площу 4,5 м. кв.
            Це дозволяє зекономити до 20 000 грн в рік. Технологічне приміщення займає площу 14,4 м. кв, що дає
            можливість розмістити ємкості запасу води від 10 до 15 м. куб. Загальна площа технологічного приміщення
            складає 25 м. кв, в інших виробників орієнтовно 50 м. кв, що дозволяє зекономити біля 300 000 грн при
            будівництві.
          </p>
        </div>
        <div className="col-12 col-md-8 mt-3 mt-md-0">
          <picture>
            <img src={require("../image/images/building/buildding.jpg")} className="img-fluid" />
          </picture>
          <div className="row my-5">
            <div className="col-12 col-md-6">
              <picture>
                <img src={require("../image/images/building/5.jpg")} className="img-fluid" />
              </picture>
            </div>
            <div className="col-12 col-md-6 mt-5 mt-md-0">
              <picture>
                <img src={require("../image/images/building/7.jpg")} className="img-fluid" />
              </picture>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <picture>
            <img src={require("../image/images/building/9.jpg")} className="img-fluid" />
          </picture>
        </div>
        <div className="col-12 col-md-8 mt-5 mt-md-0">
          <picture>
            <img src={require("../image/images/building/8.jpg")} className="img-fluid" />
          </picture>
        </div>

      </div>

      <div className="row mt-10">

        <div className="col mt-5 mt-md-0">
          <h2 className="d-block">Навіс / накриття автомийки <br/>самообслуговування SamWash</h2>
        </div>
        <div className="row">
          <div className="col-12 my-3 my-md-5"><hr/></div>

          <div className="col-12 col-md-8 offset-md-4">
            <p>
              Обрамлення мийки / каркасу виготовлене методом вальцювання із композитного матеріалу товщиною 4 мм фірми
              Alubond.
              Перегородки між постами можуть бути виконані із гартованого скла товщиною 10 мм та нанесеним на ньому
              друком, а також з банерами із дизайном замовника
              (з спеціальним кріпленням) або з екранами для динамічної реклами.
            </p>
            <p>
              Обшивка колон виконана із нержавіючої сталі А 304 та неоновою підсвіткою або із композитного матеріалу
              фірми, Alubond, товщиною 4мм.
              Для обрамлення мийки (атіка) використовується елементи виконані методом гарячого вакуумного формування із
              внутрішньою підсвіткою.
              Накриття постів виконано із дахового сендвіча товщиною 100 мм. або із профільованого листа товщиною 0.8 мм
              та захисним покриттям цинку 250 грм. на м. кВ
              фірми ArcelorMittal, а також з стільникового полікарбонату захищеного від ультрафіолету товщиною 10 мм.
              фірми Carboglass.
            </p>
          </div>
        </div>
        <div className="row orderclick">
          <div className="col-12 col-md-4 mt-5">
            <h3>Ufo</h3>
            <h4 className="mb-4">Ціна ~13 500 € за 1 пост</h4>
            <p>Унікальний власний дизайн. Дана конструкція виконана з нержавіючого круглого каркасу,
              на даху литий полікарбонат, оздоблена конструкція композитним матеріалом товщиною 4 мм фірми Alubond
              та підсвіткою. Є можливість встановлення власної реклами на мийних постах.
              В конструкції накриття спроектовано відвід дощових стоків в антивандальному виконанні.
            </p>
          </div>
          <div className="col-12 col-md-8 mt-5">
            <picture>
              <img src={require("../image/images/designs/ufo.jpg")}  className="img-fluid" />
            </picture>
          </div>
          <div className="col-12 my-1 my-md-5"><hr/></div>

          <div className="col-12 col-md-4 mt-3 mt-md-5">
            <h3>Marchello Light </h3>
            <h4 className="mb-4">Ціна ~14 000 € за 1 пост</h4>
            <h3>Marchello </h3>
            <h4 className="mb-4">Ціна ~12 800 € за 1 пост</h4>
            <p>
              Дизайн цієї конструкції повністю обшитий листовою нержавіючою сталлю А - 304, перегородки між мийними
              постами виконані з гартованого 10 мм скла, тому надзвичайно привабливий для клієнта.
              Даний каркас виконаний методом гарячого цинкування, а на даху встановлені сендвіч панелі 100 мм.
              Атіка виконана композитним матеріалом товщиною 4 мм фірми Alubond з підсвіткою.
              У сонячний день та у вечірній час коли ліхтарі вмикаються, нержавіюче оздоблення відсвічує світло а
              перегородки пропускають його, можете бути впевнені ніхто не омине цю красу.
              В конструкції накриття спроектовано відвід дощових стоків в антивандальному виконанні.
            </p>
          </div>
          <div className="col-12 col-md-8 mt-5">
            <picture>
              <img src={require("../image/images/designs/marchello.jpg")} className="img-fluid" />
            </picture>
          </div>
          <div className="col-12 my-1 my-md-5"><hr/></div>

          <div className="col-12 col-md-4 mt-3 mt-md-5">
            <h3>Marko Glass</h3>
            <h4 className="mb-4">Ціна ~8 200 € за 1 пост</h4>
            <p>
              У цій конструкції завдання для наших дизайнерів заключалось в тому щоб вигляд комплексу був строгий та
              лаконічний.
              Тому вони використали для обшивки колон та лінію атіки оздобили композитним матеріалом товщиною 4 мм фірми
              Alubond та підсвіткою.
              Перегородки виконані з гартованого шкла 10 мм фірми Pilkington.
              Каркас виконаний методом гарячого цинкування.
              В конструкції накриття спроектовано відвід дощових стоків в антивандальному виконанні.
            </p>
          </div>
          <div className="col-12 col-md-8 mt-5">
            <picture>
              <img src={require("../image/images/designs/marcoglas.png")} className="img-fluid" />
            </picture>
          </div>
          <div className="col-12 my-1 my-md-5"><hr /></div>

          <div className="col-12 col-md-4 mt-3 mt-md-5">
            <h3>Marco Banner</h3>
            <h4 className="mb-4">Ціна ~7 700 € за 1 пост</h4>
            <p>
              У цій конструкції завдання для наших дизайнерів заключалось в тому щоб вигляд комплексу був строгий та
              лаконічний.
              Тому вони використали для обшивки колон та лінію атіки оздобили композитним матеріалом товщиною 4 мм фірми
              Alubond та
              підсвіткою. Перегородки виконані з банерів високої якості з друком вашої реклами
              та лакований спеціальним захистом від УФ променів і хімічних матеріалів.
              Каркас виконаний методом гарячого цинкування.
              В конструкції накриття спроектовано відвід дощових стоків в антивандальному виконанні.
            </p>
          </div>
          <div className="col-12 col-md-8 mt-5">
            <picture>
              <img src={require("../image/images/designs/marcobaner.jpg")} className="img-fluid" />
            </picture>
          </div>
          <div className="col-12 my-1 my-md-5"><hr/></div>

          <div className="col-12 col-md-4 mt-3 mt-md-5">
            <h3>Pixel</h3>
            <h4 className="mb-4">Ціна ~7 200 € за 1 пост</h4>
            <p>
              Дана конструкція є любима у Європейців.
              І не дарма, адже вона сама легка у експлуатації та догляді за нею.
              Каркас виконаний методом гарячого цинкування тому його не потрібно ні обшивати ні підмальовувати.
              Між постами встановлений банер високої якості з друком вашої реклами та лакований спеціальним захистом
              від УФ променів та хімічних матеріалів. Атіку оздобили композитним матеріалом
              товщиною 4 мм фірми Alubond та підсвіткою а на дах використали стільниковий полікарбонат з УФ захистом.
              В конструкції накриття спроектовано відвід дощових стоків в антивандальному виконанні.
            </p>
          </div>
          <div className="col-12 col-md-8 mt-5">
            <picture>
              <img src={require("../image/images/designs/pixel.jpg")} className="img-fluid" />
            </picture>
          </div>
          <div className="col-12 my-1 my-md-5"><hr/></div>

          <div className="col-12 col-md-4 mt-3 mt-md-5">
            <h3>Smart</h3>
            <h4 className="mb-4">Ціна ~6 200 € за 1 пост</h4>
            <p>
              Даний дизайн конструкції є самим бюджетним з нашої лінійки.
              Не зважаючи на це у ньому збережені всі наші високотехнологічні рішення а саме - каркас виконаний методом
              гарячого
              цинкування, між постами встановлений банер високої якості з друком вашої реклами та лакований спеціальним
              захистом від УФ променів та хімічних матеріалів, атіка виконана композитним матеріалом товщиною 4 мм фірми
              Alubond з підсвіткою, дах виконаний з профільованого оцинкованого листа 250 г на м².
              В конструкції накриття спроектовано відвід дощових стоків в антивандальному виконанні.
            </p>
          </div>
          <div className="col-12 col-md-8 mt-5">
            <picture>
              <img src={require("../image/images/designs/smart.jpg")} className="img-fluid" />
            </picture>
          </div>

          <div className="col-10 col-md-5 mt-5 offset-mb-0">
            <a href="#order" className="d-block center-block text-center">  // sho tyt
              <button className="py-3 h4" onClick={noScroll}>Безкоштовна консультація</button>
            </a>
          </div>

          <div className="col-12 my-5"><hr/></div>

        </div>

        <div className="row">
          <div className="col-12 col-md-8 offset-md-4">
            <b className="d-block mb-5">Освітлення мийки забезпечується лінійними LED світильниками фірми Maxus довжиною
              1200 мм.
              5 штук на пост та ступенем захисту ІР65 включення яких контролюється контролером Schneider.
            </b>
            <picture className="mt-4 d-block">
              <img src={require("../image/images/light/light.jpg")} className="img-fluid" />
            </picture>
          </div>
          <div className="col-12 col-md-8 offset-md-4">
            <div className="row mt-5">
              <div className="col-12 col-md-6">
                <picture>
                  <img src={require("../image/images/light/light1.jpg")} className="img-fluid"/>
                </picture>
              </div>
              <div className="col-12 col-md-6 mt-4 mt-md-0">
                <picture>
                  <img src={require("../image/images/light/light2.jpg")} className="img-fluid"/>
                </picture>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <h2 className="d-block mb-5 mt-5 mt-md-0">Обладнання автомийки <br/>самообслуговування SamWash</h2>
          <hr className="d-block my-3 my-md-5"/>
            <div className="row">
              <div className="col-12 col-md-8 offset-md-4">
                <h3 className="h3">Усереднена ціна обладнання одного поста</h3>
                <b className="display-3 mt-4 mb-4 d-block">9 800€</b>
                <h3 className="h3">Комплектуючі: Італія, Німеччина, Японія, Франція, США.</h3>
              </div>
            </div>
            <hr className="d-block my-3 my-md-5"/>

              <div className="row mt-4 mt-md-5">
                <div className="col-12 col-md-8 offset-md-4 mt-4">
                  <p>
                    Технологічне обладнання зібрано на оцинкованій рамі і займає площу 2 м. кв. Розміри: ширина 0.8,
                    довжина 2,5 м, висота 2 м.
                    На рамі кріпиться двох колонна система пом'якшення води з клапаном керування Clack, система
                    виготовлення осмосу 700 л/год з повторним
                    використанням води (економить 10% води). Насоси високого тиску Interpump з регульованим тиском
                    до 250 бар.
                  </p>
                  <p>
                    Електродвигуни 2.2, 3.0, 4.0, 5.5, 7.5 кВт,
                    які забезпечують тиск від 120 до 250 бар. Частотні перетворювачі Schneider, які забезпечують плавний
                    пуск і економлять до 15% електроенергії.
                    Дозуючу насоси фірми Seco, які дозволяють електронно дозувати та економити розхід хімічних засобів
                    (5% хімічних засобів).
                  </p>
                  <picture className="d-block my-4">
                    <img src={require("../image/images/eqipment/equpment1.jpg")} className="img-fluid"/>
                  </picture>
                </div>
                <div className="row mt-4 mb-5">
                  <div className="col-12 col-md-4">
                    <p>
                      Електро та пневмо клапани Італійської фірми Aigner дозволяють переключати високий тиск до 250 бар
                      (дозволяє уникнути монтажу додаткового насосу та електродвигуна). З'єднані елементи мийки виконані
                      з поліпропіленових та поліамідних труб та фітингів фірми Aquatherm (гарантійний термін 50 років).
                      Зворотні клапани та клапани високого тиску виготовлені з нержавіючої сталі.
                    </p>
                  </div>
                  <div className="col-12 col-md-4">
                    <picture>
                      <img src={require("../image/images/eqipment/seco.jpg")} className="img-fluid"/>
                    </picture>
                  </div>
                  <div className="col-12 col-md-4 mt-4 mt-md-0">
                    <div className="row">
                      <div className="col-12">
                        <picture>
                          <img src={require("../image/images/eqipment/eqipment3.jpg")} className="img-fluid"/>
                        </picture>
                      </div>
                      <div className="col-12 mt-5">
                        <picture>
                          <img src={require("../image/images/eqipment/equipment3.jpg")} className="img-fluid"/>
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          <h3 className="d-block mt-10 mb-7">Електрична шафа автомийки <br/>самообслуговування SamWash</h3>
          <div className="row">
            <div className="col-12 col-md-4">
              <p>
                Управління мийки здійснюється за допомогою промислового контроллера Schneider 241 серії, який розміщений
                в електричній шафі з кулером. Контроллер дозволяє економити до 20% води, електроенергії та хімічних
                засобів для миття автомобіля. Всі елементи електронного управління виключно фірми Schneider.
              </p>
            </div>
            <div className="col-12 col-md-8">
              <picture>
                <img src={require("../image/images/electric/electricbox.jpg")} className="img-fluid" />
              </picture>
            </div>
            <div className="offset-md-4 col-12 col-md-4">
              <picture className="d-block mt-4 mb-5">
                <img src={require("../image/images/electric/electrik3.jpg")} className="img-fluid" />
              </picture>
            </div>
            <div className="col-12 col-md-4">
              <picture className="d-block mt-4 mb-5">
                <img src={require("../image/images/electric/electric.jpg")} className="img-fluid" />
              </picture>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-10 orderclick">
        <div className="col">
          <h2 className="d-block mb-5 mt-5 mt-md-0">Платіжний термінал з сенсором <br/>компанії SamWash</h2>
          <hr className="d-block my-3 my-md-5"/>
            <div className="row">
              <div className="col-12 col-md-8 offset-md-4">
                <h3 className="h3">Ціна терміналу</h3>
                <b className="display-3 mt-4 mb-4 d-block">6 700€</b>
                <h3 className="h3">
                  PayPass, купюри, пРРО, карти лояльності, видача жетонів / монет, оплата роботи поста, додаток на
                  Android та IOS.
                </h3>
              </div>
            </div>
        </div>
        <hr className="d-block my-3 my-md-5"/>
          <div className="row">
            <div className="col-12 col-md-6 mt-4">
              <p>
                На платіжному терміналі розташований великий, зручний та
                багатофункціональний сенсорний дисплей, на якому є такі функції:
              </p>
              <ul>
                <li>
                  Поповнення карти лояльності
                </li>
                <li>
                  Оплата роботи мийного поста
                </li>
                <li>
                  Оплата банківською карткою (PayPass)
                </li>
                <li>
                  Оплата готівкою
                </li>
                <li>
                  Видача жетонів СамВаш або монет номіналом 10 чи 20 грн
                </li>
                <li>
                  Вивід чеку на екран з QR кодом та можливістю відправки на електронну пошту (РРО)
                </li>
              </ul>

              <p>
                Корпус терміналу виконаний з нержавіючої сталі АІ 304.
                Однією з вагомих переваг є промисловий контролер, який працює в парі з мийкою та
                надає детальну інформацію про кількість виданих жетонів чи монет та
                загальну інформацію про кількість транзакцій в режимі реального часу.
              </p>
              <p>
                Всі дані про використання терміналу знаходяться у додатку на телефоні Android, IOS та на сайті, а саме:
              </p>
              <ul>
                <li>
                  Готівкові поповнення
                </li>
                <li>
                  Поповнення банківською карткою (PayPass)
                </li>
                <li>
                  Скільки коштів отримано за добу / місяць / рік
                </li>
                <li>
                  Скільки карт лояльності та скільки бонусів нараховано та інше...
                </li>
              </ul>
              <h3 className="d-block mt-10 mb-7">
                Рекомендації при покупці <br/> платіжного терміналу
              </h3>
              <ul>
                <li>
                  Комплектуючі та програмне забезпечення з якими можуть взаємодіяти банки України
                </li>
                <li>
                  Промисловий комп'ютер, який легко оновити та додати нові функції
                </li>
                <li>
                  Можливість віддаленого доступу та контролю
                </li>
                <li>
                  Система автоматичних податкових звітів (РРО)
                </li>
              </ul>

            </div>
            <div className="col-12 col-md-6">
              <picture className="d-block mt-4 mb-5">
                <img src={require("../image/images/terminal/1.jpg")} className="img-fluid" />
              </picture>
            </div>
          </div>
      </div>

      <div className="col-12">
        <picture className="d-block mt-4 mb-5">
          <img src={require("../image/images/terminal/terminal.jpg")} className="img-fluid" />
        </picture>
      </div>
      <div className="col-10 col-md-6 col-lg-5 my-4">
        <a href="#order"> sho tyt
          <button onClick={noScroll} className="py-3 h4">Безкоштовна консультація</button>
        </a>
      </div>

      <div className="row mt-10"> tyt sho
        <div className="col-12">
          <h2 className="d-block mb-5 mt-5 mt-md-0">Наші автомийки</h2>

           {/*  21:9 aspect ratio */}
          <div className="embed-responsive embed-responsive-21by9">
            <iframe width="100%" height="480px;" allowFullScreen className="embed-responsive-item" src="
                https://www.google.com/maps/d/embed?mid=1jsm87_-WVn3DspwNkz85WWD5dnBCHYU&ehbc=2E312F
                "></iframe>
          </div>
        </div>
      </div>

      <div className="row mt-10">
        <div className="col">
          <h2 className="d-block mb-5 mt-5 mt-md-0">Двохпостовий порохотяг <br/>компанії SamWash</h2>
          <hr className="d-block my-3 my-md-5"/>
            <div className="row">
              <div className="col-12 col-md-8 offset-md-4">
                <h3 className="h3">Ціна двохпостового порохотяга</h3>
                <b className="display-3 mt-4 mb-4 d-block">6 900€</b>
                <h3 className="h3">
                  Потужність - 6 кВт та 3 фази.
                  <br/>
                    Час роботи турбіни - 10 000 год або 10 років.
                    <br/>
                      Загальна вага 385 кг.
                </h3>
              </div>
            </div>
            <hr className="d-block my-3 my-md-5"/>
              <div className="row">
                <div className="col-12 col-md-6 mt-4">
                  <p>
                    На передній панелі двухпостового порохотяга розташований великий зручний та
                    багатофункціональний тачскрін дисплей, на якому є така інформація:
                  </p>
                    <ul>
                      <li>
                        Скільки залишилось часу до закінчення програми
                      </li>
                      <li>
                        Включення порохотяга
                      </li>
                      <li>
                        Продув важкодоступних та вологих місць
                      </li>
                      <li>
                        Чорніння шин для надання витонченості Вашому автомобілю
                      </li>
                      <li>
                        Пауза
                      </li>
                    </ul>
                  <p>
                    Дані функції порохотяга розділені на кожний пост окремо.
                    Також на панелі розміщений жетоноприймач, який приймає жетони СамВаш та монети номіналом 10 і 20
                    грн,
                    сканер для картки лояльності, яка дає можливість накопичувати і розрахуватись бонусами.
                    А для зручності відвідувачів на передній панелі розміщений бокс для сміття.
                  </p>
                  <p>
                    Корпус двухпостового порохотяга виконаний з нержавіючої сталі АІ 304.
                    Однією з вагомих переваг є холдер висотою 3 метри, який запобігає попаданню води та
                    створення болота у фільтрі. Для зручності клієнта холдер закінчується пружиною,
                    що збільшує термін експлуатації вакуумного рукава, який вбирає пил з салону автомобіля.

                    Силові установки живиться 3 фазною напругою 380 вольт, потужністю 3 кВт.
                    Термін експлуатації вакуумної турбіни складає більше 10 000 год.
                    Або 10 років активного використання.
                  </p>
                  <p>
                    Всі дані про використання порохотяга відображаються у додатку на телефоні Android, IOS та на сайті,
                    а саме:
                  </p>
                  <ul>
                    <li>
                      Час напрацьованих годин
                    </li>
                    <li>
                      Скільки коштів він приніс за добу
                    </li>
                  </ul>
                  <h3 className="d-block mt-10 mb-7">
                    Рекомендації при покупці <br/> промислового порохотяга
                  </h3>
                  <ul>
                    <li>
                      Силова установка повинна живитись трьома фазами і
                      мати потужність 3 кіловати (Надійність промислового користування).
                    </li>
                    <li>
                      Порохотяг з 1 фазою і 220 вольт та колекторними двигунами, не створюють достатнього вакууму.
                      Термін експлуатації побутового електродвигуна складає пів року.
                    </li>
                    <li>
                      Холдери з висотою менше півтори метра завжди будуть мати мокрі фільтра та болото в пилозбірнику.
                    </li>
                    <li>
                      Силова установка (турбіни) має бути виготовлена з металу, ні в якому разі не з пластмаси.
                      Пластмасовий корпус силової установки це характерна риса побутових порохотягів.
                    </li>
                    <li>
                      Ставши власником порохотяга Самваш, Ви переконаєтесь в якості і надійності нашого обладнання.
                      Подібні порохотяги, які розташовані по всій мережі автомийок самообслуговування СамВаш знаходяться
                      в
                      експлуатації вже 10 років.
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-6">
                  <picture className="d-block mt-4 mb-5">
                    <img src={require("../image/images/vacuum-cleaner/vacuumcliner.jpg")} className="img-fluid" />
                  </picture>
                </div>
              </div>
        </div>
      </div>

      <h2 className="d-block mt-10 mrb">Вагомі переваги автомийок <br/>самообслуговування SamWash</h2>
      <hr className="d-block my-3 my-md-5"/>

      <div className="row">
        <div className="col-12 col-md-4 mt-4"> 6 дизайнів різних цінових та смакових вподобань.
        </div>
        <div className="col-12 col-md-4 mt-4"> Використання оцинкованого каркасу методом гарячого цинкування гарантія 25
          років.
        </div>
        <div className="col-12 col-md-4 mt-4"> Проектна документація розробляється на основі ДБН.
        </div>
        <div className="col-12 col-md-4 mt-4"> Накриття мийки виготовлене із дахового сендвіча товщиною 100 мм, літом не
          є душно на постах,
          весною та осінню не кондисується волога на внутрішні поверхні даху «не капає на відвідувачів».
        </div>
        <div className="col-12 col-md-4 mt-4"> Відвід дощовий води організований в внутрішніх стінках конструкцій та
          відводиться прямо
          в каналізацію антивандальне виконання.
        </div>
        <div className="col-12 col-md-4 mt-4"> Полікарбонат стільниковий 10 мм із YV захистом
        </div>
        <div className="col-12 col-md-4 mt-4"> Атіка виготовлена із сучасного композитного матеріалу 4 мм.
        </div>
        <div className="col-12 col-md-4 mt-4"> Перегородки із гартованого Шкла 10 мм фірми Pilkington.
        </div>
        <div className="col-12 col-md-4 mt-4"> Оздоблення атіки виготовлене методом вакуумного формування.
        </div>
        <div className="col-12 col-md-4 mt-4"> Фасади технологічного приміщення оздоблені керамічною плиткою або
          композитним матеріалом фірми Alubond.
        </div>
        <div className="col-12 col-md-4 mt-4"> Колони каркасу оздоблені листовою нержавійкою А304 або композитним
          матеріалом 4 мм. фірми Alubond.
        </div>
        <div className="col-12 col-md-4 mt-4"> Освітлення лінійні лампи 1200 мм. IP 65 фірми Maxwell.
        </div>
        <div className="col-12 col-md-4 mt-4"> Технологічне обладнання зібрано на оцинкованій рамі і займає площу 2 м.
          кв.
        </div>
        <div className="col-12 col-md-4 mt-4"> Частотні перетворювачі Schneider, які забезпечують плавний пуск насосів
          високого тиску.
        </div>
        <div className="col-12 col-md-4 mt-4">
          Насоси високого тиску фірми Interpump (Італія) Cat 350 (Японія).
        </div>
        <div className="col-12 col-md-4 mt-4">
          Еластична муфта, що зєднує насос з електродвигуном та шумопоглинаючим захостом.
        </div>
        <div className="col-12 col-md-4 mt-4">
          Пневмо подушки для зменшення вібрації, що продовжує термін експлуатації обладнання.
        </div>
        <div className="col-12 col-md-4 mt-4"> Дозуючі насоси SECO з електронною регуляцією розходу хімічних засобів.
        </div>
        <div className="col-12 col-md-4 mt-4"> Зворотні, пневмо та електро клапани виконані з нержавіючої сталі.
        </div>
        <div className="col-12 col-md-4 mt-4"> Система накопичення технологічний води 10000 - 15000 літрів.
        </div>
        <div className="col-12 col-md-4 mt-4"> При виробництві осмосу використовується відпрацьована вода.
        </div>
        <div className="col-12 col-md-4 mt-4"> Використання промислової автоматики Schneider.
        </div>
        <div className="col-12 col-md-4 mt-4"> Двохколонна система пом’якшення води із клапаном керування Clack.
        </div>
        <div className="col-12 col-md-4 mt-4"> Система лояльності клієнтів, PayPass.
        </div>
        <div className="col-12 col-md-4 mt-4"> Віддалений доступ управління мийкою, інформування про роботу мийки на
          кошти. Система РРО.
        </div>
        <div className="col-12 col-md-4 mt-4">Всі елементи комплектуючого обладнання виробництва компанії SamWash
          ідентифікуються з
          зазначенням країни виробника та фірми.
          Поєднання цих елементів дає можливість забезпечити замовнику прибуток на рівні 70% EBITDA.
        </div>
      </div>

      <div className="col-12 mt-7">
        <picture className="d-block mt-4 mb-3">
          <img src={require("../image/images/benefits/roof.jpg")} className="img-fluid" />
        </picture>
      </div>

      <div className="row my-5">
        <div className="col-12 col-md-4">
          <picture>
            <img src={require("../image/images/benefits/vacyumcliner.jpg")} className="img-fluid" />
          </picture>
        </div>
        <div className="col-12 col-md-4 my-4 my-md-0">
          <picture>
            <img src={require("../image/images/benefits/cleantracs.jpg")} className="img-fluid" />
          </picture>
        </div>
        <div className="col-12 col-md-4">
          <picture>
            <img src={require("../image/images/benefits/service.jpg")} className="img-fluid" />
          </picture>
        </div>
      </div>

      <div className="col-12 mt-3 mb-5">
        <picture>
          <img src={require("../image/images/benefits/benefit2.jpg")} className="img-fluid" />
        </picture>
      </div>
      <div className="col-12 mt-10 mb-7">
        <h3 className="hh2">
          В ціну включена проектна документація, авторський нагляд при будівництві, юридична підтримка, монтаж та гарантія 2 роки.
        </h3>
        <div className="row mt-5 mrb-12">
          <div className="col-12 col-md-8 offset-md-4 mb-5">
            <h4 className="f1r mb-5">Існує система лізингу під 10% річних у гривнях до 3 років, перший внесок 30%.</h4>
          </div>
        </div>
      </div>

    </main>

    <footer id="order">
      <div className="container">
        <h2 className="cwgrey hh1 mrb-8">Певні, у Вас залишилось багато запитань, а ми маємо на них відповіді!</h2>
        <div className="row justify-content-center mt-7 mb-5">
          <button onClick={noScroll} id="contactbuton" className="col-8 col-md-4 py-3" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Безкоштовна консультація
          </button>
        </div>

        <div className="collapse mb-5" id="collapseExample">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-4 mt-5">
              <p className="cwhite f2r mrb-6">Надсилайте свій номер телефону або електронну адресу і наші співробітники
                зв'яжуться з Вами.</p>
              <form className="row" method="post" action="send.php" encType="multipart/form-data">
                <div className="col-8 offset-2 offset-md-0 col-md-5">
                  <input type="text" className="py-3" name="phone" placeholder="|Ваш e-mail або телефон" />
                </div>
                <div className="col-8 col-md-5 offset-2 mt-4 mt-md-0">
                  <button type="submit" className="py-3">Надіслати</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row mt-10">
          <div className="text-center text-md-start col-6 offset-3 offset-md-0 col-md-2">
            <img src={require("../image/images/main/samwash_logo.png")} className="img-fluid" />
          </div>
          <div className="col-12 offset-md-2 col-md-4 text-center mt-3">
            <a href="tel:+380505923772" className="cwhite"><b>+38 (050) 592 37 72</b></a>
          </div>
          <div className="col-12 col-md-4 text-md-end text-center mt-3">
            <a href="mailto:info@samwash.tech" className="cwhite"><b>info@samwash.tech</b></a>
          </div>
        </div>
        {/*<a href="https://diwave.company/" target="_blank" className="d-block text-end my-4" style={{color: '#ef0b0c' }}>сайт*/}
        {/*  створено в DIWAVE</a>*/}
      </div>
    </footer>

  </div>
}

export default MainPage