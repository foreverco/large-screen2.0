import Cookie from 'js-cookie'
const app = {
    state:{
        sidebar: {
            //opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
            opened: true ,
            withoutAnimation: false
        },
        device: 'desktop'
    },
    mutations:{
        TOGGLE_SIDEBAR: state => {
            state.sidebar.opened = !state.sidebar.opened
            state.sidebar.withoutAnimation = false
            if (state.sidebar.opened) {
               // Cookies.set('sidebarStatus', 1)
            } else {
             //   Cookies.set('sidebarStatus', 0)
            }
        },
        /**
         * 关闭侧边框
         * @param state
         * @param withoutAnimation
         * @constructor
         */
        CLOSE_SIDEBAR: (state, withoutAnimation) => {
            Cookies.set('sidebarStatus', 0)
            state.sidebar.opened = false
            state.sidebar.withoutAnimation = withoutAnimation
        },
        TOGGLE_DEVICE: (state, device) => {
            state.device = device
        }
    },
    actions:{
        /**
         * 侧边框开关
         * @param commit
         */
        toggleSideBar({ commit }) {
            commit('TOGGLE_SIDEBAR')
        },
        closeSideBar({ commit }, { withoutAnimation }) {
            commit('CLOSE_SIDEBAR', withoutAnimation)
        },
        toggleDevice({ commit }, device) {
            commit('TOGGLE_DEVICE', device)
        }
    },
    getters:{
        /*sidebar(state){
           return  state.sidebar
        },*/
        sidebar: state => state.sidebar,
        device(state){
            return state.device
        } ,
    }
}

export default app
