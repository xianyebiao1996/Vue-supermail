<template>
  <div class="sign">
    <div class="tabbar">特惠商城</div>
    <div class="Simg">
      <img src="../../../assets/img/profile/sign.jpg" alt="" />
    </div>
    <div class="register">
      <span>登录/注册</span>
      <span>
        <img src="../../../assets/img/profile/手机.png" />
        暂未绑定手机
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.sign {
  width: 100vw;
  height: 150px;
  color: #fff;
  padding: 2px 0 0 0;
  background-color: var(--color-tint);
}
.tabbar {
  padding: 10px 0 0 0;
  text-align: center;
}
.Simg {
  position: relative;
  top: 50px;
  left: 30px;
  overflow: hidden;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.register {
  font-size: 16px;
  text-align: center;
}
.register span {
  padding: 3px 0;
  display: block;
}
.register img {
  padding: 2px 0 0 0;
  width: 15px;
  height: 15px;
}
</style>