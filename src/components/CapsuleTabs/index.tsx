import React, { FC } from 'react';
import { CapsuleTabs } from 'antd-mobile';
import { CapsuleTabsProps } from 'antd-mobile/es/components/capsule-tabs';
import { attachPropertiesToComponent } from '@/utils/common';
import './index.less';

const KpCapsuleTabs: FC<CapsuleTabsProps> = ({ children, ...props }) => {
  return <CapsuleTabs {...props}>{children}</CapsuleTabs>;
};

export default attachPropertiesToComponent(KpCapsuleTabs, {
  Tab: CapsuleTabs.Tab,
});
