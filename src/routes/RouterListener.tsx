import { memo, useEffect } from 'react';
import { useLocation } from 'react-router';

export const RouterListener = memo(() => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname) {
      return;
    }

    // 切换路由后，回到顶部
    document.documentElement.scrollTop = document.body.scrollTop = 0;

    if (/^\/$/.test(pathname)) {
      document.title = '首页';
    }

    if (/^\/register/.test(pathname)) {
      document.title = '报名';
    }

  }, [pathname]);

  return null;
});

RouterListener.displayName = 'RouterListener';
