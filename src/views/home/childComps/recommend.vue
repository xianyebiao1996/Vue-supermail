<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend" :key="index" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  font-size: 14px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
.recommendItem {
  flex: 1;
}
.recommendItem img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
