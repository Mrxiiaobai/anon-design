import React, { useState } from 'react';
import { CascaderView, Card } from '@anon/design-mobile';

import { options, sameValueOptions } from '../../Cascader/demos/data';

const App = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <>
      <Card title="基础用法" padding="0" style={{ marginBottom: 10 }}>
        <CascaderView options={options} />
      </Card>

      <Card title="受控模式" padding="0" style={{ marginBottom: 10 }}>
        <CascaderView
          options={options}
          value={value}
          onChange={(val, extend) => {
            setValue(val);
            console.log('onChange', val, extend.items);
          }}
        />
      </Card>

      <Card title="自定义高度" padding="0" style={{ marginBottom: 10 }}>
        <CascaderView options={options} style={{ '--height': '320px' }} />
      </Card>

      <Card title="不同层级中存在 value 重复的选项" padding="0">
        <CascaderView
          options={sameValueOptions}
          onChange={(val, ext) => {
            console.log(val, ext.items);
          }}
        />
      </Card>
    </>
  );
};

export default App;
