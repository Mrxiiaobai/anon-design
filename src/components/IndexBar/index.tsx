import React, { FC } from 'react';
import { IndexBar } from 'antd-mobile';
import { IndexBarProps } from 'antd-mobile/es/components/index-bar';
import './index.less';

const KpIndexBar: FC<IndexBarProps> = ({ children, ...props }) => {
  return <IndexBar {...props}>{children}</IndexBar>;
};

export default KpIndexBar;
