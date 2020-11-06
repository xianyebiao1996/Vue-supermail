<template>
  <div>
    <NavBar>
      <div slot="left" class="back" @click="backClick"></div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="titleItem"
          :class="{ active: index == currentIndex }"
          @click="ItemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/Navbar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    ItemClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style>
.title {
  display: flex;
  font-size: 13px;
}
.titleItem {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back {
  position: relative;
  left: 5px;
  top: 12px;
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  border-color: transparent salmon transparent transparent;
}
</style>
