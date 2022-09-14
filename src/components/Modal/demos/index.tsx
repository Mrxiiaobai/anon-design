import React from 'react';
import { Button, Modal, Space, KpToast, Divider, Card, Image } from '@anon/design-mobile';

const sleep = (time: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
};

const App = () => {
  return (
    <>
      <Card title="基础用法">
        <Space direction="vertical" block>
          <Button
            block
            onClick={() =>
              Modal.alert({
                content: '人在天边月上明',
                onConfirm: () => {
                  console.log('Confirmed');
                },
              })
            }
          >
            最简单的小对话框
          </Button>
          <Button
            block
            onClick={() => {
              Modal.alert({
                content: '点击遮罩关闭',
                closeOnMaskClick: true,
              });
            }}
          >
            点击遮罩关闭
          </Button>
          <Button
            block
            onClick={() => {
              Modal.alert({
                title: '标题',
                content: (
                  <div style={{ color: '#666F83' }}>
                    说明当前状态提示用户解决方案最好不要超过两行。
                  </div>
                ),
                bodyStyle: { textAlign: 'center' },
                closeOnMaskClick: true,
              });
            }}
          >
            带标题
          </Button>
          <Button
            block
            onClick={() => {
              Modal.show({
                title: '标题',
                content: (
                  <div style={{ color: '#666F83' }}>
                    说明当前状态提示用户解决方案最好不要超过两行。
                  </div>
                ),
                bodyStyle: { textAlign: 'center' },
                closeOnMaskClick: true,
                closeOnAction: true,
                actions: [
                  { text: '主操作', key: 'main', primary: true },
                  { text: '辅助操作', key: 'auxiliary' },
                ],
              });
            }}
          >
            操作按钮样式1
          </Button>
          <Button
            block
            onClick={() => {
              Modal.show({
                title: '复制链接地址',
                content: (
                  <div style={{ color: '#666F83' }}>
                    Https://WWEEERRQEQEEQEQRRR
                    <br />
                    Https://WWEEERRQEQEEQEQRRR
                  </div>
                ),
                bodyStyle: { textAlign: 'center' },
                closeOnMaskClick: true,
                closeOnAction: true,
                actions: [
                  { text: '打开链接', key: 'open', primary: true },
                  { text: '复制链接', key: 'copy' },
                ],
              });
            }}
          >
            复制链接
          </Button>
          <Button
            block
            onClick={() => {
              Modal.alert({
                title: '标题',
                content: (
                  <div style={{ color: '#666F83' }}>
                    说明当前状态提示用户解决方案最好不要超过两行。
                  </div>
                ),
                bodyStyle: { textAlign: 'center' },
                image:
                  'https://bosscdn.otosaas.com/test/20220803/20220803100610202202231901575.png?path=0,438',
                closeOnMaskClick: true,
              });
            }}
          >
            带图片1
          </Button>
          <Button
            block
            onClick={() => {
              Modal.show({
                title: '标题',
                content: (
                  <div style={{ color: '#666F83' }}>
                    说明当前状态提示用户解决方案最好不要超过两行。
                  </div>
                ),
                bodyStyle: { textAlign: 'center' },
                closeOnAction: true,
                image:
                  'https://bosscdn.otosaas.com/test/20220803/20220803100610202202231901575.png?path=0,438',
                closeOnMaskClick: true,
                actions: [
                  { text: '主操作', key: 'main', primary: true },
                  { text: '辅助操作', key: 'auxiliary' },
                ],
              });
            }}
          >
            带图片2
          </Button>
          <Button
            block
            onClick={() => {
              Modal.show({
                title: '标题单行',
                closeOnAction: true,
                content: (
                  <>
                    <h4 style={{ marginBottom: 0, color: '#1D2C4E' }}>标题单行标题单行</h4>
                    <p style={{ color: '#666F83' }}>
                      说明当前状态、提示用户解决方案最好不要超过两行。说明当前状态、提示用户解决方案最好不要超过两行。说明当前状态、提示用户解决方案最好不要超过两行。
                    </p>
                    <h4 style={{ marginBottom: 0, color: '#1D2C4E' }}>标题单行标题单行</h4>
                    <p style={{ marginBottom: 0, color: '#666F83' }}>
                      说明当前状态、提示用户解决方案最好不要超过两行。说明当前状态、提示用户解决方案最好不要超过两行。说明当前状态、提示用户解决方案最好不要超过两行。
                    </p>
                  </>
                ),
                actions: [
                  { text: '主操作', key: 'main', primary: true },
                  { text: '辅助操作', key: 'auxiliary' },
                ],
              });
            }}
          >
            长文本
          </Button>
        </Space>
      </Card>

      <Card title="操作按钮">
        <Space direction="vertical" block>
          <Button
            block
            onClick={() => {
              Modal.show({
                content: '人在天边月上明，风初紧，吹入画帘旌',
                closeOnAction: true,
                actions: [
                  {
                    key: 'online',
                    text: '在线阅读',
                  },
                  {
                    key: 'download',
                    text: '下载文件',
                  },
                ],
              });
            }}
          >
            自定义按钮
          </Button>
          <p>
            如果你想完全自由地控制按钮区域，那么可以通过 actions
            参数来自定义操作按钮，当传入一个二级数组时，可以在同一行内并排放置多个按钮
          </p>
          <Divider />
          <Button
            block
            onClick={() =>
              Modal.confirm({
                content: '是否提交申请',
                onConfirm: async () => {
                  await sleep(3000);
                  KpToast.show({
                    icon: 'success',
                    content: '提交成功',
                    position: 'bottom',
                  });
                },
              })
            }
          >
            异步操作执行成功
          </Button>
          <Button
            block
            onClick={() =>
              Modal.confirm({
                content: '是否提交申请',
                onConfirm: async () => {
                  await sleep(3000);
                  KpToast.show({
                    icon: 'fail',
                    content: '提交失败',
                    position: 'bottom',
                  });
                },
              })
            }
          >
            异步操作执行失败
          </Button>
          <p>
            onAction、onConfirm、onCancel、onClick 这些事件函数都支持返回一个
            Promise，通过这种方式，可以让按钮在执行异步操作的时候变为加载状态
          </p>
        </Space>
      </Card>
    </>
  );
};

export default App;
