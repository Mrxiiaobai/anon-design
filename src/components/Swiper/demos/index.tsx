import React, { useRef } from 'react';
import { Button, Space, Swiper, KpToast, Card } from '@anon/design-mobile';
import { SwiperRef } from 'antd-mobile/es/components/swiper';

import styles from './index.less';

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      className={styles.content}
      style={{ background: color }}
      onClick={() => {
        KpToast.show(`你点击了卡片 ${index + 1}`);
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
));

const App = () => {
  const ref = useRef<SwiperRef>(null);
  return (
    <>
      <Card title="基础用法">
        <Swiper>{items}</Swiper>
      </Card>

      <Card title="自动播放">
        <Swiper autoplay>{items}</Swiper>
      </Card>

      <Card title="循环">
        <Swiper loop>{items}</Swiper>
      </Card>

      <Card title="手动控制">
        <Space direction="vertical" block>
          <Swiper allowTouchMove={false} ref={ref} loop>
            {items}
          </Swiper>
          <Space>
            <Button
              onClick={() => {
                ref.current?.swipePrev();
              }}
            >
              上一张
            </Button>
            <Button
              onClick={() => {
                ref.current?.swipeNext();
              }}
            >
              下一张
            </Button>
          </Space>
          <p>在禁用手势拖拽后，可以通过 Ref 进行手动翻页</p>
        </Space>
      </Card>

      <Card title="自定义样式">
        <Space direction="vertical" block>
          <Swiper
            style={{
              '--border-radius': '8px',
            }}
            defaultIndex={3}
          >
            {items}
          </Swiper>
          <p>变量可以控制整体的圆角等样式</p>
        </Space>
      </Card>
    </>
  );
};

export default App;
