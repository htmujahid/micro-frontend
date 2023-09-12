import { currentUrlPath } from '../../core/utils';
import * as home from './pages/home';

const routes = [
    {
        path: "/",
        component: home,
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