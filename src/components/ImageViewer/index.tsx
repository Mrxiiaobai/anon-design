import React, { FC } from 'react';
import { ImageViewer } from 'antd-mobile';
import { ImageViewerProps } from 'antd-mobile/es/components/image-viewer';
import { attachPropertiesToComponent } from '../../utils/common';
import './index.less';

const KpImageViewer: FC<ImageViewerProps> = (props) => {
  return <ImageViewer {...props} />;
};

export default attachPropertiesToComponent(KpImageViewer, {
  Multi: ImageViewer.Multi,
});
