// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"


Vue.config.productionTip = false;
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

Vue.filter('formatDate', function (value) { //时间过滤
  var copyVal = new Date(value).valueOf();
  var now = Date.now();
  if (parseInt((now - copyVal) / 1000) < 30) {
    return ''
  }
  if (parseInt((now - copyVal) / 1000) < 30) {
    return '刚刚';
  } else if (parseInt((now - copyVal) / 1000 / 60) < 30) {
    return parseInt((now - copyVal) / 1000 / 60) + '秒前';
  } else if (parseInt((now - copyVal) / 1000 / 60) < 60) {
    return parseInt((now - copyVal) / 1000 / 60) + '分前';
  } else if (parseInt((now - copyVal) / 1000 / 60 / 60) < 24) {
    return parseInt((now - copyVal) / 1000 / 60 / 60) + '小时前'
  } else if (parseInt((now - copyVal) / 1000 / 60 / 60 / 24) < 31) {
    return parseInt((now - copyVal) / 1000 / 60 / 60 / 24) + '天前'
  } else if (parseInt((now - copyVal) / 1000 / 60 / 60 / 24 / 31) < 12) {
    return parseInt((now - copyVal) / 1000 / 60 / 60 / 24  / 31) + '月前'
  } else {
    return parseInt((now - copyVal) / 1000 / 60 / 60 / 24 / 31 / 12) + '年前'
  }
})
