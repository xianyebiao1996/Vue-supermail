<template>
  <div class="checkbox" @click="checkClick">
    <img src="../../../assets/img/cart/check.jpg" alt="" v-show="checkBtn.check" >
  </div>
</template>

<script>
export default {
  props:{
    checkBtn: {
      type:Object,
      default() {
        return {}
      },
      index:{
        type:Number  
      }
    }
  },
 
  methods:{
    checkClick() {  
     this.checkBtn.check = !this.checkBtn.check
    }
}
}
</script>

<style scoped>
.checkbox {
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 50%;
}
.checkbox img {
  position: relative;
  left: 4px;
  top: 5px;
  height: 10px;
  width: 10px;
  
}
</style>