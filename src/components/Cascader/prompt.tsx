import React, { FC, useEffect, useState } from 'react';
import { renderToBody } from 'antd-mobile/es/utils/render-to-body';
import Cascader from './index';
import type { CascaderProps, CascaderValue } from 'antd-mobile/es/components/cascader';

export function prompt(props: Omit<CascaderProps, 'value' | 'visible' | 'children'>) {
  return new Promise<CascaderValue[] | null>((resolve) => {
    const Wrapper: FC = () => {
      const [visible, setVisible] = useState(false);
      useEffect(() => {
        setVisible(true);
      }, []);
      return (
        <Cascader
          {...props}
          visible={visible}
          onConfirm={(val, extend) => {
            props.onConfirm?.(val, extend);
            resolve(val);
          }}
          onClose={() => {
            props.onClose?.();
            setVisible(false);
            resolve(null);
          }}
          afterClose={() => {
            props.afterClose?.();
            unmount();
          }}
        />
      );
    };
    const unmount = renderToBody(<Wrapper />);
  });
}
