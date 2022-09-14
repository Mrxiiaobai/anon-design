import React, { FC } from 'react';
import { TabBar } from 'antd-mobile';
import { TabBarProps } from 'antd-mobile/es/components/tab-bar';
import { attachPropertiesToComponent } from '../../utils/common';
import './index.less';

const KpTabBar: FC<TabBarProps> = ({ children, ...props }) => {
  return <TabBar {...props}>{children}</TabBar>;
};

export default attachPropertiesToComponent(KpTabBar, {
  Item: TabBar.Item,
});
