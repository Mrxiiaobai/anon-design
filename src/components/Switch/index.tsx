import React, { FC } from 'react';
import { Switch } from 'antd-mobile';
import { SwitchProps } from 'antd-mobile/es/components/switch';
import './index.less';

const KpSwitch: FC<SwitchProps> = (props) => {
  return <Switch {...props} />;
};

export default KpSwitch;
