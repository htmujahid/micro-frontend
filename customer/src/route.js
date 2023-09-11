const { currentUrlPath } = require("./utils/url");
import login from './pages/login';
import register from './pages/register';
import profile from './pages/profile';
import orders from './pages/orders';
import payments from './pages/payments';
import security from './pages/security';

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
            return route.component();
        }
    }
}

const routePaths = routes.map((route) => route.path);

export { routePaths };