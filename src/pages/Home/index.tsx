import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from '../../components/Carousel';
import { DevhubLogo } from '../../components/DevhubLogo';
import { ImgKeys } from '../../imgKeys';
import t from '../../text.json';
import {
  HomeContainer,
  HomeItemWrapper,
  JoinUsModuleWrapper,
  PerfectMechanismWrapper,
  SimpleIntroduction,
  ThreeCardContainer,
} from './styles';

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
          <div className="subtitle">开发者社区首轮纳新</div>
          <div className="join-link">
            <Link className="text" to="/join">立即加入</Link>
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
        <div className="picture">
          <img alt="pic" src={ImgKeys.HOME_FOUR1} />
          <div className="pic-text">培养</div>
        </div>
        <div className="picture">
          <img alt="pic" src={ImgKeys.HOME_FOUR2} />
          <div className="pic-text">转正</div>
        </div>
        <div className="picture">
          <img alt="pic" src={ImgKeys.HOME_FOUR3} />
          <div className="pic-text">立项</div>
        </div>
        <div className="picture">
          <img alt="pic" src={ImgKeys.HOME_FOUR4} />
          <div className="pic-text">酬劳</div>
        </div>
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
          <DevhubLogo type="picture" size="normal" />
        </div>
        <div className="hover-block">
          <SimpleIntroduction>{t['hub-introduction']}</SimpleIntroduction>
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
