import axios from "axios";
import axiosRetry from 'axios-retry'

axiosRetry(axios, { retries: 5 })

const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
});

export default  instance


