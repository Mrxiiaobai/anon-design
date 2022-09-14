import React, { useState } from 'react';
import { PickerView, Card } from '@anon/design-mobile';
import basicColumns from './columns-data';

const App = () => {
  const [value, setValue] = useState<(string | null)[]>(['Mon', 'am']);

  return (
    <>
      <Card title="基础用法" padding="0">
        <PickerView columns={basicColumns} />
      </Card>

      <Card title="自定义高度" padding="0">
        <PickerView
          columns={basicColumns}
          style={{ '--height': '500px', '--item-height': '2.8rem' }}
        />
      </Card>

      <Card title="受控模式" padding="0">
        <PickerView
          columns={basicColumns}
          value={value}
          onChange={(val, extend) => {
            setValue(val);
            console.log('onChange', val, extend.items);
          }}
        />
      </Card>

      <Card title="通过鼠标滚轮进行选择" padding="0">
        <PickerView columns={basicColumns} mouseWheel={true} />
      </Card>
    </>
  );
};

export default App;
