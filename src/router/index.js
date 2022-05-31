import Vue from 'vue'
import Router from 'vue-router'
//import Helloworld from '../components/HelloWorld'
//import New from '../components/14-04-2022/test2'
import Sai from '../components/14-04-2022/test3'
// import Siri from '../components/14-04-2022/test4'
// import TejA from '../components/14-04-2022/test5'
//import prop from '../components/25-05-2022/prop'
import prop2 from '../components/25-05-2022/prop2'
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
import FgR from '../components/03-05-2022/F3'
import GmR from '../components/03-05-2022/F7'
import Q5R from '../components/03-05-2022/F5'
import Q4R from '../components/03-05-2022/F4'
import Q8R from '../components/03-05-2022/F8'
//import Q6R from '../components/03-05-2022/F6'
import Q9R from '../components/03-05-2022/F9'
import Q10R from '../components/03-05-2022/F10'
import C1R from '../components/04-05-2022/Crud'
import M2C from '../components/05-05-2022/T1'
import M3C from '../components/05-05-2022/T2'
import M4C from '../components/05-05-2022/col'
import M5C from '../components/06-05-2022/tab'
import M6C from '../components/06-05-2022/tab2'

import M8C from '../components/09-05-2022/S1'
import M9C from '../components/10-05-2022/p'
import M10C from '../components/10-05-2022/WaT'
import M11C from '../components/11-05-2022/SaI'
import M12C from '../components/10-05-2022/QQ4'
import M13C from '../components/13-05-2022/MyE'
import M14C from '../components/14-05-2022/Uv'
import M15C from '../components/16-05-2022/StU'
import M16C from '../components/16-05-2022/Json'
//import M17C from '../components/22-04-2022/Js'
import M18C from '../components/17-05-2022/Form'
import M19C from '../components/18-05-2022/MaP'
import M20C from '../components/18-05-2022/FilteR'
import M21C from '../components/18-05-2022/ForEach2'
import M22C from '../components/18-05-2022/ProjecT'
import M23C from '../components/18-05-2022/SignUp'
import M24C from '../components/18-05-2022/DisplaY'
import M25C from '../components/18-05-2022/CombinE'
import M26C from '../components/18-05-2022/TexT'
import M27C from '../components/23-05-2022/LogIn'
import M28C from '../components/23-05-2022/AdD'
import My1 from '../components/26-05-2022/My1'
import My2 from '../components/26-05-2022/My2'
import Prop1 from '../components/26-05-2022/Prop1'
import dropdown from '../components/26-05-2022/dropdown'
import StudentData from '../components/27-05-2022/StudentData'
import Furniture from '../components/31-05-2022/Furniture'

 
Vue.use(Router)
const routes = [
    
    {
        path: '/test3',
        name: "test3",
        component: Sai
    },
    {
        path: '/Furniture',
        name: "Furniture",
        component: Furniture
    },
    {
        path: '/StudentData',
        name: "StudentData",
        component: StudentData
    },
    
    {
        path: '/dropdown',
        name: "dropdown",
        component: dropdown
    },


    {
        path: '/data',
        name: "data",
        component: Avenger
    },
    {
        path: '/prop2',
        name: "prop2",
        component: prop2
    },
    // {
    //     path: '/prop',
    //     name: "prop",
    //     component: prop
    // },
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

    // {
    //     path: '/Qc3',
    //     name: "Qc3",
    //     component: BgY
    // },
    // {
    //     path: '/MinE',
    //     name: "MinE",
    //     component: ArY
    // },
    {
        path: '/F3',
        name: "F3",
        component: FgR
    },
    {
        path: '/F7',
        // {
        //     path: '/Qc3',
        //     name: "Qc3",
        //     component: BgY
        // },
        // {
        //     path: '/MinE',
        //     name: "MinE",
        //     component: ArY
        // },
        name: "F7",
        component: GmR
    },
    {
        path: '/F5',
        name: "F5",
        component: Q5R
    },
    {
        path: '/F4',
        name: "F4",
        component: Q4R
    },
    {
        path: '/F8',
        name: "F8",
        component: Q8R
    },
    // {
    //     path: '/F6',
    //     name: "F6",
    //     component: Q6R
    // },
    {
        path: '/F9',
        name: "F9",
        component: Q9R
    },
    {
        path: '/F10',
        name: "F10",
        component: Q10R
    },
    {
        path: '/Crud',
        name: "Crud",
        component: C1R
    },
    {
        path: '/T1',
        name: "T1",
        component: M2C
    },
    {
        path: '/T2',
        name: "T2",
        component: M3C
    },
    {
        path: '/col',
        name: "col",
        component: M4C
    },
    {
        path: '/tab',
        name: "tab",
        component: M5C
    },
    {
        path: '/tab2',
        name: "tab2",
        component: M6C
    },
    
    {
        path: '/S1',
        name: "S1",
        component: M8C
    },
    {
        path: '/p',
        name: "p",
        component: M9C
    },
    {
        path: '/WaT',
        name: "WaT",
        component: M10C
    },
    {
        path: '/SaI',
        name: "SaI",
        component: M11C
    },
    {
        path: '/QQ4',
        name: "QQ4",
        component: M12C
    },
    {
        path: '/MyE',
        name: "MyE",
        component: M13C
    },
    {
        path: '/Uv',
        name: "Uv",
        component: M14C
    },
    {
        path: '/StU',
        name: "StU",
        component: M15C
    },
    {
        path: '/Json',
        name: "Json",
        component: M16C
    },
    // {
    //     path: '/Js',
    //     name: "Js",
    //     component: M17C
    // },
    {
        path: '/Form',
        name: "Form",
        component: M18C
    },
    {
        path: '/MaP',
        name: "MaP",
        component: M19C
    },
    {
        path: '/FilteR',
        name: "FilteR",
        component: M20C
    },
    {
        path: '/ForEach2',
        name: "ForEach2",
        component: M21C
    },
    {
        path: '/ProjecT',
        name: "ProjecT",
        component: M22C
    },
    {
        path: '/SignUp',
        name: "mvE",
        component: M23C
    },
    {
        path: '/DisplaY',
        name: "DisplaY",
        component: M24C
    },
    {
        path: '/Combine',
        name: "Combine",
        component: M25C
    },
    {
        path: '/text',
        name: "TexT",
        component: M26C
    },
    {
        path: '/LogIn',
        name: "LogIn",
        component: M27C
    },
    {
        path: '/AdD',
        name: "Add",
        component: M28C
    },
    {
        path: '/My1',
        name: "My1",
        component: My1
    },
    {
        path: '/My2',
        name: "My2",
        component: My2
    },
    {
        path: '/Prop1',
        name: "prop1",
        component: Prop1
    },
    
    
     
]
let router = new Router({ routes })
export default router