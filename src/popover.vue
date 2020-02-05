<!-- popover -->
<template>
<!-- 这里的阻止冒泡是防止冒泡到document那个监听click事件的函数，触发两次visible=false -->
  <div class="popover" @click.stop="xxx">
      <!-- 哪里点click不需要隐藏，就阻止冒泡到父元素的click事件 -->
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
// 1.需求，如果提示信息展开，用户点击别的地方，关闭展开的消息框
// ？怎么监听   看监听函数xxx()
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
      console.log(this.visible, "切换visible");
      if (this.visible === true) {
        console.log("如果visibel==true");
        //   添加一个异步函数
        // 为什么使用this.$nextTick不可以？
        // 问题，如果点弹出框，
        setTimeout(() => {
          console.log("新增  document click 监听器", this.visible);
          //   ()=>{}         箭头函数和下面的用法相同
          //   function(){}.bind(this)  但是会返回一个新的函数,那样会关闭它返回的哪个函数
          //   监听用户是否点了页面其他的地方
          let eventHeadler = () => {
            // 如果点击了就关闭消息框
            this.visible = false;
            console.log("删除监听器", this.visible);
            // 顺便关闭时间的监听
            document.removeEventListener("click", eventHeadler);
            console.log("点击body就关闭popover", this.visible);
          };
          document.addEventListener("click", eventHeadler);
        });
      }
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