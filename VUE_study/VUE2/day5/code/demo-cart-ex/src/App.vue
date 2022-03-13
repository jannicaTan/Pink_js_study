<template>
  <div class="app-container">
    <Header title="购物车"></Header>
    <!-- <h1>App 根组件</h1> -->
    <!-- 3-2利用v-for来进行循环 -->
    <!-- 19-4 父组件接收状态改变的值,注意 @事件名='方法名‘-->
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
    <!-- 21-6 在父组件中添加子组件的props属性并绑定父组件的属性 -->
    <Footer
      :isfull="fullState"
      :amount="amt"
      @full-change="getFullState"
    ></Footer>
  </div>
</template>

<script>
// 2-1导入axios
import axios from "axios";
// 1-1导入Header
import Header from "@/components/Header/Header";
// 3-1 导入goods
import Goods from "@/components/Goods/Goods";
import Footer from "@/components/Footer/Footer";
export default {
  components: {
    Header,
    Goods,
    Footer,
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
    // 19-6接受子组件传递过来的数据:e={id:,value}
    getNewState(e) {
      this.list.some((item) => {
        if (item.id === e.id) {
          item.goods_state = e.value;
          return true;
        }
      });
    },
    getFullState(val) {
      console.log("success");
      this.list.forEach((item) => (item.goods_state = val));
    },
  },
  // 21-1为footer设定计算属性：因为这样能根据状态实时改变
  computed: {
    fullState() {
      // 利用array.every()验证状态
      // 21-2 父向子传值
      return this.list.every((item) => item.goods_state);
    },
    // 24:总价格的计算：1-先在计算属性中计算 2-在子组件中定义props 属性 3-父组件对应传递给子组件属性
    // 24-1 amt:先filter，再reduce
    amt() {
      return this.list
        .filter((item) => item.goods_state)
        .reduce(
          // 初始值为0
          (total, item) => (total += item.goods_price * item.goods_count),0
        );
    },
  },
};
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
