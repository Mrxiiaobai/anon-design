import React from 'react';
import { Stepper, Card } from '@anon/design-mobile';

const App = () => {
  return (
    <>
      <Card title="基础用法">
        <Stepper
          defaultValue={1}
          onChange={(value) => {
            console.log(value);
          }}
        />
      </Card>

      <Card title="步长设置">
        <Stepper step={10} defaultValue={10} />
      </Card>

      <Card title="限制输入范围">
        <Stepper min={-5} max={5} />
      </Card>

      <Card title="格式化到整数">
        <Stepper digits={0} />
      </Card>

      <Card title="格式化到一位小数">
        <Stepper digits={1} />
      </Card>
    </>
  );
};

export default App;
