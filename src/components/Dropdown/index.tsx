import React, { ReactNode, useCallback, useState } from 'react';
import cls from 'classnames';
import { DropdownContainer } from './styles';

export interface DropdownProps {
  children: ReactNode;
  overlay: ReactNode;
  trigger?: 'hover' | 'click';
  placement?: 'top-left' | 'top-right' | 'top' | 'bottom' | 'bottom-right' | 'bottom-left';
  enableScrollBar?: boolean;
}

export function Dropdown (props: DropdownProps) {
  const {
    trigger = 'click',
    placement = 'bottom-left',
    overlay,
    children,
    enableScrollBar = false,
  } = props;
  const [show, setShow] = useState<boolean>(false);

  const handleClickOverlay = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const setHidEvent = useCallback(() => {
    document.addEventListener('click', (e: any) => {
      e.stopPropagation();
      setShow(false);
    }, { once: true, capture: true });
  }, [setShow]);

  const handleMouseOver = useCallback(() => {
    if (trigger === 'hover') {
      setShow(true);
    }
  }, [trigger, setShow]);

  const handleClickTriggerButton = useCallback((e: any) => {
    e.stopPropagation();
    if (trigger === 'click') {
      setShow(!show);
      setHidEvent();
    }
  }, [setHidEvent, show, trigger]);

  return (
    <DropdownContainer onMouseOver={handleMouseOver}>
      <div className="content" onClick={handleClickTriggerButton}>{children}</div>
      <div className={cls('overlay', {
        show,
        scroll: enableScrollBar,
      }, placement)} onClick={handleClickOverlay}>
        <div className="overlay-content">{overlay}</div>
      </div>
    </DropdownContainer>
  );
}
