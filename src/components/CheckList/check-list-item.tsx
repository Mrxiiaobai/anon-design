import React, { FC } from 'react';
import { CheckList } from 'antd-mobile';
import { CheckListItemProps } from 'antd-mobile/es/components/check-list/check-list-item';
import './check-list-item.less';

export const KpCheckListItem: FC<CheckListItemProps> = (props) => {
  return <CheckList.Item {...props}></CheckList.Item>;
};

export default KpCheckListItem;
