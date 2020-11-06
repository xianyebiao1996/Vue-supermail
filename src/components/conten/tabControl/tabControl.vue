<template>
  <div class="tabControl">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tabControlItem"
      :class="{ change: index === active }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.active = index;
      this.$emit("tabClick", this.active);
    },
  },
};
</script>

<style>
.tabControl {
  display: flex;
  text-align: center;
  font-size: 16px;
  background-color: #fff;
  z-index: 9;
}
.tabControlItem {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.change {
  color: var(--color-high-text);
}
.change span {
  padding: 0 5px 5px 5px;
  border-bottom: 3px solid var(--color-tint);
}
</style>
