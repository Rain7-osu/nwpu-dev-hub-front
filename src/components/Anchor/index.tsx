import React, { CSSProperties, ReactNode, useCallback } from 'react';

const scrollToAnchor = (id: string): void => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
};

export interface AnchorProps {
  link: string;
  className?: string;
  style?: CSSProperties;
}

export const Anchor: React.FC<React.PropsWithChildren<ReactNode> & AnchorProps> = ({
  link,
  children,
  className,
  style,
}) => {
  const handleScroll = useCallback(() => {
    scrollToAnchor(link);
  }, [link]);

  return (
    <div className={className} style={style} onClick={handleScroll}>{children}</div>
  );
};
