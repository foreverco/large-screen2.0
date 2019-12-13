// import Axios from "axios";

import {reqTq} from '../../api'
import {RECEIVE_TQ} from './mutation-type'
export default {
  async getTq ({state,commit}) {
    // 发送异步ajax请求
    // const {longitude,latitude} = state
    const result = await reqTq('nanjing','042b65b474e44dafb32d1158fdefb50c')
    // 提交一个mutation
        const tq = result
        commit(RECEIVE_TQ,tq)
        console.log(tq)
  }

}