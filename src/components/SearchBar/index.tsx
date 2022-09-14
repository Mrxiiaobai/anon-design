import React, { FC } from 'react';
import { SearchBar } from 'antd-mobile';
import { SearchBarProps } from 'antd-mobile/es/components/search-bar';
import './index.less';

const KpSearchBar: FC<SearchBarProps> = (props) => {
  return <SearchBar {...props} />;
};

export default KpSearchBar;
