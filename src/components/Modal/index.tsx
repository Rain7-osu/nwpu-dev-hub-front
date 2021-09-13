import React, { memo, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalBottom, ModalContainer, ModalContent, ModalMain, ModalTitle } from './styles';
import { Button } from '../Button';


export interface BaseModalProps {
  onClose: () => void;
  content?: ReactNode;
  title?: ReactNode;
  mask?: boolean;
}

function BaseModal(props: BaseModalProps) {
  const { onClose, content, title, mask } = props;

  const handleClickContent = (e: any) => {
    e.stopPropagation();
  };

  const handleClickContainer = () => {
    onClose();
  };

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
          <Button onClick={onClose}>确认</Button>
        </ModalBottom>
        <div className="close" onClick={onClose}>✖</div>
      </ModalContent>
    </ModalContainer>
  );
}

export interface OpenParams {
  onClose?: () => void;
  content?: ReactNode;
  title?: ReactNode;
}

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
  const { title, content, visible, onClose } = props;
  useEffect(() => {
    if (!visible) {
      return;
    }
    modal.show({
      title,
      content,
      onClose,
    });
  }, [content, onClose, title, visible]);
  return null;
});

Modal.displayName = 'Modal';
