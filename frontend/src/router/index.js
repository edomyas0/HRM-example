import { createRouter, createWebHistory } from 'vue-router'
import NotFoundPage from '../pages/NotFoundPage.vue'
import SetupPage from '../pages/SetupPage.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'workspace',
            component: SetupPage,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage,
        },
    ],
})
