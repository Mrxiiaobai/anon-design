import React, { FC } from 'react';
import { Collapse } from 'antd-mobile';
import { CollapseProps } from 'antd-mobile/es/components/collapse';
import { attachPropertiesToComponent } from '../../utils/common';
import './index.less';

const KpCollapse: FC<CollapseProps> = ({ children, ...props }) => {
  return <Collapse {...props}>{children}</Collapse>;
};

export default attachPropertiesToComponent(KpCollapse, {
  Panel: Collapse.Panel,
});
