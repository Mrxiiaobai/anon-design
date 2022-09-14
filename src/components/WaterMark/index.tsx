import React, { FC } from 'react';
import { WaterMark } from 'antd-mobile';
import { WaterMarkProps } from 'antd-mobile/es/components/water-mark';
import './index.less';

const KpWaterMark: FC<WaterMarkProps> = (props) => {
  return <WaterMark {...props} />;
};

export default KpWaterMark;
