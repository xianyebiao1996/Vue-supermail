<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import bscroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      BS: null,
    };
  },
  methods: {
    refresh() {
      this.BS && this.BS.refresh();
    },
  },
  mounted() {
    // 创建better-scroll
    this.BS = new bscroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    // 监听滚动位置
    this.BS.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    // 监听上拉加载
    this.BS.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
};
</script>

<style></style>
