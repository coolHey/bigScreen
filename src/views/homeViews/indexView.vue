<template>
  <div class="container">
    <div class="main">
      <left-view :data="homeData"></left-view>
      <center-view :data="homeData"></center-view>
      <right-view :data="homeData"></right-view>
    </div>
  </div>
</template>

<script>
import leftView from "./left/indexView.vue";
import rightView from "./right/indexView.vue";
import centerView from "./center/indexVIew.vue";
import { getHome } from "@/api/home";
export default {
  components: {
    leftView,
    rightView,
    centerView,
  },
  data() {
    return {
      homeData: {},
    };
  },
  async mounted() {
    const res = await getHome();
    if (res.code == 200) {
      this.homeData = res.data;
    } else {
      alert(res.message);
    }
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: vh(82) vw(40) 0 vw(40);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
