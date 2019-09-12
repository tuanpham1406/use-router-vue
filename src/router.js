//define router to component
import User from "@/components/user/User";
import Home from "@/components/Home";

export const routes = [
    {path:'/', name:'homepage', component: Home},
    {path:'/user', name:'user', component: User}
];
