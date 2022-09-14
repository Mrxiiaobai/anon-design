import React, { FC } from 'react';
import { Tabs } from 'antd-mobile';
import { TabsProps } from 'antd-mobile/es/components/tabs';
import { attachPropertiesToComponent } from '../../utils/common';
import './index.less';

const KpTabs: FC<TabsProps> = ({ children, ...props }) => {
  return <Tabs {...props}>{children}</Tabs>;
};

export default attachPropertiesToComponent(KpTabs, {
  Tab: Tabs.Tab,
});
