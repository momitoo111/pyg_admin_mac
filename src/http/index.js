// 导出一个已经配置好的axios
import axios from 'axios'
// baseURL 配置
axios.defaults.baseURL = 'http://localhost:8000/api/private/v1'
// 拦截器
// 请求的时候发送token
axios.interceptors.request.use(config => {
  // 给config添加新的信息
  // config可以给请求头追加属性
  config.headers.Authorization = sessionStorage.getItem('token')
  return config
})
// 响应的时候拦截失效或者没又登陆的token
axios.interceptors.response.use(res => {
  // 判断token是否失效
  if (res.data.meta.status === 401) {
    location.href = '#/login'
  } else {
    return res
  }
})
// 导出
export default axios
