import React from 'react';
import { Tag, Space, Card } from '@anon/design-mobile';

const App = () => {
  return (
    <>
      <Card title="基础用法">
        <Tag>蜂鸟配送</Tag>
      </Card>

      <Card title="线框标签">
        <Space>
          <Tag color="primary" fill="outline">
            Primary
          </Tag>
          <Tag color="#87d068" fill="outline">
            #87d068
          </Tag>
          <Tag color="#ff6430" fill="outline">
            #ff6430
          </Tag>
        </Space>
      </Card>

      <Card title="语义标签">
        <Space>
          <Tag color="default">Default</Tag>
          <Tag color="primary">测试</Tag>
          <Tag color="success">Success</Tag>
          <Tag color="warning">Warning</Tag>
          <Tag color="danger">Danger</Tag>
        </Space>
      </Card>

      <Card title="圆角标签">
        <Tag round color="#2db7f5">
          kongxin
        </Tag>
      </Card>

      <Card title="自定义颜色">
        <Space>
          <Tag round color="#2db7f5">
            #2db7f5
          </Tag>
          <Tag color="#87d068">#87d068</Tag>
          <Tag color="#108ee9">#108ee9</Tag>
        </Space>
      </Card>

      <Card title="通过 CSS 变量个性化">
        <Space>
          <Tag color="primary" fill="outline" style={{ '--border-radius': '6px' }}>
            Primary
          </Tag>
          <Tag color="success" fill="outline" style={{ '--background-color': '#c8f7c5' }}>
            Success
          </Tag>
          <Tag color="warning" style={{ '--text-color': 'var(--adm-color-text)' }}>
            Warning
          </Tag>
          <Tag color="danger" fill="outline" style={{ '--border-color': 'var(--adm-color-weak)' }}>
            Danger
          </Tag>
        </Space>
      </Card>
    </>
  );
};

export default App;
