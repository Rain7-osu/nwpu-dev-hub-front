import React from 'react';
import { Level, LevelName } from '@src/data/user';
import './styles.less';

export interface LevelTagProps {
  level: Level;
}

export const LevelTag = (props: LevelTagProps) => {
  const { level } = props;

  const levelName = LevelName[level];

  return (
    <div className="ndd-level-tag">
      {levelName}
    </div>
  );
};
