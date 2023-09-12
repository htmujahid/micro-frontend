import { currentUrlPath } from '../../core/utils';
import * as products from './pages/products';
import * as productInfo from './pages/product-info';

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
            return route.component;
        }
    }
}

const routePaths = routes.map((route) => route.path);

export { routePaths };