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

  getItem('Member', 'sub1', <UserOutlined />, [
    getItem('Find ', '3'),
    getItem('Add New ', '4'),
    getItem('Edit ', '5'),
  ]),
  getItem('Payment', 'sub2', <DollarCircleOutlined  />, 
  [getItem('New payment',  '6'), 
  getItem('Check Status', '8')]),
  getItem('Setting', 'sub3', <SettingOutlined />),
];
const Member = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
        background: 'blue',
        
      }}
    >
      <Sider className="sideMenu" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical " />
        <Menu theme="dark" className="sideMenu" defaultSelectedKeys={['1']} mode="inline" items={items} />
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