import React, { FC } from 'react';
import { Input } from 'antd-mobile';
import { InputProps } from 'antd-mobile/es/components/input';
import './index.less';

const KpInput: FC<InputProps> = (props) => {
  return <Input {...props} />;
};

export default KpInput;
