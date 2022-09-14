import React, { FC } from 'react';
import { Avatar } from 'antd-mobile';
import { AvatarProps } from 'antd-mobile/es/components/avatar';
import './index.less';

const KpAvatar: FC<AvatarProps> = (props) => {
  return <Avatar {...props} />;
};

export default KpAvatar;
