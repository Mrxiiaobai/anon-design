import React, { useState } from 'react';
import { Picker, Button, Space, KpToast, Card } from '@anon/design-mobile';
import basicColumns from './columns-data';

// 基础用法
function BasicDemo() {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<(string | null)[]>(['M']);
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        选择
      </Button>
      <Picker
        columns={basicColumns}
        visible={visible}
        title="标题"
        onClose={() => {
          setVisible(false);
        }}
        value={value}
        onConfirm={(v) => {
          setValue(v);
        }}
      />
    </>
  );
}

function ActionsDemo() {
  const [value, setValue] = useState<(string | null)[]>(['M']);
  return (
    <Picker
      columns={basicColumns}
      value={value}
      onConfirm={(v) => {
        setValue(v);
      }}
    >
      {(_, actions) => <Button onClick={actions.open}>选择</Button>}
    </Picker>
  );
}

// 渲染所选值
function RenderChildrenDemo() {
  const [value, setValue] = useState<(string | null)[]>([]);
  return (
    <Picker
      columns={basicColumns}
      value={value}
      onConfirm={setValue}
      onSelect={(val, extend) => {
        console.log('onSelect', val, extend.items);
      }}
    >
      {(items, { open }) => {
        return (
          <Space align="center">
            <Button onClick={open}>选择</Button>
            {items.every((item) => item === null)
              ? '未选择'
              : items.map((item) => item?.label ?? '未选择').join(' - ')}
          </Space>
        );
      }}
    </Picker>
  );
}

const App = () => {
  return (
    <>
      <Card title="基础用法">
        <BasicDemo />
      </Card>

      <Card title="渲染所选值">
        <RenderChildrenDemo />
      </Card>

      <Card title="使用 actions 来控制显示/隐藏">
        <Space direction="vertical" block>
          <ActionsDemo />
          <p>
            在 children 渲染函数中，你可以使用第二个参数 actions 来非常方便的控制 Picker
            的显示或隐藏
          </p>
        </Space>
      </Card>

      <Card title="指令式调用">
        <Button
          onClick={async () => {
            const value = await Picker.prompt({
              columns: basicColumns,
            });
            KpToast.show(`你选择了 ${value}`);
          }}
        >
          弹出 Picker
        </Button>
      </Card>
    </>
  );
};

export default App;
