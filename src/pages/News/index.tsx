import React, { memo } from 'react';
import { ImgKeys } from '@src/imgKeys';
import { NewsContainer, HubNewsContainer } from './styles';

interface NewItem {
  avatar: string;
  title: string;
  desc: string;
}

const hubNewsList: NewItem[] = [
  { avatar: ImgKeys.N_N1, title: '开发者协会招新啦！', desc: '2021-7-1' },
  { avatar: ImgKeys.N_N2, title: '西北工业大学学生开发者协会成立', desc: '2021-7-1' },
];

export const HubNews = () => {
  return (
    <HubNewsContainer>
      <div className="news-title">社区动态</div>
      <div className="news-list">
        {hubNewsList.map(({ avatar, title, desc }) => {
          return (
            <div key={title} className="news-card-wrapper">
              <div className="news-card">
                <div className="news-avatar">
                  <img alt="avatar" src={avatar} />
                </div>
                <div className="news-title">{title}</div>
                <div className="news-desc">{desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </HubNewsContainer>
  );
};

export const News = memo(() => {
  return (
    <NewsContainer>
      <div className="top-banner">
        <img alt="新闻中心" src={ImgKeys.N_BANNER} />
        <div className="banner-desc">新闻中心</div>
      </div>
      <HubNews />
    </NewsContainer>
  );
});

News.displayName = 'News';
