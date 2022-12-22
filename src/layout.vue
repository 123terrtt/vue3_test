<template>
  <el-row class="wrap">
    <el-col :span="3">
        <div class="left">11111111111</div>
    </el-col>
    <el-col :span="21">
        <div class="right">111111111111</div>
    </el-col>
  </el-row>
</template>

<style>
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.left {
    background: red;
    height: 100vh;
}
.right {
    background: green;
    height: 100vh;
}
.wrap {
    width: 100%;
}
</style>