<template>
  <div>
    <div class="cart-bottom-bar">
      <checkbox :ischecked="isSelectAll" @click.native="checkClick"></checkbox>
      <div class="cart-bottom-price">
        合计:<span>{{ getTotalPrice }}</span
        >元
      </div>
      <div class="cart-bottom-btn">
        <button @click="commitBtn">提交订单</button>
      </div>
    </div>
    <commitBox :message="message" :show="show"></commitBox>
  </div>
</template>

<script>
import checkbox from "./cartCheckBox.vue";
import commitBox from "../../../components/common/toast/toast";
export default {
  components: {
    checkbox,
    commitBox,
  },
  data() {
    return {
      message: "",
      show: false,
    };
  },
  computed: {
    getTotalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.check;
          })
          .reduce((value, item) => {
            return value + item.price * item.count;
          }, 0)
      );
    },
    //检测购物车是否都被选择
    isSelectAll() {
      if (this.$store.state.cartList.length === 0) return false;
      return !this.$store.state.cartList.find((item) => !item.check);
    },
    // 检测是否有一个被选择
    isOneSelect() {
      return this.$store.state.cartList.find((item) => item.check);
    },
  },
  methods: {
    //全选按钮 全选或者全部不选中
    checkClick() {
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach((item) => (item.check = false));
      } else {
        this.$store.state.cartList.forEach((item) => (item.check = true));
      }
    },
    // 提交按钮
    commitBtn() {
      if (this.$store.state.cartList.length === 0 || !this.isOneSelect) {
        this.show = true;
        this.message = "未选中商品";
      } else {
        this.show = true;
        this.message = "提交成功";
      }
      setTimeout(() => {
        this.show = false;
        this.message = "";
      }, 1000);
    },
  },
};
</script>

<style scoped>
.all {
  float: 1;
}

.cart-bottom-bar {
  font-size: 15px;
  position: fixed;
  right: 0;
  bottom: 50px;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border-top: 1px solid #cccccc;
}

.cart-bottom-price {
  margin-left: 30px;
}

.cart-bottom-price span {
  color: red;
}

.cart-bottom-btn button {
  line-height: 50px;
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;
  height: 50px;
  padding: 0 15px;
  color: white;
  border: 0;
  outline: none;
  background: linear-gradient(to right, #ff6034, #ee0a24);
}

.cart-bottom-btn button:active {
  opacity: 0.8;
}
</style>
