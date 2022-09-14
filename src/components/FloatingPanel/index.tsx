import React, { FC } from 'react';
import { FloatingPanel } from 'antd-mobile';
import { FloatingPanelProps } from 'antd-mobile/es/components/floating-panel';
import './index.less';

const KpFloatingPanel: FC<FloatingPanelProps> = ({ children, ...props }) => {
  return <FloatingPanel {...props}>{children}</FloatingPanel>;
};

export default KpFloatingPanel;
