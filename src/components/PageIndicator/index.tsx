import React, { FC } from 'react';
import { PageIndicator } from 'antd-mobile';
import { PageIndicatorProps } from 'antd-mobile/es/components/page-indicator';
import './index.less';

const KpPageIndicator: FC<PageIndicatorProps> = (props) => {
  return <PageIndicator {...props} />;
};

export default KpPageIndicator;
