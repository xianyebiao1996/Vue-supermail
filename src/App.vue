<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <tabbar>
      <tabbaritem path="/home" activeColor="red">
        <img slot="img" src="./assets/img/home.jpg" alt />
        <img slot="changeImg" src="./assets/img/changehome.jpg" alt />
        <div slot="text">首页</div>
      </tabbaritem>
      <tabbaritem path="/sort" activeColor="red">
        <img slot="changeImg" src="./assets/img/changesort.jpg" alt />
        <img slot="img" src="./assets/img/sort.jpg" alt />
        <div slot="text">分类</div>
      </tabbaritem>
      <tabbaritem path="/cart" activeColor="red">
        <img slot="changeImg" src="./assets/img/changecart.jpg" alt />
        <img slot="img" src="./assets/img/cart.jpg" alt />
        <div slot="text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile" activeColor="red">
        <img slot="changeImg" src="./assets/img/changeprofile.jpg" alt />
        <img slot="img" src="./assets/img/profile.jpg" alt />
        <div slot="text">我的</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>
<script>
import tabbar from "./components/common/tabbar/tabbar.vue";
import tabbaritem from "./components/common/tabbar/tabbaritem.vue";
export default {
  components: {
    tabbar,
    tabbaritem,
  },
};
</script>
<style>
@import "./assets/css/base.css";
</style>
