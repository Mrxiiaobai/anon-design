import React, { FC } from 'react';
import { Image } from 'antd-mobile';
import { ImageProps } from 'antd-mobile/es/components/image';
import './index.less';

const KpImage: FC<ImageProps> = (props) => {
  return <Image {...props} />;
};

export default KpImage;
