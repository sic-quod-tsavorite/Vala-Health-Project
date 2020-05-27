import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/Login.vue";
import Mypage from "../components/Mypage.vue";
import Selftest from "../components/Selftest.vue";
import Booking from "../components/Booking.vue";
import BookingInfo from "../components/BookingInfo.vue";
import Msg from "../components/Msg.vue";
import MsgInfo from "../components/MsgInfo.vue";
import Thanks from "../components/Thanks.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/mypage",
    name: "mypage",
    component: Mypage,
  },
  {
    path: "/selftest",
    name: "selftest",
    component: Selftest,
  },
  {
    path: "/booking",
    name: "booking",
    component: Booking,
  },
  {
    path: "/thanks",
    name: "thanks",
    component: Thanks,
  },
  {
    path: "/bookingInfo",
    name: "bookingInfo",
    component: BookingInfo,
  },
  {
    path: "/msg",
    name: "msg",
    component: Msg,
  },
  {
    path: "/msgInfo",
    name: "msgInfo",
    component: MsgInfo,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
