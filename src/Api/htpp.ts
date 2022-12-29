import axios  from 'axios';

let baseURL;
if(process.env.NODE_ENV === 'development') {
  baseURL = '';
} else if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://3vk8b6ezwa.execute-api.eu-west-3.amazonaws.com/diagnosticTool';
}
let instance = axios.create({
  baseURL,
})
// 配置请求拦截
instance.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err)
})

// 配置响应拦截
instance.interceptors.response.use(res => {
  // const { data } =  res.data
  // const result = res.data
  // if (Object.prototype.toString.call(data) === '[object Object]' || ){
  //   return result
  // } else {
  //   return Object.assign(result, {data: JSON.parse(data)})
  // }
  return res.data
  
}, err => {
  // if (err.response.status === 401) {
    // 处理401的情况
  // }
  return Promise.reject(err)
})
export default instance;
