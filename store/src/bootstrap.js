import app, { routePaths } from './route';

function mount(el){
  const content = app();
  if (typeof content === 'string') {
    el.innerHTML = content;
  }
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-store');
  if (el) {
    mount(el);
  }
}

export default { mount, routePaths };