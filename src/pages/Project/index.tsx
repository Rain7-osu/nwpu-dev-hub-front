import React, { memo } from 'react';
import { ImgKeys } from '../../imgKeys';
import { ProjectContainer, ProjectItemWrapper } from './styles';

interface ProjectItemProps {
  title: string;
  desc: string;
  banner: string;
}

const ProjectItem = (props: ProjectItemProps) => {
  const { title, desc, banner } = props;

  return (
    <ProjectItemWrapper>
      <div className="item-title">
        {title}
      </div>
      <div className="item-desc">
        {desc}
      </div>
      <div className="item-banner">
        <img alt={title} src={banner} />
      </div>
    </ProjectItemWrapper>
  );
};

// TODO: 直接列表写死在前端虽然有点 zz ，但是前期只是个静态网页可以这么搞
const projectList: ProjectItemProps[] = [
  {
    title: '十四运场馆流线图',
    desc: '为十四运女排项目所设计的场馆观众流线图，为赛事的有序进行贡献我们的力量',
    banner: ImgKeys.P_1,
  },
  {
    title: '课题组网站',
    desc: '适用于几乎所有组织或个人的官网模板',
    banner: ImgKeys.P_2,
  },
  {
    title: '融媒体校园服务平台',
    desc: '一个操作方便、功能齐全的的校园消息发布平台',
    banner: ImgKeys.P_3,
  },
  {
    title: '十四观众引导页面',
    desc: '快速且专业的页面设计体现',
    banner: ImgKeys.P_4,
  },
];

export const Project = memo(() => {
  return (
    <ProjectContainer>
      <div className="project-banner">
        <img alt="banner" src={ImgKeys.P_BANNER} />
        <div className="banner-desc">项目介绍</div>
      </div>
      <div className="project-list">
        {projectList.map((item) => <ProjectItem key={item.desc} {...item} />)}
      </div>
    </ProjectContainer>
  );
});

Project.displayName = 'Project';
