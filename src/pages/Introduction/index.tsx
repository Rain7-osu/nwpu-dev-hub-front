import React, { memo } from 'react';
import cls from 'classnames';
import { ImgKeys } from '../../imgKeys';
import { DevhubLogo } from '../../components/DevhubLogo';
import t from '../../text.json';
import { Icon } from '../../components/Icon';
import { SubNav } from '../../components/SubNav';
import { GroupIcon, IntroductionContainer } from './styles';

interface IntentionItemProps {
  icon: string;
}

const IntentionItem = (props: IntentionItemProps) => {
  const { icon } = props;

  return (
    <div className={cls('group-wrapper')}>
      <Icon className="group-icon" type={icon} />
    </div>
  );
};


const Structure = memo(() => {
  const renderGroups = () => {
    const intentionsArr: IntentionItemProps[] = [
      { icon: 'app_group' },
      { icon: 'web_group' },
      { icon: 'mini_group' },
      { icon: 'ui_group' },
    ];

    return (
      <GroupIcon>
        {intentionsArr.map((props: IntentionItemProps) => {
          const { icon } = props;
          return <IntentionItem key={icon} {...props} />;
        })}
      </GroupIcon>
    );
  };

  return (
    <div className="structure">
      <div className="l-1">
        <DevhubLogo className="devhub-logo" type="picture" size="normal" />
      </div>
      <div className="l-2">
        <div className="line-v line-1"/>
        <div className="line-h line-2"/>
        <div className="line-groups">
          <div className="line-v line-3"/>
          <div className="line-v line-4"/>
          <div className="line-v line-5"/>
          <div className="line-v line-5"/>
        </div>
      </div>
      <div className="l-3">
        {renderGroups()}
      </div>
    </div>
  );
});

Structure.displayName = 'Structure';

export const Introduction = memo(() => {
  return (
    <IntroductionContainer>
      <div className="top-banner">
        <img alt="banner" src={ImgKeys.IN_BANNER} />
        <div className="banner-desc">西北工业大学学生开发者社区</div>
      </div>
      <SubNav>
        {[
          { name: '社区简介', anchor: 'hub-introduction' },
          { name: '组织结构', anchor: 'hub-structure' },
          // { name: '社区架构', anchor: 'hub-introduction' },
          // { name: '社区文化', anchor: 'hub-introduction' },
        ]}
      </SubNav>
      <div id="hub-introduction" className="hub-introduction" >
        <div className="hub-introduction-wrapper">
          <div className="hub-intro-title">社区简介</div>
          <div className="hub-intro-content">{t['hub-introduction']}</div>
        </div>
      </div>
      <div id="hub-structure" className="hub-structure">
        <div className="hub-structure-wrapper">
          <div className="hub-structure-title">组织架构</div>
          <div className="hub-structure-content">
            <Structure />
          </div>
        </div>
      </div>
    </IntroductionContainer>
  );
});

Introduction.displayName = 'Introduction';
