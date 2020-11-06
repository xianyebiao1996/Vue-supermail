<template>
  <Swiper>
    <SwiperItem v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad" />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";
export default {
  data() {
    return {
      isLoad: false,
    };
  },
  methods: {
    imgLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImgLoad");
        this.isLoad = true;
      }
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style></style>
