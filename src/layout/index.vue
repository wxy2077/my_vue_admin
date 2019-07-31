<template>

    <el-container>

        <el-aside width="200px">
            <div class="logo"><img src="/images/logo.jpg"/></div>

            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

                <el-menu router :default-active="$route.path" v-for="(item, index) in this.$router.options.routes" :key="index">

                    <template v-if="!item.hidden">

                        <el-submenu v-if="item.children.length>=1&&!item.leaf" :index="item.path">
                            <template slot="title">
                                <!--<i class="el-icon-message"></i>-->
                                <svg class="icon" aria-hidden="true">
                                    <use :href="item.meta.icon"></use>
                                </svg>&nbsp;

                                {{ item.meta.title }}
                            </template>
                                <el-menu-item v-for="child in item.children" :index="child.path" :key="child.index">
                                    <!--<i :class="child.meta.icon"></i>-->
                                    <svg class="icon" aria-hidden="true">
                                        <use :href="child.meta.icon"></use>
                                    </svg>&nbsp;
                                    {{ child.meta.title }}
                                </el-menu-item>

                        </el-submenu>


                        <el-menu-item v-else :index="item.path">
                            <!--<i :class="item.meta.icon"></i>-->
                            <svg class="icon" aria-hidden="true">
                                <use :href="item.meta.icon"></use>
                            </svg>&nbsp;

                            <span slot="title">{{ item.meta.title }}</span>
                        </el-menu-item>

                    </template>


                </el-menu>


            </el-aside>
        </el-aside>


        <el-container>

            <el-header style="height: 70px">

                <div class="admin_title">
                    后台管理
                </div>

                <div class="admin_user">
                    <el-dropdown>
                        <span class="el-dropdown-link">

                                        <el-avatar src="/images/xiaomao.jpg" class="user-avatar"></el-avatar>
                                        <el-icon class="el-icon-caret-bottom"/>
                        </span>

                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-s-custom">个人中心</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-chat-line-square">消息</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-switch-button">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>

            </el-header>


            <el-main>

                <!--<router-view/>-->

                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item v-text="this.$router.currentRoute.meta.title"></el-breadcrumb-item>

                </el-breadcrumb>
                <keep-alive>
                    <router-view v-if="this.$route.meta.keepAlive"></router-view>
                </keep-alive>
                <router-view v-if="!this.$route.meta.keepAlive"></router-view>

            </el-main>
        </el-container>
    </el-container>
</template>


<script>
    export default {
        name: "index",
        data() {
            return {
                currentUserName: "admin"
            }
        },
        created() {
            window.console.log(this.$router.options.routes)
        },
        methods: {}
    }
</script>

<style scoped>
    .logo {
        width: 200px;
        height: 70px;
    }

    .logo > img {
        width: 100%;
        height: 100%;
    }

    .el-header {
        background-color: #409EFF;
        color: #333;
        line-height: 70px;
    }

    .admin_title {
        color: #fff;
        font-size: 22px;
        display: inline;
    }

    .admin_user {
        display: inline;
        float: right;
    }

    .user-avatar {
        margin-top: 5px;
        height: 60px;
        width: 60px;
    }

    .user_head {
        color: black;
        margin: 0 auto;
    }
    .el-breadcrumb{
        margin-bottom: 10px;
    }

</style>
