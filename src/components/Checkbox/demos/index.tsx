import React, { useState } from 'react';
import { Checkbox, Space, Card } from '@anon/design-mobile';

const App = () => {
  return (
    <>
      <Card title="基础用法">
        <Space direction="vertical">
          <div
            onClick={() => {
              console.log('点击了');
            }}
          >
            <Checkbox />
          </div>
          <Checkbox>有描述的复选框</Checkbox>
        </Space>
      </Card>

      <Card title="默认选中">
        <Checkbox defaultChecked>默认选中</Checkbox>
      </Card>

      <Card title="占满整行宽度">
        <Space direction="vertical" block>
          <Checkbox block>块级元素</Checkbox>
          <Checkbox>非块级元素</Checkbox>
        </Space>
      </Card>

      <Card title="全选和半选">
        <DemoIndeterminate />
      </Card>
    </>
  );
};

const DemoIndeterminate = () => {
  const items = ['Apple', 'Orange', 'Banana'];
  const [value, setValue] = useState(['Apple']);
  return (
    <Space direction="vertical">
      <Checkbox
        indeterminate={value.length > 0 && value.length < items.length}
        checked={value.length === items.length}
        onChange={(checked: boolean) => {
          if (checked) {
            setValue(items);
          } else {
            setValue([]);
          }
        }}
      >
        半选
      </Checkbox>
      <Checkbox.Group
        value={value}
        onChange={(v: string[]) => {
          setValue(v);
        }}
      >
        <Space direction="vertical">
          {items.map((item) => (
            <Checkbox key={item} value={item}>
              {item}
            </Checkbox>
          ))}
        </Space>
      </Checkbox.Group>
    </Space>
  );
};

export default App;
