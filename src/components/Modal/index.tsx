import React, { memo, ReactNode, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../Button';
import { ModalBottom, ModalContainer, ModalContent, ModalMain, ModalTitle } from './styles';


export interface BaseModalProps {
  onClose: () => void;
  onOk?: () => void;
  content?: ReactNode;
  title?: ReactNode;
  mask?: boolean;
  okText?: string;
}

function BaseModal(props: BaseModalProps) {
  const { onClose, content, title, mask, onOk, okText } = props;

  const handleClickContent = (e: any) => {
    e.stopPropagation();
  };

  const handleClickContainer = () => {
    onClose();
  };

  const handleClickOk = useCallback(() => {
    onOk && onOk();
    onClose();
  }, [onOk, onClose]);

  return (
    <ModalContainer mask={mask || true} onClick={handleClickContainer}>
      <ModalContent onClick={handleClickContent}>
        <ModalTitle>
          {title}
        </ModalTitle>
        <ModalMain>
          {content}
        </ModalMain>
        <ModalBottom>
          <Button type="primary" onClick={handleClickOk}>{okText || '确认'}</Button>
        </ModalBottom>
        <div className="close" onClick={onClose}>✖</div>
      </ModalContent>
    </ModalContainer>
  );
}

export type OpenParams = Omit<BaseModalProps, 'onClose'> & { onClose?: () => void };

export const modal = {
  show(params: OpenParams ) {
    const { onClose, ...props } = params;
    const element = document.createElement('div');
    document.body.append(element);
    const handleClose = () => {
      onClose && onClose();
      element.remove();
    };
    ReactDOM.render(
      <BaseModal
        onClose={handleClose}
        {...props}
      />,
      element,
    );
  },
};

export interface ModalProps extends OpenParams {
  visible: boolean;
}

export const Modal = memo((props: ModalProps) => {
  const { title, content, visible, onClose, onOk } = props;
  useEffect(() => {
    if (!visible) {
      return;
    }
    modal.show({
      title,
      content,
      onClose,
      onOk,
    });
  }, [content, onClose, title, visible, onOk]);
  return null;
});

Modal.displayName = 'Modal';
