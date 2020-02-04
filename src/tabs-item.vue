<!-- tabs-item -->
<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluTabsItem",
  components: {},
  props: {
    disabled:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {}
};
</script>
<style lang='scss' scoped>
.tabs-item {
}
</style>