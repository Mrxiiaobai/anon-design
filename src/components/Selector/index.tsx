import React, { FC } from 'react';
import { Selector } from 'antd-mobile';
import { SelectorProps } from 'antd-mobile/es/components/selector';
import './index.less';

const KpSelector: FC<SelectorProps<any>> = (props) => {
  return <Selector {...props} />;
};

export default KpSelector;
