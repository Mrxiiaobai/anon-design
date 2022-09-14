import React from 'react';
import { Card, Button, Space } from '@anon/design-mobile';
import { SearchOutline } from 'antd-mobile-icons';
import './index.less';

const App = () => {
  return (
    <div className="app">
      <Card title="基础">
        <Space direction="vertical" block>
          <Button color="primary" block>
            Block Button
          </Button>
          <Button color="primary" block disabled>
            Block Button
          </Button>
          <Button color="default" block>
            Block Button
          </Button>
          <Button color="default" disabled block>
            Block Button
          </Button>
          <Button color="primary" block fill="outline">
            Block Button
          </Button>
        </Space>
      </Card>
      <Card title="按钮尺寸">
        <Space align="end" block>
          <Button color="primary" size="mini">
            Mini
          </Button>
          <Button color="primary" size="small">
            Small
          </Button>
          <Button color="primary" size="middle">
            Middle
          </Button>
          <Button color="primary" size="large">
            Large
          </Button>
        </Space>
      </Card>
      <Card title="语义按钮">
        <Space direction="vertical" block>
          <Button color="default" block>
            Default
          </Button>
          <Button color="primary" block>
            Primary
          </Button>
          <Button color="success" block>
            Success
          </Button>
          <Button color="warning" block>
            Warning
          </Button>
        </Space>
      </Card>
      <Card title="形状">
        <Space direction="vertical" block>
          <Button shape="default" color="primary">
            Default Button
          </Button>
          <Button block shape="rounded" color="primary">
            Rounded Button
          </Button>
          <Button block shape="rectangular" color="primary">
            Rectangular Button
          </Button>
        </Space>
      </Card>
      <Card title="加载中">
        <Space wrap block>
          <Button loading color="primary" loadingText="正在加载">
            Loading
          </Button>
          <Button loading>Loading</Button>
          <Button
            loading="auto"
            onClick={async () => {
              await new Promise((resolve, reject) => {
                setTimeout(() => resolve(console.log('scceess')), 2000);
              });
            }}
          >
            Async Loading
          </Button>
        </Space>
      </Card>
      <Card title="自定义图标">
        <Button color="primary">
          <Space block>
            <SearchOutline></SearchOutline>
            <span>搜索</span>
          </Space>
        </Button>
      </Card>
    </div>
  );
};

export default App;
