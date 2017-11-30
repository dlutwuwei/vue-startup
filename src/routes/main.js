import App from '../page/app.vue';
const NotFound = { template: '<p>Page not found</p>' }
const About = { template: '<p>about page</p>' }
const routes = [
    {
        path: '/app',
        component: App,
        children: [
            {
                path: 'notfound',
                component: NotFound
            },
            {
                path: 'about',
                component: About
            }
        ]
    },
]


export default routes;