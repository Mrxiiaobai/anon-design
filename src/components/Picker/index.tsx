import React, { FC } from 'react';
import { Picker } from 'antd-mobile';
import { PickerProps } from 'antd-mobile/es/components/picker';
import { attachPropertiesToComponent } from '../../utils/common';
import './index.less';

const KpPicker: FC<PickerProps> = ({ children, ...props }) => {
  return <Picker {...props}>{children}</Picker>;
};

export default attachPropertiesToComponent(KpPicker, {
  prompt: Picker.prompt,
});
