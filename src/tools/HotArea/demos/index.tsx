import React from 'react';
import { HotArea } from '@kuping/oto_component';

const mockData = {
  image:
    'https://bosscdn.otosaas.com/test/20220718/20220718162033%E4%B8%8B%E8%BD%BD.png?path=0,348',
  dataSource: [
    {
      height: 124,
      left: 136,
      link: '',
      top: 157.859375,
      width: 186,
    },
  ],
};

const App = () => {
  return <HotArea data={mockData}></HotArea>;
};

export default App;
