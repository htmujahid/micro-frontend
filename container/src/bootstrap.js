import store from 'store/Store';
import customer from 'customer/Customer';
import order from 'order/Order';
import content from 'content/Content';

import app, { routePaths } from './route';
import { currentUrlPath } from '../../core/utils';

import notFound from './pages/not-found';

const apps = [
  store,
  customer,
  order,
  content,
];

function mount(el){
  if (!app()) {
    return;
  }
  app().style && app().style();
  const content = app().default();
  if (typeof content === 'string') {
    el.innerHTML = content;
  }
  app().script && app().script();
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#app');
  if (el) {
    mount(el);
    apps.forEach((app) => {
      app.mount(el);
    });
  }
  
  const routesList = [
    ...routePaths,
    ...apps.map((app) => app.routePaths).flat(),
  ]

  if (!routesList.includes(currentUrlPath())) {
    el.innerHTML = notFound();
  }
}

