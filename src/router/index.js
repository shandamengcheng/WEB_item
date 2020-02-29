import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/homepage/homepage'
import System from '../views/system/System'
import Aboutus from '../views/us/Aboutus'
import Login from '../views/login/Login'
import Selfpage from '../views/selfpage/selfpage'
import Selfinfor from '../views/selfpage/selfInfor'
import MyTask from '../views/selfpage/myTask'
import Rank from '../views/selfpage/Rank'
import Expert from '../views/selfpage/expert'
import Edit from '../views/selfpage/edit'
import Audit from '../views/selfpage/audit'
import Completed from '../views/selfpage/completed'
import Transcribed from '../views/selfpage/transcribed'
import Alltask from '../views/selfpage/allTask'

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/homepage'
  },
  {
    path:'/homepage',
    component:Homepage
  },
  {
    path:'/system',
    component:System
  },
  {
    path:'/aboutus',
    component:Aboutus
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/selfpage',
    component:Selfpage,
    children:[
      {
        path:'',
        redirect:'selfinfor'
      },
      {
        path:'selfinfor',
        component:Selfinfor
      },
      {
        path:'myTask',
        component:MyTask,
        children:[
          {
            path:'',
            redirect:'alltask'
            // redirect:'transcribed'
          },
          {
            path:'transcribed',
            component:Transcribed
          },
          {
            path:'alltask',
            component:Alltask
          },
          {
            path:'audit',
            component:Audit 
          },
          {
            path:'completed',
            component:Completed
          },
          {
            path:'edit',
            component:Edit 
          },
          
        ]
      },
      {
        path:'rank',
        component:Rank
      },
      {
        path:'expert',
        component:Expert
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
