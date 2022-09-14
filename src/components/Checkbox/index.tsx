import React, { FC } from 'react';
import { Checkbox } from 'antd-mobile';
import { CheckboxProps } from 'antd-mobile/es/components/checkbox';
import { attachPropertiesToComponent } from '../../utils/common';
import './index.less';

const KpCheckbox: FC<CheckboxProps> = ({ children, ...props }) => {
  return <Checkbox {...props}>{children}</Checkbox>;
};

export default attachPropertiesToComponent(KpCheckbox, {
  Group: Checkbox.Group,
});
