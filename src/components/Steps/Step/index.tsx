import React from 'react';

import './styles.less';
import cls from 'classnames';

export interface StepProps {
  title: string;
  finished?: boolean;
  processing?: boolean;
}

export const Step: React.FC<StepProps> = (props) => {
  const { title, finished, processing } = props;

  return (
    <div className={cls('ndd-step-container', {
      'finished': !!finished,
      'processing': !!processing,
    })}>
      <div className="ndd-step-wrapper">
        <div className="ndd-step-tail" />
        <div className="ndd-step-icon" />
        <div className="ndd-step-title">{title}</div>
      </div>
    </div>
  );
};
