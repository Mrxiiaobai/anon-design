import React from 'react';
import { CheckList, Card } from '@anon/design-mobile';
import { SmileOutline } from 'antd-mobile-icons';

const App = () => {
  return (
    <>
      <Card title="基础用法" padding="0">
        <CheckList defaultValue={['B']}>
          <CheckList.Item value="A">A</CheckList.Item>
          <CheckList.Item value="B">B</CheckList.Item>
          <CheckList.Item value="C" disabled>
            C
          </CheckList.Item>
          <CheckList.Item value="D" readOnly>
            D
          </CheckList.Item>
        </CheckList>
      </Card>

      <Card title="多选" padding="0">
        <CheckList multiple defaultValue={['B', 'C']}>
          <CheckList.Item value="A">A</CheckList.Item>
          <CheckList.Item value="B">B</CheckList.Item>
          <CheckList.Item value="C">C</CheckList.Item>
        </CheckList>
      </Card>

      <Card title="自定义选中图标" padding="0">
        <CheckList activeIcon={<SmileOutline />} defaultValue={['B']}>
          <CheckList.Item value="A">A</CheckList.Item>
          <CheckList.Item value="B">B</CheckList.Item>
          <CheckList.Item value="C">C</CheckList.Item>
        </CheckList>
      </Card>

      <Card title="整组只读" padding="0">
        <CheckList defaultValue={['B']} readOnly>
          <CheckList.Item value="A">A</CheckList.Item>
          <CheckList.Item value="B">B</CheckList.Item>
        </CheckList>
      </Card>

      <Card title="整组禁用" padding="0">
        <CheckList disabled>
          <CheckList.Item value="A">A</CheckList.Item>
          <CheckList.Item value="B">B</CheckList.Item>
        </CheckList>
      </Card>
    </>
  );
};

export default App;
