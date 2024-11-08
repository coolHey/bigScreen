<template>
  <div class="container">
    <status-view></status-view>
    <sales-view></sales-view>
    <annual-goals-view></annual-goals-view>
  </div>
</template>

<script>
import annualGoalsView from "./annualGoals.vue";
import statusView from "./deviceStatus.vue";
import salesView from "./salesRevenue.vue";
export default {
  components: { statusView, salesView, annualGoalsView },
};
</script>

<style lang="scss" scoped>
.container {
  width: vw(398);
}
</style>
