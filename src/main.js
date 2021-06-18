import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../src/assets/style/index.less"
//引入富文本编辑器
import Ueditor from '../src/components/ueditor'
//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入mixin
import globalMixin from "./mixin/index"
//引入util
import utils from "./util"
//import "./validate/validate"; //表单验证

Vue.component('ueditor', Ueditor)
Vue.prototype.$utils = utils
Vue.use(ElementUI);
Vue.mixin(globalMixin)


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
