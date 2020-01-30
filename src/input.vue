<!--  -->
<template>
  <!-- <div class="wrapper" :class="{'error':error}"> -->
  <!-- 简写 -->
  <div class="wrapper" :class="{error}">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change',$event.target.value)"
      @input="$emit('input',$event.target.value)"
      @focus="$emit('focus',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
    />
    <!--$event为当前input的详细信息-->
    <!-- 让组件input 支持双向绑定 -->
    <!-- 1. :value="value" -->
    <!-- 2.@input="$emit('input',$event.target.value)" -->
    <!-- 3.<g-input v-model="message"></g-input> -->
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  name: "GuluInput",
  components: {
    Icon
  },
  props: {
    value: {
      type: String,
      default: "张三"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 14px;
$box-show-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  font-size: $font-size;
  // display: inline-block;
  display: inline-flex;
  align-items: center;
  :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-show-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
      &:focus {
        box-shadow: inset 0 1px 3px $red;
        outline: none;
      }
    }
    .icon-error {
      fill: $red;
    }
    .errorMessage {
      color: $red;
    }
  }
}
</style>