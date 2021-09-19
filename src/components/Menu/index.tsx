import React, { CSSProperties, ReactNode } from 'react';
import './styles.less';
import cls from 'classnames';

export interface MenuItemProps {
  children: ReactNode;
  style?: CSSProperties;
  extClass?: string;
  active?: boolean;
}

function Item (props: MenuItemProps) {
  const { children, style, extClass = '', active = false } = props;

  return (
    <li className={cls('menu-item', { active })}>
      <div className={cls('menu-item-wrapper', extClass)} style={style}>
        {children}
      </div>
    </li>
  );
}

export interface MenuProps {
  children: ReactNode;
  extClass?: string;
  style?: CSSProperties;
  direction?: 'horizontal' | 'vertical';
}

function Menu (props: MenuProps) {
  const {
    children,
    extClass = '',
    style = {},
    direction = 'vertical',
  } = props;

  const {
    minWidth = direction === 'vertical' ? 160 : -1,
    maxWidth = direction === 'vertical' ? 180 : -1,
    ...otherStyle
  } = style;

  const itemStyle = {
    minWidth,
    maxWidth,
    ...otherStyle,
  };

  return (
    <ul className={cls('menu-container', extClass, direction)} style={itemStyle}>
      {children}
    </ul>
  );
}

Menu.Item = Item;

export default Menu;
