import React from 'react';
import { Collapse, Card } from '@anon/design-mobile';

const App = () => {
  return (
    <>
      <Card title="基础用法" padding="0">
        <Collapse defaultActiveKey={['1']}>
          <Collapse.Panel key="1" title="第一项">
            {mockContents[0]}
          </Collapse.Panel>
          <Collapse.Panel key="2" title="第二项">
            {mockContents[1]}
          </Collapse.Panel>
          <Collapse.Panel key="3" title="第三项">
            {mockContents[2]}
          </Collapse.Panel>
        </Collapse>
      </Card>

      <Card title="手风琴模式" padding="0">
        <Collapse accordion>
          <Collapse.Panel key="1" title="第一项">
            手风琴模式只能同时展开一个
          </Collapse.Panel>
          <Collapse.Panel key="2" title="第二项">
            手风琴模式只能同时展开一个
          </Collapse.Panel>
          <Collapse.Panel key="3" title="第三项">
            手风琴模式只能同时展开一个
          </Collapse.Panel>
        </Collapse>
      </Card>
    </>
  );
};

const mockContents = Array(5)
  .fill(null)
  .map(() => 'test');

export default App;
