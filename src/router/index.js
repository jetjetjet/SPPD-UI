import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store";

//Adding layouts router.
const BlankLayout = () => import("@/layouts/BlankLayout")
const Layout1 = () => import("@/layouts/backend/Layout-1")

//Adding page content router.
const Dashbord1 = () => import('@/views/backend/Dashboards/Dashbord1')

//icon elements
const Dripicons = () => import('@/views/backend/Icons/Dripicons')
const FontAwsome = () => import('@/views/backend/Icons/FontAwsome')
const LineAwsome = () => import('@/views/backend/Icons/LineAwsome')
const Remixicons = () => import('@/views/backend/Icons/Remixicons')

//chart elements
const AmChart = () => import('@/views/backend/Chart/AmChart')
const ApexChart = () => import('@/views/backend/Chart/ApexChart')
const HighChart = () => import('@/views/backend/Chart/HighChart')
const MorrisChart = () => import('@/views/backend/Chart/MorrisChart')

//auth elements
const Login = () => import('@/views/Auth/Login')
const RecoverPassword = () => import('@/views/backend/Auth/RecoverPassword')

const JabatanList = () => import('@/views/Master/Jabatan/Lists')
const JabatanEdit = () => import('@/views/Master/Jabatan/Edit')
const JabatanAdd = () => import('@/views/Master/Jabatan/Add')

const ProfileEdit = () => import('@/views/Profile/Edit')

const UserList = () => import('@/views/Master/User/Lists')
const UserEdit = () => import('@/views/Master/User/Edit')
const UserAdd = () => import('@/views/Master/User/Add')

Vue.use(VueRouter)

const childMaster = () => [
  {
    path: 'jabatan',
    name: 'Master.jabatan',
    meta: { name : 'JabatanList', requiresAuth: true},
    component: JabatanList
  },
  {
    path: 'jabatan/edit/:id',
    name: 'Edit.jabatan',
    meta: { name : 'Master Jabatan', requiresAuth: true},
    component: JabatanEdit
  },
  {
    path: 'jabatan/add',
    name: 'Add.jabatan',
    meta: { name : 'Master Jabatan', requiresAuth: true},
    component: JabatanAdd
  },{
    path: 'user',
    name: 'Master.user',
    meta: { name : 'UserList', requiresAuth: true},
    component: UserList
  },
  {
    path: 'user/edit/:id',
    name: 'Edit.user',
    meta: { name : 'Master User', requiresAuth: true},
    component: UserEdit
  },
  {
    path: 'user/add',
    name: 'Add.user',
    meta: { name : 'Master User', requiresAuth: true},
    component: UserAdd
  },
];

const childRoute = () => [
  {
    path: '/profile',
    name: 'user-profile',
    meta: { name: 'user-profile', requiresAuth: true },
    component: ProfileEdit
  },
  ///////////////////////////////////////////
  {
    path: '',
    name: 'layout.dashboard1',
    meta: {  name: 'Dashboard1', requiresAuth: true },
    component: Dashbord1
  },
  {
    path: 'icon-dripicons',
    name: 'icon.dripicon',
    meta: {  name: 'Dripicons ' },
    component:Dripicons
  },{
    path: 'icon-fontawsome',
    name: 'icon.fontawsome',
    meta: {  name: 'FontAwsome ' },
    component:FontAwsome
  },{
    path: 'icon-lineawsome',
    name: 'icon.lineawsome',
    meta: {  name: 'LineAwsome ' },
    component:LineAwsome
  },{
    path: 'icon-remixicon',
    name: 'icon.remixicon',
    meta: {  name: 'Remixicon ' },
    component:Remixicons
  },
  {
    path: 'am-chart',
    name: 'chart.amchart',
    meta: {  name: 'Amchart' },
    component:AmChart
  },
  {
    path: 'apex-chart',
    name: 'chart.apexchart',
    meta: {  name: 'Apexchart' },
    component:ApexChart
  },
  {
    path: 'high-chart',
    name: 'chart.highchart',
    meta: {  name: 'Highchart' },
    component:HighChart
  },
  {
    path: 'morris-chart',
    name: 'chart.morrischart',
    meta: {  name: 'Morrischart' },
    component:MorrisChart
  }

]
const authchildRoute = () =>[
  {
    path: 'recover-password',
    name: 'auth.recover-password',
    meta: {  name: 'Recover Password' },
    component: RecoverPassword
  }
]

const routes = [
  {
    path: '/',
    name: '',
    component: Layout1,
    children: childRoute()
  },
  {
    path: '/auth',
    name: 'auth',
    component: BlankLayout,
    children: authchildRoute()
  },
  {
    path: '/master',
    name: 'Master',
    component: Layout1,
    children: childMaster()
  },
  {
    path: '/login',
    name: 'Login',
    meta: {  name: 'Login', guest: true },
    component: Login
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to.matched.some((record) => record.meta.requiresAuth))
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // console.log(2,store.getters.isAuthenticated)
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router
