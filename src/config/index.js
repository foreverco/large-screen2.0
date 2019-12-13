/**
 * 项目统一配置项
 */

const config = {
    //项目名
    project_name : '大数据指挥中心',
    //前台项目配置项
    view : {
        //项目名
        name: '可视化大数据指挥中心' ,
        //路由前缀
        route_pre : 'view',
        //路由前缀名
        route_name : 'view'
    } ,
    //后台项目配置项
    mgmt : {
        //项目名
        name : '大数据指挥中心管理平台' ,
        //路由前缀
        route_pre : 'mgmt',
        //路由前缀名
        route_name : 'mgmt',
        //Logo
        logo_url : 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png',
        //侧边栏Logo图标是否显示
        sidebar_logo_show : true,
        //固定头部
        fixed_header : false
    }
}

export default config

