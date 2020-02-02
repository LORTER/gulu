// 运行指令
// ./node_modules/.bin/parcel index.html --no-cache
import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './buttonGroup.vue';
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import Layout from './layout.vue'
import Sider from './sider.vue'
import Header from './header.vue'
// import Toast from './toast.vue'
import plugin from './plugin'



Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('button-group',ButtonGroup);
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-layout',Layout)
Vue.component('g-sider',Sider)
Vue.component('g-header',Header)
// Vue.component('g-toast',Toast)
Vue.use(plugin)
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false,
        message:'input的双向绑定事件'
    },
    created(){
        // this.$toast();
    },
    methods:{
        inputChange(e){
            console.log('change',e)
        },
        inputValue(e){
            console.log('value',e)
        },
        inputFocus(e){
            console.log('focus',e)

        },
        inputBlur(e){
            console.log('blur',e)
        },
        showToast(){
    
    this.$toast('<div>我下课时都能付款</div><div>asjdbjsd</div><i>弹出层！<i>',{
                closeButton:{
                    text:'知道',
                    callback(toast){
                        console.log('用户说他知道了');
                        // 这样执行了回调后，又可以调用组件内部的方法
                        console.log(toast.log())
                    },
                    
                },
                enableHtml:false
            })
        }
    }
})
