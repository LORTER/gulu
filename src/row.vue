<!--  -->
<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluRow",
  components: {},
  props: {
    gutter: [Number, String],
    align:{
      type:String,
      validator(value){
        return ['left','right','center'].indexOf(value)>=0
      }
    },
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    //  console.log('row created')
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    //  console.log('row mounted')
    // 父元素的props里的值传给子元素，子元素在data里定义
    this.$children.forEach(vm => {
      // console.log(vm.gutter,1)
      vm.gutter = this.gutter;
      // console.log(vm.gutter,2)
    });
  },
  //方法集合
  methods: {},
  //监听属性 类似于data概念
  computed: {
    rowStyle() {
      return {
        marginLeft: -this.gutter / 2 + "px",
        marginRight: -this.gutter / 2 + "px"
      };
    },
    rowClass(){
      let {align} = this;
      return [align && `align-${this.align}`]
    }
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.row {
  display: flex;
  flex-wrap: wrap;
  &.align-left{
    justify-content: flex-start;
  }
  &.align-center{
    justify-content: center;
  }
  &.align-right{
    justify-content: flex-end;
  }
}
</style>