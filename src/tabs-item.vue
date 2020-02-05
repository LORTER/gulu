<!-- tabs-item -->
<template>
  <div class="tabs-item" @click="onClick" :class="classes">
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
      // console.log(name, "tabs-item监听onClick()函数执行改变后从tabs传过来的值");
      this.active = name === this.name;
    });
  },
  mounted() {},
  methods: {
    onClick() {
      if(this.disabled){
        return 
      }
      this.eventBus.$emit("update:selected", this.name,this);
    }
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled:this.disabled
      };
    }
  }
};
</script>
<style lang='scss' scoped>
$blue:blue;
$disabled-text-color:grey;
.tabs-item {
  padding: 0 1em;
  cursor: pointer;
  height:100%;
  display: flex;
  align-items: center;
  // border:1px solid black;
  &.active{
    color:$blue;
    font-weight: bold;
  }
  &.disabled{
    color:$disabled-text-color;
    cursor:not-allowed;
    // pointer-events:none;
  }
}
</style>