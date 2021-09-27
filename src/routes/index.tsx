import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router';
import { RouterListener } from './RouterListener';
import { User } from '@src/pages/User';
import { Navigator } from './Navigator';
import { Footer } from './Footer';
import { Layout } from './Layout';
import { Button } from '@src/components/Button';
import { NotFoundContainer } from '@src/routes/styles';

export interface RouteChangeParams {
  path: string;
  query?: Record<string, string>;
}

// 后面由于有可能出现携带参数什么的，所以这里先封装
export const useRouter = () => {
  const history = useHistory();

  return useMemo(() => {
    return {
      push ({ path }: RouteChangeParams) {
        history.push(path);
      },
      replace ({ path }: RouteChangeParams) {
        history.replace(path);
      },
    };
  }, [history]);
};

export const DEFAULT_REDIRECT_TIME = 5;

export const NotFound = () => {
  // 默认 5 秒定时
  const [remain, setRemain] = useState<number>(DEFAULT_REDIRECT_TIME);

  const router = useRouter();

  useEffect(() => {
    let tmpRemain = DEFAULT_REDIRECT_TIME;
    const timer = setInterval(() => {
      tmpRemain -= 1;
      setRemain(tmpRemain);

      if (tmpRemain <= 0) {
        router.push({ path: '/' });
        clearInterval(timer);
        // 暂时这样写
        setRemain(DEFAULT_REDIRECT_TIME);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [router]);

  return (
    <NotFoundContainer>
      <div className="ndd-not-found">
        <div className="title">404 NOT Found</div>
        <div className="desc">呜呜呜~ 您要找的页面不存在</div>
        <div className="timer">{remain} 秒后将为您跳转到首页...</div>
        <div className="option"><Button link="/">立即跳转</Button></div>
      </div>
    </NotFoundContainer>
  );
};

export const Routes = () => {
  return (
    <BrowserRouter>
      <RouterListener/>
      <Switch>
        <Route path="/auth" component={User} />
        <Route path="/" render={() => {
          return (
            <React.Fragment>
              <Navigator/>
              <Layout />
              <Footer />
            </React.Fragment>
          );
        }} />
      </Switch>
    </BrowserRouter>
  );
};
