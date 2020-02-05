<!-- tabs-pane -->
<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluTabsPane",
  components: {},
  props: {
    name: {
      type: [String, Number],
      required: true
    }
  },
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  created() {
    // console.log(`----tabs给pane的eventBus----`);
    // console.log(this.eventBus);
    this.eventBus.$on("update:selected", name => {
      // console.log(name, "tabs-pane监听onClick()函数执行改变后从tabs传过来的值");
      this.active = name === this.name;
    });
  },
  mounted() {},
  methods: {},
  computed: {
    classes() {
      return {
        active: this.active
      };
    }
  }
};
</script>
<style lang='scss' scoped>
.tabs-pane {
  padding:1em;
   &.active{
  }
}
</style>