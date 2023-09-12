import { currentUrlPath } from '../../core/utils';
import * as cart from './pages/cart';
import * as productOrder from './pages/product-order';
import * as productPayment from './pages/product-payment';

const routes = [
    {
        path: "/cart",
        component: cart,
    },
    {
        path: "/product-order",
        component: productOrder,
    },
    {
        path: "/product-payment",
        component: productPayment,
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