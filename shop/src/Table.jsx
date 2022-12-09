import React, {useState, useRef} from "react";
import s from './Home.module.css'
import {useDispatch} from "react-redux";
import {fetchMail, fetchPay} from "./API/post";
import { useReactToPrint } from 'react-to-print'
import Map from "./cart";
import axios from "axios";

let userOrder = []

const Table = ({data}) => {

    const [data2, setData2] = useState([])
    const [onDouble, setDouble] = useState(false)
    const [onDouble2, setDouble2] = useState(false)
    const [one, setOne] = useState()
    const [total, setTotal] = useState(0)
    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        email: '',
        cite: ''
        // district: ''
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
        data.forEach((user) => {
            if (user.id == one) {
                if (user.size != 0) {
                    userOrder.forEach((el, index) => {
                        if(user === el) {
                            console.log(index)
                            userOrder.splice(index, 1)
                        }
                    })
                    setTotal(total - user.total)
                }
                user.size = e.target.value
                user.total = user.size * user.prise
                setTotal((actual) => actual + user.total)
                userOrder.push(user)
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
        let massageO = {
            massage: 'lol',
            userData: userData
        }
        await dispatch(fetchPay(obj))
            .then(res => console.log(res.meta))
        await dispatch(fetchMail(massageO))
            .then(res => console.log(res.meta))
        handlePrint()
        data.forEach(user => user.size = 0)
        data.forEach(user => user.total = 0)
        nullAll()
    }

    const doubleClick2 = () => {
        setDouble2(true)
    }

    const userSave = () => {
        setDouble2(false)
    }

    const clickCity = (e) => {
        setUserData((actual) => {
            return {...actual, cite: e.target.textContent}})
        setData2((actual) => [])
        setDouble2(false)
    }

    const tab = () => {
        return (
            <>
                <td className={s.listForm} onDoubleClick={doubleClick2}>{userData.name}</td>
                <td className={s.listForm} onDoubleClick={doubleClick2}>{userData.phone}</td>
                <td className={s.listForm} onDoubleClick={doubleClick2}>{userData.email}</td>
                <td className={s.listForm} onDoubleClick={doubleClick2}>{userData.cite}</td>
            </>
        )
    }
    const inp = () => {
        return (
            <>
                <td className={s.input} ><input title={'NAME'} onBlur={userSave} type="text" onChange={(e) => {
                    setUserData((actual) => {
                        return {...actual, name: e.target.value}})}} className={s.input2}/></td>
                <td className={s.input}><input  title={'НОМЕР ТЕЛЕФОНУ'} onBlur={userSave} type="text" onChange={(e) => {
                    setUserData((actual) => {
                        return {...actual, phone: e.target.value}})}} className={s.input2}/></td>
                <td className={s.input}><input title={'EMAIL'} onBlur={userSave} type="email" onChange={(e) => {
                    setUserData((actual) => {
                        return {...actual, email: e.target.value}})}} className={s.input2}/></td>
                <td className={s.input}>
                    <div>
                        <input className={s.input2} type="text" title={'МІСТО'} placeholder='адреса'
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
            </>
        )
    }

    let dataSearch = []

    const search = async (e) => {
        dataSearch = []
        let url = 'https://nominatim.openstreetmap.org/search?format=json&limit=5&q=' + e.target.value
        dataSearch = await axios.get(url).then(res => res.data)
        setData2(dataSearch)
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
                    { !onDouble2 ? tab() : inp() }
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
                                        <input onBlur={onBlur} type="text"/></td>
                            }
                            <td className={s.list}>{item.discount}</td>
                            <td className={s.list}>{item.total}</td>
                        </tr>
                    ))
                }
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
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