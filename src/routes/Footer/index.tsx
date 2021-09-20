import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import cls from 'classnames';
import { DevhubLogo } from '../../components/DevhubLogo';
import { modal } from '../../components/Modal';
import qrCode from '../../assets/imgs/home_footer-QRcode.png';
import { FooterContainer } from './styles';

export const Footer = memo(() => {
  const handleGetNewGuys = useCallback((e: any) => {
    e.preventDefault();
    modal.show({
      title: '协会纳新',
      content: '请加社区招新 qq 群：892544890',
    });
  }, []);

  const handleConnect = useCallback((e: any) => {
    e.preventDefault();
    modal.show({
      title: '联系我们',
      content: '请加协会负责人 qq：947051065 或 1061189440 或 1789446861 \n',
    });
  }, []);

  const handleCooperate = useCallback((e: any) => {
    e.preventDefault();
    modal.show({
      title: '合作洽谈',
      content: '请加协会负责人 qq：947051065 或 1061189440 或 1789446861 \n',
    });
  }, []);

  return (
    <FooterContainer>
      <div className="center-box">
        <div className="footer-wrapper">
          <div className="top">
            <div className="follow-us">
              <div className="follow">关注我们</div>
              <div className="wechat-logo" />
            </div>
            <img alt="qrcode" className={cls('qr-code')} src={qrCode} />
          </div>
          <div className="medium">
            <div className="m-left">
              <div className="m-col">
                <Link to="/register" className="c-item-large">加入我们</Link>
                <Link to="/" className="c-item-small" onClick={handleGetNewGuys}>协会纳新</Link>
              </div>
              <div className="m-col">
                <Link to="/" className="c-item-large" onClick={handleConnect}>联系我们</Link>
                <Link to="/" className="c-item-small" onClick={handleCooperate}>合作洽谈</Link>
              </div>
            </div>
            <div className="m-right">
              <DevhubLogo size="normal" type="picture" />
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
