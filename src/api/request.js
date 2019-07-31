
// import Vue form 'vue'
import axios from 'axios'
import store from '@/store'
import router from '@/router'

// import {getToken} form '@/utils/auth'
// create an axios instance
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    baseURL: 'http://0.0.0.0:5000/api/v1/', // url = base url + request url
    timeout: 50000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
});

// request拦截器 验证token
service.interceptors.request.use(
    config => {
        let authentication = store.state.token.authentication;
        if(authentication){
            config.headers["authentication"] = authentication
        }
        // else{
        //     // this.$route.path
        //     // this.$router.push({ name: 'login'})
        //     window.console.log('路由',router)
        // }
        return config
    },
    error => {
        window.console.log(error);
        return Promise.reject(error)
    });

router.beforeEach((to, from, next) => {
    // ...
    window.console.log('222', to.path);
    next();
});


export default service
