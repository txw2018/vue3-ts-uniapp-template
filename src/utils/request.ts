import axios from 'axios'
import axiosRetry from 'axios-retry'

axiosRetry(axios, { retries: 5 })

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000
})

export default instance
