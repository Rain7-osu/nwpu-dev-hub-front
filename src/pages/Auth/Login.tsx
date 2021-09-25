import React, { memo, useCallback } from 'react';
import { Form } from '@src/components/Form';
import regex from '@src/utils/regex';
import { Button } from '@src/components/Button';
import { fetchLogin } from '@src/api/fetchLogin';
import { modal } from '@src/components/Modal';

export const Login = memo(() => {
  const handleSubmit = useCallback(async (data) => {
    try {
      await fetchLogin(data);
    } catch (err) {
      modal.show({
        title: '登录失败',
        content: String(err),
      });
    }
  }, []);

  return (
    <div className="login-form">
      <div className="form-picture">
        <img alt="图片" src="" />
      </div>
      <div className="form-container">
        <Form
          name="login-form"
          onSubmit={handleSubmit}
        >
          <Form.Item
            className="only-bottom-border"
            name="username"
            validator={(value) => typeof value === 'string' && regex.username.test(value)}
            errMsg="用户名只能是英文字母和数字，以及[]-_和空格五种字符！并且长度在 4 - 20"
            placeholder="请输入用户名"
          />
          <Form.Item
            className="only-bottom-border"
            name="password"
            inputType="password"
            validator={(value) => typeof value === 'string' && regex.password.test(value)}
            errMsg="密码必须包括一个字母和数字，且特殊字符只能为 ~!@#$%^&*_+=-，且长度在 8 - 16 位！"
            placeholder="请输入密码"
          />
          <Form.Item
            render={<Button block htmlType="submit">测试</Button>}
          />
        </Form>
      </div>
    </div>
  );
});

Login.displayName = 'Login';
