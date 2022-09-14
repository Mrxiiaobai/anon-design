import { Swiper } from 'antd-mobile';
import { attachPropertiesToComponent } from '../../utils/common';
import './index.less';

const KpSwiper = Swiper;

export default attachPropertiesToComponent(KpSwiper, {
  Item: Swiper.Item,
});
