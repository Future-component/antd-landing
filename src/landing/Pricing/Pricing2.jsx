import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Table } from 'antd';
import { getChildrenToRender, isImg } from './utils';

class Pricing2 extends React.PureComponent {
  getColumns = (columns) => {
    return columns.map((item) => {
      const { childWrapper, ...$item } = item;
      return {
        ...$item,
        title: (
          <div {...childWrapper}>
            {childWrapper.children.map(getChildrenToRender)}
          </div>
        ),
      };
    });
  };

  getDataSource = (dataSource, columns) =>
    dataSource.map((item, i) => {
      const obj = { key: i.toString() };
      item.children.forEach(($item, ii) => {
        if (columns[ii]) {
          obj[columns[ii].key] = (
            <div {...$item}>
              {typeof $item.children === 'string' &&
              $item.children.match(isImg) ? (
                <img src={$item.children} alt="img" />
              ) : (
                $item.children
              )}
            </div>
          );
        }
      });
      return obj;
    });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const { Table: table, wrapper, page, titleWrapper } = dataSource;
    const { columns, ...$table } = table;
    const tableProps = {
      ...$table,
      columns: this.getColumns(columns.children),
      dataSource: this.getDataSource(
        table.dataSource.children,
        columns.children
      ),
    };
    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <div key="title" {...titleWrapper}>
            {titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...dataSource.OverPack}>
            <QueueAnim
              type="bottom"
              // leaveReverse
              ease={['easeOutQuad', 'easeInOutQuad']}
              key="content"
            >
              <Table key="table" {...tableProps} pagination={false} bordered />
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Pricing2;
