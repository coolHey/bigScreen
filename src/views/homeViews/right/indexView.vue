<template>
  <div class="container">
    <fault-view></fault-view>
    <alarm-view></alarm-view>
  </div>
</template>

<script>
import alarmView from "./alarmView.vue";
import faultView from "./faultView.vue";
export default {
  components: {
    faultView,
    alarmView,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: vw(398);
}
</style>
