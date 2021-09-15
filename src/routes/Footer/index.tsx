import React, { memo } from 'react';
import { FooterContainer } from './styles';
import { DevhubLogo } from '../../components/DevhubLogo';
import { Link } from 'react-router-dom';

export const Footer = memo(() => {
  return (
    <FooterContainer>
      <div className="center-box">
        <div className="footer-wrapper">
          <div className="top">
            <div className="follow-us">关注我们</div>
            {/*<div className="wechat-logo">*/}
            {/*  <img alt="wechat-logo" src="" />*/}
            {/*</div>*/}
          </div>
          <div className="medium">
            <div className="m-left">
              <div className="m-col">
                <Link to="/register" className="c-item-large">加入我们</Link>
                <Link to="/" className="c-item-small">协会纳新</Link>
              </div>
              <div className="m-col">
                <Link to="/"  className="c-item-large">联系我们</Link>
                <Link to="/"  className="c-item-small">合作洽谈</Link>
              </div>
            </div>
            <div className="m-right">
              <DevhubLogo size="large" />
            </div>
          </div>
          <div className="copy-right">
            Copyright © 2021 All Rights Reserved. 版权所有
          </div>
        </div>
      </div>
    </FooterContainer>
  );
});

Footer.displayName = 'Footer';