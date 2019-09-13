//define router to component
import Home from "@/components/Home";
import Error from "@/components/404";

const User = resolve => {
    require.ensure(['@/components/user/User'], () => {
        resolve(require('@/components/user/User'))
    }, 'user')
};
const UserDetail = resolve => {
    require.ensure(['@/components/user/UserDetail'], () => {
        resolve(require('@/components/user/UserDetail'))
    }, 'user')
};
const UserEdit = resolve => {
    require.ensure(['@/components/user/UserEdit'], () => {
        resolve(require('@/components/user/UserEdit'))
    }, 'user')
};
const UserStart = resolve => {
    require.ensure(['@/components/user/UserStart'], () => {
        resolve(require('@/components/user/UserStart'))
    }, 'user')
};
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
            {path: ':id', name: 'userdetail', component: UserDetail, beforeEnter: (to, from, next) => {
                // console.log('Action route guards !');
                    next()
                }},
            {path: ':id/edit', name: 'useredit', component: UserEdit}
        ]
    },
    {path: '/auth-redirect', redirect: {name: 'homepage'}},
    {path: '/404', name: 'errorpage', component: Error},
    {path: '*', redirect: '/404'}
    // {path:'/user/:id', name:'userdetail', component: UserDetail},
];
