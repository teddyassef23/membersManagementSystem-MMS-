import React, { useState, useEffect } from 'react';
import { DollarCircleOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme , Table, Row, Col} from 'antd';
import MemberForm from './Form';
import Detail from '../../components/Accordion.jsx';
import './style.css';
import { useQuery, gql } from '@apollo/client'; 
const { Content, Footer, Sider } = Layout;
import { GET_ALL_MEMBERS } from '../../utils/mutations.js'; 
import "./MemberForm.css";



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
      {
        title: 'Baptismal Name',
        dataIndex: 'baptismalName',
        key: 'baptismalName',
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
      },
      // {
      //   title: 'Start Date',
      //   dataIndex: 'startDate',
      //   key: 'startDate',
      //   render: (startDate) => new Date(parseInt(startDate)).toLocaleDateString(),
      // },
      // {
      //   title: 'End Date',
      //   dataIndex: 'endDate',
      //   key: 'endDate',
      //   render: (endDate) => new Date(parseInt(endDate)).toLocaleDateString(),
      // },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Primary Phone',
        dataIndex: 'primaryPhone',
        key: 'primaryPhone',
      },

      // Add more columns as needed
    ];
    
  return (
<Layout>
      <div className='container App'>
      
       
      
        <Row gutter={[16, 16]}>
          {/* <Col span={6}> 
            <Sider className="sideMenu" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
              <div className="demo-logo-vertical " />
              <Menu theme="dark" className="sideMenu" defaultSelectedKeys={['1']} mode="inline">
                {renderMenuItems(items)}
              </Menu>
            </Sider>
          </Col> */}
          <Col span={18}>
             
          {/* <Content style={{ marginLeft: '200px' }}> */}
              <div ><h1>All Members </h1>
                <Table dataSource={data.getAllMembers} columns={columns} />
              </div>
            {/* </Content> */}
          </Col>
        </Row>
        <Footer style={{ textAlign: 'center' }}>{/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}</Footer>
      </div> 
     
    </Layout>
  );
};

export default Member;
