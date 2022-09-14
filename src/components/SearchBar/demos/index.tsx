import React, { useRef } from 'react';
import { Button, SearchBar, Space, Card, KpToast } from '@anon/design-mobile';
import { SearchBarRef } from 'antd-mobile/es/components/search-bar';

const App = () => {
  const searchRef = useRef<SearchBarRef>(null);

  return (
    <>
      <Card title="基础用法">
        <SearchBar placeholder="请输入内容" />
      </Card>

      <Card title="获取焦点后显示取消按钮">
        <SearchBar placeholder="请输入内容" showCancelButton />
      </Card>

      <Card title="取消按钮长显">
        <SearchBar
          placeholder="请输入内容"
          cancelText="搜索"
          onCancel={() => KpToast.show('搜索')}
          showCancelButton={() => true}
        />
      </Card>

      <Card title="事件监听和 Ref">
        <Space block direction="vertical">
          <SearchBar
            ref={searchRef}
            placeholder="请输入内容"
            showCancelButton
            onSearch={(val) => {
              KpToast.show(`你搜索了：${val}`);
            }}
            onFocus={() => {
              KpToast.show('获得焦点');
            }}
            onBlur={() => {
              KpToast.show('失去焦点');
            }}
            onClear={() => {
              KpToast.show('清空内容');
            }}
            onCancel={() => {
              KpToast.show('取消搜索');
            }}
          />
          <Space>
            <Button
              onClick={() => {
                searchRef.current?.clear();
              }}
            >
              清空内容
            </Button>
            <Button
              onClick={() => {
                searchRef.current?.focus();
              }}
            >
              激活
            </Button>
          </Space>
        </Space>
      </Card>
    </>
  );
};

export default App;
