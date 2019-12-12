import {RECEIVE_TQ} from './mutation-type'
export default {
    [RECEIVE_TQ](state,tq){
        state.tqObj = tq.HeWeather6[0]
    }
}