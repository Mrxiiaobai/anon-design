import React, { FC } from 'react';
import { Rate } from 'antd-mobile';
import { RateProps } from 'antd-mobile/es/components/rate';
import './index.less';

const KpRate: FC<RateProps> = (props) => {
  return <Rate {...props} />;
};

export default KpRate;
