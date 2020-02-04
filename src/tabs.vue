<!-- tabs -->
<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
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
    return {};
  },
  created() {
    // this.$emit('update:selected','xxx')
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>
<style lang='scss' scoped>
.tabs {
}
</style>