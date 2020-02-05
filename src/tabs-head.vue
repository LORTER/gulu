<!-- tabs-head -->
<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
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
  mounted() {
    // 1px下边框滑动第二部，监听
    this.eventBus.$on("update:selected", (item, vm) => {
      // 拿到选中元素的宽高
      console.log(vm.$el.getBoundingClientRect())
      let { width, height ,left} = vm.$el.getBoundingClientRect();
      // 设置1px边线的宽
      console.log(left)
      this.$refs.line.style.width = `${width}px`;
      // 因为有margin：20px
      this.$refs.line.style.left = `${left-20}px`;
    });
    // console.log(`----tabs给head的eventBus----`);
    // console.log(this.eventBus);
  },
  methods: {},
  computed: {}
};
</script>
<style lang='scss' scoped>
$tab-height: 40px;
$blue: blue;
$border-color:#ddd;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $blue;
    transition: all 350ms;
  }
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>