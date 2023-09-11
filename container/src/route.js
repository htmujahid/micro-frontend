const { currentUrlPath } = require("./utils/url");

switch(currentUrlPath()){
    case "/":
        import('./pages/home');
        break;
}

setTimeout(() => {
    const app = document.querySelector('#app');
    if (app.innerHTML === '') {
        import('./pages/not-found');
    }
}, 100);