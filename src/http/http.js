import axios from 'axios'

axios.defaults.withCredentials = true
axios.interceptors.request.use(config => {
    console.log(config)
    return config
})

axios.interceptors.response.use(response => {
    console.log(response)
    return response
})

export default {
    post : (url,data) => {
     return axios.post(url,data).then(res=>{
         return res
     }).catch(err=>{
         console.log(err)
     })
    }
} 