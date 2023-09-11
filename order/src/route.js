const { currentUrlPath } = require("./utils/url");

switch(currentUrlPath()){
    case "/cart":
        import('./pages/cart');
        break;
    case "/order":
        import('./pages/order');
        break;
    case "/payment":
        import('./pages/payment');
        break;
}