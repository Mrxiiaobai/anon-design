import React, { FC } from 'react';
import { ActionSheet } from 'antd-mobile';
import { ActionSheetProps } from 'antd-mobile/es/components/action-sheet';
import { attachPropertiesToComponent } from '@/utils';
import './index.less';

const KpActionSheet: FC<ActionSheetProps> = (props) => {
  return <ActionSheet className={props.extra ? 'adm-action-sheet-has-extra' : ''} {...props} />;
};

export default attachPropertiesToComponent(KpActionSheet, {
  show: ActionSheet.show,
});
