import React, { cloneElement, ReactNode, ReactElement } from 'react';

import './styles.less';
import { StepProps } from '@src/components/Steps/Step';

export interface StepsProps {
  children: ReactNode;
  current?: number;
}


export function Steps(props: StepsProps) {
  const { children, current = 0 } = props;

  return (
    <div className="ndd-steps-container">
      {React.Children.toArray(children).map((child, index) => {
        const childElement = child as ReactElement;
        const childProps: StepProps = {
          key: index,
          finished: index < current,
          processing: index === current,
          ...childElement.props,
        };
        return cloneElement(childElement, childProps);
      })}
    </div>
  );
}

export { Step } from './Step';
