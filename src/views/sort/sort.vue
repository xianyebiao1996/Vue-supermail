<template>
  <div class="sort">
    <navBar class="nav-bar">
      <div slot="center">商品分类</div>
    </navBar>
    <slide-bar
      :slideList="slideList"
      @slideBarItemClick="slideBarItemClick"
    ></slide-bar>
    <scroll
      class="subCategory"
      ref="scroll"
      @scroll="categoryScroll"
      :probe-type="3"
    >
      <subCategory :subCategoryList="subCategoryList"></subCategory>
      <tabControl
        :titles="subCategoryTitles"
        @tabClick="tabClick"
        ref="tabControl"
      ></tabControl>
      <goodsList :goods="categoryDetailList"></goodsList>
    </scroll>
    <backTop v-show="show" @click.native="backTopClick"></backTop>
  </div>
</template>

<script>
import {
  getCategory,
  getCategoryDetail,
  getSubcategory,
} from "../../network/sort.js";

import navBar from "../../components/common/navbar/Navbar";
import slideBar from "./childComps/slidebar";
import subCategory from "./childComps/subCategory";
import scroll from "../../components/common/scroll/scroll";
import tabControl from "../../components/conten/tabControl/tabControl";
import goodsList from "../../components/conten/goods/goodsList";
import backTop from "../../components/conten/backTop/backtop";
export default {
  name: "sort",
  created() {},
  data() {
    return {
      slideList: [],
      maitKey: "3627",
      miniWallkey: "10062603",
      type: "pop",
      slideIndex: 0,
      subCategoryList: [],
      subCategoryTitles: ["流行", "新款", "精选"],
      categoryDetailList: [],
      show: false,
    };
  },

  components: {
    navBar,
    slideBar,
    subCategory,
    scroll,
    tabControl,
    goodsList,
    backTop,
  },
  created() {
    //获取分类左边栏的标题
    getCategory().then((res) => {
      this.slideList = res.data.category.list;
    });
    // 获取默认左边栏第一个分类数据
    getSubcategory(this.maitKey).then((res) => {
      this.subCategoryList = res.data.list;
    });
    //获取默认左边栏第一个分类数据的tabbar数据
    getCategoryDetail(this.miniWallkey, this.type).then((res) => {
      this.categoryDetailList = res;
    });
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("ItemImgLoad", () => {
      //重新计算滚动长度
      refresh();
    });
  },

  methods: {
    // 点击回到顶部
    backTopClick() {
      this.$refs.scroll.BS.scrollTo(0, 0, 500);
    },
    // 监听滚动事件
    categoryScroll(position) {
      this.show = -position.y > 1000;
    },
    //当左边栏的item发生点击时
    slideBarItemClick({ maitKey, index }) {
      this.$refs.tabControl.active = 0;
      (this.maitKey = maitKey), (this.slideIndex = index);
      // 重新获取item对应的分类数据
      getSubcategory(this.maitKey).then((res) => {
        this.subCategoryList = res.data.list;
      });
      // 重新获取item对应的分类数据的推荐界面
      getCategoryDetail(this.slideList[index].miniWallkey, this.type).then(
        (res) => {
          this.categoryDetailList = res;
        }
      );
    },
    tabClick(index) {
      const typem = ["pop", "new", "sell"];
      getCategoryDetail(
        this.slideList[this.slideIndex].miniWallkey,
        typem[index]
      ).then((res) => {
        this.categoryDetailList = res;
      });
    },
    //节流
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
.sort {
  height: 100vh;
}
.subCategory {
  position: fixed;
  top: 44px;
  bottom: 49px;
  left: 100px;
  right: 0;
  overflow: hidden;
}
.nav-bar {
  z-index: 999999999;
  color: #fff;
  background-color: var(--color-tint);
}
</style>
