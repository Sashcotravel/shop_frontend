import axios from 'axios'

// 'http://localhost:4444/'

// process.env.REACT_APP_API_URL

const instance = axios.create({
    baseURL: 'https://calculator.samwash.ua:8000/'
})

// const instance = axios.create({
//     baseURL: 'http://localhost:8000/'
// })

// export const instance = axios.create({
//     baseURL: 'https://calculator.samwash.ua/'
// })

export default instance