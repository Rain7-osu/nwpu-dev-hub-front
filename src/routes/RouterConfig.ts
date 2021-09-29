import { RouteProps } from 'react-router';
import { Home } from '../pages/Home';
import { JoinUs } from '../pages/JoinUs';
import { Introduction } from '../pages/Introduction';
import { News } from '../pages/News';
import { Project } from '../pages/Project';
import { Info } from '@src/pages/User/Info';
import { Login } from '@src/pages/User/Login';
import { Register } from '@src/pages/JoinUs/Register';

export type RoutesConfig = Array<RouteProps & { title: string; regex: RegExp }>;

// TODO: 后面改一下引用
const routes: RoutesConfig = [
  { path: '/', component: Home, title: '首页', exact: true, regex: /^\/$/ },
  { path: '/info', component: Introduction, title: '社区简介', exact: true, regex: /^\/info$/ },
  { path: '/news', component: News, title: '新闻中心', exact: true, regex: /^\/news$/ },
  { path: '/project', component: Project, title: '项目介绍', exact: true, regex: /^\/project$/ },
  { path: '/join', component: JoinUs , title: '加入我们', exact: true, regex: /^\/join$/ },
];

export const userRoutes: RoutesConfig = [
  { path: '/user/:userId', component: Info, title: '个人中心', exact: false, regex: /^\/user\/info\/\d+$/ },
  { path: '/user/login', component: Login, title: '登录', exact: true, regex: /^\/user\/login$/ },
  { path: '/user/register', component: Register, title: '注册', exact: true, regex: /^\/user\/register$/ },
];

export default routes;
