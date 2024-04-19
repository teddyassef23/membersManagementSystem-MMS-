import React, { useState } from 'react';
import {
  DollarCircleOutlined,
  SettingOutlined,
   UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import MemberForm from './Form'
import './style.css'
const {  Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  {
    key: 'sub1',
    label: 'Member',
    icon: <UserOutlined />,
    children: [
      { key: '3', label: 'Members', url: '/members' },
      { key: '4', label: 'Add New', url: '/add-member' },
      { key: '5', label: 'Edit', url: '/edit' },
    ],
  },
  {
    key: 'sub2',
    label: 'Payment',
    icon: <DollarCircleOutlined />,
    children: [
      { key: '6', label: 'New payment', url: '/new-payment' },
      { key: '8', label: 'Check Status', url: '/check-status' },
    ],
  },
  {
    key: 'sub3',
    label: 'Setting',
    icon: <SettingOutlined />,
    url: '/settings',
  },
];

const Member = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const renderMenuItems = (menuItems) =>
  menuItems.map((item) => {
    if (item.children) {
      return (
        <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
          {renderMenuItems(item.children)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item key={item.key}>
        <a href={item.url}>{item.label}</a>
      </Menu.Item>
    );
  });

  return (
    <Layout
      style={{
        minHeight: '100vh',
        background: 'blue',
        
      }}
    >
      <Sider className="sideMenu" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical " />
        <Menu theme="dark" className="sideMenu" defaultSelectedKeys={['1']} mode="inline">
          {renderMenuItems(items)}
        </Menu>
      </Sider>
      <Layout >
      <a className='logout' >Logout </a>
        <Content
        
          style={{
            margin: '016px',
            // background:' blue',
            
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
              background: colorBgContainer,
            }}
          >
         
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
             <MemberForm/>
          </div>
        </Content>
      
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          {/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Member;