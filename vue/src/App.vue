<template>
  <div id="app">
    <el-container>
      <el-header style="background-color: #3d4248">
        <img src="@/assets/helmet-logo.png" alt="" style="width: 40px; position: relative; top: 10px;">
        <span style="font-size: 20px; margin-left: 15px; color: white">基于图像识别的电动车无盔行驶管理系统</span>
      </el-header>
    </el-container>

    <el-container>
      <el-aside style="overflow: hidden; min-height: 100vh; background-color: #545c64; width: 200px">
        <el-menu
            default-active="$router.path" router
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">系统首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>图表查看</span>
            </template>
            <el-menu-item-group>

              <el-menu-item index="/age">年龄</el-menu-item>
              <el-menu-item index="/gender">性别</el-menu-item>
            </el-menu-item-group>
              <el-menu-item index="/area">地区</el-menu-item>
          </el-submenu>

          <el-menu-item index="/history" >
            <i class="el-icon-document"></i>
            <span slot="title">历史数据</span>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<style>
.el-menu{
  border-right: none !important;
}
</style>
<script>
</script>