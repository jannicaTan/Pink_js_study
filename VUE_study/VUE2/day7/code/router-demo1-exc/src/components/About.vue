<template>
  <div class="about-container">
    <h3>About 组件</h3>
    <!-- 11-1创建链接 -->
    <router-link to='/about'>Tab1</router-link>
    <router-link to='/about/tab2'>Tab2</router-link>
    <hr />
    <!-- 11-2 创建占位符-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="less" scoped>
.about-container {
  min-height: 200px;
  background-color: skyblue;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
