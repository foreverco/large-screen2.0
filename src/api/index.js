import ajax from "./ajax";

/* 
包含n个接口请求函数的模块
*/
const BASE_URL = '/api'

// 获取当天天气信息
export const reqTq = (location,key) =>ajax('https://free-api.heweather.net/s6/weather/now',{location,key})