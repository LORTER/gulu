import Toast from './toast'


let currentToast

// vue写一个插件
// 公开一个install方法
export default {
    install(Vue,options){
        // 这样在vue里执行this.$toast,则可以执行这个方法
        Vue.prototype.$toast=function(message,toastoptions){
            // alert(message)   不用alert创建div
            if(currentToast){
                currentToast.close();
            }
           currentToast= createToast({Vue,message,propsData:toastoptions});
        }
    }
}

// 将内部函数独立出来了
// 用js挂载.vue组件/动态创建toast实例
function createToast({Vue,message,propsData}){
    let Constructor=Vue.extend(Toast)
    let toast = new Constructor({
        propsData:propsData
    });
    // 把调用时的this.$toast("message")挂载到toast组件的slot，为默认内容
    toast.$slots.default=message
    // 这时候toast已经出现在了内存里面，还没展示到页面
    toast.$mount();
    // console.log(toast.$el)为 toast组件的实例 
    // 把元素放到body里面
    document.body.appendChild(toast.$el);
    return toast
}