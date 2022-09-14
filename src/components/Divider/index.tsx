import React, { FC } from 'react';
import { Divider } from 'antd-mobile';
import { DividerProps } from 'antd-mobile/es/components/divider';
import './index.less';

const KpDivider: FC<DividerProps> = ({ children, ...props }) => {
  return <Divider {...props}>{children}</Divider>;
};

export default KpDivider;
