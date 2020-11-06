<template>
  <div class="detailSwiper">
    <swiper>
      <swiperItem class="swiperItem" v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt />
      </swiperItem>
    </swiper>
  </div>
</template>

<script>
import swiper from "../../../components/common/swiper/Swiper";
import swiperItem from "../../../components/common/swiper/SwiperItem";
export default {
  components: {
    swiper,
    swiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.swiperItem {
  height: 300px;
  overflow: hidden;
}
</style>>
</style>