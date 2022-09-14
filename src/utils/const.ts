export const defaultCity = '北京市';

export const defaultAppCode = 'blm';

export const defaultLocationInfo = {
  addressComponent: {
    city: defaultCity,
  },
  location: {
    lat: 39.90403,
    lng: 116.407526,
  },
};

export const SUFFIX = [
  '地区',
  '市',
  '回族自治州',
  '群岛',
  '蒙古族藏族自治州',
  '柯尔克孜自治州',
  '蒙古自治州',
  '哈萨克自治州',
  '土家族苗族自治州',
  '黎族苗族自治县',
  '黎族自治县',
  '布依族苗族自治州',
  '苗族侗族自治州',
  '彝族自治州',
  '哈尼族彝族自治州',
  '傣族自治州',
  '白族自治州',
  '傈僳族自治州',
  '傣族景颇族自治州',
  '壮族苗族自治州',
  '藏族羌族自治州',
  '特别行政区',
  '藏族自治州',
  '县',
];

export const levelText = {
  无: {
    levelStr: 3,
    score: '7.5',
  },
  A: {
    levelStr: 1,
    score: '6.9',
  },
  AA: {
    levelStr: 2,
    score: '7.2',
  },
  AAA: {
    levelStr: 3,
    score: '7.8',
  },
  AAAA: {
    levelStr: 4,
    score: '8.2',
  },
  AAAAA: {
    levelStr: 5,
    score: '9.2',
  },
};

// 瀑布流筛选的默认数据
export const filterMenpiaoData: any = [
  {
    name: '全部景点',
    options: [],
  },
  {
    name: '默认排序',
    options: [
      { name: '默认排序', value: 0 },
      { name: '距离从近到远', value: 'DistanceAsc' },
      { name: '价格升序', value: 'PriceAsc' },
      { name: '价格降序', value: 'PriceDesc' },
    ],
  },
  {
    name: '景点级别',
    options: [
      { name: '景点级别', value: 0 },
      { name: '1A景区', value: 'A' },
      { name: '2A景区', value: 'AA' },
      { name: '3A景区', value: 'AAA' },
      { name: '4A景区', value: 'AAAA' },
      { name: '5A景区', value: 'AAAAA' },
    ],
  },
];
export const defaultSelectedFilter = {
  0: {
    name: '全部景点',
    value: 0,
  },
  1: {
    name: '默认排序',
    value: 0,
  },
  2: {
    name: '景点级别',
    value: 0,
  },
};

export const defaultShopSelectedFilter = {
  0: {
    name: '全城',
    value: 0,
  },

  1: {
    name: '智能排序',
    value: 3,
  },

  2: {
    name: '全部分类',
    value: 0,
  },

  3: {
    name: '筛选',
    value: 0,
  },
};
