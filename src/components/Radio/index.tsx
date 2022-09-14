import React, { FC } from 'react';
import { Radio } from 'antd-mobile';
import { RadioProps } from 'antd-mobile/es/components/radio';
import { attachPropertiesToComponent } from '../../utils/common';
import './index.less';

const KpRadio: FC<RadioProps> = ({ children, ...props }) => {
  return <Radio {...props}>{children}</Radio>;
};

export default attachPropertiesToComponent(KpRadio, {
  Group: Radio.Group,
});
