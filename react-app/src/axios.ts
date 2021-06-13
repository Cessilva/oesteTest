import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';


const instance: AxiosInstance = axios.create({
    // baseURL: `https://jsonplaceholder.typicode.com`
    baseURL: `http://127.0.0.1:3002`
});

instance.interceptors.request.use( (request: AxiosRequestConfig) => {
    request.headers[`MyAuthenticationToken`] = 'AUTH092332'
    // console.log('Axios interceptors request : ', request.url);
    return request;
}, error => {
    return Promise.reject(error);
});

instance.interceptors.response.use( (response: AxiosResponse) => {

    // console.log('Axios interceptors response: ', response.data);
    return response;
}, error => {
    return Promise.reject(error);
});

export default instance;
