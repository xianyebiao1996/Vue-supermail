<template>
  <div class="slidebar">
    <scroll class="slideSr">
      <template v-for="(item, index) in slideList">
        <button
          :class="currentIndex === index ? 'active' : ''"
          :key="index"
          class="slide-bar-item"
          @click="slideClick(item, index)"
        >
          {{ item.title }}
        </button>
      </template>
    </scroll>
  </div>
</template>

<script>
import scroll from "../../../components/common/scroll/scroll";
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    slideList: {
      type: Array,
      default: [],
    },
  },
  components: {
    scroll,
  },
  methods: {
    slideClick(item, index) {
      this.currentIndex = index;
      const obj = {
        maitKey: item.maitKey,
        index,
      };
      this.$emit("slideBarItemClick", obj);
    },
  },
};
</script>

<style>
.slidebar {
  height: calc(100% - 44px - 49px);
}
.slideSr {
  height: 100%;
  background-color: #f6f6f6;
  width: 100px;
  overflow: hidden;
}

.slide-bar-item {
  font-size: 14px;
  line-height: 45px;
  width: 100px;
  height: 45px;
  user-select: none;
  text-align: center;
  color: #666666;
  border: 0;
  outline: none;
  background: none;
}

.slide-bar-item.active {
  font-weight: 700;
  color: #ff5777;
  border-left: 3px solid #ff5777;
  background-color: #ffffff;
}
</style>