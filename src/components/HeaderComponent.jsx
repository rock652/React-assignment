import { Layout, Menu, Button, theme, Avatar } from 'antd';

const { Header, Sider, Content } = Layout;

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MoonOutlined,
    BellOutlined,
    TwitchOutlined,
    UserOutlined
} from '@ant-design/icons';

const HeaderComponent = ({ collapsed, setCollapsed }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
  return (
    <Header style={{ padding: 0, background: colorBgContainer, position:"sticky",top:0, zIndex:"999px", display:"flex",justifyContent:"space-between    " }}>
        <>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined style={{fontSize:"22px"}} /> : <MenuFoldOutlined style={{fontSize:"22px"}} />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
   
      <div style={{display:"flex",justifyContent:"space-between", gap:"2rem"}}>

      <MoonOutlined style={{fontSize:"22px"}} />
      <BellOutlined style={{fontSize:"22px"}} />
      <TwitchOutlined style={{fontSize:"22px"}} />

      <Avatar size={50} style={{ backgroundColor: '#87d068',marginRight:"20px",marginTop:"8px" }} icon={<UserOutlined  />} />
    </div>

    </>    </Header>
  );
};

export default HeaderComponent;
