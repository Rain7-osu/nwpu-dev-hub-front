import React, { CSSProperties, ReactNode, useCallback, useRef, useState } from 'react';
import cls from 'classnames';
import { http } from '@src/api/http';
import { Container, Label, RequiredTag } from './styles';
import { Input, InputProps, InputValue } from './Input';
import { getValuesFromForm } from './helper';
import './styles.less';

export interface FormItemProps extends Pick<InputProps, 'placeholder' | 'htmlType' | 'onInput' | 'onFocus' | 'onBlur'>{
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

  /**
   * 每当表单内的值发生改变时，用于绑定输入表单内的值，
   * 没有添加 validator 验证器时，返回 true
   * @param value 当前值
   * @param validate 是否校验通过
   */
  onChange?: (value: InputValue, validate: boolean) => void;
}


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
    htmlType,
    onChange,
  } = props;

  const [innerValue, setInnerValue] = useState<string>('');
  const [showErr, setShowErr] = useState<boolean>(false);

  const doValidate = useCallback(() => {
    if (typeof validator === 'function') {
      const pass = validator(value || innerValue);
      setShowErr(!pass);
      return !pass;
    } else if(validator instanceof RegExp) {
      const pass = validator.test(String(value || innerValue));
      setShowErr(!pass);
      return !pass;
    }

    return true;
  }, [innerValue, validator, value]);

  const handleInputBlur = useCallback((e) => {
    if (onBlur) {
      onBlur(e);
      return;
    }

    // 自定义渲染不做验证
    if (render) {
      return;
    }

    doValidate();
  }, [doValidate, onBlur, render]);

  const handleInput = useCallback((e) => {
    if (onInput) {
      onInput(e);
    } else {
      setInnerValue(e.target.value);
      onChange && onChange(e.target.value, doValidate());
    }
  }, [doValidate, onChange, onInput]);

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
          htmlType={htmlType}
        />
      );

  const errMessage = (
    <div className="error-message" style={{
      visibility: (showErr || typeof validator === 'undefined') ? 'visible' : 'hidden',
    }} title={errMsg}>
      {errMsg}
    </div>
  );

  return (
    <Container className={className} style={style}>
      {labelPlacement === 'top' && <Label>{required && <RequiredTag />} {label}</Label>}
      {labelPlacement === 'top' && base}
      {labelPlacement === 'top' && errMessage}
      {labelPlacement === 'left' && (
        <div className="single-line-wrapper">
          <Label>{required && <RequiredTag />} {label}</Label>
          <div className="single-line-right">
            {base}
            {errMessage}
          </div>
        </div>
      )}
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

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const data = getValuesFromForm(formRef.current);

    if (onSubmit) {
      onSubmit(data);
      return;
    }

    target && http.post(target, data);
  }, [onSubmit, target]);

  return (
    <form
      ref={formRef}
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
