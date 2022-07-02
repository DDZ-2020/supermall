import axios from 'axios'
import { resolve } from 'core-js/fn/promise';

// export function request(config, success, failure) {
//     // 1.创建axios的实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     });

//     // 发送真正的网络请求
//     instance(config)
//         .then(res => success(res))
//         .catch(err => failure(err));
// }

// 柯里化函数
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         // 1.创建axios的实例
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         });

//         // 发送真正的网络请求
//         instance(config)
//             .then(res => resolve(res))
//             .catch(err => reject(err));
//     });
// }


export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout: 5000
    });

    // 2.axios的拦截器
    // 响应拦截
    instance.interceptors.response.use(response => {
        return response.data;
    }, err => {
        return err;
    });


    // 发送真正的网络请求，返回本省就是一个promise
    return instance(config)
}