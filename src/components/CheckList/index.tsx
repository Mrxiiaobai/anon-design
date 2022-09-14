import React, { FC } from 'react';
import { CheckList } from 'antd-mobile';
import { CheckListProps } from 'antd-mobile/es/components/check-list';
import { attachPropertiesToComponent } from '@/utils/common';
import KpCheckListItem from './check-list-item';
import './index.less';

const KpCheckList: FC<CheckListProps> = ({ children, ...props }) => {
  return <CheckList {...props}>{children}</CheckList>;
};

export default attachPropertiesToComponent(KpCheckList, {
  Item: KpCheckListItem,
});
