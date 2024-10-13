import { createRouter,createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import QuizView from "@/views/QuizView.vue";
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/quiz/:id',
            name: 'Quiz',
            component: QuizView
        }
    ]
})
export default router