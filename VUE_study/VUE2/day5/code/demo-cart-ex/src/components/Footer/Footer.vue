<template>
  <div class="footer-container">
    <!-- 左侧的全选 -->
    <div class="custom-control custom-checkbox">
      <!-- 21-5 绑定父向子传过来的值的check属性 -->
      <input
        type="checkbox"
        class="custom-control-input"
        id="cbFull"
        :checked="isfull"
        @change="fullChange"
      />
      <label class="custom-control-label" for="cbFull">全选</label>
    </div>

    <!-- 中间的合计 -->
    <div>
      <span>合计：</span>
      <span class="total-price">￥{{ 0 }}</span>
    </div>

    <!-- 结算按钮 -->
    <button type="button" class="btn btn-primary btn-settle">
      结算（{{ 0 }}）
    </button>
  </div>
</template>

<script>
export default {
  // 21-4 在子组件中绑定一个props状态
  props: {
    isfull: {
      type: Boolean,
      default: false,
    },
  },
  // 23-1 全选状态绑定：子向父传值
  // 1-@change拿到当前状态 2-通过$emit传递给父组件 3-父组件监听到此状态
  methods: {
    fullChange(e) {
      this.$emit("full-change", e.target.checked);
    },
  },
};
</script>

<style lang="less" scoped>
.footer-container {
  font-size: 12px;
  height: 50px;
  width: 100%;
  border-top: 1px solid #efefef;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.custom-checkbox {
  display: flex;
  align-items: center;
}

#cbFull {
  margin-right: 5px;
}

.btn-settle {
  height: 80%;
  min-width: 110px;
  border-radius: 25px;
  font-size: 12px;
}

.total-price {
  font-weight: bold;
  font-size: 14px;
  color: red;
}
</style>
