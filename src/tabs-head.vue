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
  created() {
    // 1px下边框滑动第二部，监听
    this.eventBus.$on('upadte:selected',(item,vm)=>{
      console.log(item)
      console.log(vm.$el.getBoundingClientRect())
    })
    // console.log(`----tabs给head的eventBus----`);
    // console.log(this.eventBus);
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>
<style lang='scss' scoped>
$tab-height:40px;
$blue:blue;
.tabs-head {
  display: flex;
  height:$tab-height;
  justify-content: flex-start;
  align-items: center;
  border:1px solid #f46;
  position: relative;
  >.line{
    position: absolute;
    bottom: 0;
    border-bottom:1px solid $blue;
    width:100px;
  }
  >.actions-wrapper{
    margin-left:auto;
  }
}
</style>