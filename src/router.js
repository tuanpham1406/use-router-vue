//define router to component
import User from "@/components/user/User";
import Home from "@/components/Home";
import Error from "@/components/404";
import UserDetail from "@/components/user/UserDetail";
import UserEdit from "@/components/user/UserEdit";
import UserStart from "@/components/user/UserStart";
import Header from "@/components/layout/Header";


export const routes = [
    {
        path: '/', name: 'homepage', components: {
            default: Home,
            'header': Header
        }
    },
    {
        path: '/user',
        name: 'user',
        component: User,
        children: [
            {path: '', name: 'userstart', component: UserStart},
            {path: ':id', name: 'userdetail', component: UserDetail},
            {path: ':id/edit', name: 'useredit', component: UserEdit}
        ]
    },
    {path: '/auth-redirect', redirect: {name: 'homepage'}},
    {path: '/404', name: 'errorpage', component: Error},
    {path: '*', redirect: '/404'}
    // {path:'/user/:id', name:'userdetail', component: UserDetail},
];
