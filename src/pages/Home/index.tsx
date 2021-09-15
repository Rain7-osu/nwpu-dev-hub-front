import React, { memo } from 'react';
import { Carousel } from '../../components/Carousel';
import { HealthyWrapper, HomeContainer, HomeItemWrapper, SimpleIntroduction, ThreeCardContainer } from './styles';

import Banner1 from '../../assets/imgs/banners/banner1.png';
import Banner2 from '../../assets/imgs/banners/banner2.png';
import Banner3 from '../../assets/imgs/banners/banner3.png';
import Three1 from '../../assets/imgs/home-three-card/three1.png';
import Three2 from '../../assets/imgs/home-three-card/three2.png';
import Three3 from '../../assets/imgs/home-three-card/three3.png';
import { DevhubLogo } from '../../components/DevhubLogo';

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
      <div className="img" style={{ backgroundImage: `url(${img})` }} />
      <div className="main">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </ThreeCardContainer>
  );
};

/**
 * 健全的机制这一栏
 * @constructor
 */
export const Healthy = () => {
  return (
    <HealthyWrapper>
      <div className="left">
        <div className="title">健全的机制</div>
        <div className="subtitle">全流程</div>
        <div className="subtitle"> 全方位的培养模式</div>
      </div>
      <div className="right">
        <div className="picture"><img alt="pic" /></div>
        <div className="picture"><img alt="pic" /></div>
        <div className="picture"><img alt="pic" /></div>
        <div className="picture"><img alt="pic" /></div>
      </div>
    </HealthyWrapper>
  );
};

export const Home = memo(() => {
  return (
    <HomeContainer>
      <Carousel paths={[Banner1, Banner2, Banner3]} />
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
        <ThreeCard color="#9646E6" img={Three1} title="兼具专业与高效" description="搭建您的专属课题网站" />
        <ThreeCard color="#F48617" img={Three2} title="连接赛事" description="十四运 & NPU-Devhub" />
        <ThreeCard color="#1BAE8A" img={Three3} title="打通校园" description="智慧化信息发布平台" />
      </HomeItemWrapper>
      <Healthy />
    </HomeContainer>
  );
});

Home.displayName = 'Home';
