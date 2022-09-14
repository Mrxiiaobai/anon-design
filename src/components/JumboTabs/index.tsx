import React, { FC } from 'react';
import { JumboTabs } from 'antd-mobile';
import { JumboTabsProps } from 'antd-mobile/es/components/jumbo-tabs';
import { attachPropertiesToComponent } from '../../utils/common';
import './index.less';

const KpJumboTabs: FC<JumboTabsProps> = ({ children, ...props }) => {
  return <JumboTabs {...props}>{children}</JumboTabs>;
};

export default attachPropertiesToComponent(KpJumboTabs, {
  Tab: JumboTabs.Tab,
});
