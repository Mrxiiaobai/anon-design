import React, { FC } from 'react';
import { InfiniteScroll } from 'antd-mobile';
import { InfiniteScrollProps } from 'antd-mobile/es/components/infinite-scroll';
import './index.less';

const KpInfiniteScroll: FC<InfiniteScrollProps> = ({ children, ...props }) => {
  return <InfiniteScroll {...props}>{children}</InfiniteScroll>;
};

export default KpInfiniteScroll;
