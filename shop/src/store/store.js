import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from "./order-reduser";


const store = configureStore({
    reducer: {
        order: postsReducer,
    }
})

window.store = store

export default store