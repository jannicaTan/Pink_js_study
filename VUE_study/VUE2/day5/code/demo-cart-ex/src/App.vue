<template>
  <div class="app-container">
    <Header title="购物车"></Header>
    <h1>App 根组件</h1>
    <!-- 3-2利用v-for来进行循环 -->
    <!-- 19-4 父组件接收状态改变的值 -->
    <Goods
      v-for="item in list"
      :key="item.id"
      :id="item.id"
      :title="item.goods_name"
      :pic="item.goods_img"
      :price="item.goods_price"
      :state="item.goods_state"
      @state-change="getNewState"
    ></Goods>
  </div>
</template>

<script>
// 2-1导入axios
import axios from "axios";
// 1-1导入Header
import Header from "@/components/Header/Header";
// 3-1 导入goods
import Goods from "@/components/Goods/Goods";
export default {
  components: {
    Header,
    Goods,
  },
  data() {
    return {
      // 2-5 设置data数据用来存储列表数组
      list: [],
    };
  },
  // 创建生命周期函数
  created() {
    // 2-4 利用this调用请求数据的方法
    this.initCartList();
  },
  methods: {
    // 2-2封装方法
    async initCartList() {
      // 调用get数据
      // 2-3解构赋值，解构出所需要的data属性
      const { data: res } = await axios.get("https://www.escook.cn/api/cart");
      // console.log(res)
      // 2-6判断状态后将获取到的数据转存到数组中
      if (res.status === 200) {
        this.list = res.list;
      }
    },
    getNewState(e){

    }
  },
};
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
