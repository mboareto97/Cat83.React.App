import axios from "axios"
import config from "../config"

const axiosHelper = axios.create();

axiosHelper.interceptors.request.use
(
    (configAxios) => {
        configAxios.baseURL = config.baseUrl;
        return configAxios;
    }, 
    (err) => {return Promise.reject(err);}
);

axiosHelper.interceptors.response.use
(
    (response) => {return response;},
    (err) => {return Promise.reject(err);}
)

export default axiosHelper;