import { RouteProps } from 'react-router';
import { Home } from '../pages/Home';
import { JoinUs } from '../pages/JoinUs';
import { Introduction } from '../pages/Introduction';
import { News } from '../pages/News';
import { Project } from '../pages/Project';

const routes: Array<RouteProps & { title: string }> = [
  { path: '/', component: Home, title: '首页', exact: true },
  { path: '/info', component: Introduction, title: '社区简介', exact: true },
  { path: '/news', component: News, title: '新闻中心', exact: true },
  { path: '/project', component: Project, title: '项目介绍', exact: true },
  { path: '/join', component: JoinUs , title: '加入我们', exact: true },
];

export default routes;
