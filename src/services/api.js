import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://localhost:3333'
    baseURL: 'https://to-do-app-beryl-nine.vercel.app/'
})

export default api