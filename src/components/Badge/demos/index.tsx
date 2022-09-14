import React from 'react';
import { Badge, Space, Card } from '@anon/design-mobile';

import styles from './index.less';

const App = () => {
  return (
    <>
      <Card title="基础用法">
        <Space style={{ '--gap': '24px' }}>
          <Badge content="5">
            <div className={styles.box} />
          </Badge>
          <Badge content="新">
            <div className={styles.box} />
          </Badge>
          <Badge content={Badge.dot}>
            <div className={styles.box} />
          </Badge>
        </Space>
      </Card>

      <Card title="带边框">
        <Badge content="更新啦" bordered>
          <div className={`${styles.box} ${styles.dark}`} />
        </Badge>
      </Card>

      <Card title="独立使用">
        <Space>
          <Badge content="99+" />
          <Badge content="新消息!" />
        </Space>
      </Card>

      <Card title="自定义颜色和偏移量">
        <Space style={{ '--gap': '24px' }}>
          <Badge color="#108ee9" content={Badge.dot} style={{ '--right': '100%', '--top': '100%' }}>
            <div className={styles.box} />
          </Badge>
          <Badge color="#87d068" content={Badge.dot} style={{ '--right': '100%' }}>
            <div className={styles.box} />
          </Badge>
          <Badge content={Badge.dot}>
            <div className={styles.box} />
          </Badge>
          <Badge color="orange" content={Badge.dot} style={{ '--top': '100%' }}>
            <div className={styles.box} />
          </Badge>
        </Space>
      </Card>
    </>
  );
};

export default App;
