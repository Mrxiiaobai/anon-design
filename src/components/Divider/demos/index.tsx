import React from 'react';
import { Divider, Card } from '@anon/design-mobile';

const App = () => {
  return (
    <>
      <Card title="基础分割线">
        <Divider />
      </Card>

      <Card title="带内容的分割线">
        <Divider>默认内容在中间</Divider>
        <Divider contentPosition="left">左侧内容</Divider>
        <Divider contentPosition="right">右侧内容</Divider>
      </Card>

      <Card title="自定义样式">
        <Divider
          style={{
            color: '#1677ff',
            borderColor: '#1677ff',
            borderStyle: 'dashed',
          }}
        >
          自定义样式
        </Divider>
      </Card>
      <Card title="竖向分割线">
        <>
          Text
          <Divider direction="vertical" />
          <a href="#">Link</a>
          <Divider direction="vertical" />
          <a href="#">Link</a>
        </>
      </Card>
    </>
  );
};

export default App;
