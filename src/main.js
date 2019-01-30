import Vue from 'vue';
import App from './App.vue';

// 引入 Element 框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'normalize.css/normalize.css';

// 引入公共样式
import './styles/index.scss';

// 引入路由
import router from './router';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
