<!-- tabs -->
<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
// 1、引入Vue
import Vue from "vue";
export default {
  name: "GuluTabs",
  components: {},
  props: {
    // 默认选中
    selected: {
      type: String,
      required: true
    },
    // 方向
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  // 定义子孙公开访问属性
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  created() {
    // this.$emit('update:selected','xxx')
  },
  mounted() {
    // 为了下边框有1px滑动效果，需要知道第一次默认选中的组件的排版位置
    // 遍历他的儿子/孙子找到孙子组件中与用户填写的默认选中组件值一样的组件
    this.$children.forEach(vm => {
      if (vm.$options.name === "GuluTabsHead") {
        vm.$children.forEach(item => {
          if (
            item.$options.name === "GuluTabsItem" &&
            item.name === this.selected
          ) {
            console.log(item.$el)
            this.eventBus.$emit("update:selected", this.selected, item);
          }
        });
      }
    });
  },
  methods: {},
  computed: {}
};
</script>
<style lang='scss' scoped>
.tabs {
}
</style>