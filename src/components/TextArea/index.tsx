import React, { FC } from 'react';
import { TextArea } from 'antd-mobile';
import { TextAreaProps } from 'antd-mobile/es/components/text-area';
import './index.less';

const KpTextArea: FC<TextAreaProps> = (props) => {
  return <TextArea {...props} />;
};

export default KpTextArea;
