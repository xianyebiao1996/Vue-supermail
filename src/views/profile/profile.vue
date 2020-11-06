<template>
  <div>
    <sign></sign>
    <money></money>
    <profileList></profileList>
  </div>
</template>

<script>
import sign from "./childComps/sign";
import money from "./childComps/money";
import profileList from "./childComps/profileList";
export default {
  components: {
    sign,
    money,
    profileList,
  },
};
</script>

<style>
</style>