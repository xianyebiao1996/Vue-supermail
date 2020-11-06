import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/w6",
    timeout: 5000,
  });
  //发起请求
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {}
  );
  //拦截器
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  return instance(config);
}