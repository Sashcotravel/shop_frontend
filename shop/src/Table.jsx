import React, {useState, useRef} from "react";
import s from './Home.module.css'
import {useDispatch} from "react-redux";
import {fetchMail, fetchPay} from "./API/post";
import { useReactToPrint } from 'react-to-print'
import axios from "axios";

let userOrder = []

const Table = ({data}) => {

    const [data2, setData2] = useState([])
    const [onDouble, setDouble] = useState(false)
    const [onDouble2, setDouble2] = useState({
        name: false, phone: false, email: false, cite: false
    })
    const [one, setOne] = useState()
    const [total, setTotal] = useState(0)
    const [userData, setUserData] = useState({
        name: '', phone: '', email: '', cite: ''
    })

    const dispatch = useDispatch()

    const componentRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data'
    })

    const nullAll = () => {
        setUserData((actual) => {return {...actual, name:''}})
        setUserData((actual) => {return {...actual, phone:''}})
        setUserData((actual) => {return {...actual, email:''}})
        setUserData((actual) => {return {...actual, cite:''}})
        setTotal(0)
        userOrder = []
    }

    const doubleClick = (e) => {
        setOne(e.target.id)
        setDouble(true)
    }

    const onBlur = (e) => {
        setData2((actual) => [])
        data.forEach((item) => {
            if (item.id == one) {
                if(one === '100002'){
                    data[1].size = e.target.value
                    data[2].size = e.target.value
                    data[3].size = e.target.value
                    data[4].size = e.target.value
                    data[5].size = e.target.value
                }
                if(one === '100019'){
                    data[13].size = e.target.value
                }
                if (item.size != 0) {
                    userOrder.forEach((el, index) => {
                        if(item === el) {
                            userOrder.splice(index, 1)
                        }
                    })
                    setTotal(total - item.total)
                }
                item.size = e.target.value
                item.total = item.size * item.prise
                setTotal((actual) => actual + item.total)
                userOrder.push(item)
            }
        })
        setDouble(false)
    }

    const useSubmit = async ()  => {
        let obj = {
            total: total,
            order: userOrder,
            user: userData
        }
        let userMassage = {
            massage: 'lol',
            userData: userData
        }
        await dispatch(fetchPay(obj))
            .then(res => console.log(res.meta))
        await dispatch(fetchMail(userMassage))
            .then(res => console.log(res.meta))
        handlePrint()
        data.forEach(user => user.size = 0)
        data.forEach(user => user.total = 0)
        nullAll()
    }

    // table userData

    const clickCity = (e) => {
        setUserData((actual) => {
            return {...actual, cite: e.target.textContent}})
        setData2((actual) => [])
        setDouble2(false)
    }

    let dataSearch = []

    const search = async (e) => {
        dataSearch = []
        let url = 'https://nominatim.openstreetmap.org/search?format=json&limit=5&q=' + e.target.value
        dataSearch = await axios.get(url).then(res => res.data)
        setData2(dataSearch)
    }

    const td1 = (name, name2) => {
        return <td className={s.listForm} title={name} onDoubleClick={doubleClick2}>{name2}</td>
    }
    const td1_2 = () => {
        return <td className={s.input}>
            <div>
                <input className={s.input2} type="text" title={'cite'} placeholder='адреса'
                       id='address' onChange={search}/>
                <div>
                    {
                        data2?.map((item, index) => (
                            <div key={index} className={s.citiBox}
                                 onClick={clickCity}>{item.display_name}
                            </div>
                        ))
                    }
                </div>
            </div>
        </td>
    }

    const td2 = (name) => {
        if (name === 'name') {
            return <td className={s.input}><input title={name} onBlur={userSave} type="text" onChange={(e) => {
                setUserData((actual) => {return {...actual, name: e.target.value}})
            }} className={s.input2}/></td>
        } else if (name === 'phone') {
            return <td className={s.input}><input title={name} onBlur={userSave} type="text" onChange={(e) => {
                setUserData((actual) => {return {...actual, phone: e.target.value}})
            }} className={s.input2}/></td>
        }else if (name === 'email') {
            return <td className={s.input}><input title={name} onBlur={userSave} type="text" onChange={(e) => {
                setUserData((actual) => {return {...actual, email: e.target.value}})
            }} className={s.input2}/></td>
        }

    }

    const doubleClick2 = (e) => {
        if(e.target.title == 'name'){
            setDouble2((actual) => {return {...actual, name: true}})
        } else if (e.target.title == 'phone'){
            setDouble2((actual) => {return {...actual, phone: true}})
        } else if (e.target.title == 'email'){
            setDouble2((actual) => {return {...actual, email: true}})
        } else if (e.target.title == 'cite'){
            setDouble2((actual) => {return {...actual, cite: true}})
        }

    }

    const userSave = (e) => {
        switch (e.target.title) {
            case 'name':
                setDouble2((actual) => {return {...actual, name: false}})
            case 'phone':
                setDouble2((actual) => {return {...actual, phone: false}})
            case 'email':
                setDouble2((actual) => {return {...actual, email: false}})
            case 'cite':
                setDouble2((actual) => {return {...actual, cite: false}})
        }
    }

    return (
        <>
            <table className={s.listTable + ' ' + s.app}>
                <tbody>
                <tr>
                    <th className={s.listTableName}>ІМ'Я</th>
                    <th className={s.listTableName}>НОМЕР ТЕЛЕФОНУ</th>
                    <th className={s.listTableName}>EMAIL</th>
                    <th className={s.listTableName}>МІСТО</th>
                </tr>
                <tr>
                    { !onDouble2.name ? td1('name', userData.name) : td2('name') }
                    { !onDouble2.phone ? td1('phone', userData.phone) : td2('phone') }
                    { !onDouble2.email ? td1('email', userData.email) : td2('email') }
                    { !onDouble2.cite ? td1('cite', userData.cite) : td1_2() }
                </tr>
                </tbody>
            </table>
            <table ref={componentRef} className={s.listTable + ' ' + s.app}>
                <tbody>
                <tr>
                    <th className={s.list}>КОД ТОВАРУ</th>
                    <th className={s.list}>НАЙМЕНУВАННЯ ТОВАРУ</th>
                    <th className={s.list}>ЦІНА €</th>
                    <th className={s.list}>КІЛЬКІСТЬ</th>
                    <th className={s.list}>ЗНИЖКА</th>
                    <th className={s.list}>TOTAL €</th>
                </tr>
                {
                    data.map(item => (
                        <tr key={item.id}>
                            <td className={s.list}>{item.id}</td>
                            <td className={s.listName}>{item.nameOfGoods}</td>
                            <td className={s.list}>{item.prise}</td>
                            {
                                !onDouble
                                    ? <td className={s.list} id={item.id} title={item.size}
                                          onDoubleClick={doubleClick}>{item.size}</td>
                                    : <td className={s.input} id={item.id} title={item.size}>
                                        <input className={s.inputIn2Tab} onBlur={onBlur} type="text"/></td>
                            }
                            <td className={s.list}>{item.discount}</td>
                            <td className={s.list}>{item.total}</td>
                        </tr>
                    ))
                }
                <tr>
                    <td colSpan="4" className={s.top}></td>
                    <td className={s.list}>Total</td>
                    <td className={s.list + ' ' + s.total}>{total}</td>
                </tr>
                </tbody>
            </table>
            <button className={s.subBut} onClick={useSubmit}>Замовити</button>
        </>
    )
}

export default Table



{/*{ !onDouble2 ? tab() : inp() }*/}

// const tab = () => {
//     return (
//         <>
//             {/*<td className={s.listForm} title='name' onDoubleClick={doubleClick2}>{userData.name}</td>*/}
//             {/*<td className={s.listForm} title='phone' onDoubleClick={doubleClick2}>{userData.phone}</td>*/}
//             {/*<td className={s.listForm} title='email' onDoubleClick={doubleClick2}>{userData.email}</td>*/}
//             {/*<td className={s.listForm} title='cite' onDoubleClick={doubleClick2}>{userData.cite}</td>*/}
//         </>
//     )
// }

// const inp = () => {
//     return (
//         <>
//             <td className={s.input} ><input title={'NAME'} onBlur={userSave} type="text" onChange={(e) => {
//                 setUserData((actual) => {
//                     return {...actual, name: e.target.value}})}} className={s.input2}/></td>
//             <td className={s.input}><input  title={'НОМЕР ТЕЛЕФОНУ'} onBlur={userSave} type="text" onChange={(e) => {
//                 setUserData((actual) => {
//                     return {...actual, phone: e.target.value}})}} className={s.input2}/></td>
//             <td className={s.input}><input title={'EMAIL'} onBlur={userSave} type="email" onChange={(e) => {
//                 setUserData((actual) => {
//                     return {...actual, email: e.target.value}})}} className={s.input2}/></td>
//             <td className={s.input}>
//                 <div>
//                     <input className={s.input2} type="text" title={'МІСТО'} placeholder='адреса'
//                            id='address' onChange={search}/>
//                     <div>
//                         {
//                             data2?.map((item, index) => (
//                                 <div key={index} className={s.citiBox}
//                                      onClick={clickCity}>{item.display_name}
//                                 </div>
//                             ))
//                         }
//                     </div>
//                 </div>
//             </td>
//         </>
//     )
// }

{/*<td className={s.listForm} title='name' onDoubleClick={doubleClick2}>{userData.name}</td>*/}
{/*<td className={s.listForm} title='phone' onDoubleClick={doubleClick2}>{userData.phone}</td>*/}
{/*<td className={s.listForm} title='email' onDoubleClick={doubleClick2}>{userData.email}</td>*/}
{/*<td className={s.listForm} title='cite' onDoubleClick={doubleClick2}>{userData.cite}</td>*/}