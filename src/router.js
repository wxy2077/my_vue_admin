import Vue from 'vue'
import Router from 'vue-router'
// import Home form './views/Home.vue'
import Layout from './layout/index.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [

        {
            path: '/login',
            component: () => import('@/views/login/index'),
            hidden: true
        },
        {
            path: '/',
            component: Layout,
            redirect: '/admin',
            name: 'Admin',
            meta: {title: "首页", icon: "#icon-home"},
            leaf: true,//只有一个节点
            children: [
                {path: 'admin', component: () => import('@/views/admin/index'), name: '首页', hidden: true}
            ]
        },
        {
            path: '/article',
            component: Layout,
            redirect: '/article/list',
            name: 'Article',
            meta: {title: "文章", icon: "#icon-article"},
            children: [
                {
                    path: '/article/list',
                    component: () => import('@/views/article/list'),
                    name: 'List',
                    meta: {title: "列表", icon: "#icon-streamlist"},
                },
                {
                    path: '/article/edit',
                    component: () => import('@/views/article/edit'),
                    name: 'Edit',
                    meta: {title: "编辑", icon: "#icon-edit"},
                },
                {
                    path: '/article/detail',
                    component: () => import('@/views/article/detail'),
                    name: 'Detail',
                    meta: {title: "详情", icon: "#icon-icon_xiangqing"},
                },
            ]
        },
        {
            path: '/crawl',
            component: Layout,
            redirect: '/crawl/weixin',
            name: 'Crawl',  // :to:{name: router}
            meta: {title: "抓取", icon: "#icon-zhizhuxia"},
            children: [
                {
                    path: '/crawl/weixin',
                    component: () => import('@/views/crawl/weixin'),
                    name: 'Weixin',
                    meta: {
                        title: "微信",
                        icon: "#icon-weichat"
                    },
                },

                {
                    path: '/crawl/news',
                    component: () => import('@/views/crawl/news'),
                    name: 'News',
                    meta: {
                        title: "通用文章",
                        icon: "#icon-toutiao"
                    },
                }
            ]
        },
        {
            path: '/person',
            component: Layout,
            redirect: '/person/message',
            name: 'person',
            meta: {
                title: '个人中心',
                icon: '#icon-Personalcenter'
            },
            children: [
                {
                    path: '/person/message',
                    component: () => import('@/views/person/message'), // Parent router-view
                    name: 'Message',
                    meta: {title: '消息', icon: "#icon-fw_messagepage_announc"},

                },
                {
                    path: '/person/setting',
                    component: () => import('@/views/person/setting'), // Parent router-view
                    name: 'Setting',
                    meta: {title: '设置', icon: "#icon-shezhi"},

                },

            ]
        },


    ]


})

