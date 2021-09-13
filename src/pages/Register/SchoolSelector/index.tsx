import React, { memo } from 'react';
import { Selector } from '../../../components/Selector';

const options = [
  '航空学院',
  '航天学院',
  '航海学院',
  '材料学院',
  '机电学院',
  '力学与土木建筑学院',
  '动力与能源学院',
  '电子信息学院',
  '自动化学院',
  '计算机学院',
  '数学与统计学院',
  '物理科学与技术学院',
  '化学与化工学院',
  '管理学院',
  '公共政策与管理学院',
  '软件学院',
  '生命学院',
  '外国语学院',
  '教育实验学院',
  '国际教育学院',
  '国家保密学院',
  '马克思主义学院',
  '西北工业大学伦敦玛丽女王大学工程学院',
  '微电子学院',
  '网络空间安全学院',
  '民航学院',
  '生态环境学院',
];

interface SchoolSelectorProps {
  onChange: (index: number, value: string) => void;
}

export const SchoolSelector = memo((props: SchoolSelectorProps) => {
  return (
    <Selector
      defaultValue="请选择学院"
      options={options}
      onChange={props.onChange}
    />
  );
});

SchoolSelector.displayName = 'SchoolSelector';
