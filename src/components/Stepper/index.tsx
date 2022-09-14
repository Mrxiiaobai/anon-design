import React, { FC } from 'react';
import { Stepper } from 'antd-mobile';
import { StepperProps } from 'antd-mobile/es/components/stepper';
import './index.less';

const KpStepper: FC<StepperProps> = (props) => {
  return <Stepper {...props} />;
};

export default KpStepper;
