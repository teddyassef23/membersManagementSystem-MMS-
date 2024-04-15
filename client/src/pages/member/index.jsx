import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import MemberForm from './Form'
const {  Content, Footer, Sider } = Layout;

const items1 = ['Add new Member', 'Modify Member Information', 'Cancel Menbership'].map((key) => ({
  key,
  label: `nav ${key}`,
}));





const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = [
                { name:'Member'},
                {name: 'Payment'},
                {name: 'Setting'}
              ];
  // const Array = [
  //               { 
  //                 name:'Member',
  //                 id: 1
  //               },
  //               {
  //                 name: 'Payment',
  //                 id: 2
  //               },
    //               {
  //                 name: 'Payment',
  //                 id: 3
  //               },
  //               {
  //                 name: 'Setting',
  //                 id: 4
  //               }
  //             ];

  items1.map((menu)=>{
    console.log(menu)
    
    })
  return {
    key: `Side1 menu`,
    icon: React.createElement(icon),
    label: `Side menu`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };

  
});





const Member = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>

      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          
        </Breadcrumb>
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
              }}
              items={items2}
            />
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
          
            <MemberForm/>
            
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        MofU Design ©{new Date().getFullYear()} Created by Group4
      </Footer>
    </Layout>
  );
};
export default Member;