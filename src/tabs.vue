<!-- tabs -->
<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
// 1、引入Vue
import Vue from 'vue'
export default {
  name: "GuluTabs",
  components: {},
  props:{
    // 默认选中
    selected:{
      type:String,
      required:true
    },
    // 方向
    direction:{
      type:String,
      default:'horizontal',
      validator(value){
        return ['horizontal','vertical'].indexOf(value)>=0;
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  // 定义子孙公开访问属性
  provide(){
    return {
      eventBus:this.eventBus
    }
  },
  created() {
    // this.$emit('update:selected','xxx')
  },
  mounted() {
    this.eventBus.$emit('update:selected',this.selected)
  },
  methods: {},
  computed: {}
};
</script>
<style lang='scss' scoped>
.tabs {
}
</style>