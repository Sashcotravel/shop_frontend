import axios from 'axios'

// 'http://localhost:4444/'

// process.env.REACT_APP_API_URL

const instance = axios.create({
    baseURL: 'http://localhost:4445/'
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})

export default instance