import React from 'react';
import { NoticeBar, Space, Card } from '@anon/design-mobile';
import { CompassOutline, CloseCircleOutline } from 'antd-mobile-icons';

const App = () => {
  return (
    <>
      <Card title="通告栏语义" padding="0" background="transparent">
        <Space block direction="vertical">
          <NoticeBar content="默认" color="default" />
          <NoticeBar content="警告" color="alert" />
          <NoticeBar content="错误" color="error" />
          <NoticeBar content="信息" color="info" />
        </Space>
      </Card>

      <Card title="可关闭" padding="0">
        <NoticeBar content="这条通知可以关闭" color="alert" closeable />
      </Card>

      <Card title="超长滚动" padding="0">
        <NoticeBar
          content="sdfhaskdjhgaksjdfasdasdf sdfhaskdjhgaksjdfasdasdf sdfhaskdjhgaksjdfasdasdf"
          color="alert"
        />
      </Card>

      <Card title="自定义" padding="0" background="transparent">
        <Space block direction="vertical">
          <NoticeBar
            extra={<CloseCircleOutline style={{ fontSize: 18 }} />}
            icon={<CompassOutline />}
            content={'自定义图标'}
          />
          <NoticeBar
            extra={
              <Space style={{ '--gap': '12px' }}>
                <span>查看详情</span>
                <span>关闭</span>
              </Space>
            }
            content={'自定义右侧功能区'}
            color="alert"
          />
        </Space>
      </Card>
    </>
  );
};

export default App;
