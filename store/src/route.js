const { currentUrlPath } = require("./utils/url");
import products from './pages/products';
import productInfo from './pages/product-info';

const routes = [
    {
        path: "/products",
        component: products,
    },
    {
        path: "/product-info",
        component: productInfo,
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