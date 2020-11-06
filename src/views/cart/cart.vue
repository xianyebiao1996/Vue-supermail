<template>
  <div class="cart">
    <!-- 导航 -->
    <Navbar class="nav-bar">
      <div slot="center">购物车({{ proCount }})</div>
    </Navbar>
    <!-- 购物车列表 -->
    <cartList></cartList>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar";
import cartList from "./childComps/cartList";
export default {
  components: {
    Navbar,
    cartList,
  },
  computed: {
    proCount() {
      return this.$store.state.cartList.length;
    },
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
