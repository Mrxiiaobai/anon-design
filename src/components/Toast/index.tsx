import { Toast } from 'antd-mobile';
import { ToastShowProps } from 'antd-mobile/es/components/toast';
import { attachPropertiesToComponent } from '@/utils';

export default attachPropertiesToComponent(Toast, {
  show: Toast.show,
  clear: Toast.clear,
  config: Toast.config,
});
