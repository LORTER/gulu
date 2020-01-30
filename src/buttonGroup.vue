<!--  -->
<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluButtonGroup",
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    //   遍历查看当前组件的子元素，
    // 如果不是button就警告
    for (let node of this.$el.children) {
      //   js中toLowerCase()方法的作用:  把字符中的所有字母全部转换为小写
      let name = node.nodeName.toLowerCase();
      if (node.nodeName.toLowerCase() !== "button") {
        console.warn(
          `button-group 的子元素应全是 g-button,但是你写了一个${name}`
        );
      }
    }
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .g-button {
    border-radius: 0;
    // 因为hover边框会变色，所以只会显示三条边，不可取
    // &:not(:first-child){
    //     border-left:none;
    // }
    // 解决办法
    // 第一步,不是第一个元素的margin向左偏移1px
    &:not(:first-child) {
      margin-left: -1px;
    }
    // 第二步
    &:hover {
      position: relative;
      z-index: 1;
    }
    &:first-child {
      // 左上角
      border-top-left-radius: var(--border-radius);
      // 左下角
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
  }
}
</style>