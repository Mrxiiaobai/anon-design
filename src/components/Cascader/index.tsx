import React, { FC } from 'react';
import { Cascader } from 'antd-mobile';
import { CascaderProps } from 'antd-mobile/es/components/cascader';
import { attachPropertiesToComponent } from 'antd-mobile/es/utils/attach-properties-to-component';
import { prompt } from './prompt';

import './index.less';

const KpCascader: FC<CascaderProps> = ({ children, ...props }) => {
  return <Cascader {...props}>{children}</Cascader>;
};

export default attachPropertiesToComponent(KpCascader, {
  prompt,
});
