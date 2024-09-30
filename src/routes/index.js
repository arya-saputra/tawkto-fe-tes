import VueRouter from "vue-router";
import Home from "../views/index.vue";
import Detail from "../views/detail.vue";
import Article from "../views/article.vue";
import Default from '../layouts/default.vue'

const routes = new VueRouter({
    routes: [
        {
            path: '/',
            name: '.',
            component: Default,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/:id',
                    name: 'detail',
                    component: Detail
                },
                {
                    path: '/article/:id',
                    name: 'article',
                    component: Article
                }
            ]
        }
    ]
});

export default routes;