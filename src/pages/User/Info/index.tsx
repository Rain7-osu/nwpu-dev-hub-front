import React, { useMemo } from 'react';
import { useSelector } from 'dva';
import { DevhubLogo } from '@src/components/DevhubLogo';
import { InfoContainer, MainContent, MemberInfo, TopBanner, TopLogo, TopTitle } from './styles';
import { InfoCard } from './InfoCard';
import { RootState } from '@src/models/types';
import { Group, GroupName, Qualification, QualificationName, UserInfo } from '@src/data/user';
import { IconInfo, IconInfoProps } from '@src/pages/User/Info/IconInfo';

export const Info = () => {
  const {
    username,
    group,
    department,
    grade,
    qualification,
  }: UserInfo = useSelector<RootState>(state => state.global.userInfo) as UserInfo;

  const infoMap = useMemo<IconInfoProps[]>(() => {
    const result: IconInfoProps[] = [
      { title: GroupName[group || Group.UNKNOWN], icon: 'team' },
      { title: department || '未知学院', icon: 'college' },
      { title: `${grade || '未知年级'}${QualificationName[qualification || Qualification.UNKNOWN]}`, icon: 'grade' },
    ];

    return result;
  }, [department, grade, group, qualification]);

  return (
    <InfoContainer>
      <TopBanner>
        <TopLogo>
          <DevhubLogo type="picture" size="normal" white />
        </TopLogo>
        <TopTitle>
          个人中心
        </TopTitle>
      </TopBanner>
      <MainContent>
        <InfoCard topTitle="成员信息">
          <MemberInfo>
            <div className="title">{username}</div>
            <div className="icon-info">
              {infoMap.map(({ title, icon }) => {
                return <IconInfo key={title} icon={icon} title={title} />;
              })}
            </div>
          </MemberInfo>
        </InfoCard>
        <InfoCard topTitle="所处阶段">

        </InfoCard>
      </MainContent>
    </InfoContainer>
  );
};
