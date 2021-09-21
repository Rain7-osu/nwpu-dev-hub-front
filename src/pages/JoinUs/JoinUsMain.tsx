import React, { memo } from 'react';
import { Clock } from '../../components/Clock';
import { DownloadLink } from '../../components/DownloadLink';
import { JoinUsContainer } from './styles';
import { Register } from './Register';

export const JoinUsMain = memo(() => {
  return (
    <JoinUsContainer>
      <div className="clock-box">
        <Clock
          title="报名截止倒计时"
          type="timer"
          timer={{ type: 'deadline', date: '2021-9-24' }}
        />
      </div>
      <Register />
      <DownloadLink title="2021秋学期工大开发者社区招新方案" link={findSrc('/assets/2021-new.pdf')} />
    </JoinUsContainer>
  );
});

JoinUsMain.displayName = 'JoinUsMain';
