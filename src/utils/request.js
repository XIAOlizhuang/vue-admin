import axios from 'axios'
import { Message } from 'element-ui' //因为全局引入是针对.vue文件,js文件还需要单独引入才可以使用
//创建axios,赋值给service
const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/devApi',
const service  = axios.create({ //找到
    baseURL: BASEURL, // http://192.168.1.18:8081/devApi === http://www.web-jshtml.cn/productapi
    timeout: 20000
});
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //后台需要前端这边传入相关参数(在请求头添加参数)
    //token userId
    config.headers['Tokey'] = getToken()
    config.headers['UserName'] = getUserName()
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let data = response.data
    if(data.resCode!==0){//错误情况下,把错误信息返回前台
      Message.error(data.message);
      return Promise.reject(error);
    }else{
      return response;
    }
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default service;

  /**
   * 使用 export default时, 但不能同时存在多个default
   * 文件import引入不需要花括号
   */