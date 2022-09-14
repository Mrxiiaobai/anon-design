import React, { FC } from 'react';
import { Button } from 'antd-mobile';
import { ButtonProps } from 'antd-mobile/es/components/button';
import './index.less';

const KpButton: FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default KpButton;
