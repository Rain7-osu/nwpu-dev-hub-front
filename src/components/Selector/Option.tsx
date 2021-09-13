import React from 'react';
import { OptionContainer } from './styles';
import cls from 'classnames';

export interface OptionProps {
  value: string;
  onClick: (e: unknown) => void;
  selected: boolean;
}

export function Option(props: OptionProps) {
  const { value, onClick, selected } = props;
  return (
    <OptionContainer className={cls({ selected })} onClick={onClick}>
      {value}
    </OptionContainer>
  );
}
