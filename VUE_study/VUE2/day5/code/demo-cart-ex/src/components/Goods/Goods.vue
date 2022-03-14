<template>
  <div class="goods-container">
    <!-- 左侧图片 -->
    <div class="thumb">
      <div class="custom-control custom-checkbox">
        <!-- 复选框 -->
        <!-- <input type="checkbox" class="custom-control-input" id="cb1" :checked="true" /> -->
        <!-- 19-1 在子组件中监听复选框的勾选状态，绑定事件 -->
        <!-- 20-1 关于id的修改：点击图片也可以更改状态
                  问题所在：点击第三张图片但是修改为默认的id商品 -->
        <input
          type="checkbox"
          @change="stateChange"
          class="custom-control-input"
          :id="'cb' + id"
          :checked="state"
        />
        <label class="custom-control-label" :for="'cb' + id">
          <!-- 商品的缩略图 -->
          <!-- 4-6 修改缩略图 -->
          <img :src="pic" alt="" />
        </label>
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="goods-info">
      <!-- 商品标题 -->
      <h6 class="goods-title">{{ title }}</h6>
      <div class="goods-info-bottom">
        <!-- 商品价格 -->
        <span class="goods-price">￥{{ price }}</span>
        <!-- 商品的数量 -->
        <Counter :num="count" :id="id"></Counter>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "@/components/Counter/Counter";
export default {
  components: {
    Counter,
  },
  // 4-3将标题等信息进行传值渲染
  props: {
    // 19-1绑定id
    id: {
      required: true,
      type: Number,
    },
    title: {
      default: "",
      type: String,
    },
    pic: {
      default: "",
      type: String,
    },
    price: {
      default: 0,
      type: Number,
    },
    // 目前的商品状态是props传值，只读属性不能修改，
    // 所以不能够使用v-model双向绑定，因此经过分析使用子向父传值进行状态变换
    // 事件 19
    state: {
      default: true,
      type: Boolean,
    },
    count:{
      default:true,
      type:Number
    }
  },
  // 19-3 使用$emit把状态传给父组件
  methods: {
    // 只要复选框状态改变必然触发
    stateChange(e) {
      const newState = e.target.checked;
      // 19-3 触发自定义事件
      this.$emit("state-change", { id: this.id, value: newState });
    },
  },
};
</script>

<style lang="less" scoped>
.goods-container {
  + .goods-container {
    border-top: 1px solid #efefef;
  }
  padding: 10px;
  display: flex;
  .thumb {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      margin: 0 10px;
    }
  }

  .goods-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .goods-title {
      font-weight: bold;
      font-size: 12px;
    }
    .goods-info-bottom {
      display: flex;
      justify-content: space-between;
      .goods-price {
        font-weight: bold;
        color: red;
        font-size: 13px;
      }
    }
  }
}
</style>
