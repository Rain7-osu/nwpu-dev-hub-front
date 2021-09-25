import React, { memo, useCallback } from 'react';
import { Form } from '@src/components/Form';
import regex from '@src/utils/regex';
import { Button } from '@src/components/Button';
import { fetchLogin } from '@src/api/fetchLogin';
import { modal } from '@src/components/Modal';
import { useRouter } from '@src/routes';
import { Icon } from '@src/components/Icon';
import { LoginContainer } from './style';

export const Login = memo(() => {
  const router = useRouter();

  const handleSubmit = useCallback(async (data) => {
    try {
      await fetchLogin(data);
      router.push({ path: '/' });
    } catch (err) {
      modal.show({
        title: '登录失败',
        content: String(err),
      });
    }
  }, [router]);

  return (
    <LoginContainer>
      <div className="form-picture">
        <img alt="login-pic" src={findSrc('/assets/login_pic.png')} />
      </div>
      <div className="form-container">
        <Form
          name="login-form"
          onSubmit={handleSubmit}
        >
          <Form.Item
            label={<Icon className="icon-class" type="user" />}
            labelPlacement="left"
            className="only-bottom-border"
            name="username"
            validator={(value) => typeof value === 'string' && regex.username.test(value)}
            errMsg="请输入用户名！"
            placeholder="请输入用户名"
          />
          <Form.Item
            label={<Icon className="icon-class" type="password" />}
            labelPlacement="left"
            className="only-bottom-border"
            name="password"
            inputType="password"
            validator={(value) => typeof value === 'string' && regex.password.test(value)}
            errMsg="请输入密码！"
            placeholder="请输入密码"
          />
          <Form.Item
            render={<Button extClass="login-button" block htmlType="submit">登录</Button>}
          />
        </Form>
      </div>
    </LoginContainer>
  );
});

Login.displayName = 'Login';
