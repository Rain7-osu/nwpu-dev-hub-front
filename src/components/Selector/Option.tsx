import React from 'react';
import cls from 'classnames';
import { OptionContainer } from './styles';

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
