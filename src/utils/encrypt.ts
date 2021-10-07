// 就简单的 base64 加密而已
export const encrypt = (str: string) => {
  const f = window.btoa;
  return f(f(f(f(f(str)))));
};
