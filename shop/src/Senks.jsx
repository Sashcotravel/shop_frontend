import React from 'react'
import {Link} from "react-router-dom";
import s from './Home.module.css'

const Senks = () => {

    return (
        <div>
            <h1>Дякую за замовлення!</h1>
            <br/>
            <br/>
            <br/>
            <h3>Додаткова інформація</h3>
            <br/>
            <br/>
            <br/>
            <Link className={s.logo} to="/">На головну</Link>
        </div>
    )
}

export default Senks