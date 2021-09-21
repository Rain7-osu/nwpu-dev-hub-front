import React, { memo } from 'react';
import { Clock } from '../../components/Clock';
import { JoinUsContainer } from './styles';
import { Register } from './Register';

export const JoinUs = memo(() => {
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
    </JoinUsContainer>
  );
});

JoinUs.displayName = 'JoinUs';
