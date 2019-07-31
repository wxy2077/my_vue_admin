<template>

    <el-container>

        <el-aside width="200px">
            <div class="logo"><img src="/images/logo.jpg"/></div>

            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

                <el-menu :default-openeds="['1']">

                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>导航一</template>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                    </el-submenu>

                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="2-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="2-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                        </el-submenu>
                    </el-submenu>

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
                Main
                <router-view/>

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
            window.console.log(this.$router.options.routes.slice(-1))
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

</style>
