import React, { FC } from 'react';
import { Tag } from 'antd-mobile';
import { TagProps } from 'antd-mobile/es/components/tag';
import './index.less';

const KpTag: FC<TagProps> = ({ children, ...props }) => {
  return <Tag {...props}>{children}</Tag>;
};

export default KpTag;
