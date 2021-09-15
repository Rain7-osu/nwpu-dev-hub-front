import React, { memo } from 'react';
import { Carousel } from '../../components/Carousel';
import { PerfectMechanismWrapper, HomeContainer, HomeItemWrapper, SimpleIntroduction, ThreeCardContainer, JoinUsModuleWrapper } from './styles';

import { DevhubLogo } from '../../components/DevhubLogo';
import { ImgKeys } from '../../imgKeys';
import { Link } from 'react-router-dom';

interface ThreeCardProps {
  img: string;
  title: string;
  description: string;
  color: string;
}

/**
 * 这是三个卡片，健全的赛制什么的
 * @param props
 * @constructor
 */
const ThreeCard = (props: ThreeCardProps) => {
  const { img, title, description, color } = props;
  return (
    <ThreeCardContainer color={color}>
      <div className="three-box">
        <img alt="three-pic" src={img} />
        <div className="main">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
      </div>
    </ThreeCardContainer>
  );
};

export const JoinUsModule = () => {
  return (
    <JoinUsModuleWrapper>
      <div className="img"><img alt="join-pic" src={ImgKeys.HOME_FIVE} /></div>
      <div className="text-wrapper">
        <div className="text-box">
          <div className="title">广纳英才</div>
          <div className="subtitle">开发者协会首轮纳新</div>
          <div className="join-link">
            <Link className="text" to="/register">立即加入</Link>
            <div className="icon">
              <img alt="join-icon" src={ImgKeys.HOME_JOIN_ICON_ARROW_RIGHT} />
            </div>
          </div>
        </div>
      </div>
    </JoinUsModuleWrapper>
  );
};

/**
 * 健全的机制这一栏
 * @constructor
 */
export const PerfectMechanism = () => {
  return (
    <PerfectMechanismWrapper>
      <div className="left">
        <div className="title">健全的机制</div>
        <div className="subtitle">全流程</div>
        <div className="subtitle"> 全方位的培养模式</div>
      </div>
      <div className="right">
        <div className="picture"><img alt="pic" src={ImgKeys.HOME_FOUR1} /></div>
        <div className="picture"><img alt="pic" src={ImgKeys.HOME_FOUR2} /></div>
        <div className="picture"><img alt="pic" src={ImgKeys.HOME_FOUR3} /></div>
        <div className="picture"><img alt="pic" src={ImgKeys.HOME_FOUR4} /></div>
      </div>
    </PerfectMechanismWrapper>
  );
};

export const Home = memo(() => {
  return (
    <HomeContainer>
      <Carousel paths={[ImgKeys.HOME_BANNER1, ImgKeys.HOME_BANNER2, ImgKeys.HOME_BANNER3]} />
      <HomeItemWrapper className="simple-introduction">
        <div className="hover-block">
          <DevhubLogo size="normal" />
        </div>
        <div className="hover-block">
          <SimpleIntroduction>
            依托于共青团西北工业大学委员会和西安寻师有道信息科技有限公司（旗下有LOOP校园系列），工大开发者社区拥有稳定充裕的资金来源、项目来源和场地支持。
          </SimpleIntroduction>
        </div>
      </HomeItemWrapper>
      <HomeItemWrapper className="three-card">
        <ThreeCard color="#9646E6" img={ImgKeys.HOME_THREE1} title="兼具专业与高效" description="搭建您的专属课题网站" />
        <ThreeCard color="#F48617" img={ImgKeys.HOME_THREE2} title="连接赛事" description="十四运 & NPU-Devhub" />
        <ThreeCard color="#1BAE8A" img={ImgKeys.HOME_THREE3} title="打通校园" description="智慧化信息发布平台" />
      </HomeItemWrapper>
      <PerfectMechanism />
      <JoinUsModule />
      <div className="last-pic">
        <img alt="last-pic" src={ImgKeys.HOME_SIX} />
      </div>
    </HomeContainer>
  );
});

Home.displayName = 'Home';
