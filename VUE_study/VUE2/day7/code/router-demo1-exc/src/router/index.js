import Vue from "vue";
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Movie from '@/components/Movie.vue'
import Tab1 from '@/components/tabs/Tab1'
import Tab2 from '@/components/tabs/Tab2'
import Tab3 from '@/components/tabs/Tab3'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/home',
    component: Home
  }, {
    path: '/about',
    component: About,
    children: [{
        path: '',
        component: Tab1
      },
      {
        path: 'tab2',
        component: Tab2
      }
    ]
  }, {
    path: '/movie',
    component: Movie,
    children:[{
      path:':mid',
      component: Tab3,
      props:true,}
    ]
    
  }]
})

export default router