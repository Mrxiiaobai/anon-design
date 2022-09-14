import React, { FC } from 'react';
import { Badge } from 'antd-mobile';
import { BadgeProps } from 'antd-mobile/es/components/badge';
import { attachPropertiesToComponent } from '../../utils/common';
import './index.less';

const KpBadge: FC<BadgeProps> = ({ children, ...props }) => {
  return <Badge {...props}>{children}</Badge>;
};

export default attachPropertiesToComponent(KpBadge, {
  dot: Badge.dot,
});
