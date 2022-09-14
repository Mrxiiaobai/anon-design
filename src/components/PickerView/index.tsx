import React, { FC } from 'react';
import { PickerView } from 'antd-mobile';
import { PickerViewProps } from 'antd-mobile/es/components/picker-view';
import './index.less';

const KpPickerView: FC<PickerViewProps> = (props) => {
  return <PickerView {...props} />;
};

export default KpPickerView;
