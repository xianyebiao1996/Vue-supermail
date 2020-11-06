<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart() {
      this.$emit("addCart");
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  position: relative;
  display: flex;
}
.bar-left {
  background-color: #fff;
  flex-grow: 1;
  display: flex;
  text-align: center;
  line-height: 49px;
  font-size: 16px;
}
.bar-right {
  flex-grow: 1;
  display: flex;
}
.bar-item div {
  flex: 1;
}
.cart {
  background-color: yellow;
  font-size: 12px;
  text-align: center;
  line-height: 49px;
}
.buy {
  background-color: deeppink;
  font-size: 12px;
  text-align: center;
  line-height: 49px;
}
</style>
