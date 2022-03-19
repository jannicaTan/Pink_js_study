<template>
  <div class="app-container">
    <h1>App2 组件</h1>
    <p class='link-container'>
      <router-link to='/home' class='link'>Home</router-link>
      <router-link to='/about' class='link'>About</router-link>
      <router-link to='/movie' class='link'>Movie</router-link>
    </p>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
  .link-container{
    display: flex;
    weight:200px;
    .link{
      flex:1;
      background-color: pink;
      font-size: 25px;
    }

  }
}
</style>
