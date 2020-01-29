<!--  -->
<template>
  <!-- 这样实现icon在按钮的左边 还是右边  代码过于繁杂-->
  <!-- <button class="g-button" v-if="iconPosition==='right'">
      <svg class="icon" v-if="icon">
        <use :xlink:href="`#i-${icon}`" />
      </svg>
      <slot></slot>
    </button>
    <button class="g-button" v-else>
      <slot></slot>
      <svg class="icon" v-if="icon">
        <use :xlink:href="`#i-${icon}`" />
      </svg>
  </button>-->
  <!-- 优化方法  用css来控制icon在文字前还是后-->
  <!-- 把iconPosition当做class的key值 -->
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')"
  ><!--简写的@click="function(){this.$emit('click')}"-->
    <!-- 把icon抽象成组件 -->
    <!-- <svg class="icon" v-if="icon">
      <use :xlink:href="`#i-${icon}`" />
    </svg>-->
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" name="loading" v-if="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name:'GuluButton',
  // props: ["icon", "iconPosition"]
  props: {
    icon: {},
    loading:{
      type:Boolean,
      default:false
    },
    iconPosition: {
      type: String,
      default: "left",
      // props传入值得钩子
      // 属性检查器
      validator(value) {
        // if(value!=='left' && value!=='right' && value!==''){
        //   return false
        // }else{
        //   return true
        // }
        // 简化
        // return value !== "left" && value !== "right" && value !== ""
        //   ? false
        //   : true;
        // 或者
        return !(value !== "left" && value !== "right" && value !== "");
      }
    }
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  font-size: var(--font-size);
  height: var(--botton-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
    > .content {
      order: 1;
    }
  }
  &:hover {
    border-color: var(--border-color-hover);
    // background-color: #f46;
  }
  &:active {
    background-color: var(--button-active-bg);
  }
&:focus {
    outline: none;
  }
  .loading{
    animation:spin 1.5s infinite linear;
  }
}
</style>