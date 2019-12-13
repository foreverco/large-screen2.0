import Vue from 'vue'
import router from '~/router'
import store from "~/store";


import './permission'
//import '~/assets/mgmt/css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import App from './App.vue'
import '~/assets/base.css'

// axios
import axios from 'axios';
Vue.prototype.axios = axios;

//svg图标引入
import SvgIcon from '~/components/common/SvgIcon'
// register globally
Vue.component('svg-icon', SvgIcon)

// 引入echarts
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

// 时间插件Moment
import Moment from 'moment';
// 设置日期语言
Moment.locale('zh-cn')

Vue.filter('comverTime',function(data,format){
  return Moment(data).format(format);
});

//导入初始配置
import Config from '~/config'
Vue.prototype.$config = Config


Vue.use(ElementUI,{locale})



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
