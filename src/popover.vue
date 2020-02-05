<!-- popover -->
<template>
  <div class="popover" @click="xxx">
    <div class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluPopover",
  components: {},
  props: {},
  data() {
    return {
      visible: false
    };
  },
  created() {},
  mounted() {},
  methods: {
    xxx() {
      this.visible = !this.visible;
    }
  },
  computed: {}
};
</script>
<style lang='scss' scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>