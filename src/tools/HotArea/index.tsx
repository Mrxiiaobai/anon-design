import React, { FC, PropsWithChildren } from 'react';
import './index.less';

type HotAreaTypes = {
  data: DataTypes;
  appCode: string;
  emptyDataVisible: boolean;
  scrollContainer: HTMLDivElement;
};

type DataTypes = {
  image: string;
  dataSource: DataSourceItemTypes[];
};

type DataSourceItemTypes = {
  left: number;
  top: number;
  width: number;
  height: number;
  link: string;
};

const SOURCE_WIDTH = 489;
const ratio = window.innerWidth / SOURCE_WIDTH;

const HotArea: FC<PropsWithChildren<HotAreaTypes>> = ({ data }) => {
  return (
    <div className="drag-widget-hot-area">
      <div className="drag-widget-hot-area-image">
        <img src={data.image} alt="热区图" />
      </div>
      {data.dataSource?.map((item, index) => (
        <div
          className="drag-widget-hot-area-item"
          key={index}
          style={{
            width: item.width * ratio,
            height: item.height * ratio,
            left: item.left * ratio,
            top: item.top * ratio,
          }}
        ></div>
      ))}
    </div>
  );
};

export default HotArea;
