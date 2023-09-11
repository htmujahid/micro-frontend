import store from 'store/Store';
import customer from 'customer/Customer';
import order from 'order/Order';
import content from 'content/Content';

import app, { routePaths } from './route';
import { currentUrlPath } from './utils/url';

import notFound from './pages/not-found';

const apps = [
  store,
  customer,
  order,
  content,
];

function mount(el){
  const content = app();
  if (typeof content === 'string') {
    el.innerHTML = content;
  }
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

