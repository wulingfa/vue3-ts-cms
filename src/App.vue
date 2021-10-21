<template>
    <div class="app">
      <h2>{{ $store.state.name }}</h2>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>

      <el-input></el-input>


  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { ElButton } from 'element-plus'
// 局部引用
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-button.css'

export default defineComponent({
  components: {
    ElButton
  },
  name: 'App',
})
</script>

<style lang="less">

</style>
