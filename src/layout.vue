<!--  -->
<template>
  <div class='layout' :class="layoutClass">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'GuluLayout',
  components: {

  },
  data() {
   return {
      layoutClass:{
        hasSider:false
      }
     };
   },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
     
    },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    //  探测子集里面是否包含sider组件
    this.$children.forEach((vm)=>{
      if(vm.$options.name==='GuluSider'){
        this.layoutClass.hasSider=true
      }
    })
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
  .layout{
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      &.hasSider{
        flex-direction: row;
      }
  }
</style>