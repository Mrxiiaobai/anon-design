import React, { FC } from 'react';
import { SafeArea } from 'antd-mobile';
import { SafeAreaProps } from 'antd-mobile/es/components/safe-area';
import './index.less';

const KpSafeArea: FC<SafeAreaProps> = (props) => {
  return <SafeArea {...props} />;
};

export default KpSafeArea;
