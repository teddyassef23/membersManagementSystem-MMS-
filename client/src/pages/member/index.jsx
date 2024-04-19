import React, { useState, useEffect } from 'react';
import { DollarCircleOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme , Table} from 'antd';
import MemberForm from './Form';
import Detail from '../family/Accordion.jsx';
import './style.css';
import { useQuery, gql } from '@apollo/client'; // Import necessary Apollo Client hooks

const { Content, Footer, Sider } = Layout;

const GET_ALL_MEMBERS = gql`
  query GetAllMembers {
    getAllMembers {
      _id
      memberNumber
      firstName
      lastName
      baptismalName
      gender
      startDate
      endDate
      email
      primaryPhone
      secondaryPhone
      paymentFlag
      created_date
      addresses {
        street
        street2
        city
        state
        zip
        country
        created_date
      }
      memberFamilies {
        id
        firstName
        middleName
        lastName
        baptismalName
        gender
        relationShip
        createdDate
      }
      payment {
        amount
        month
        year
        paymentMethod
        paymentDate
        createdDate
      }
    }
  }
`;

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

  // Use Apollo Client's useQuery hook to fetch data
  const { loading, error, data } = useQuery(GET_ALL_MEMBERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
    const columns = [
      {
        title: 'Member Number',
        dataIndex: 'memberNumber',
        key: 'memberNumber',
      },
      {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
      },
      {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
      },
      // Add more columns as needed
    ];
  
  return (
    <Layout style={{ minHeight: '100vh', background: 'blue' }}>
      <Sider className="sideMenu" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical " />
        <Menu theme="dark" className="sideMenu" defaultSelectedKeys={['1']} mode="inline">
          {renderMenuItems(items)}
        </Menu>
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '016px',
            // background:' blue',
          }}
        >
       
         
                       <Table dataSource={data.getAllMembers} columns={columns} />

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
