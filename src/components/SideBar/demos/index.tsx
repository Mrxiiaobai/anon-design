import React from 'react';
import { SideBar, Card } from '@anon/design-mobile';
import { tabs } from './tabs';

const App = () => {
  return (
    <>
      <Card title="基础用法" padding="0">
        <SideBar>
          {tabs.map((item) => (
            <SideBar.Item key={item.key} title={item.title} />
          ))}
        </SideBar>
      </Card>

      <Card title="搭配 Badge 使用" padding="0">
        <SideBar>
          {tabs.map((item) => (
            <SideBar.Item key={item.key} title={item.title} badge={item.badge} />
          ))}
        </SideBar>
      </Card>

      <Card title="禁用状态" padding="0">
        <SideBar>
          {tabs.map((item) => (
            <SideBar.Item key={item.key} title={item.title} disabled={item.disabled} />
          ))}
        </SideBar>
      </Card>
    </>
  );
};

export default App;
