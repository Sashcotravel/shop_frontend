import React, {useState} from "react";
import s from './Home.module.css'
import { Users } from './users'
import Table from "./Table";


const Home = () => {

    const [query, setQuery] = useState()

    return (
        <div>
            <Table data={Users} />
        </div>
    )
}

export default Home;