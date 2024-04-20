import React from 'react';
import { Card } from 'antd';
import SearchCom from '../Search/Search';
import './../css/home.css'

    const memberData = ({
                          fullName: ' Carl Joe Pictor ',
                          address: '123 main Street, LA CA 770123',
                      
        
       });

const CardComp = () => (

                    
  <Card
    title="Find Member by ID "
    bordered={false}
    style={{
      width: 400,
    }}
  >
<SearchCom/>
<label htmlFor="cardHolder" >Full Name ፡ {memberData.fullName}</label>
<label htmlFor="cardHolder" >  Address : {memberData.address}</label>
<label htmlFor="cardHolder" ><span className='note'> We thank you for {memberData.fullName} </span>   </label>

  </Card>
);
export default CardComp;