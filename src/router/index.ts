import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import Index from '@/components/Index.vue';
import BotComponent from '@/components/BotComponent.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Index",
        component: Index,
        meta: {
            layout: "default"
        }
    }, {
        path: "/bot",
        name: "bot",
        component: BotComponent,
        meta: {
            layout: "default"
        }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
