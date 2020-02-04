<!-- tabs-body -->
<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluTabsBody",
  components: {},
  inject: ["eventBus"],
  data() {
    return {};
  },
  created() {
    console.log(`----tabs给body的eventBus----`);
    console.log(this.eventBus);
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>
<style lang='scss' scoped>
.tabs-body {
}
</style>