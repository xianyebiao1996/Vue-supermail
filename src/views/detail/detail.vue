<template>
  <div id="detail">
    <DetailNavBar
      class="detailNav"
      @titleClick="titleClick"
      ref="dNav"
    ></DetailNavBar>
    <Scroll
      class="detailScroll"
      ref="scroll"
      :probe-type="3"
      @scroll="detailScroll"
    >
      <detailSwiper :topImages="topImages"></detailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <detailImagesInfo
        :imagesInfo="detailImagesInfo"
        @imgLoad="imgLoad"
      ></detailImagesInfo>
      <detailParamInfo :paramInfo="paramInfo" ref="param"></detailParamInfo>
      <detailCommentInfo
        :commentInfo="commentInfo"
        ref="comment"
      ></detailCommentInfo>
      <goodsList :goods="recommend" ref="recommend"></goodsList>
    </Scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowTop"></back-top>
    <toast :message="message" :show="show"></toast>
  </div>
</template>

<script>
import DetailNavBar from "../../views/detail/childComps/DetailNavBar";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "../../network/detail";
import detailSwiper from "./childComps/detailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import Scroll from "../../components/common/scroll/scroll";
import detailImagesInfo from "../../views/detail/childComps/detailImagesInfo";
import detailParamInfo from "../../views/detail/childComps/detailParamInfo";
import detailCommentInfo from "../../views/detail/childComps/detailCommentInfo";
import goodsList from "../../components/conten/goods/goodsList";
import detailBottomBar from "../../views/detail/childComps/detailBottomBar";
import backTop from "../../components/conten/backTop/backtop";
import toast from "../../components/common/toast/toast";
export default {
  name: "detail",
  components: {
    DetailNavBar,
    detailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    detailImagesInfo,
    detailParamInfo,
    detailCommentInfo,
    goodsList,
    detailBottomBar,
    backTop,
    toast,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailImagesInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [],
      getThemmeTopY: null,
      isShowTop: false,
      message: "",
      show: false,
    };
  },
  created() {
    // 保存商品的iid
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then((res) => {
      //获取顶部轮播图数据
      this.topImages = res.result.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );

      // 获取商铺信息
      this.shop = new Shop(res.result.shopInfo);
      // 获取详情页数据
      this.detailImagesInfo = res.result.detailInfo;
      // 获取商品参数信息
      this.paramInfo = new GoodsParam(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );
      //评论信息
      if (res.result.rate.cRate !== 0) {
        this.commentInfo = res.result.rate.list[0];
      }
      // 计算详情页点击去到响应主题
    });
    getRecommend().then((res) => {
      this.recommend = res.data.list;
    });
    this.getThemmeTopY = this.debounce(() => {
      this.themeTopYs = [0];
      this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    }, 1000);
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("ItemImgLoad", () => {
      //重新计算滚动长度
      refresh();
    });
  },
  methods: {
    //获取当前商品详情页的数据
    addToCart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.iid = this.iid;
      product.price = this.goods.realPrice;

      //把数据通过mutations放到vuex里里面
      this.$store.dispatch("addCart", product).then((res) => {
        this.show = true;
        this.message = res;
        setTimeout(() => {
          this.show = false;
          this.message = "";
        }, 1000);
      });
    },
    backClick() {
      // scrollTo 前面两个参数是xy坐标 第三个是过渡毫秒
      this.$refs.scroll.BS.scrollTo(0, 0, 500);
    },
    imgLoad() {
      this.$refs.scroll.refresh();
      this.getThemmeTopY();
    },
    // 监听详情页滚动事件,并动态设置navBar的index
    detailScroll(position) {
      if (
        -position.y >= this.themeTopYs[0] &&
        -position.y <= this.themeTopYs[1]
      ) {
        this.$refs.dNav.currentIndex = 0;
      } else if (
        -position.y >= this.themeTopYs[1] &&
        -position.y <= this.themeTopYs[2]
      ) {
        this.$refs.dNav.currentIndex = 1;
      } else if (
        -position.y >= this.themeTopYs[2] &&
        -position.y <= this.themeTopYs[3]
      ) {
        this.$refs.dNav.currentIndex = 2;
      } else if (-position.y >= this.themeTopYs[3]) {
        this.$refs.dNav.currentIndex = 3;
      }
      this.isShowTop = -position.y > 1000;
    },

    titleClick(index) {
      this.$refs.scroll.BS.scrollTo(0, -this.themeTopYs[index], 200);
    },
    debounce(func, delay = 200) {
      let timer = null;

      return function () {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this);
        }, delay);
      };
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detailNav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detailScroll {
  height: calc(100% - 44px - 49px);
}
</style>
