import React, { FC } from 'react';
import { Dialog } from 'antd-mobile';
import { DialogProps } from 'antd-mobile/es/components/dialog';
import { attachPropertiesToComponent } from '../../utils/common';
import './index.less';

const KpDialog: FC<DialogProps> = ({ children, ...props }) => {
  return <Dialog {...props}>{children}</Dialog>;
};

export default attachPropertiesToComponent(KpDialog, {
  alert: Dialog.alert,
  confirm: Dialog.confirm,
  clear: Dialog.clear,
  show: Dialog.show,
});
