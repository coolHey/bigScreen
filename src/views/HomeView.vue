<template>
  <div class="home">
    <head-view :name="'原料药生产数据分析平台'"></head-view>
    <menu-view></menu-view>
    <router-view></router-view>
  </div>
</template>

<script>
import headView from "@/components/headView.vue";
import menuView from "@/components/menuView.vue";
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {
    headView,
    menuView,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: vw(1920);
  min-height: vh(1080);
  overflow: hidden;
  background: url(../assets/image/home_bg.png) top left no-repeat;
  background-size: 100% 100%;
}
</style>
