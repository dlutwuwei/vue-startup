import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import routes from './routes/main';


Vue.use(ElementUI)
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

const app = new Vue({
  router
}).$mount('#app')
