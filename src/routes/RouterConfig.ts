import { RouteProps } from 'react-router';
import { Home } from '../pages/Home';
import { JoinUs } from '../pages/JoinUs';
import { Introduction } from '../pages/Introduction';

const routes: Array<RouteProps & { title: string }> = [
  { path: '/', component: Home, title: '首页', exact: true },
  { path: '/join', component: JoinUs , title: '加入我们', exact: true },
  { path: '/info', component: Introduction, title: '社区简介', exact: true },
];

export default routes;
