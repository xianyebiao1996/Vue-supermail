<template>
  <div class="cart-bottom-check">
    <div class="checkbox">
      <img src="../../../assets/img/cart/check.jpg" alt="" v-show="ischecked" />
    </div>
    <span class="all">全选</span>
  </div>
</template>

<script>
export default {
  props: {
    ischecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.checkbox {
  flex: 1;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 50%;
  margin-right: 5px;
}
.checkbox img {
  position: relative;
  left: 4px;
  top: 1px;
  height: 10px;
  width: 10px;
}
.cart-bottom-check {
  display: flex;
  align-items: center;
}
</style>