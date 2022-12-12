import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
    reducer: {}
})

window.store = store

export default store