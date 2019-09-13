//define router to component
import User from "@/components/user/User";
import Home from "@/components/Home";
import UserDetail from "@/components/user/UserDetail";

export const routes = [
    {path:'/', name:'homepage', component: Home},
    {path:'/user', name:'user', component: User},
    {path:'/user/:id', name:'userdetail', component: UserDetail},
];
