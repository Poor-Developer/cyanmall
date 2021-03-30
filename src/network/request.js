import Axios from 'axios';

export function request(config) {
  const instance = Axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  })

  instance.interceptors.request.use((requestConfig) => {
    // 做正在加载中处理后，返回请求体
    return requestConfig
  }, (err) => {
    console.log(err);
  })

  instance.interceptors.response.use((res) => {
    return res.data;
  }, (err) => {
    console.log(err);
  })

  return instance(config);
}