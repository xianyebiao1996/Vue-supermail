<template>
  <div class="money">
    <div class="one"><strong>0.00&nbsp;元</strong><span>我的额度</span></div>
    <div class="two"><strong>0&nbsp;个</strong><span>我的优惠</span></div>
    <div class="three"><strong>0&nbsp;积分</strong><span>我的积分</span></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.money {
  font-size: 16px;
  display: flex;
  background-color: #fff;
  width: 100vw;
  height: 70px;
  border: 5px solid rgba(192, 192, 192, 0.5);
  border-width: 0 0 8px 0;
}
.money div {
  text-align: center;
}

.one {
  flex: 1;
}
.two {
  flex: 1;
  border: 1px solid rgba(192, 192, 192, 0.5);
  border-width: 0 1px;
}
.three {
  flex: 1;
}
.money span,
strong {
  display: block;
  padding: 10px 0 0 0;
}
.money strong {
  color: red;
  font-size: 18px;
}
</style>