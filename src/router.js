//define router to component
import User from "@/components/user/User";
import Home from "@/components/Home";
import UserDetail from "@/components/user/UserDetail";
import UserEdit from "@/components/user/UserEdit";
import UserStart from "@/components/user/UserStart";

export const routes = [
    {path:'/', name:'homepage', component: Home},
    {
        path:'/user',
        name:'user',
        component: User,
        children: [
            {path: '', name: 'userstart', component: UserStart},
            {path: ':id', name: 'userdetail', component: UserDetail},
            {path: ':id/edit', name: 'useredit', component: UserEdit}
        ]
    }
    // {path:'/user/:id', name:'userdetail', component: UserDetail},
];
