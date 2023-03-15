import axios from 'axios'

// 'http://localhost:4444/'
// https://www.samwash.ua

// process.env.REACT_APP_API_URL

// const instance = axios.create({
//     baseURL: 'https://samwash.ua'
// })

const instance = axios.create({
    baseURL: '/api'
})

// const instance = axios.create({
//     baseURL: 'http://localhost:443'
// })

// export const instance = axios.create({
//     baseURL: 'https://calculator.samwash.ua/'
// })

export default instance