import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './mgmt/user'
import app from './mgmt/app'
import settings from './mgmt/settings'

import state from './view/state'
import actions from './view/actions'
import mutations from './view/mutations'
import getters from './view/getters'

const store = new Vuex.Store({
    modules:{
        user,
        app,
        settings
    },
    state,
    actions,
    mutations,
    getters
})

export default store
