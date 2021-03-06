<!--  -->
<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default"></div>
      </div>
      <template v-if="closeButton">
        <div class="line" ref="line"></div>
        <span class="close" @click="onClickClose">{{closeButton.text}}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluToast",
  components: {},
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 200
    },
    // 关闭按钮+回调
    closeButton: {
      type: Object,
      default() {
        return {
          //return后每个调用的组件就不是引用值，可复用
          text: "关闭",
          callback: undefined
        };
      }
    },
    // 是否支持传入html代码
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 1000);
    }

    this.$nextTick(() => {
      this.$refs.line.style.height = `${
        this.$refs.toast.getBoundingClientRect().height
      }px`;
    });
  },
  //方法集合
  methods: {
    log() {
      console.log("示例方法！");
    },
    close() {
      //  组件删除
      this.$el.remove();
      // 向外触发一个beforeClose的事件
      this.$emit("beforeClose");
      //  移除所有事件
      this.$destroy();
    },
    onClickClose() {
      this.close();
      //如果有closeButton，并且closeButton中的callback为函数，则执行回调
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        // 这个回调函数执行，把当前this在传里面去，这样外界就可调用组件内的方法了
        this.closeButton.callback(this);
      }
    }
  },
  //监听属性 类似于data概念
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true
      };
    }
  },
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
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$animation-duration:300ms;
@keyframes side-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes side-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes side-middle {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: side-down $animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    .toast {
      animation: side-middle $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: side-up $animation-duration;
    }
  }
  .toast {
    font-size: $font-size;
    min-height: $toast-min-height;
    display: flex;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    padding: 0px 16px;
    color: whitesmoke;

    .message {
      padding: 8px 0;
    }
    .line {
      height: 100%;
      border-left: 1px solid #f46;
      margin-left: 16px;
    }
    .close {
      padding-left: 16px;
      flex-shrink: 0;
    }
  }
}
</style>