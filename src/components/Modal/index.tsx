import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { ModalBottom, ModalContainer, ModalContent, ModalMain, ModalTitle } from './styles';
import { Button } from '../Button';


export interface ModalProps {
  onClose: () => void;
  content?: ReactNode;
  title?: ReactNode;
}

function Modal(props: ModalProps) {
  const { onClose, content, title } = props;

  const handleClickContent = (e: any) => {
    e.stopPropagation();
  };

  const handleClickContainer = () => {
    onClose();
  };

  return (
    <ModalContainer onClick={handleClickContainer}>
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
      <Modal
        onClose={handleClose}
        {...props}
      />,
      element,
    );
  },
};
