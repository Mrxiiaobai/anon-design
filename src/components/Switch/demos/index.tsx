import React from 'react';
import { Space, Switch, Card } from '@anon/design-mobile';
import { CloseOutline, CheckOutline } from 'antd-mobile-icons';

const App = () => {
  return (
    <>
      <Card title="基础用法">
        <Switch />
      </Card>

      <Card title="有默认值">
        <Switch defaultChecked />
      </Card>

      <Card title="文字和图标">
        <Space wrap>
          <Switch uncheckedText="关" checkedText="开" />
          <Switch
            checkedText={<CheckOutline fontSize={18} />}
            uncheckedText={<CloseOutline fontSize={18} />}
          />
          <Switch uncheckedText="0" checkedText="1" />
        </Space>
      </Card>

      <Card title="自定义样式">
        <Switch
          defaultChecked
          style={{
            '--checked-color': '#00b578',
            '--height': '36px',
            '--width': '60px',
          }}
        />
      </Card>
    </>
  );
};
export default App;
