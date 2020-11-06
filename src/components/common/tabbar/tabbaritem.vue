<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!flag">
      <slot name="img"></slot>
    </div>
    <div v-else>
      <slot name="changeImg"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // flag: false
    };
  },
  computed: {
    flag() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.flag ? { color: this.activeColor } : {};
    },
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbar-item img {
  margin-top: 5px;
  height: 24px;
  width: 24px;
  vertical-align: baseline;
}
</style>
