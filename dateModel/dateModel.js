import Vue from 'vue';
// 父组件引用子组件
import testMain from './testMain.vue';

// 单独组件
// import dateModel from './DateModel.vue';
import axios from '../../lib/axios.config';

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

const FastClick = require('fastclick')
FastClick.attach(document.body);

new Vue({
    el: '#app',
    template: '<testMain/>',
    components: { testMain }
})