import Vue from 'vue'
import Router from 'vue-router'
import list from '../components/list'
import article from '../components/article'
import sidebar from '../components/sidebar'
import userInfo from '../components/userInfo'



Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    components: {
      main: list
    }
  }, {
    path: '/topic/:id&author=:name',
    name: 'article',
    components: {
      main: article,
      sidebar: sidebar
    }
  }, {
    path: '/user/:name',
    name: 'userInfo',
    components: {
      main: userInfo
    }
  }]
})
