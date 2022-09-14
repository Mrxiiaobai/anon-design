import React, { FC } from 'react';
import { List } from 'antd-mobile';
import { ListProps } from 'antd-mobile/es/components/list';
import { attachPropertiesToComponent } from '@/utils/common';
import './index.less';

const KpList: FC<ListProps> = ({ children, ...props }) => {
  return <List {...props}>{children}</List>;
};

export default attachPropertiesToComponent(KpList, {
  Item: List.Item,
});
