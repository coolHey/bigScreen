<template>
  <div class="container">
    <!-- <fault-view></fault-view> -->
    <alarm-view :data="data"></alarm-view>
  </div>
</template>

<script>
import alarmView from "./alarmView.vue";
// import faultView from "./faultView.vue";
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    // faultView,
    alarmView,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: vw(398);
  overflow: auto;
}
</style>
