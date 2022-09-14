import React, { FC } from 'react';
import { CascaderView } from 'antd-mobile';
import { CascaderViewProps } from 'antd-mobile/es/components/cascader-view';
import './index.less';

const KpCascaderView: FC<CascaderViewProps> = (props) => {
  return <CascaderView {...props} />;
};

export default KpCascaderView;
