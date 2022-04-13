import Vue from 'vue'
import Router from 'vue-router'
import Helloworld from '../components/HelloWorld'

// import test from '../components/test'
import bforms from '../components/bform'
Vue.use(Router)
const routes=[
{
path:'/about',
name:"About",
component:Helloworld
},

{
    path:'/bforms',
    name:"bforms",
    component:bforms
}
]
let router =new Router ({routes})
export default router