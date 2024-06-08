import { createRouter, createWebHistory } from 'vue-router';
import TheMain from '../pages/TheMain.vue';
import About from '../pages/About.vue';

const routes = [
    {
        path: '/',
        name: 'TheMain',
        component: TheMain
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;