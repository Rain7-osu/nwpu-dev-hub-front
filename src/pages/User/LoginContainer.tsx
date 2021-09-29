import React, { ReactNode } from 'react';
import { AuthContainer } from '@src/pages/User/style';
import { DevhubLogo } from '@src/components/DevhubLogo';

export const LoginContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AuthContainer>
      <div className="login-bg">
        <img alt="图片" src={findSrc('/assets/login_bg.png')} />
      </div>
      <div className="auth-form">
        <div className="auth-page-logo">
          <DevhubLogo white type="picture" size="normal" />
        </div>
        {children}
      </div>
    </AuthContainer>
  );
};
