import React, { BaseSyntheticEvent } from 'react';
import { BaseTextareaContainer } from './styles';

export interface BaseTextareaProps {
  value?: string;
  onInput?: (e: BaseSyntheticEvent) => void;
  maxLength?: number;
}

export function BaseTextarea (props: BaseTextareaProps) {
  const { value, onInput, maxLength } = props;

  return (
    <BaseTextareaContainer>
      <textarea maxLength={ maxLength || 200} onInput={onInput} value={value} />
    </BaseTextareaContainer>
  );
}
