import React from 'react';
import { Card, Button, KpToast } from '@anon/design-mobile';
import { AntOutline, RightOutline } from 'antd-mobile-icons';
import styles from './index.less';

const App = () => {
  const onClick = () => {
    KpToast.show('点击了卡片');
  };

  const onHeaderClick = () => {
    KpToast.show('点击了卡片Header区域');
  };

  const onBodyClick = () => {
    KpToast.show('点击了卡片Body区域');
  };

  return (
    <div className="app">
      <Card title="卡片标题" onClick={onClick}>
        卡片内容
      </Card>

      <Card title="卡片标题" onClick={onClick} />

      <Card onClick={onClick}>卡片内容</Card>

      <Card
        title={
          <div style={{ fontWeight: 'normal' }}>
            <AntOutline style={{ marginRight: '4px', color: '#1677ff' }} />
            卡片标题
          </div>
        }
        extra={<RightOutline />}
        onBodyClick={onBodyClick}
        onHeaderClick={onHeaderClick}
        style={{ borderRadius: '16px' }}
      >
        <div className={styles.content}>卡片内容</div>
        <div className={styles.footer} onClick={(e) => e.stopPropagation()}>
          <Button
            color="primary"
            size="small"
            onClick={() => {
              KpToast.show('点击了底部按钮');
            }}
          >
            底部按钮
          </Button>
        </div>
      </Card>

      <Card
        headerStyle={{
          color: '#1677ff',
        }}
        bodyClassName={styles.customBody}
        title="卡片标题"
      >
        卡片内容
      </Card>
    </div>
  );
};

export default App;
