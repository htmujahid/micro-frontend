const { currentUrlPath } = require("./utils/url");

switch(currentUrlPath()){
    case "/login":
        import('./pages/login');
        break;
    case "/register":
        import('./pages/register');
        break;
    case "/profile":
        import('./pages/profile');
        break;
    case "/orders":
        import('./pages/orders');
        break;
    case "/payments":
        import('./pages/payments');
        break;
    case "/security":
        import('./pages/security');
        break;
}