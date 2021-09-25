import React, { SyntheticEvent } from 'react';
import cls from 'classnames';
import { InputContainer } from './styles';

export type InputValue = string | ReadonlyArray<string> | number | undefined;

export type InputTypes = 'text' | 'password';

export interface InputProps {
  onInput?: (e: SyntheticEvent) => void;
  onBlur?: (e: SyntheticEvent) => void;
  onFocus?: (e: SyntheticEvent) => void;
  onChange?: (e: SyntheticEvent) => void;
  value?: InputValue;
  placeholder?: string;
  readonly?: boolean;
  name?: string;
  inputType?: InputTypes;
}

export function Input (props: InputProps) {
  const {
    value,
    name,
    placeholder,
    onBlur,
    onFocus,
    onInput,
    onChange,
    readonly = false,
    inputType,
  } = props;

  return (
    <InputContainer>
      <input
        name={name}
        className={cls({ readonly })}
        readOnly={readonly}
        value={value}
        placeholder={placeholder}
        onBlur={onBlur}
        onInput={onInput}
        onFocus={onFocus}
        onChange={onChange}
        type={inputType}
      />
    </InputContainer>
  );
}
