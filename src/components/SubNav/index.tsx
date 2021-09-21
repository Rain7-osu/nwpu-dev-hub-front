import React from 'react';
import Menu from '../Menu';
import { Anchor } from '../Anchor';
import { SubNavContainer } from './styles';

export interface SubNavItem {
  anchor: string;
  name: string;
}

export const SubNav: React.FC<{ children: SubNavItem[] }> = ({ children }) => {
  return (
    <SubNavContainer>
      <Menu extClass="sub-nav-menu" direction="horizontal">
        {children.map(({ anchor, name }) => {
          return (
            <Menu.Item key={anchor + name}>
              <Anchor className="sub-nav-link" link={anchor}>{name}</Anchor>
            </Menu.Item>
          );
        })}
      </Menu>
    </SubNavContainer>
  );
};
