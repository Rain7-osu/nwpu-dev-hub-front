import { InputValue } from './Input';

export function getValuesFromForm(form: HTMLFormElement | null): Record<string, InputValue> {
  if(!form) {
    return {};
  }

  const inputs: HTMLInputElement[] = [...form.getElementsByTagName('input')];
  const result: Record<string, InputValue> = {};

  for (const input of inputs) {
    const { name, value } = input;
    result[name] = value;
  }

  return result;
}
