<!--  -->
<template>
  <div class='row' :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name:'GuluRow',
  components: {

  },
  props:{
    gutter:[Number,String]
  },
  data() {
   return {
   
     };
   },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    //  console.log('row created')
    },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    //  console.log('row mounted')
    // 父元素的props里的值传给子元素，子元素在data里定义
    this.$children.forEach((vm)=>{
      // console.log(vm.gutter,1)
      vm.gutter=this.gutter
      // console.log(vm.gutter,2)
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
  .row{
      display:flex;
  }
</style>