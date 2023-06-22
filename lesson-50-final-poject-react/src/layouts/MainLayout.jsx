// import { Layout, Menu } from "antd";
// import { Link } from "react-router-dom";

// // assets
// import "../assets/styles/layouts/main-layout.scss";

// const NAVIGATION_ITEMS = [
//   {
//     label: <Link to="/account">My account!!!!</Link>,
//     key: "mail",
//   },
//   {
//     label:  <Link to="/calendar">Calendar</Link>,
//     key: "app",
//   },
// ];

// function MainLayout({ children }) {

//   return (
//     <Layout className="main-layout">
//       <Layout.Sider>
//         <Menu items={NAVIGATION_ITEMS} mode="vertical"/>
//       </Layout.Sider >
//       <Layout.Content className="main-layout__page-content">{ children }</Layout.Content>
//       <Layout.Footer className="main-layout__page-footer" mode="vertical">Footer</Layout.Footer>
//     </Layout>
//   );
// }

// export default MainLayout;



import React, { useState } from 'react';
import { BsCalendar2Check } from 'react-icons/bs';
import { Link, useNavigate  } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';

// assets
import "../assets/styles/layouts/main-layout.scss";

const { Header, Sider, Content } = Layout;

const NAVIGATION_ITEMS = [
    {
      label: <Link to="/account">My account</Link>,
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label:  <Link to="/calendar">Calendar</Link>,
      key: "2",
      icon: <BsCalendar2Check/>
    },
  ];


function MainLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const handleClick = e => {
    const result = window.confirm('Do you really want to log out?');
    if(result) {
      navigate("/login");

    }
  };
  

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
      
        <h1 className="logo-tekst"><svg className="logo-svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="IMoH7gpu5un5Dx2vID39Ra" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#9dffce"/><stop offset="1" stop-color="#50d18d"/></linearGradient><path fill="url(#IMoH7gpu5un5Dx2vID39Ra)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/><linearGradient id="IMoH7gpu5un5Dx2vID39Rb" x1="13" x2="36" y1="24.793" y2="24.793" gradientUnits="userSpaceOnUse"><stop offset=".824" stop-color="#135d36"/><stop offset=".931" stop-color="#125933"/><stop offset="1" stop-color="#11522f"/></linearGradient><path fill="url(#IMoH7gpu5un5Dx2vID39Rb)" d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414	c0.391-0.391,1.024-0.391,1.414,0L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414	c0.391,0.391,0.391,1.024,0,1.414l-13,13C22.317,33.098,21.683,33.098,21.293,32.707z"/></svg>Task tracker</h1>
        <div className="demo-logo-vertical" />
        <Menu 
        items={NAVIGATION_ITEMS} 
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        />
        <Button
        onClick={handleClick}
        style={{
            position: 'absolute',
             color: 'blue',
             bottom: '32px'
            }}>Logout</Button>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 600,
            background: colorBgContainer,
          }}
        >
          { children }
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;