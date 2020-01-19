<!--  -->
<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
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
<style lang='scss'>
//@import url(); 引入公共css类
.g-button-group{
    display:inline-flex;
    vertical-align: middle;
    >.g-button{
        border-radius: 0;
        // 因为hover边框会变色，所以只会显示三条边，不可取
        // &:not(:first-child){
        //     border-left:none;
        // }
        // 解决办法
        // 第一步
        margin-left:-1px;
        // 第二步
        &:hover{
            position: relative;
            z-index:1;
        }
        &:first-child{
            // 左上角
            border-top-left-radius: var(--border-radius);
            // 左下角
            border-bottom-left-radius: var(--border-radius);
        }
        &:last-child{
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }
    }
}
</style>