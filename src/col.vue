<!--  -->
<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = value => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "GuluCol",
  components: {},
  props: {
    span: [Number, String],
    offset: [Number, String],
    phone: {
      type: [Number, String],
      validator // validator:validator      优化成
    },
    ipad: {
      type: [Number, String],
      validator
    },
    narrowPc: {
      type: [Number, String],
      validator
    },
    pc: {
      type: [Number, String],
      validator
    },
    widePc: {
      type: [Number, String],
      validator
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colClass() {
      let { span, offset, phone,ipad,narrowPc,pc,widePc } = this;
      let phoneClass = [];
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(phone ? [`col-phone-${phone.span}`] : []),
        ...(ipad ? [`col-ipad-${ipad.span}`] : []),
        ...(phone ? [`col-narrow-pc-${narrowPc.span}`] : []),
        ...(phone ? [`col-pc-${pc.span}`] : []),
        ...(phone ? [`col-wide-pc-${widePc.span}`] : []),
      ];
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    }
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.col {
  // height: 100px;
  background: grey;
  // width: 50%;
  // border: 1px solid red;

  $class-prefix: col-;
  //   scss的forEch循环生成24个class
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
  // 手机尺寸
  @media (max-width: 576px) {
    $class-prefix: col-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  // ipad
  @media (min-width: 577px) and (max-width: 768px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  // 窄pc  narrow-pc
  @media (min-width: 769px) and (max-width: 992px) {
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  //  pc
  @media (min-width: 993px) and (max-width: 1200px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  // 大屏pc  wide-pc
  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  //   生成代码
  // .col.col-1 {
  //   width: 4.1666666667%;
  // }
  // .col.col-2 {
  //   width: 8.3333333333%;
  // }
  // .col.col-3 {
  //   width: 12.5%;
  // }
  // .col.col-4 {
  //   width: 16.6666666667%;
  // }
  // .col.col-5 {
  //   width: 20.8333333333%;
  // }
  // .col.col-6 {
  //   width: 25%;
  // }
  // .col.col-7 {
  //   width: 29.1666666667%;
  // }
  // .col.col-8 {
  //   width: 33.3333333333%;
  // }
  // .col.col-9 {
  //   width: 37.5%;
  // }
  // .col.col-10 {
  //   width: 41.6666666667%;
  // }
  // .col.col-11 {
  //   width: 45.8333333333%;
  // }
  // .col.col-12 {
  //   width: 50%;
  // }
  // .col.col-13 {
  //   width: 54.1666666667%;
  // }
}
</style>