import React from 'react';
import { Slider, KpToast, Card } from '@anon/design-mobile';

const marks = {
  0: 0,
  20: 20,
  40: 40,
  60: 60,
  80: 80,
  100: 100,
};

const App = () => {
  const toastValue = (value: number | number[]) => {
    let text = '';
    if (typeof value === 'number') {
      text = `${value}`;
    } else {
      text = `[${value.join(',')}]`;
    }
    KpToast.show(`当前选中值为：${text}`);
    console.log(value);
  };

  return (
    <>
      <Card title="基础用法">
        <Slider onAfterChange={toastValue} />
      </Card>

      <Card title="显示刻度并指定步距">
        <Slider ticks step={10} />
      </Card>

      <Card title="传入刻度标记">
        <Slider marks={marks} ticks />
      </Card>

      <Card title="最大/最小值">
        <Slider step={100} min={100} max={1000} ticks onAfterChange={toastValue} />
      </Card>

      <Card title="默认值">
        <Slider step={20} defaultValue={40} />
      </Card>

      <Card title="在拖动时显示悬浮提示">
        <Slider step={20} defaultValue={60} popover />
      </Card>
    </>
  );
};

export default App;
