import React from 'react';
import { Tabs, Card } from '@anon/design-mobile';

const App = () => {
  return (
    <>
      <Card title="基础用法" padding="0">
        <Tabs>
          <Tabs.Tab title="水果" key="fruits">
            菠萝
          </Tabs.Tab>
          <Tabs.Tab title="蔬菜" key="vegetables">
            西红柿
          </Tabs.Tab>
          <Tabs.Tab title="动物" key="animals">
            蚂蚁
          </Tabs.Tab>
        </Tabs>
      </Card>

      <Card title="超长自动滚动" padding="0">
        <Tabs defaultActiveKey="1">
          <Tabs.Tab title="Espresso" key="1">
            1
          </Tabs.Tab>
          <Tabs.Tab title="Coffee Latte" key="2">
            2
          </Tabs.Tab>
          <Tabs.Tab title="Cappuccino" key="3">
            3
          </Tabs.Tab>
          <Tabs.Tab title="Americano" key="4">
            4
          </Tabs.Tab>
          <Tabs.Tab title="Flat White" key="5">
            5
          </Tabs.Tab>
          <Tabs.Tab title="Caramel Macchiato" key="6">
            6
          </Tabs.Tab>
          <Tabs.Tab title="Cafe Mocha" key="7">
            7
          </Tabs.Tab>
        </Tabs>
      </Card>

      <Card title="没有内容区" padding="0">
        <Tabs>
          <Tabs.Tab title="水果" key="fruits" />
          <Tabs.Tab title="蔬菜" key="vegetables" />
          <Tabs.Tab title="动物" key="animals" />
        </Tabs>
      </Card>

      <Card title="禁用状态" padding="0">
        <Tabs>
          <Tabs.Tab title="水果" key="fruits" />
          <Tabs.Tab title="蔬菜" key="vegetables" />
          <Tabs.Tab title="动物" key="animals" disabled />
        </Tabs>
      </Card>
    </>
  );
};

export default App;
