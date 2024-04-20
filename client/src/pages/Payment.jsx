import { useState } from 'react';
import '../components/css/payment.css';
// import from ''
import PaymentElection from '../components/PaymentElection';
import DatePick from '../components/Date';
import CardComp from '../components/Card/Card';
import { Flex, Input } from 'antd';


const { TextArea } = Input;

const Payment = () => {
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        cardHolder: '',
        expirationDate: '',
        cvv: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPaymentInfo({ ...paymentInfo, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Reset form fields
        setPaymentInfo({
            cardNumber: '',
            cardHolder: '',
            expirationDate: '',
            cvv: ''
        });
    };

    return (
        <div >
          
            
            {/* <PaymentElection /> */} 
  
            <form className='' onSubmit={handleSubmit}>
                <div>
                <label htmlFor="cardNumber" className='label'>Pay For</label>
                <Flex vertical gap={32}>
                      <TextArea
                          showCount
                          maxLength={100}
                        //   onChange={onChange}
                          placeholder="disable resize"
                              style={{
                                          height: 120,
                                          resize: 'none',
                                      }}
                        />  
                   </Flex>
                   
                </div>

                <div>
                    <label htmlFor="cardHolder" className='label'>Card Holder</label>
                    <input
                        type="text"
                        id="cardHolder"
                        name="cardHolder"
                        value={paymentInfo.cardHolder}
                        onChange={handleInputChange}
                    />
                </div>
                 <label htmlFor="cardNumber" className='label'>Pay Date</label>
                <DatePick/>     
         
                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
};

export default Payment;