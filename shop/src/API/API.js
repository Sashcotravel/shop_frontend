import axios from 'axios'

// 'http://localhost:4444/'

// process.env.REACT_APP_API_URL

const instance = axios.create({
    baseURL: 'http://localhost:4445/'
})

export default instance