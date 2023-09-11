const { currentUrlPath } = require("./utils/url");

switch(currentUrlPath()){
    case "/about":
        import('./pages/about');
        break;
    case "/contact":
        import('./pages/contact');
        break;
    case "/blogs":
        import('./pages/blogs');
        break;
    case "/blogs-info":
        import('./pages/blog-info');
        break;
}