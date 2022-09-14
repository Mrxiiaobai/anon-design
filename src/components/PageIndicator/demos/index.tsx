import React from 'react';
import { PageIndicator, Card } from '@anon/design-mobile';

const App = () => {
  return (
    <>
      <Card title="基础用法">
        <PageIndicator total={4} current={0} />
      </Card>

      <Card title="白色" background="rgb(212 212 212)">
        <PageIndicator total={4} current={0} color="white" />
      </Card>

      <Card title="竖直方向">
        <PageIndicator total={4} current={0} direction="vertical" />
      </Card>

      <Card title="自定义颜色和大小">
        <PageIndicator
          total={4}
          current={0}
          style={{
            '--dot-color': 'rgba(0, 0, 0, 0.4)',
            '--active-dot-color': '#ffc0cb',
            '--dot-size': '10px',
            '--active-dot-size': '30px',
            '--dot-border-radius': '50%',
            '--active-dot-border-radius': '15px',
            '--dot-spacing': '8px',
          }}
        />
      </Card>
    </>
  );
};

export default App;
