import React, { FC } from 'react';
import { Space } from 'antd-mobile';
import { SpaceProps } from 'antd-mobile/es/components/space';
import './index.less';

const KpSpace: FC<SpaceProps> = ({ children, ...props }) => {
  return <Space {...props}>{children}</Space>;
};

export default KpSpace;
