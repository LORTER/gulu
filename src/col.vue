<!--  -->
<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'GuluCol',
  components: {},
  props:{
      span:[Number,String]
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {},
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.col {
  height: 100px;
  background: grey;
  width: 50%;
  border: 1px solid red;

  $class: col-;
//   scss的forEch循环生成24个class
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }
//   生成代码
// .col.col-1 {
//   width: 4.1666666667%;
// }
// .col.col-2 {
//   width: 8.3333333333%;
// }
// .col.col-3 {
//   width: 12.5%;
// }
// .col.col-4 {
//   width: 16.6666666667%;
// }
// .col.col-5 {
//   width: 20.8333333333%;
// }
// .col.col-6 {
//   width: 25%;
// }
// .col.col-7 {
//   width: 29.1666666667%;
// }
// .col.col-8 {
//   width: 33.3333333333%;
// }
// .col.col-9 {
//   width: 37.5%;
// }
// .col.col-10 {
//   width: 41.6666666667%;
// }
// .col.col-11 {
//   width: 45.8333333333%;
// }
// .col.col-12 {
//   width: 50%;
// }
// .col.col-13 {
//   width: 54.1666666667%;
// }
}
</style>