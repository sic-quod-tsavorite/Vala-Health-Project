import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/login.vue'
import Mypage from '../components/mypage.vue'
import Survey from '../components/survey.vue'
import Booking from '../components/booking.vue'
import BookingInfo from '../components/bookingInfo.vue'
import Msg from '../components/msg.vue'
import MsgInfo from '../components/msgInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: Mypage
  },
  {
    path: '/survey',
    name: 'survey',
    component: Survey
  },
  {
    path: '/booking',
    name: 'booking',
    component: Booking
  },
  {
    path: '/thanks',
    name: 'thanks',
    component: Thanks
  },
  {
    path: '/bookingInfo',
    name: 'bookingInfo',
    component: BookingInfo
  },
  {
    path: '/msg',
    name: 'msg',
    component: Msg
  },
  {
  path: '/msgInfo',
    name: 'msgInfo',
    component: MsgInfo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
