import React, { FC } from 'react';
import { SwipeAction } from 'antd-mobile';
import { SwipeActionProps } from 'antd-mobile/es/components/swipe-action';
import './index.less';

const KpSwipeAction: FC<SwipeActionProps> = ({ children, ...props }) => {
  return <SwipeAction {...props}>{children}</SwipeAction>;
};

export default KpSwipeAction;
