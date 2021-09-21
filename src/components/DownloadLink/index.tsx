import React from 'react';
import { DownloadLinkWrapper } from './styles';

export interface DownloadLinkProps {
  title: string;
  linkName?: string;
  link: string;
}

export const DownloadLink = (props: DownloadLinkProps) => {
  const { linkName = '下载', link, title } = props;

  return (
    <DownloadLinkWrapper>
      <div className="download-link">
        <div className="title">{title || ''}</div>
        <a href={link} download>{linkName}</a>
      </div>
    </DownloadLinkWrapper>
  );
};
