const { currentUrlPath } = require("./utils/url");

switch(currentUrlPath()){
    case "/products":
        import('./pages/products');
        break;
    case "/products-info":
        import('./pages/product-info');
        break;
}