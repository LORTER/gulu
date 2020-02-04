<!-- tabs-item -->
<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluTabsItem",
  components: {},
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
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
    // console.log(`----tabs给item的eventBus----`);
    // console.log(this.eventBus);
    this.eventBus.$on("update:selected", name => {
      // console.log(name, "tabs-item监听xxx()函数执行改变后从tabs传过来的值");
      this.active = name === this.name;
    });
  },
  mounted() {},
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name,this);
    }
  },
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
$blue:blue;
.tabs-item {
  padding: 0 1em;
  cursor: pointer;
  height:100%;
  display: flex;
  align-items: center;
  &.active{
    color:$blue;
    font-weight: bold;
  }
}
</style>