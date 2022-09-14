import React, { useState } from 'react';
import { Form, Input, Card } from '@anon/design-mobile';
import styles from './index.less';
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Card title="配合列表使用-水平布局" padding="0">
        <Form layout="horizontal">
          <Form.Item label="用户名" name="username">
            <Input placeholder="请输入用户名" clearable />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input placeholder="请输入密码" clearable type="password" />
          </Form.Item>
        </Form>
      </Card>

      <Card title="配合列表使用-竖直布局" padding="0">
        <Form layout="vertical">
          <Form.Item label="用户名" name="username">
            <Input placeholder="请输入用户名" clearable />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input placeholder="请输入密码" clearable type="password" />
          </Form.Item>
        </Form>
      </Card>

      <Card title="带辅助操作" padding="0">
        <Form layout="horizontal">
          <Form.Item
            label="短信验证码"
            extra={
              <div className={styles.extraPart}>
                <a>发送验证码</a>
              </div>
            }
          >
            <Input placeholder="请输入验证码" clearable />
          </Form.Item>
        </Form>
      </Card>

      <Card title="带密码可见" padding="0">
        <Form layout="horizontal">
          <Form.Item label="用户名" name="username">
            <Input placeholder="请输入用户名" clearable />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            extra={
              <div className={styles.eye}>
                {!visible ? (
                  <EyeInvisibleOutline onClick={() => setVisible(true)} />
                ) : (
                  <EyeOutline onClick={() => setVisible(false)} />
                )}
              </div>
            }
          >
            <Input placeholder="请输入密码" clearable type={visible ? 'text' : 'password'} />
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default App;
