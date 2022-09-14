import React, { useState } from 'react';
import { TextArea, Card } from '@anon/design-mobile';

const App = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <Card title="基本的输入框组件">
        <TextArea
          placeholder="请输入内容"
          value={value}
          onChange={(val) => {
            setValue(val);
          }}
        />
      </Card>

      <Card title="指定行数">
        <TextArea placeholder="请输入内容" rows={5} />
      </Card>

      <Card title="根据内容自动调整高度">
        <TextArea placeholder="请输入内容" autoSize={{ minRows: 3, maxRows: 5 }} />
      </Card>

      <Card title="字数统计">
        <TextArea defaultValue={'北极星垂地，\n东山月满川。'} showCount />
      </Card>

      <Card title="字数限制">
        <TextArea defaultValue={'北极星垂地，\n东山月满川。'} showCount maxLength={30} />
      </Card>

      <Card title="禁用状态">
        <TextArea placeholder="请输入内容" value={'北极星垂地，\n东山月满川。'} disabled />
      </Card>

      <Card title="只读状态">
        <TextArea placeholder="请输入内容" value={'北极星垂地，\n东山月满川。'} readOnly />
      </Card>
    </>
  );
};

export default App;
