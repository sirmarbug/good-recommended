import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:5001/api',
    timeout: 3000
})

http.interceptors.request.use(config => {
    if (localStorage.getItem('token')) {
        config.headers.common.Authorization = localStorage.getItem('token')
    }
    return config
})

http.interceptors.response.use(
    response => {
        return response
    },
    async error => {
        // if (error.response) {
        //     // error.response.status
        //     console.error(error)
        // }
        return Promise.reject(error)
    }
)

export const post = async (uri, data) => {
    try {
        const response = await http.post(uri, data)
        return response
    } catch (e) {
        console.error(e)
    }
}