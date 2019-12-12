
let viewRouter = [
    {
        path : 'welcome',
        name : 'view_welcome',
        component : () => import('~/pages/view/Welcome'),
        meta : {
            title : '欢迎'
        }
    },
    {
        path : 'userHome',
        name : 'view_userHome',
        component : () => import('~/pages/view/UserHome'),
        meta : {
            title: '门户'
        }
    },
    {
        path : 'NormalState',
        name : 'normal_state',
        component : () => import('~/pages/view/NormalState'),
        meta : {
            title: '常态监控'
        }
    },
    {
        path : 'MapView',
        name : 'map_view',
        component : () => import('~/components/view/mapview/MapView'),
        meta : {
            title: '地图'
        }
    },
    {
        path : 'Warning',
        name : 'Warning',
        component : () => import('~/pages/view/Warning'),
        meta : {
            title: '警情研判'
        }
    },
    {
        path : 'Trafic',
        name : 'Trafic',
        component : () => import('~/pages/view/Trafic'),
        meta : {
            title: '交通大数据'
        }
    },
    {
        path : 'PublicMsg',
        name : 'public_msg',
        component : () => import('~/pages/view/PublicMsg'),
        meta : {
            title: '情报舆情'
        }
    },
    {
        path : 'Security',
        name : 'security',
        component : () => import('~/pages/view/Security'),
        meta : {
            title: '治安大数据'
        }
    }
]

export default viewRouter
