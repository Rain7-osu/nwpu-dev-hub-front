import React, { BaseSyntheticEvent } from 'react';
import cls from 'classnames';
import { InputContainer } from './styles';

export interface BaseInputProps {
  onInput?: (e: BaseSyntheticEvent) => void;
  onBlur?: (e: BaseSyntheticEvent) => void;
  value?: string;
  placeholder?: string;
  readonly?: boolean;
}

export function BaseInput(props: BaseInputProps) {
  const { onInput, value, placeholder, onBlur, readonly = false } = props;

  return (
    <InputContainer>
      <input
        className={cls({ readonly })}
        readOnly={readonly}
        onInput={onInput}
        value={value}
        placeholder={placeholder}
        onBlur={onBlur}
      />
    </InputContainer>
  );
}
