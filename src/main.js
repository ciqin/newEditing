import Vue from 'vue'
import "@/common"   //公共js

import App from './App'
import store from './store'
import router from './router'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'  
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/element-ui.scss'  //element css

import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/permission' // permission control

import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'zh-CN',    // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
      'zh-CN': require('./common/lang/zh'),   // 中文语言包
      'en-US': require('./common/lang/en')    // 英文语言包
    }
})

// import socketApi from '@/flow/socket'
// Vue.prototype.socketApi = socketApi

// qs
import  qs from 'qs'
Vue.prototype.qs = qs

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import  echartswordcloud  from  'echarts-wordcloud'
Vue.use(echartswordcloud)
    // 引入全局css变量
import themes_style from "@/styles/themes.scss";
Vue.prototype.$themes_style = themes_style

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)

new Vue({
    el: '#app',
    i18n,
    router,
    store,
    render: h => h(App)
})