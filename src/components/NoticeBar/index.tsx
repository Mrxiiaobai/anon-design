import React, { FC } from 'react';
import { NoticeBar } from 'antd-mobile';
import { NoticeBarProps } from 'antd-mobile/es/components/notice-bar';
import './index.less';

const KpNoticeBar: FC<NoticeBarProps> = ({ children, ...props }) => {
  return <NoticeBar {...props}>{children}</NoticeBar>;
};

export default KpNoticeBar;
