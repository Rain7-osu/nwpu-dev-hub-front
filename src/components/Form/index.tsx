import React, { BaseSyntheticEvent, CSSProperties, ReactNode } from 'react';
import { RequiredTag, Container, Label } from './styles';
import { BaseInput } from './BaseInput';

export interface InputProps {
  value?: string;
  label?: ReactNode;
  labelPlacement?: 'top' | 'left';
  required?: boolean;
  errMsg?: string;
  placeholder?: string;
  render?: () => ReactNode;
  onInput?: (e: BaseSyntheticEvent) => void;
  onBlur?: (e: BaseSyntheticEvent) => void;
  style?: CSSProperties;
}

/**
 * 原来的名称是 Input 后期将改版为纯 FormItem // TODO
 * @param props
 * @constructor
 */
export function FormItem(props: InputProps) {
  const {
    onInput,
    label,
    required,
    errMsg,
    value,
    placeholder,
    render,
    labelPlacement = 'top',
    onBlur,
    style,
  } = props;

  const base =
    typeof render === 'function'
      ? render()
      : <BaseInput value={value} placeholder={placeholder} onInput={onInput} onBlur={onBlur} />;

  return (
    <Container style={style}>
      {labelPlacement === 'top' && <Label>{required && <RequiredTag />} {label}</Label>}
      {labelPlacement === 'top' && base}
      {labelPlacement === 'left' && (
        <div className="single-line-wrapper">
          <Label>{required && <RequiredTag />} {label}</Label>
          {base}
        </div>
      )}
      <div className="error-message">
        {errMsg}
      </div>
    </Container>
  );
}
