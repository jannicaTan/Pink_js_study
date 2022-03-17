<template>
  <div class="left-container">
    <h3>Left 组件---------{{num}}</h3>
    <button @click="num+=1">+1</button>
    <slot name="title"></slot>
    <slot name="content" msg="hello vue.js" :user="userinfo"></slot>
    <slot name='author'></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0,
      userinfo: {
        name: 'zs',
        age: 20
      }
    }
  }

}
</script>

<style lang="less" scoped>
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>>
