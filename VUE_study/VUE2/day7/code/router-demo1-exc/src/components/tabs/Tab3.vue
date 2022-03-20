<template>
  <div class="tab1-container">
    <h5>Tab3 组件----{{$route.params.mid}}------{{mid}}</h5>
  </div>
</template>

<script>
export default {
  name: 'Tab1',
  props:['mid']
}
</script>

<style lang="less" scoped>
.tab1-container {
  min-height: 150px;
  background-color: lightblue;
}
</style>