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
import Toast from './toast.vue'
import plugin from './plugin'
import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsBody from './tabs-body.vue'
import TabsItem from './tabs-item.vue'
import TabsPane from './tabs-pane.vue'
import Popover from './popover.vue'



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
Vue.component('g-toast',Toast)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-popover',Popover)
Vue.use(plugin)
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false,
        message:'input的双向绑定事件',
        selectedTab:'sports'
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
        showToastTop(){
            this.$toast('<div style="color:red">支持html代码</div><div>上弹出层！</div>',{
                closeButton:{
                    text:'知道了',
                    // toast为返回的VUE组件实例this
                    callback(toast){
                        console.log('用户说他知道了上弹出层！');
                        // 这样执行了回调后，又可以调用组件内部的方法
                        console.log(toast.log())
                    },
                },
                // 是否支持html代码传入
                enableHtml:true
            })
        },
        showToastMiddle(){
            this.$toast('<div style="color:red">不支持html代码</div><div>中弹出层！</div>',{
                closeButton:{
                    text:'知道了',
                    callback(toast){
                        console.log('用户说他知道了中弹出层！');
                        // 这样执行了回调后，又可以调用组件内部的方法
                        console.log(toast.log())
                    },
                },
                enableHtml:false,
                position:'middle'
            })
        },
        showToastBottom(){
            this.$toast('<div style="color:red">支持html代码</div><div>下弹出层！</div>',{
                closeButton:{
                    text:'知道了',
                    callback(toast){
                        console.log('用户说他知道了下弹出层！');
                        // 这样执行了回调后，又可以调用组件内部的方法
                        console.log(toast.log())
                    },
                },
                enableHtml:true,
                position:'bottom'
            })
        },
        verifyToast(){
            this.$toast(`您的目前成绩为${parseInt(Math.random()*100)},需要继续补充代码！`,{
                closeButton:{
                    text:'继续学习',
                    callback(toast){
                        console.log('用户说他知道了继续学习！');
                        // 这样执行了回调后，又可以调用组件内部的方法
                        console.log(toast.log())
                    },
                },
                enableHtml:false,
                position:'middle'
            })
        }
    }
})
