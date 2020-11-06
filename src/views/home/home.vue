<template>
  <div id="home">
    <Navbar class="home-nav">
      <div slot="center">购物街</div>
    </Navbar>
    <tabControl
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="OffsetTop1"
      class="tabcontrol"
      v-show="isTabFixed"
    ></tabControl>
    <scroll
      class="content1"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <HomeSwiper
        :banners="banners"
        @swiperImgLoad="swiperImgLoad"
      ></HomeSwiper>
      <recommend :recommend="recommend"></recommend>
      <feature></feature>
      <tabControl
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="OffsetTop"
      ></tabControl>
      <goodsList :goods="goods[currentType].list"></goodsList>
    </scroll>
    <!-- //监听组件的原生事件需要加.native -->
    <BackTop @click.native="backClick" v-show="isShowTop"></BackTop>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar";
import HomeSwiper from "./childComps/homeSwiper";
import recommend from "./childComps/recommend";
import feature from "./childComps/feature";
import tabControl from "../../components/conten/tabControl/tabControl";
import goodsList from "../../components/conten/goods/goodsList";
import BackTop from "../../components/conten/backTop/backtop";
import { getHomeMultidata, getHomeGoods } from "../../network/home";
import scroll from "../../components/common/scroll/scroll";

export default {
  components: {
    Navbar,
    HomeSwiper,
    recommend,
    feature,
    tabControl,
    goodsList,
    scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  // 组件创建
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  // 组件销毁
  destroyed() {},
  // 被 keep-alive 缓存的组件激活时调用
  activated() {
    this.$refs.scroll.BS.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  // 被 keep-alive 缓存的组件停用时调用
  deactivated() {
    this.saveY = this.$refs.scroll.BS ? this.$refs.scroll.BS.y : 0;
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 500);

    // 监听图片加载完成
    this.$bus.$on("ItemImgLoad", () => {
      //重新计算滚动长度
      refresh();
    });
  },
  methods: {
    debounce(func, delay) {
      let timer = null;

      return function() {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this);
        }, delay);
      };
    },
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.OffsetTop1.active = index;
      this.$refs.OffsetTop.active = index;
    },
    backClick() {
      // scrollTo 前面两个参数是xy坐标 第三个是过渡毫秒
      this.$refs.scroll.BS.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      // 返回顶部判断
      this.isShowTop = -position.y > 1000;

      // tabControl是否吸顶
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      // 重新允许上拉加载
      this.$refs.scroll && this.$refs.scroll.BS.finishPullUp();
    },
    swiperImgLoad() {
      // 在组件中可以利用$el获取里面的元素

      this.tabOffsetTop = this.$refs.OffsetTop.$el.offsetTop;
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  height: 44px;
  line-height: 44px;
  color: white;
}

.content1 {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.tabcontrol {
  position: relative;
  z-index: 9;
}
</style>
