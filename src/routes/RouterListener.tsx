import { memo, useEffect } from 'react';
import { useLocation } from 'react-router';
import routes from './RouterConfig';

export const RouterListener = memo(() => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname) {
      return;
    }

    // 切换路由后，回到顶部
    document.documentElement.scrollTop = document.body.scrollTop = 0;

    routes.forEach(({ title, path }) => {
      if (typeof path === 'string') {
        const regex = new RegExp(path);

        if (regex.test(pathname)) {
          document.title = title;
        }
      } else {
        document.title = '工大开发者社区';
      }
    });
  }, [pathname]);

  return null;
});

RouterListener.displayName = 'RouterListener';
