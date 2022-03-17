<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <hr />
    <button @click="comName = 'LeftCom'">展示 Left</button>
    <button @click="comName = 'RightCom'">展示 Right</button>
    <button @click="getAxios">getallVidep</button>
    <div class="box">
      <LeftCom></LeftCom>
      <RightCom></RightCom>
      <!-- <keep-alive>
        <component :is='comName'>
          <template #title>
            <h3>一首诗</h3>
          </template>
          <template #content='{msg,user}'>
            <div>
              <p>啊，大海，
                全是水。</p>
              <p>啊，蜈蚣，全是腿。</p>
              <p>啊，辣椒，净辣嘴。</p>
              <p>{{ msg }}</p>
              <p>{{ user.name }}</p>
            </div>
          </template>
          <hr />
          <template #author>
            <div>作者：彬果锅</div>
          </template>
        </component>
      </keep-alive> -->
    </div>
  </div>
</template>

<script>
import LeftCom from '@/components/LeftCom'
import RightCom from '@/components/RightCom'

export default {
  components: {
    LeftCom,
    RightCom
  },
  data () {
    return {
      comName: 'LeftCom'
    }
  },
  methods: {
    async getAxios () {
      const data = await this.$http.get('/word/getWordCollect')
      // const { data: res } = await axios.get('http://8.140.113.169:8080/text/getCollect')
      // const { data: res } = await axios.get('http://www.liulongbin.top:3006/api/get')
      console.log(data)
    }
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
