import React, { FC } from 'react';
import { Grid } from 'antd-mobile';
import { GridProps } from 'antd-mobile/es/components/grid';
import { attachPropertiesToComponent } from '../../utils/common';
import './index.less';

const KpGrid: FC<GridProps> = ({ children, ...props }) => {
  return <Grid {...props}>{children}</Grid>;
};

export default attachPropertiesToComponent(KpGrid, {
  Item: Grid.Item,
});
