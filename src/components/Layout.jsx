// App.jsx
import React, { useState } from "react";
import HeaderComponent from "./HeaderComponent";

import {
  UploadOutlined,
  DashboardOutlined,
  TagOutlined,
  ProfileOutlined,
  TruckOutlined,
  ShareAltOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Tabs } from "antd";
import TableComponent from "./TableComponent";
const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Pending",
    },
    {
      key: "2",
      label: "Accepted",
    },
    {
      key: "3",
      label: "AWB Created",
    },
    {
      key: "4",
      label: "Ready to Ship",
    },
    {
      key: "5",
      label: "Shipped",
    },
    {
      key: "6",
      label: "Completed",
    },
    {
      key: "7",
      label: "Cancelled",
    },
  ];
  return (
    <>
      <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} />

      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          trigger={null}
          collapsible
          style={{
            background: "white",
            position: "fixed",
            zIndex: 1,
            height: "100vh",
            top: 68,
          }}
          collapsed={collapsed}
        >
          <div className="demo-logo-vertical" />
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <DashboardOutlined />,
                label: "Dashboard",
              },
              {
                key: "2",
                icon: <TagOutlined />,
                label: "Inventory",
              },
              {
                key: "3",
                icon: <ProfileOutlined />,
                label: "Orders",
              },
              {
                key: "4",
                icon: <TruckOutlined />,
                label: "Shipping",
              },
              {
                key: "5",
                icon: <ShareAltOutlined />,
                label: "Channel",
              },
            ]}
          />
        </Sider>
        <Layout style={{ marginLeft: collapsed ? 80 : 200, }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: 15,
              marginTop: "80px",
            }}
          >
            <Tabs
              type="card"
              items={[
                {
                  key: "1",
                  label: "Orders",
                  
                },
              ]}
            />
            <SettingOutlined
              style={{ fontSize: "20px", marginRight: "20px" }}
            />
          </div>

          <div style={{ marginLeft: 20 }}>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </div>
          <Content
            style={{
              margin: "16px",

              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <TableComponent />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
