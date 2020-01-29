// 运行指令
// ./node_modules/.bin/parcel index.html --no-cache
import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './buttonGroup.vue';
import Input from './input.vue'

Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('button-group',ButtonGroup);
Vue.component('g-input',Input)
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false
    },
    methods:{
        inputChange(e){
            console.log('change',e.target.value)
        },
        inputValue(e){
            console.log('value',e.target.value)
        },
        inputFocus(e){
            console.log('focus',e.target.value)

        },
        inputBlur(e){
            console.log('blur',e.target.value)
        }
    }
})
