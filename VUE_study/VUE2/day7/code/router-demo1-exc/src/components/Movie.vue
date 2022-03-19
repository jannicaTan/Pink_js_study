<template>
  <div class="movie-container">
    <h3>Movie 组件</h3>
  </div>
</template>

<script>
export default {
  name: 'Movie'
}
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
   > a {
    margin-right: 10px;
  }
}
</style>
