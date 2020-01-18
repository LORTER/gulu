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
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
    <svg class="icon" v-if="icon">
      <use :xlink:href="`#i-${icon}`" />
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: ["icon", "iconPosition"]
};
</script>
<style lang='scss'>
//@import url(); 引入公共css类
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
  vertical-align: top;
  > .icon {
    order: 1;
    margin-right:.1em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right:0;
      margin-left:.1em;
    }
    > .content {
      order: 1;
    }
  }
  &:hover {
    border-color: var(--border-color-hover);
    background-color:#f46;
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>