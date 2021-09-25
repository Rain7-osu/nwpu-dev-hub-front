import React, { memo } from 'react';
import dayjs from 'dayjs';
import { Clock } from '@src/components/Clock';
import { DownloadLink } from '@src/components/DownloadLink';
import { ContentWrapper } from '@src/styles';
import { Register } from './Register';
import { JoinUsContainer, EndRegisterContainer } from './styles';

const END_TIME = '2021-9-24 0.00';

export const JoinUsMain = memo(() => {
  const canRegister = (dayjs().valueOf() - dayjs(END_TIME).valueOf()) <= 0;

  return (
    <JoinUsContainer>
      {
        canRegister
          ? (
            <React.Fragment>
              <ContentWrapper>
                <Clock
                  title="报名截止倒计时"
                  type="timer"
                  timer={{ type: 'deadline', date: '2021-9-24' }}
                />
              </ContentWrapper>
              <Register/>
            </React.Fragment>
          )
          : <EndRegisterContainer>报名已结束</EndRegisterContainer>
      }
      <DownloadLink title="2021秋学期工大开发者社区招新方案" link={findSrc('/assets/2021-new.pdf')}/>
    </JoinUsContainer>
  );
});

JoinUsMain.displayName = 'JoinUsMain';
