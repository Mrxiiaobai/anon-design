import React, { FC } from 'react';
import { NavBar } from 'antd-mobile';
import { NavBarProps } from 'antd-mobile/es/components/nav-bar';
import './index.less';

const KpNavBar: FC<NavBarProps> = ({ children, ...props }) => {
  return <NavBar {...props}>{children}</NavBar>;
};

export default KpNavBar;
