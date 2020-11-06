<template>
  <div class="cartList">
    <Scroll class="content" ref="scroll">
       <!-- 循环部分 -->
      <div :key="index" class="shop-item" v-for="(item, index) in getCartList">
        <div class="item-selector">
          <checkBox :checkBtn='item'></checkBox>
        </div>
        <div class="item-img">
          <img :src="item.image" alt="商品图片" />
        </div>
        <div class="item-info">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-desc">商品描述: {{ item.desc }}</div>
          <div class="info-bottom">
            <div class="item-price left">¥{{ item.price }}</div>
            <div class="item-count right">x{{ item.count }}</div>
          </div>
        </div>
      </div>
    </Scroll>
    <cartBottomBar></cartBottomBar>
  </div>
</template>

<script>
import Scroll from "../../../components/common/scroll/scroll";
import checkBox from './cartListCheckBox'
import cartBottomBar from './cartBottomBar'
export default {
  name: "cart",
  components: {
    Scroll,
    checkBox,
    cartBottomBar
  },
  computed: {
    getCartList() {
      return this.$store.state.cartList;
    },
  },
  activated() {
    this.$refs.scroll.BS.refresh()
  },
 
  
};
</script>

<style scoped>
.cartList {
  height: calc(100% - 44px - 49px - 50px);
}
.content {
  height: 100%;
  overflow: hidden;
}




.shop-item {
  font-size: 0;
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #cccccc;
}

.shop-item:last-child {
  border-bottom: 0;
}

.item-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
}

.item-img img {
  display: block;
  width: 80px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
}

.item-info {
  font-size: 17px;
  position: relative;
  overflow: hidden;
  width: 88%;
  padding: 5px 10px;
  color: #333333;
}

.item-info .item-desc {
  font-size: 14px;
  margin-top: 15px;
  color: #666666;
}




</style>
