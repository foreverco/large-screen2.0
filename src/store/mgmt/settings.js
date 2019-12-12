import Config from '~/config'

let setting = {
    state:{
        showSettings: false,
        fixedHeader: Config.mgmt.fixed_header,
        sidebarLogo: Config.mgmt.sidebar_logo_show
    },
    mutations:{
        CHANGE_SETTING: (state, { key, value }) => {
            if (state.hasOwnProperty(key)) {
                state[key] = value
            }
        }
    },
    actions:{
        /**
         * 更改设置
         * @param commit
         * @param data
         */
        changeSetting({ commit }, data) {
            commit('CHANGE_SETTING', data)
        }
    },
    getters:{}
}

export default setting
