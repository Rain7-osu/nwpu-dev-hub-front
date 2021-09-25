import React, { CSSProperties, ReactNode, useCallback, useState } from 'react';
import cls from 'classnames';
import { http } from '@src/api/http';
import { Container, Label, RequiredTag } from './styles';
import { Input, InputProps, InputValue } from './Input';
import './styles.less';
import { getValuesFromForm } from './helper';

export interface FormItemProps extends Pick<InputProps, 'placeholder' | 'inputType' | 'onInput' | 'onFocus' | 'onBlur'>{
  value?: InputValue;
  label?: ReactNode;
  labelPlacement?: 'top' | 'left';
  name?: string;
  required?: boolean;
  errMsg?: string;
  render?: (() => ReactNode) | ReactNode;
  className?: string;
  style?: CSSProperties;
  validator?: ((value: InputValue) => boolean) | RegExp;
}

/**
 * 原来的名称是 Input 后期将改版为纯 FormItem // TODO
 * @param props
 * @constructor
 */
export function FormItem(props: FormItemProps) {
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
    className,
    validator,
    name,
    inputType,
  } = props;

  const [innerValue, setInnerValue] = useState<string>('');
  const [showErr, setShowErr] = useState<boolean>(false);

  const handleInputBlur = useCallback((e) => {
    if (onBlur) {
      onBlur(e);
    } else {
      if (typeof validator === 'function') {
        console.log(innerValue, 123);
        const pass = validator(value || innerValue);
        console.log(pass, 123);
        setShowErr(!pass);
      } else if(validator instanceof RegExp) {
        const pass = validator.test(String(value || innerValue));
        setShowErr(!pass);
      }
    }
  }, [innerValue, onBlur, validator, value]);

  const handleInput = useCallback((e) => {
    if (onInput) {
      onInput(e);
    } else {
      setInnerValue(e.target.value);
    }
  }, [onInput]);

  const base =
    typeof render === 'function'
      ? render()
      : render || (
        <Input
          name={name}
          value={value || innerValue}
          placeholder={placeholder}
          onInput={handleInput}
          onBlur={handleInputBlur}
          inputType={inputType}
        />
      );

  return (
    <Container className={className} style={style}>
      {labelPlacement === 'top' && <Label>{required && <RequiredTag />} {label}</Label>}
      {labelPlacement === 'top' && base}
      {labelPlacement === 'left' && (
        <div className="single-line-wrapper">
          <Label>{required && <RequiredTag />} {label}</Label>
          {base}
        </div>
      )}
      <div className="error-message" style={{
        visibility: (showErr || typeof validator === 'undefined') ? 'visible' : 'hidden',
      }}>
        {errMsg}
      </div>
    </Container>
  );
}

export interface FormProps extends Partial<Pick<HTMLFormElement, 'method' | 'action'>>{
  target?: string;
  onSubmit?: (e: Record<string, any>) => void;
  className?: string;
  style?: CSSProperties;
  name: string;
}

function Form (props: React.PropsWithChildren<FormProps>) {
  const {
    target,
    onSubmit,
    style,
    className,
    children,
    method,
    action,
    name,
  } = props;

  const handleSubmit = useCallback((e) => {
    const data = getValuesFromForm(document.forms.namedItem(name));
    if (onSubmit) {
      e.preventDefault();
      onSubmit(data);
      return;
    }

    target && http.post(target, data);
  }, [name, onSubmit, target]);

  return (
    <form
      className={cls(className, 'ndd-form')}
      style={style}
      method={method}
      onSubmit={handleSubmit}
      action={action}
      name={name}
    >
      {children}
    </form>
  );
}

Form.Item = FormItem;

export { Form };
