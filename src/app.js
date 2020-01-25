// 运行指令
// ./node_modules/.bin/parcel index.html --no-cache
import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './buttonGroup.vue';

Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('button-group',ButtonGroup)
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false
    },
})

import chai from 'chai'
const expect=chai.expect;
// 单元测试

{
    const Constructor =Vue.extend(Button)
    const vm=new Constructor({
        propsData:{
            // 动态创建的button并传值
            icon:'settings'
        }
    });
    // 动态创建button
    vm.$mount();
    let useElement=vm.$el.querySelector('use');
    let href=useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-settings');
    // 清理页面/内存
    vm.$el.remove();
    vm.$destroy();
}

{
    const Constructor =Vue.extend(Button)
    const vm=new Constructor({
        propsData:{
            // 动态创建的button并传值
            icon:'settings',
            loading:true
        }
    });
    // 动态创建button
    vm.$mount();
    let useElement=vm.$el.querySelector('use')
    let href=useElement.getAttribute('xlink:href')
    // 期望什么等于什么
    expect(href).to.eq('#i-loading')
    // 清理页面/内存
    vm.$el.remove();
    vm.$destroy();
}
// border的order
{
    // 动态创建div元素，并添加到body
    const div=document.createElement('div');
    document.body.appendChild(div)
    const Constructor =Vue.extend(Button)
    const vm=new Constructor({
        propsData:{
            // 动态创建的button并传值
            icon:'settings'
        }
    });
    // 动态创建button
    vm.$mount(div);
    let svg=vm.$el.querySelector('svg')
    let {order}=window.getComputedStyle(svg)
    // 期望什么等于什么
    expect(order).to.eq('1');
    // 清理页面/内存
    vm.$el.remove();
    vm.$destroy();
}
{
    // 动态创建div元素，并添加到body
    const div=document.createElement('div');
    document.body.appendChild(div)
    const Constructor =Vue.extend(Button)
    const vm=new Constructor({
        propsData:{
            // 动态创建的button并传值
            icon:'settings',
            iconPosition:'right'
        }
    });
    // 动态创建button
    vm.$mount(div);
    let svg=vm.$el.querySelector('svg')
    let {order}=window.getComputedStyle(svg)
    // 期望什么等于什么
    expect(order).to.eq('2')
    // 清理页面/内存
    vm.$el.remove();
    vm.$destroy();
}
// click事件
// mock
{
    // 动态创建div元素，并添加到body
   
    const Constructor =Vue.extend(Button)
    const vm=new Constructor({
        propsData:{
            // 动态创建的button并传值
            icon:'settings'
        }
    });
    // 动态创建button
    vm.$mount();
    // 监听button组件的点击事件
    vm.$on('click',function(){
        console.log(1)
    })
    let button=vm.$el
    button.click();
    // 期望什么等于什么
    // 期望上面函数被执行
    
}