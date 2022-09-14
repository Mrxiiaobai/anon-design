import React, { FC } from 'react';
import { Modal } from 'antd-mobile';
import { ModalProps } from 'antd-mobile/es/components/modal';
import { attachPropertiesToComponent } from '@/utils';
import './index.less';

const KpModal: FC<ModalProps> = (props) => {
  return <Modal {...props} />;
};

export default attachPropertiesToComponent(KpModal, {
  show: Modal.show,
  alert: Modal.alert,
  confirm: Modal.confirm,
  clear: Modal.clear,
});
