import React, { FC } from 'react';
import { Form } from 'antd-mobile';
import { FormProps } from 'antd-mobile/es/components/form';
import { attachPropertiesToComponent } from '../../utils/common';
import './index.less';

const KpForm: FC<FormProps> = ({ children, ...props }) => {
  return <Form {...props}>{children}</Form>;
};

export default attachPropertiesToComponent(KpForm, {
  Header: Form.Header,
  Item: Form.Item,
});
