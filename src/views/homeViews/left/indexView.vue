<template>
  <div class="container">
    <status-view :data="data"></status-view>
    <sales-view :data="data"></sales-view>
    <!-- <annual-goals-view></annual-goals-view> -->
  </div>
</template>

<script>
// import annualGoalsView from "./annualGoals.vue";
import statusView from "./deviceStatus.vue";
import salesView from "./salesRevenue.vue";
export default {
  components: { statusView, salesView /* , annualGoalsView */ },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: vw(398);
  height: 100%;
  flex: 1;
}
</style>
