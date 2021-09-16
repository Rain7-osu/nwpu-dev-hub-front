import React, { BaseSyntheticEvent, useState } from 'react';
import { BaseTextareaContainer } from './styles';

export interface BaseTextareaProps {
  value?: string;
  onInput?: (e: BaseSyntheticEvent) => void;
  maxLength?: number;
}

const MAX_LENGTH = 400;

export function BaseTextarea (props: BaseTextareaProps) {
  const { value, onInput, maxLength } = props;
  const [count, setCount] = useState<number>(0);

  const handleInput = (e: BaseSyntheticEvent) => {
    setCount(e.target.value.length);
    onInput && onInput(e);
  }

  return (
    <BaseTextareaContainer>
      <textarea maxLength={maxLength} onInput={handleInput} value={value} />
      <div className="textarea-counter">
        <span className="current-count">{count}</span>
        {maxLength && <span> / {maxLength}</span>}
      </div>
    </BaseTextareaContainer>
  );
}
