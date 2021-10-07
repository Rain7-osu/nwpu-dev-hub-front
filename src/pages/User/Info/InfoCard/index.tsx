import React from 'react';
import { InfoCardContainer } from './styles';

export interface InfoCardProps {
  topTitle: string;
}

export const InfoCard: React.FC<React.PropsWithChildren<InfoCardProps>> = ({
  children,
  topTitle,
}) => {
  return (
    <InfoCardContainer>
      <div className="info-title">{topTitle}</div>
      <div className="info-main">{children}</div>
    </InfoCardContainer>
  );
};
