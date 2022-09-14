import React, { FC } from 'react';
import { Card } from 'antd-mobile';
import { CardProps } from 'antd-mobile/es/components/card';
import './index.less';

const KpCard: FC<CardProps> = ({ children, ...props }) => {
  return <Card {...props}>{children}</Card>;
};

export default KpCard;
