// var url='https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=3Q0dARwnDHr3PlsgBie7oIaY&client_secret=4p5UrwCncRlsDED6B9QK0iZN4tN7AxET&';
import axios from 'axios'
import VueAxios from 'vue-axios'
// import {LOG_OUT} from '../constants/index.js'
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

/**
* 请求之前可以做什么
*/
//设置请求头
// axios.interceptors.request.use((config) => {
//   config.headers.common['Authorization'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJJZCI6MTQ3MzksIlVzZXJOYW1lIjoiMTg1MjAxMjI5NzgtMSIsIk5hbWUiOiIiLCJMWERIIjoiMTg1MjAxMjI5NzgiLCJTeXN0ZW1JZCI6NSwiQ29tcGFueUlkIjoiMyIsIkNvbXBhbnlOYW1lIjoi5YWs5LyXIiwiQ29tcGFueVR5cGUiOjEwMCwiSXNBdXRoZW50aWNhdGVkIjp0cnVlLCJ1c2VyVHlwZSI6MiwiU3RvcmVOYW1lIjoiIiwiVmFsaWRTdGF0ZSI6IiIsIkxvZ2luRGF0ZSI6IlwvRGF0ZSgxNTI4ODg1NjI4MDAwKVwvIn0.cm3IkD1kn1KzXScP-4c84ek9n0269ZjjY3FkXRaiIYQ'
//   return config;
// }, (error) => {

//   return Promise.reject(error);
// });


export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
    .then(response => {
   
        resolve(response.data);
      

    })
    .catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url,data = {}){
   return new Promise((resolve,reject) => {
     axios.post(url,data)
          .then(response => {
        
              resolve(response.data);
            
          },err => {
            reject(err)
          })
   })
 }

 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
         .then(response => {
       
            resolve(response.data);
          
         },err => {
           reject(err)
         })
  })
}

 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
         .then(response => {
         
            resolve(response.data);
          
         },err => {
           reject(err)
         })
  })
}

