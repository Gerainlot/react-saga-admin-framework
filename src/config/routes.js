import Loadable from "react-loadable";
import DelayLoading from "../components/DelayLoading";

const Home         = Loadable({loader: () => import('@/routers/Home/index.js'), loading: DelayLoading, delay:3000})
const ModuleList   = Loadable({loader: () => import('@/routers/ModuleList'), loading: DelayLoading, delay:3000})
const FunctionList = Loadable({loader: () => import('@/routers/FunctionList'), loading: DelayLoading, delay:3000})
const RoleList     = Loadable({loader: () => import('@/routers/RoleList'), loading: DelayLoading, delay:3000})
const EmployeesList= Loadable({loader: () => import('@/routers/EmployeesList'), loading: DelayLoading, delay:3000})
const UserList     = Loadable({loader: () => import('@/routers/UserList'), loading: DelayLoading, delay:3000})
const UserOrder    = Loadable({loader: () => import('@/routers/UserOrder'), loading: DelayLoading, delay:3000})
const UserManager  = Loadable({loader: () => import('@/routers/UserManager'), loading: DelayLoading, delay:3000})
const EndOrder     = Loadable({loader: () => import('@/routers/EndOrder'), loading: DelayLoading, delay:3000})
const VisualList   = Loadable({loader: () => import('@/routers/VisualList'), loading: DelayLoading, delay:3000})
const PriceConfig  = Loadable({loader: () => import('@/routers/PriceConfig'), loading: DelayLoading, delay:3000})

export default
[{
    'path': '/home',
    'component': Home
}, {
    'path': '/module/list',
    'component': ModuleList
}, {
    'path': '/function/list',
    'component': FunctionList
}, {
    'path': '/role/list',
    'component': RoleList
}, {
    'path': '/employees/list',
    'component': EmployeesList
}, {
    'path': '/user/list',
    'component': UserList
}, {
    'path': '/user/order',
    'component': UserOrder
}, {
    'path': '/user/manager',
    'component': UserManager
}, {
    'path': '/user/e-order',
    'component': EndOrder
}, {
    'path': '/visual/list',
    'component': VisualList
}, {
    'path': '/price/config',
    'component': PriceConfig
}]