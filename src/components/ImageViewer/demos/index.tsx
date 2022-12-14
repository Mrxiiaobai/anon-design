import React, { useState } from 'react';
import { ImageViewer, Button, Card } from '@anon/design-mobile';
import { demoImage, demoImages } from './images';
import styles from './index.less';

// 单张图片预览
const Single = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        显示图片
      </Button>
      <ImageViewer
        image={demoImage}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

// 多张图片预览
const Multi = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        显示图片
      </Button>
      <ImageViewer.Multi
        images={demoImages}
        visible={visible}
        defaultIndex={1}
        onClose={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

const ViewWithFooter = () => {
  const [visible, setVisible] = useState(false);

  const renderFooter = (image: string, index: number) => {
    return (
      <div className={styles.footer}>
        <div
          className={styles.footerButton}
          onClick={() => {
            console.log('Loading...');
          }}
        >
          查看原图{index + 1}
        </div>
      </div>
    );
  };

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        显示图片
      </Button>
      <ImageViewer.Multi
        images={demoImages}
        visible={visible}
        defaultIndex={1}
        onClose={() => {
          setVisible(false);
        }}
        renderFooter={renderFooter}
      />
    </>
  );
};

const App = () => {
  return (
    <>
      <Card title="单张图片预览">
        <Single />
      </Card>

      <Card title="多张图片预览">
        <Multi />
      </Card>

      <Card title="指令式调用">
        <Button
          onClick={() => {
            ImageViewer.Multi.show({ images: demoImages });
          }}
        >
          显示图片
        </Button>
      </Card>

      <Card title="手动控制关闭">
        <Button
          onClick={() => {
            const handler = ImageViewer.show({
              image: demoImage,
            });
            setTimeout(() => {
              handler.close();
            }, 3000);
          }}
        >
          显示图片并在3秒后关闭
        </Button>
      </Card>

      <Card title="自定义底部额外内容">
        <ViewWithFooter />
      </Card>
    </>
  );
};

export default App;
