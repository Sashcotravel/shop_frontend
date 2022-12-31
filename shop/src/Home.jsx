import React, {useState} from "react";
import s from './Home.module.css'
import {useDispatch} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {fetchMail, fetchMailUser, fetchPay} from "./API/post";
import axios from "axios";
import image1 from './image/269541-1366x768.jpg'
import image2 from './image/303822-1366x768.jpg'
import image3 from './image/322173-1600x900.jpg'
import image4 from './image/326061-1366x768.jpg'
import image5 from './image/332274-1366x768.jpg'
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import {Datepicker} from '@mobiscroll/react';


let userOrder = []

const Home = ({data}) => {

    const [data2, setData2] = useState([])
    const [onDouble2, setDouble2] = useState({
        name: false, phone: false, email: false, cite: false
    })
    const [one, setOne] = useState()
    const [total, setTotal] = useState(0)
    // const [userData, setUserData] = useState({
    //     name: '', phone: '', email: '', cite: '', date: ''
    // })
    const [checked, setChecked] = useState(true)
    const [dateT, setDate] = useState('')
    const [checked2, setChecked2] = useState(false)
    const [selected, setSelected] = useState(null);

    const navigate = useNavigate()

    const dispatch = useDispatch()

    // const clickCity = (e) => {
    //     setUserData((actual) => {
    //         return {...actual, cite: e.target.textContent}
    //     })
    //     setData2((actual) => [])
    //     setDouble2(false)
    // }

    // let dataSearch = []

    // const search = async (e) => {
    //     dataSearch = []
    //     let url = 'https://nominatim.openstreetmap.org/search?format=json&limit=5&q=' + e.target.value
    //     dataSearch = await axios.get(url).then(res => res.data)
    //     setData2(dataSearch)
    // }

    // const td1 = (name, name2) => {
    //     return <td className={s.listForm} title={name} onDoubleClick={doubleClick2}>{name2}</td>
    // }

    // const td1_2 = () => {
    //     return <td className={s.input}>
    //         <div>
    //             <input className={s.input2} type="text" title={'cite'} placeholder='адреса'
    //                    id='address' onChange={search}/>
    //             <div>
    //                 {
    //                     data2?.map((item, index) => (
    //                         <div key={index} className={s.citiBox}
    //                              onClick={clickCity}>{item.display_name}
    //                         </div>
    //                     ))
    //                 }
    //             </div>
    //         </div>
    //     </td>
    // }

    // const td2 = (names) => {
    //     return <td className={s.input}><input title={names} onBlur={userSave} type="text" onChange={(e) => {
    //         setUserData((actual) => {
    //             return {...actual, [names]: e.target.value}
    //         })
    //     }} className={s.input2}/></td>
    // }

    // const doubleClick2 = (e) => {
    //     let title = e.target.title
    //     if (title == 'name') {
    //         setDouble2((actual) => {
    //             return {...actual, name: true}
    //         })
    //     } else if (title == 'email') {
    //         setDouble2((actual) => {
    //             return {...actual, email: true}
    //         })
    //     } else if (title == 'phone') {
    //         setDouble2((actual) => {
    //             return {...actual, phone: true}
    //         })
    //     } else if (title == 'cite') {
    //         setDouble2((actual) => {
    //             return {...actual, cite: true}
    //         })
    //     }
    //
    // }

    // const nullAll = () => {
    //     setUserData((actual) => {
    //         return {...actual, name: '', phone: '', email: '', cite: ''}
    //     })
    //     setTotal(0)
    //     userOrder = []
    //     let con = document.querySelectorAll("[id='lightblue']")
    //     con.forEach(e => e.value = '')
    // }

    // const userSave = (e) => {
    //     setDouble2((prev) => ({
    //         ...prev, [e.target.title]: true ? false : true
    //     }))
    // }

    // const clickPrize = (e) => {
    //     setOne(e.target.title)
    // }

    // const onBlur = (e) => {
    //     data.forEach((item) => {
    //         if (item.nameOfGoods == one) {
    //             if (item.size != 0) {
    //                 userOrder.forEach((el, index) => {
    //                     if (item === el) {
    //                         userOrder.splice(index, 1)
    //                     }
    //                 })
    //                 setTotal(total - item.total)
    //             }
    //             item.size = e.target.value
    //             item.total = item.size * item.prise
    //             setTotal((actual) => actual + item.total)
    //             userOrder.push(item)
    //         }
    //     })
    // }

    // const useSubmit = async () => {
    //     let obj = {
    //         total: total,
    //         order: userOrder,
    //         user: userData
    //     }
    //     await dispatch(fetchPay(obj))
    //         .then(res => console.log(res.meta))
    //     dispatch(fetchMail(obj))
    //     if (checked) {
    //         dispatch(fetchMailUser(obj))
    //     }
    //     data.forEach(user => user.size = 0)
    //     data.forEach(user => user.total = 0)
    //     nullAll()
    //     if (total) {
    //         navigate('/senks')
    //     }
    // }

    // const checkedClick = () => {
    //     if (checked) {
    //         setChecked(false)
    //     } else {
    //         setChecked(true)
    //     }
    // }

    // const checkedClick2 = () => {
    //     if (checked2) {
    //         setChecked2(false)
    //     } else {
    //         setChecked2(true)
    //     }
    // }

    // const selectedChange = (ev) => {
    //     setSelected(ev.value);
    //     let date = ev.value.toString()
    //     setDate(date.slice(0, 25))
    //     setUserData((actual) => {
    //         return {...actual, date: dateT}
    //     })
    // }

    // const userTable = () => {
    //     return (
    //         <div className={s.display}>
    //             <table className={s.listTable}>
    //                 <tbody>
    //                 <tr>
    //                     <th className={s.listTableName}>ІМ'Я</th>
    //                     <th className={s.listTableName}>НОМЕР ТЕЛЕФОНУ</th>
    //                     <th className={s.listTableName}>EMAIL</th>
    //                     <th className={s.listTableName}>МІСТО</th>
    //                     <th className={s.listTableName}>Надіслати копію мені</th>
    //                     <th className={s.listTableName + ' ' + s.dateT}>Замовити консультацію</th>
    //                 </tr>
    //                 <tr>
    //                     {!onDouble2.name ? td1('name', userData.name) : td2('name')}
    //                     {!onDouble2.phone ? td1('phone', userData.phone) : td2('phone')}
    //                     {!onDouble2.email ? td1('email', userData.email) : td2('email')}
    //                     {!onDouble2.cite ? td1('cite', userData.cite) : td1_2()}
    //                     <td className={s.listForm}>
    //                         <input type="checkbox" checked={checked} onChange={checkedClick}/>
    //                     </td>
    //                     <td className={s.listForm}>
    //                         <input type="checkbox" checked={checked2} onChange={checkedClick2}/>
    //                         {
    //                             checked2
    //                                 // ?  <input id="date" type="date" onBlur={valueDate} />
    //                                 ? <Datepicker controls={['calendar', 'time']}
    //                                               value={selected} onChange={selectedChange}/>
    //                                 : ''
    //                         }
    //                     </td>
    //                 </tr>
    //                 </tbody>
    //             </table>
    //             <button className={s.submitBut} onClick={useSubmit}>Замовити :)</button>
    //         </div>
    //     )
    // }


    // const addCount = (e) => {
    //     data.forEach(item => {
    //       if(item.nameOfGoods === e.target.title){
    //           userOrder.forEach((el, index) => {
    //               if (item === el) {
    //                   userOrder.splice(index, 1)
    //               }
    //           });
    //           item.size = item.size +1
    //           item.total = item.size * item.prise
    //           setTotal((actual) => actual + item.prise)
    //           userOrder.push(item)
    //       }
    //     })
    // }
    //
    // const minesCount = (e) => {
    //     data.forEach(item => {
    //         if(item.nameOfGoods === e.target.title){
    //             if(item.size === 0){
    //                 item.size = 0
    //             } else {
    //                 item.size = item.size -1
    //                 if (item.size === 0) {
    //                     userOrder.forEach((el, index) => {
    //                         if(item === el){
    //                             userOrder.splice(index, 1);
    //                         }
    //                     });
    //                 }
    //                 item.total = item.total - item.prise
    //                 if(item.total === 0){
    //                     item.total = item.prise
    //                 }
    //                 setTotal(total - item.prise)
    //             }
    //         }
    //     })
    // }

    return (
        <>

            {/*<div className={s.divTitle}>*/}
            {/*    <span className={s.spanTitle}><Link className={s.linkTitle} to='/'>Обладнання</Link></span>*/}
            {/*    <span className={s.spanTitle}><Link className={s.linkTitle} to='/nacr'>Накриття</Link></span>*/}
            {/*    <span className={s.spanTitle}><Link className={s.linkTitle} to='/acses'>Аксесуари</Link></span>*/}
            {/*    <span className={s.spanTitle}><Link className={s.linkTitle} to='/nacr'>Будівництво</Link></span>*/}
            {/*    <span className={s.spanTitle}><Link className={s.linkTitle} to='/nacr'>Документація</Link></span>*/}
            {/*</div>*/}



            {/*<div className={s.container}>*/}
            {/*    <div className={s.boxOne}>*/}
            {/*        <img src={image1} className={s.img}/>*/}
            {/*        <h5>{data[0].nameOfGoods}</h5>*/}
            {/*        <span>Desc</span>*/}
            {/*        <div className={s.divBut}>*/}
            {/*            <div style={{padding: 10+'px'}}>*/}
            {/*                <button className={s.button+ ' ' + s.left} onClick={addCount}*/}
            {/*                        title={data[0].nameOfGoods}>+</button>*/}
            {/*                <button className={s.button} id='lightblue'>{data[0].size}</button>*/}
            {/*                <button className={s.button+ ' ' +s.right} onClick={minesCount}*/}
            {/*                        title={data[0].nameOfGoods}>-</button>*/}
            {/*            </div>*/}
            {/*            <span style={{padding: 10+'px'}}>{data[0].total} грн</span>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={s.container}>*/}
            {/*    <div className={s.boxOne}>*/}
            {/*        <img src={image1} className={s.img}/>*/}
            {/*        <h5>{data[6].nameOfGoods}</h5>*/}
            {/*        <span>Desc</span>*/}
            {/*        <div className={s.divBut}>*/}
            {/*            <div style={{padding: 10+'px'}}>*/}
            {/*                <button className={s.button+ ' ' + s.left} onClick={addCount}*/}
            {/*                        title={data[6].nameOfGoods}>+</button>*/}
            {/*                <button className={s.button}>{data[6].size}</button>*/}
            {/*                <button className={s.button+ ' ' +s.right} onClick={minesCount}*/}
            {/*                        title={data[6].nameOfGoods}>-</button>*/}
            {/*            </div>*/}
            {/*            <span style={{padding: 10+'px'}}>{data[6].total} грн</span>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={s.container}>*/}
            {/*    <div className={s.boxOne}>*/}
            {/*        <img src={image1} className={s.img}/>*/}
            {/*        <h5>{data[7].nameOfGoods}</h5>*/}
            {/*        <span>Desc</span>*/}
            {/*        <div className={s.divBut}>*/}
            {/*            <div style={{padding: 10+'px'}}>*/}
            {/*                <button className={s.button+ ' ' + s.left}onClick={addCount}*/}
            {/*                        title={data[7].nameOfGoods}>+</button>*/}
            {/*                <button className={s.button}>{data[7].size}</button>*/}
            {/*                <button className={s.button+ ' ' +s.right}onClick={minesCount}*/}
            {/*                        title={data[7].nameOfGoods}>-</button>*/}
            {/*            </div>*/}
            {/*            <span style={{padding: 10+'px'}}>{data[7].total} грн</span>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}


            {/*<div id='obladnannya' className={s.div1}>*/}
            {/*    <h1>Обладнання</h1>*/}
            {/*    <div className={s.inputBox}>*/}
            {/*        <div>*/}
            {/*            <span className={s.span}>1.1</span>*/}
            {/*            <span className={s.span}>Технологічне обладнання на 4 програми та кнопка пауза</span>*/}
            {/*            <span className={s.span}>9500</span>*/}
            {/*            <input type='text' className={s.span + ' ' + s.inputSpan} id='lightblue' onBlur={onBlur}*/}
            {/*                   placeholder='кількість'*/}
            {/*                   title='Технологічне обладнання на 4 програми та кнопка пауза' onClick={clickPrize}/>*/}
            {/*            <span className={s.span}>{data[0].total}</span>*/}
            {/*            <br/>*/}
            {/*            <br/>*/}
            {/*            <h3>Опис 1</h3>*/}
            {/*            <h3>Опис 2</h3>*/}
            {/*            <h3>Опис 3</h3>*/}
            {/*        </div>*/}
            {/*        <img src={image1} className={s.image}/>*/}
            {/*    </div>*/}
            {/*    <div className={s.inputBox}>*/}
            {/*        <div>*/}
            {/*            <span className={s.span}>1.2</span>*/}
            {/*            <span className={s.span}>Щітка</span>*/}
            {/*            <span className={s.span}>800</span>*/}
            {/*            <input type='text' className={s.span + ' ' + s.inputSpan} id='lightblue' onBlur={onBlur}*/}
            {/*                   placeholder='кількість'*/}
            {/*                   title='Щітка' onClick={clickPrize}/>*/}
            {/*            <span className={s.span}>{data[8].total}</span>*/}
            {/*            <br/>*/}
            {/*            <br/>*/}
            {/*            <h3>Опис 1</h3>*/}
            {/*            <h3>Опис 2</h3>*/}
            {/*            <h3>Опис 3</h3>*/}
            {/*        </div>*/}
            {/*        <img src={image1} className={s.image}/>*/}
            {/*    </div>*/}
            {/*    <div className={s.inputBox}>*/}
            {/*        <div>*/}
            {/*            <span className={s.span}>1.3</span>*/}
            {/*            <span className={s.span}>Програма піна високий тиск</span>*/}
            {/*            <span className={s.span}>1250</span>*/}
            {/*            <input type='text' className={s.span + ' ' + s.inputSpan} id='lightblue' onBlur={onBlur}*/}
            {/*                   placeholder='кількість'*/}
            {/*                   title='Програма піна високий тиск' onClick={clickPrize}/>*/}
            {/*            <span className={s.span}>{data[6].total}</span>*/}
            {/*            <br/>*/}
            {/*            <br/>*/}
            {/*            <h3>Опис 1</h3>*/}
            {/*            <h3>Опис 2</h3>*/}
            {/*            <h3>Опис 3</h3>*/}
            {/*        </div>*/}
            {/*        <img src={image1} className={s.image}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div id='nacrnttya' className={s.div1}>*/}
            {/*    <h1>Накриття</h1>*/}
            {/*    <div className={s.inputBox}>*/}
            {/*        <div>*/}
            {/*            <span className={s.span}>1.1</span>*/}
            {/*            <span className={s.span}>ТКомплект обладнання для миття ФУРИ: поворотна консоль з пантографом 5,5м (нержавійка) - 1 робоче місце активне</span>*/}
            {/*            <span className={s.span}>4500</span>*/}
            {/*            <input type='text' className={s.span + ' ' + s.inputSpan} id='lightblue' onBlur={onBlur}*/}
            {/*                   placeholder='кількість'*/}
            {/*                   title='ТКомплект обладнання для миття ФУРИ: поворотна консоль з пантографом 5,5м (нержавійка) - 1 робоче місце активне'*/}
            {/*                   onClick={clickPrize}/>*/}
            {/*            <span className={s.span}>{data[10].total}</span>*/}
            {/*            <br/>*/}
            {/*            <br/>*/}
            {/*            <h3>Опис 1</h3>*/}
            {/*        </div>*/}
            {/*        <img src={image2} className={s.image}/>*/}
            {/*    </div>*/}
            {/*    <div className={s.inputBox}>*/}
            {/*        <div>*/}
            {/*            <span className={s.span}>1.2</span>*/}
            {/*            <span className={s.span}>Комплект обладнання для миття ФУРИ з пантографом 5,5м (нержавійка) - 1 робоче місце пасивне</span>*/}
            {/*            <span className={s.span}>4000</span>*/}
            {/*            <input type='text' className={s.span + ' ' + s.inputSpan} id='lightblue' onBlur={onBlur}*/}
            {/*                   placeholder='кількість'*/}
            {/*                   title='Комплект обладнання для миття ФУРИ з пантографом 5,5м (нержавійка) - 1 робоче місце пасивне'*/}
            {/*                   onClick={clickPrize}/>*/}
            {/*            <span className={s.span}>{data[11].total}</span>*/}
            {/*        </div>*/}
            {/*        <img src={image2} className={s.image}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div id='acsses' className={s.div1}>*/}
            {/*    <h1>Аксесуари</h1>*/}
            {/*    <div className={s.inputBox}>*/}
            {/*        <div>*/}
            {/*            <span className={s.span}>1.1</span>*/}
            {/*            <span className={s.span}>Компресор</span>*/}
            {/*            <span className={s.span}>4000</span>*/}
            {/*            <input type='text' className={s.span + ' ' + s.inputSpan} id='lightblue' onBlur={onBlur}*/}
            {/*                   placeholder='кількість'*/}
            {/*                   title='Компресор' onClick={clickPrize}/>*/}
            {/*            <span className={s.span}>{data[12].total}</span>*/}
            {/*            <br/>*/}
            {/*            <br/>*/}
            {/*            <h3>Опис 1</h3>*/}
            {/*        </div>*/}
            {/*        <img src={image3} className={s.image}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div id='building' className={s.div1}>*/}
            {/*    <h1>Будівництво</h1>*/}
            {/*    <div className={s.inputBox}>*/}
            {/*        <div>*/}
            {/*            <span className={s.span}>1.1</span>*/}
            {/*            <span className={s.span}>Інвертор (частотний перетворювач)</span>*/}
            {/*            <span className={s.span}>1200</span>*/}
            {/*            <input type='text' className={s.span + ' ' + s.inputSpan} id='lightblue' onBlur={onBlur}*/}
            {/*                   placeholder='кількість'*/}
            {/*                   title='Інвертор (частотний перетворювач)' onClick={clickPrize}/>*/}
            {/*            <span className={s.span}>{data[14].total}</span>*/}
            {/*            <br/>*/}
            {/*            <br/>*/}
            {/*            <h3>Опис 1</h3>*/}
            {/*        </div>*/}
            {/*        <img src={image4} className={s.image}/>*/}
            {/*    </div>*/}
            {/*    <div className={s.inputBox}>*/}
            {/*        <div>*/}
            {/*            <span className={s.span}>1.2</span>*/}
            {/*            <span className={s.span}>Панель оператора TOUCH SCREEN  (сенсорна панель) Schneider Germany 12.1 дюймів з системою SCADA</span>*/}
            {/*            <span className={s.span}>700</span>*/}
            {/*            <input type='text' className={s.span + ' ' + s.inputSpan} id='lightblue' onBlur={onBlur}*/}
            {/*                   placeholder='кількість'*/}
            {/*                   title='Панель оператора TOUCH SCREEN  (сенсорна панель) Schneider Germany 12.1 дюймів з системою SCADA'*/}
            {/*                   onClick={clickPrize}/>*/}
            {/*            <span className={s.span}>{data[15].total}</span>*/}
            {/*            <br/>*/}
            {/*            <br/>*/}
            {/*            <h3>Опис 1</h3>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <img src={image4} className={s.image}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={s.add}>*/}
            {/*    <span className={s.spanAdd}>+ додати накриття</span>*/}
            {/*</div>*/}
            {/*{*/}
            {/*    userTable()*/}
            {/*}*/}
            {/*<div id='documents' className={s.div1}>*/}
            {/*    <h1>Документація</h1>*/}
            {/*</div>*/}
        </>
    )
}

export default Home


