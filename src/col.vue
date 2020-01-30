<!--  -->
<template>
  <div class="col" :class="[span&&`col-${span}`,offset && `offset-${offset}`]" :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
  <div style="border:1px solid green;height:100px;">
    <slot></slot>
  </div>
  </div>
</template>

<script>
export default {
    name:'GuluCol',
  components: {},
  props:{
      span:[Number,String],
      offset:[Number,String],
  },
  data() {
    return {
      gutter:0
    };
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    //  console.log('col created')
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    //  console.log('col mounted')
  },
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
  // height: 100px;
  // background: grey;
  width: 50%;
  // border: 1px solid red;

  $class-prefix: col-;
//   scss的forEch循环生成24个class
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
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