<template>
  <div class="container">
    <map-view></map-view>
    <bottom-view></bottom-view>
  </div>
</template>

<script>
import bottomView from "./bottomView.vue";
import mapView from "./mapView.vue";
export default {
  components: {
    mapView,
    bottomView,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: vw(1000);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
