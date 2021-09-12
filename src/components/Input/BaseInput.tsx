import React, { BaseSyntheticEvent } from 'react';
import { InputContainer } from './styles';

export interface BaseInputProps {
  onInput?: (e: BaseSyntheticEvent) => void;
  onBlur?: (e: BaseSyntheticEvent) => void;
  value?: string;
  placeholder?: string;
}

export function BaseInput(props: BaseInputProps) {
  const { onInput, value, placeholder, onBlur } = props;

  return (
    <InputContainer>
      <input onInput={onInput} value={value} placeholder={placeholder} onBlur={onBlur}/>
    </InputContainer>
  );
}
