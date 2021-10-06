import React from 'react';
import { Level, LevelName } from '@src/data/user';
import './styles.less';

export interface LevelTagProps {
  level: Level;
}

const getLevelColor = (level: Level) => {
  if (level > 60) {
    return '#b127ff';
  } else if (level > 50) {
    return '#2152F3';
  } else if (level > 40) {
    return '#F37521';
  } else if (level > 30) {
    return '#FF0077';
  } else if (level > 20) {
    return '#F3E521';
  } else if (level > 10) {
    return '#21DDF3';
  } else {
    return '#21F3A4';
  }
};

export const LevelTag = (props: LevelTagProps) => {
  const { level } = props;

  const levelName = LevelName[level];

  return (
    <div className="ndd-level-tag" style={{
      backgroundColor: getLevelColor(level),
    }}>
      {levelName}
    </div>
  );
};
