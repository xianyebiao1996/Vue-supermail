<template>
  <div class="toast" v-show="show">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 50%;
  left: 50%;
  border-radius: 15%;
  transform: translate(-50%, -50%);
  color: aliceblue;
  padding: 10px 10px;
  background-color: rgb(71, 61, 61, 0.5);
}
</style>