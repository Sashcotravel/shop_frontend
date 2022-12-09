import React, {useState} from 'react'
import axios from "axios";
import s from './Home.module.css'
import { Users } from './users'



const Map = () => {

    const [data2, setData2] = useState([])

    let dataSearch = []

    const search = async (e) => {
        dataSearch = []
        let url = 'https://nominatim.openstreetmap.org/search?format=json&limit=5&q=' + e.target.value
        dataSearch = await axios.get(url).then(res => res.data)
        setData2(dataSearch)
    }

    console.log(data2)

    return (
        <div>
            <input type="text" placeholder='адреса' id='address' onChange={search}/>
            <div>
                <ol>
                {
                    data2?.map(item => (
                        <li>{item.display_name}</li>
                    ))
                }
                </ol>
            </div>
        </div>
    )
}

export default Map