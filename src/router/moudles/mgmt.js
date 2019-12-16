import Home from '~/pages/mgmt/Areaprotect/Areaprotect'
import Base from '~/pages/common/Base'
let mgmtRouter = [
    {
        path : 'area',
        name : 'area',
        component:Base,
        meta : {
            title : '实战指挥'
        },
        children:[
            {
                path : 'areaprotect',
                name : 'area_protect',
                component : () => import('~/pages/mgmt/Areaprotect/Areaprotect'),
                meta : {
                    title : '区域安保'
                }
            },
            {
                path : 'welcome1',
                name : 'view_welcome1',
                component : () => import('~/pages/mgmt/Areaprotect/Areaprotect'),
                meta : {
                    title : '区域安保'
                }
            },
        ]
    },
   
]

export default mgmtRouter
