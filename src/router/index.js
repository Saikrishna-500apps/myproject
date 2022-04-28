import Vue from 'vue'
import Router from 'vue-router'
//import Helloworld from '../components/HelloWorld'
//import New from '../components/14-04-2022/test2'
import Sai from '../components/14-04-2022/test3'
// import Siri from '../components/14-04-2022/test4'
// import TejA from '../components/14-04-2022/test5'
import prop from '../components/18-04-2022/prop2'
// import KrishnA from '../components/18-04-2022/card6'
import Avenger from '../components/19-04-2022/data'
//import KovurU from '../components/19-04-2022/axios'
import KisN from '../components/13-04-2022/bform'
import LakH from '../components/20-04-2022-assignment/my'
import MadH from '../components/20-04-2022-assignment/mytable'
import IndI from '../components/20-04-2022-assignment/my1'
//import BhA from '../components/20-04-2022-assignment/my2'
//import QuE from '../components/20-04-2022-assignment/my3'
import AuE from '../components/20-04-2022-assignment/my4'
import GeU from '../components/21-04-2022/my5'
import test from '../components/test'
import SeP from '../components/21-04-2022/my6'
//import Suv from '../components/21-04-2022/my7'
import SkT from '../components/21-04-2022/my8'
import KtS from '../components/21-04-2022/foreach'
import KtM from '../components/22-04-2022/Axios'
import RnG from '../components/22-04-2022/Promise'
import SkY from '../components/25-04-2022/test1'
import NqT from '../components/25-04-2022/test2'
import SqT from '../components/25-04-2022/test6'
import EmN from '../components/25-04-2022/test7'
import NvY from '../components/25-04-2022/test8'
import MvY from '../components/25-04-2022/test10'
import SvY from '../components/25-04-2022/test4'
import MkT from '../components/25-04-2022/test5'
import MqC from '../components/25-04-2022/test9'
import AsK from '../components/26-04-2022/Q1'
import GsY from'../components/26-04-2022/Q2'
import KgF from '../components/26-04-2022/Q3'
import MsY from '../components/26-04-2022/Q4'
import StU from '../components/26-04-2022/Q5'
//import MnS from '../components/26-04-2022/Q6'
import JsK from '../components/27-204-2022/boot'
import WsK from '../components/28-04-2022/Qa1'
import LsK from '../components/28-04-2022/Qb2'




Vue.use(Router)
const routes = [
    
    {
        path: '/test3',
        name: "test3",
        component: Sai
    },

    {
        path: '/data',
        name: "data",
        component: Avenger
    },
    {
        path: '/prop2',
        name: "prop2",
        component: prop
    },
    {
        path: '/test',
        name: "test",
        component: test
    },
    {
        path: '/bform',
        name: "bform",
        component: KisN
    },
    {
        path: '/my',
        name: "my",
        component: LakH
    },
    {
        path: '/mytable',
        name: "mytable",
        component: MadH
    },

    {
        path: '/my1',
        name: "my1",
        component:IndI
    },

    {
        path: '/my4',
        name: "my4",
        component: AuE
    },
    {
        path: '/my5',
        name: "my5",
        component: GeU
    },

    {
        path: '/my6',
        name: "my6",
        component:SeP

    },
    {
        path: '/my8',
        name: "my8",
        component: SkT
    },
    {
        path: '/foreach',
        name: "foreach",
        component: KtS
    },
    {
        path: '/Axios',
        name: "Axios",
        component: KtM
    },
    {
        path: '/Promise',
        name: "promise",
        component: RnG
    },
    {
        path:'/test1',
        name: "test1",
        component: SkY
    },
    {
        path: '/test2',
        name: "test2",
        component: NqT
    },
    {
        path: '/test6',
        name: "test6",
        component: SqT
    },
    {
        path: '/test7',
        name: "test7",
        component: EmN
    },
    {
        path: '/test8',
        name: "/test8",
        component: NvY
    },
    {
        path: '/test10',
        name: "/test10",
        component: MvY
    },
    {
        path: '/test4',
        name: "/test4",
        component: SvY
    },
    {
        path: '/test5',
        name: "/test5",
        component: MkT
    },
    {
        path: '/test9',
        name: "/test9",
        component: MqC
    },
    {
        path: '/Q1',
        name: "/Q1",
        component: AsK
     },
     {
        path:'/Q2',
        name: "Q2",
        component: GsY
    },
    {
        path: '/Q3',
        name: "/Q3",
        component: KgF
    },

    {
        path: '/Q4',
        name: "/Q4",
        component: MsY
    },
    {
        path: '/Q5',
        name: "/Q5",
        component: StU
    },
    // {
    //     path: '/Q6',
    //     name: "/Q6",
    //     component: MnS
    // },
    {
        path: '/boot',
        name: "boot",
        component: JsK
    },
    {
        path: '/Qa1',
        name: "Qa1",
        component: WsK
    },
    {
        path: '/Qb2',
        name: "Qb2",
        component: LsK
    },
    
    

    
    
    
]
let router = new Router({ routes })
export default router