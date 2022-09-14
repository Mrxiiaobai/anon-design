import React, { FC } from 'react';
import { Slider } from 'antd-mobile';
import { SliderProps } from 'antd-mobile/es/components/slider';
import './index.less';

const KpSlider: FC<SliderProps> = (props) => {
  return <Slider {...props} />;
};

export default KpSlider;
