import { currentUrlPath } from '../../core/utils';
import * as about from './pages/about';
import * as contact from './pages/contact';
import * as blogs from './pages/blogs';
import * as blogInfo from './pages/blog-info';

const routes = [
    {
        path: "/about",
        component: about,
    },
    {
        path: "/contact",
        component: contact,
    },
    {
        path: "/blogs",
        component: blogs,
    },
    {
        path: "/blog-info",
        component: blogInfo,
    },
]

export default function init() {
    for (const route of routes) {
        if (route.path === currentUrlPath()) {
            return route.component;
        }
    }
}

const routePaths = routes.map((route) => route.path);

export { routePaths };