import Vue from 'vue'

import '@/styles/index.scss' // global css

import '@/icons' // icon

// bus
import VueBus from 'vue-bus';
Vue.use(VueBus);

// 时间格式转换
import moment from 'moment/moment';
Vue.filter('moment', function (value, formatString) {
    formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
    // return moment(value).format(formatString); // value可以是普通日期 20170723
    return moment.unix(value).format(formatString); // 这是时间戳转时间
});

// 全局过滤器
import * as custom from '@/utils/filters'
// 导出的是对象，可以直接通过 key 和 value 来获得过滤器的名和过滤器的方法
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})

Vue.config.productionTip = false
