import React, { FC } from 'react';
import { AutoCenter } from 'antd-mobile';
import { AutoCenterProps } from 'antd-mobile/es/components/auto-center';
import './index.less';

const KpAutoCenter: FC<AutoCenterProps> = ({ children, ...props }) => {
  return <AutoCenter {...props}>{children}</AutoCenter>;
};

export default KpAutoCenter;
