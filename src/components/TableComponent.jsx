import { Button, Dropdown, Space, Table, Tabs, Tag } from "antd";
import React from "react";
import {
  DownloadOutlined,
  SendOutlined,
  PrinterOutlined,
  DownOutlined,
  RedoOutlined,
  GiftFilled
  
} from "@ant-design/icons";
const TableComponent = () => {
  const dataSource = [
    {
      key: "1",
      channel: "channel",
      orderno: "#TKN2020203754",
      orderdate: "2022-05-04",
      city: "Lucknow",
      customer: "Abhishek Dixit",
      order: "0.00",
        tags: ['Pending'],

        operation: "10 Downing Street",
        description: 'SUmmary',
    },
    {
      key: "2",
      channel: "channel",
      orderno: "#TKN2020203754",
      orderdate: "2022-05-04",
      city: "Lucknow",
      customer: "Abhishek Dixit",
      order: "0.00",
      tags: ['Pending'],
      operation: "10 Downing Street",
      description: 'SUmmary',
    },
    {
        key: "3",
        channel: "channel",
        orderno: "#TKN2020203754",
        orderdate: "2022-05-04",
      city: "Lucknow",
      customer: "Abhishek Dixit",
      order: "0.00",
        tags: ['Pending'],

        operation: "10 Downing Street",
        description: 'SUmmary',
      },

      
  ];

  const columns = [
    Table.EXPAND_COLUMN,
    {
      title: "Channel",
      dataIndex: "channel",
      key: "channel",
      filters: [
        ],
      render: (_, record) => (
   
       <GiftFilled style={{fontSize:"30px", color:"green"}} />
     
      ),
    },
    
    {
      title: "Order No",
      dataIndex: "orderno",
      key: "orderno",
      filters: [
       ],
    
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Order Date",
      dataIndex: "orderdate",
      key: "orderdate",
      filters: [
       ],
    },
    {
        title: "City",
        dataIndex: "city",
        key: "city",
        filters: [
            ],
      },
      {
        title: "Customer Name",
        dataIndex: "customer",
        key: "customer",
        filters: [
            ],
      },
      {
        title: "Order Value",
        dataIndex: "order",
        key: "order",
        filters: [
           ],
        
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (_, { tags }) => {
            const pendingTagIndex = tags?.findIndex(tag => tag === 'Pending');
            const tagsToRender = pendingTagIndex > -1 ? [tags[pendingTagIndex]] : [];
            return (
              <>
                {tagsToRender.map(tag => (
                  <Tag color="green" key={tag}>
                    {tag.toLowerCase()}
                  </Tag>
                ))}
              </>
            );
          },
      },
      {
        title: "Operation",
        dataIndex: "order",
        key: "order",
        render: (_, record) => (
            <Button  >
            Action <DownOutlined />
          </Button>
          ),
      },
      
  ];

  const rowSelection = {
    type: 'checkbox',
  };


  return (
    <>
      <div>
        <div
          style={{
            marginBottom: 16,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display:"flex",gap:"0.5rem"}}>
            <Button icon={<DownloadOutlined />}>Import Orders</Button>
            <Button icon={<SendOutlined />} type="primary" disabled>
              Accept
            </Button>
            <Button icon={<PrinterOutlined />} type="primary" disabled>
              Print <DownOutlined />
            </Button>
          </div>
          <div>
            <Button type="primary" icon={<RedoOutlined />}>Refresh</Button>
          </div>
        </div>

        <Table
          scroll={{ x: "100%" }}
          rowSelection={rowSelection}
          expandable={{
            expandedRowRender: (record) => (
              <p
                style={{
                  margin: 0,
                }}
              >
                {record.description}
              </p>
            ),
          }}
          pagination={{
            pageSizeOptions: ['10', '20', '50', '100'],
            showSizeChanger: true, 
          }}
          dataSource={dataSource}
          columns={columns}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </>
  );
};

export default TableComponent;
