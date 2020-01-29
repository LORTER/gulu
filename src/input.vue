<!--  -->
<template>
  <!-- <div class="wrapper" :class="{'error':error}"> -->
  <!-- 简写 -->
  <div class="wrapper" :class="{error}">
    <input :value="value" :disabled="disabled" :readonly="readonly" type="text" />
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