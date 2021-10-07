import React, { memo, useCallback } from 'react';
import { Form } from '@src/components/Form';
import regex from '@src/utils/regex';
import { Button } from '@src/components/Button';
import { fetchLogin } from '@src/api/fetchLogin';
import { modal } from '@src/components/Modal';
import { Icon } from '@src/components/Icon';
import { BaseFormContainer } from '../style';
import { LoginContainer } from '../LoginContainer';

export const Login = memo(() => {
  const handleSubmit = useCallback(async (data) => {
    try {
      await fetchLogin(data);
      location.href = '/';
    } catch (err) {
      modal.show({
        title: '登录失败',
        content: String(err),
      });
    }
  }, []);

  return (
    <LoginContainer>
      <BaseFormContainer>
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
              validator={(value) => typeof value === 'string' && (regex.username.test(value) || regex.email.test(value))}
              errMsg="请输入正确的用户名或邮箱！"
              placeholder="请输入用户名或邮箱"
            />
            <Form.Item
              label={<Icon className="icon-class" type="password" />}
              labelPlacement="left"
              className="only-bottom-border"
              name="password"
              htmlType="password"
              validator={(value) => typeof value === 'string' && regex.password.test(value)}
              errMsg="请输入密码！"
              placeholder="请输入密码"
            />
            <Form.Item
              render={<Button extClass="login-button" block htmlType="submit">登录</Button>}
            />
          </Form>
          <div className="bottom-link">
            <Button type="link" link="/user/register">没有账号？去注册</Button>
            <Button type="link" link="/user/reset-pwd">忘记密码</Button>
          </div>
        </div>
      </BaseFormContainer>
    </LoginContainer>
  );
});

Login.displayName = 'Login';
