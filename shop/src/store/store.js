import { configureStore } from '@reduxjs/toolkit'
import {Users} from "../users";


const store = configureStore({
    reducer: {
        users: Users
    }
})

window.store = store

export default store