<template>
  <div class="goods">
    <goodsListItem
      v-for="(item, index) in goods"
      :key="index"
      :goodsItem="item"
    ></goodsListItem>
  </div>
</template>

<script>
import goodsListItem from "./goodsListItem";
export default {
  components: {
    goodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: var(--color-background);

  padding: 2px;
}
</style>
