import app, { routePaths } from './route';

function mount(el){
  if (!app()) {
    return;
  }
  app().style && app().style()
  const content = app()?.default && app().default()
  if (typeof content === 'string') {
    el.innerHTML = content;
  }
  app().script && app().script()
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-order');
  if (el) {
    mount(el);
  }
}

export default { mount, routePaths }