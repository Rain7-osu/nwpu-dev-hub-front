import React, { memo, useCallback, useRef, useState } from 'react';
import { BaseContainer } from '@src/pages/User/style';
import { Form } from '@src/components/Form';
import { Icon } from '@src/components/Icon';
import regex from '@src/utils/regex';
import { Button } from '@src/components/Button';
import { useRouter } from '@src/routes';
import { modal } from '@src/components/Modal';
import { fetchEmailCodeSignIn } from '@src/api/fetchEmailCodeSignIn';
import { fetchSignIn, SignInFormData } from '@src/api/fetchSignIn';

const WAITING_TIME = 60;

interface FormData extends SignInFormData {
  ['confirm-password']: string;
}

export const SignIn = memo(() => {
  const router = useRouter();

  const [password, setPassword] = useState<string>('');
  const [cpassword, setCpassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const isGettingCode = useRef<boolean>(false);
  const isSignInIng = useRef<boolean>(false);

  const [waiting, setWaiting] = useState<number>(0);

  const handleSubmit = useCallback(async (data: FormData) => {
    if (isSignInIng.current) {
      return;
    }

    try {
      isSignInIng.current = true;
      const { username, password, code, email } = data;
      await fetchSignIn({ username, password, code, email });
      modal.show({
        title: '注册成功',
        content: '点击确认返回登录',
        onOk() {
          router.push({ path: '/user/login' });
        },
        okText: '返回登录',
      });
      isSignInIng.current = false;
    } catch (err) {
      modal.show({
        title: '注册失败',
        content: String(err),
      });
      isSignInIng.current = false;
    }
  }, [router]);

  const doWaiting = useCallback(() => {
    let tmpWaiting = WAITING_TIME;
    const timer = setInterval(() => {
      tmpWaiting--;
      setWaiting(tmpWaiting);
      if (tmpWaiting <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  }, []);

  const handleGetCode = useCallback(async () => {
    if (!email || isGettingCode.current) {
      return;
    }

    try {
      isGettingCode.current = true;
      await fetchEmailCodeSignIn({ email });
      doWaiting();

      modal.show({
        title: '发送成功',
        content: '请查看您的邮箱',
      });
      isGettingCode.current = false;
    } catch (err) {
      modal.show({
        title: '发送失败',
        content: String(err),
      });
      isGettingCode.current = false;
    }
  }, [doWaiting, email, isGettingCode]);

  const handleGoToLogin = useCallback(() => {
    router.push({ path: '/user/login' });
  }, [router]);

  return (
    <BaseContainer>
      <div className="form-picture">
        <img alt="login-pic" src={findSrc('/assets/signup_pic.jpg')} />
      </div>
      <div className="form-container">
        <Form<FormData>
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
            htmlType="password"
            onChange={(value) => setPassword(String(value))}
            validator={(value) => typeof value === 'string' && regex.password.test(password)}
            errMsg="密码至少包括一个英文字符和数字，可以使用~!@#$%^&*_+=-符号！"
            placeholder="请输入密码!"
          />
          <Form.Item
            label={<Icon className="icon-class" type="password" />}
            labelPlacement="left"
            className="only-bottom-border"
            name="confirm-password"
            htmlType="password"
            onChange={(value) => setCpassword(String(value))}
            validator={(value) => typeof value === 'string' && cpassword === password}
            errMsg="两次输入的密码不一致"
            placeholder="请再次输入密码"
          />
          <Form.Item
            label={<Icon className="icon-class" type="email" />}
            labelPlacement="left"
            className="only-bottom-border"
            name="email"
            onChange={(value) => setEmail(String(value))}
            validator={(value) => typeof value === 'string' && regex.email.test(value)}
            errMsg="请输入邮箱！"
            placeholder="请输入邮箱"
          />
          <div className="email-code">
            <Form.Item
              labelPlacement="left"
              className="email-code-form-item"
              name="code"
              validator={(value) => typeof value === 'string' && regex.code.test(value)}
              errMsg="请输入验证码！"
              placeholder="邮箱验证码"
            />
            <Button
              extClass="code-button"
              type="primary"
              disabled={waiting > 0}
              onClick={handleGetCode}
            >
              {waiting > 0
                ? `${waiting}s`
                : '获取验证码'
              }
            </Button>
          </div>
          <Form.Item
            render={<Button extClass="login-button" block htmlType="submit">注册</Button>}
          />
        </Form>
        <div className="bottom-link">
          <Button extClass="link-button" onClick={handleGoToLogin}>已有账号？去登录</Button>
        </div>
      </div>
    </BaseContainer>
  );
});

SignIn.displayName = 'SignIn';