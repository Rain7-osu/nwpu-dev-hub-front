import React, { ReactNode, useCallback, useState } from 'react';
import { DropdownContainer } from './styles';
import cls from 'classnames';

export interface DropdownProps {
  children: ReactNode;
  overlay: ReactNode;
  trigger?: 'hover' | 'click';
}

export function Dropdown (props: DropdownProps) {
  const { trigger = 'click', overlay, children } = props;
  const [show, setShow] = useState<boolean>(false);
  const handleClickOverlay = useCallback(() => {
    setShow(false);
  }, [setShow]);
  const handleMouseOver = useCallback(() => {
    if (trigger === 'hover') {
      setShow(true);
    }
  }, [trigger, setShow]);
  const handleClickContent = useCallback(() => {
    if (trigger === 'click') {
      setShow(true);
    }
  }, [trigger]);
  return (
    <DropdownContainer onMouseOver={handleMouseOver}>
      <div className="content" onClick={handleClickContent}>{children}</div>
      <div className={cls('overlay', { show })} onClick={handleClickOverlay}>
        <div className="overlay-content">{overlay}</div>
      </div>
    </DropdownContainer>
  );
}
