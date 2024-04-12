import React, { useState } from 'react';
import { Radio, Tabs } from 'antd';
const Home = () => {
  const [size, setSize] = useState('small');
  const onChange = (e) => {
    setSize(e.target.value);
  };
  const memberTab = [
       {
          title: 'Member', 
          id: 1
        },
       {
         title: 'Address', 
         id: 2
       },
       {
          title: 'family', 
          id: 3
        },
  ];
  return (
    <div>
      <Radio.Group
        value={size}
        onChange={onChange}
        style={{
          marginBottom: 16,
        }}
      >
        </Radio.Group>
    
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={size}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `${memberTab.title}`,
            key: id,
            children:    `Content of card tab ${id}`,   
            
            
          };
        })}
      />
    </div>
  );
};
export default Home;