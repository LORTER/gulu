<!-- tabs-head -->
<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluTabsHead",
  components: {},
  props: {},
  inject: ["eventBus"],
  data() {
    return {};
  },
  created() {
    console.log(`----tabs给head的eventBus----`);
    console.log(this.eventBus);
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>
<style lang='scss' scoped>
$tab-height:40px;
.tabs-head {
  display: flex;
  height:$tab-height;
  justify-content: flex-start;
  align-items: center;
  border:1px solid #f46;
  >.actions-wrapper{
    margin-left:auto;
  }
}
</style>