// 运行指令
// ./node_modules/.bin/parcel index.html --no-cache
import Vue from 'vue';
import Button from './button.vue';

Vue.component('g-button',Button)
new Vue({
    el:'#app',
})