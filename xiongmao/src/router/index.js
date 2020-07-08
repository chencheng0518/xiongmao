import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/Home/Home.vue'
import Middle from '../page/Middle/middle'
import Search from '../page/Search/search.vue'
import Title from '../page/Search/Title/title.vue';
import TitleBase from '../page/Search/TitleBase/titlebase.vue';
import Tag from '../page/Tag/tag.vue';
import Category from '../page/Category/category0.vue';
import Column from '../page/Column/column.vue';
import Hot from '../page/Hot/hot.vue';
import Subhot from '../page/Hot/Subhot/subhot.vue';
import Details from '../page/Details/details.vue';
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    redirect:'/middle',
    children: [
      {
        path: '/middle',
        name: 'middle',
        component:Middle
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
    redirect:'/title',
    children:[
      {
        path: '/title',
        name: 'title',
        component:Title
      },
      {
        path: '/titleBase/:word',
        name: 'titleBase',
        component:TitleBase
      }
    ]
  },
  {
    path: '/tag/:id',
    name: 'tag',
    component:Tag
  },
  {
    path: '/column/:id',
    name: 'column',
    component: Column
  },
  {
    path: '/Category/:id',
    name: 'Category',
    component:Category
  },
  {
    path: '/hot/:id',
    name: 'hot',
    component: Hot,
    children: [
      {
        path: '/subhot/:id',
        name: 'subhot',
        component:Subhot
      }
    ]
  },
  {
    path: '/details/:id',
    name: 'details',
    component:Details
  }
]

const router = new VueRouter({
  routes
})

export default router
