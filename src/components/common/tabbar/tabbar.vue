<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
import tabbaritem from "./tabbaritem";
export default {};
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  z-index: 8;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -5px 1px rgba(100, 100, 100, 0.1);
}
</style>
