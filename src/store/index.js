
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartList: [],
  },
  mutations: {
    //如果已经有了这个商品就让计数器加一
    addCount(state, payLoad) {
      payLoad.count += 1;
    },
    //如果没有就添加属性count 并把这个商品对象添加到数组里面展示
    addArr(state, payLoad) {
      payLoad.check = true
      state.cartList.push(payLoad);
    }
  },
  actions: {
    addCart(context, payLoad) {
      return new Promise((resolve, reject) => {
        //判断商品是否已被添加
        let oldProduct = context.state.cartList.find((item) => item.iid === payLoad.iid);
        if (oldProduct) {
          context.commit('addCount', oldProduct)
          resolve('当前商品加一')
        } else {
          payLoad.count = 1;
          context.commit('addArr', payLoad)
          resolve('添加购物车成功')
        }
      })
    }
  },
  modules: {},
});



