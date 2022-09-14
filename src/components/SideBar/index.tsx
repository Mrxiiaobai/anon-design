import React, { FC } from 'react';
import { SideBar } from 'antd-mobile';
import { SideBarProps } from 'antd-mobile/es/components/side-bar';
import { attachPropertiesToComponent } from '../../utils/common';
import './index.less';

const KpSideBar: FC<SideBarProps> = ({ children, ...props }) => {
  return <SideBar {...props}>{children}</SideBar>;
};

export default attachPropertiesToComponent(KpSideBar, {
  Item: SideBar.Item,
});
