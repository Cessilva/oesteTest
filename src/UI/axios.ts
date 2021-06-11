import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const instance:AxiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
    // baseURL:'http://127.0.0.1:3104'
    
});

//UN interceptor funciona similar a un middleware 
//Cuando se haga un request
instance.interceptors.request.use((request : AxiosRequestConfig ) => {
    //We can do some autentifications
    request.headers[`MyAutentificationToken`]='pass123'
    //Con este aparecen las url antes de salir el request 
    console.log('Axios interceptors request:',request.url);
    return request;
},error=>{
    //Handled errors
    return Promise.reject(error);
});

//Cuando se haga un response
instance.interceptors.response.use((response : AxiosResponse ) => {

    //Con este aparecen las url al llegar el response
    console.log('Axios interceptors response:',response.data);
    return response;
},error=>{
    //Handled errors
    return Promise.reject(error);
});

//Es similar al middleware de server.ts , con otro formato

export default instance;