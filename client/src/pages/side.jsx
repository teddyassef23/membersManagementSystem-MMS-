import React, { useState } from 'react';
import {
 PieChartOutlined,
 UserOutlined,
} from '@ant-design/icons';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Member from './member';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Members Service', '1', <PieChartOutlined />),
  // getItem('Payment Service', '2', <DesktopOutlined />),

  getItem('Members Service', 'sub1', <UserOutlined />, [
    getItem('Add New Member', '3'),
    getItem('Add Member Family', '4'),
    getItem('Edit Member Profile', '5'),
  ]),
  getItem('Payment Service', 'sub2', <UserOutlined />, [
    getItem('Add New Payment', '6'),
    getItem('Change payment', '7'),
    getItem('Edit Payment', '8'),
  ]),



  // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  // getItem('Files', '9', <FileOutlined />),
];
const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px', 
            backgroundColor: ' #b30000',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
             
            }}
          >
            <Breadcrumb.Item>Member Service </Breadcrumb.Item>
            {/* <Breadcrumb.Item>Payment service</Breadcrumb.Item> */}
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Member/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;