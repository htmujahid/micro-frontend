import { currentUrlPath } from '../../core/utils';
import * as login from './pages/login';
import * as register from './pages/register';
import * as profile from './pages/profile';
import * as orders from './pages/orders';
import * as payments from './pages/payments';
import * as security from './pages/security';

const routes = [
    {
        path: "/login",
        component: login,
    },
    {
        path: "/register",
        component: register,
    },
    {
        path: "/profile",
        component: profile,
    },
    {
        path: "/orders",
        component: orders,
    },
    {
        path: "/payments",
        component: payments,
    },
    {
        path: "/security",
        component: security,
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