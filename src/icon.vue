<!--  -->
<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script>
export default {
  name: "GuluIcon",
  components: {},
  props: {
    name: {}
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.g-icon {
  width: 1em;
  height: 1em;
}
</style>