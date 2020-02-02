<!--  -->
<template>
  <div class='toast'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
   return {
   
     };
   },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
     
    },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
     
    },
  //方法集合
  methods: {
     
    },
  //监听属性 类似于data概念
  computed: {

  },
  //监控data中的数据变化
  watch: {
     
    },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style lang='scss' scoped>
  //@import url(); 引入公共css类
  $font-size:14px;
  $toast-height:40px;
  $toast-bg:rgba(0,0,0,0.75);
  .toast{
    position: fixed;
    top:0;
    left:50%;
    transform: translateX(-50%);
    font-size:$font-size;
    height:$toast-height;
    display: flex;
    align-items: center;
    background:$toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
    padding: 0 16px;
    color:whitesmoke;
  }
  
</style>