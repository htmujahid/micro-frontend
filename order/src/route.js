const { currentUrlPath } = require("./utils/url");
import cart from './pages/cart';
import productOrder from './pages/product-order';
import productPayment from './pages/product-payment';

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
            return route.component();
        }
    }
}

const routePaths = routes.map((route) => route.path);

export { routePaths };