import Vue from 'vue'
import VueRouter from 'vue-router'

import Config from '~/config'

import view from './moudles/view'
import mgmt from './moudles/mgmt'

import MGMT_LAYOUT from '~/pages/mgmt/Layout'
import VIEW_LAYOUT from '~/pages/view/Layout'

Vue.use(VueRouter)
export default  new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes:[
        {
            path : '/',
            redirect : {name : 'view_userHome'}
        },
        {
            path : `/${Config.mgmt.route_pre}`,
            name : Config.mgmt.route_name,
            component : MGMT_LAYOUT ,
            children: [
                {
                    path : 'home',
                    name : 'mgmt_home',
                    component : () => import('~/pages/mgmt/Home'),
                    hidden:false,  // 如果不想在后台左侧边栏显示，将其置位 true
                    meta : {
                        title : '首页'
                    }
                },
                ...mgmt
            ]
        },
        {
            path:`/${Config.view.route_pre}`,
            name : Config.view.route_name,
            component : VIEW_LAYOUT,
            children : [
                ...view
            ]
        },

        {
            path:'/manager/login',
            name:'mgmt_login',
            component : () => import('~/pages/mgmt/Mgmt_login'),
            meta:{
                title : '后台登陆'
            }
        },
        {
            path:'/error_404',
            name:'error_404',
            component : () => import('~/pages/common/error_404'),
            meta:{
                title: '页面丢失'
            }
        },

        {
            path: '*',
            redirect : {name: 'error_404'}
        }
    ]
})
