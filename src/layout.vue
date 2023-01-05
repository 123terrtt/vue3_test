<template>
  <el-row>
    <el-col :span="5" class="menu-left">
      <div class="left-header">
        <div>Nothing Dianostic Tool</div>
      </div>
      <div class="left-center">
        <el-menu
        default-active="1"
        active-text-color="#409eff"
        background-color="#545c64"
        text-color="#fff"
        >
          <el-menu-item-group :title="item.menu" v-for="(item, index) in menulist" :key="item.menu" :index="index">
            <el-menu-item :index="subItem.menuItem" v-for="(subItem, subIndex) in item.subMenu" :key="subItem.menuItem">{{ subItem.menuItem }}</el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </div>
      <div class="left-footer">
        <div>
          <span>login</span>
        </div>
      </div>
    </el-col>
    <el-col :span="19" class="menu-right">
      <router-view />
    </el-col>
  </el-row>
</template>

<style scoped>
  .menu-left {
    height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background: var(--vt-c-black-mute);
    color: #ffffff;
  }
  .menu-right {
    height: 100vh;
  }
  .left-header {
    flex: 1;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 24px;
    text-align: center;
  }
  .left-center {
    flex: 3;
  }
  .left-footer {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 20px;
  }
  
</style>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import { MENULIST } from './utils/constant.js'

  const menulist = reactive(
    MENULIST,
  )
</script>