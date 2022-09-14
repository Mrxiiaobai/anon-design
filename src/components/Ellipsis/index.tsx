import React, { FC } from 'react';
import { Ellipsis } from 'antd-mobile';
import { EllipsisProps } from 'antd-mobile/es/components/ellipsis';
import './index.less';

const KpEllipsis: FC<EllipsisProps> = (props) => {
  return <Ellipsis {...props} />;
};

export default KpEllipsis;
