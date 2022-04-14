import Vue from 'vue'
import Router from 'vue-router'
import Helloworld from '../components/HelloWorld'

// import test from '../components/test'
import crm from '../components/13-04-2022/crm'
Vue.use(Router)
const routes=[
{
path:'/about',
name:"About",
component:Helloworld
},

{
    path:'/crm',
    name:"crm",
    component:crm
},
]
let router =new Router ({routes})
export default router