import React from 'react';
import { IconInfoContainer } from './styles';
import { Icon } from '@src/components/Icon';

export interface IconInfoProps {
  icon: string;
  title: string;
}

export const IconInfo = (props: IconInfoProps) => {
  const { title, icon } = props;
  return (
    <IconInfoContainer>
      <div className="icon">
        <Icon type={icon} size={64} />
      </div>
      <div className="title">
        {title}
      </div>
    </IconInfoContainer>
  );
};
