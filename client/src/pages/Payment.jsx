import { useState } from 'react';
import '../components/css/payment.css';
// import from ''
// import PaymentElection from '../components/PaymentElection';
import DatePick from '../components/Date';
import { Flex, Input } from 'antd';


const { TextArea } = Input;

const Payment = () => {
    const [paymentInfo, setPaymentInfo] = useState({
        payFor: '',
        amount: '',

    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPaymentInfo({ ...paymentInfo, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Reset form fields
        setPaymentInfo({
            payFor: '',
            amount: '',
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
                              onChange={paymentInfo.paymentMethod}
                              id='payFor'
                            placeholder="disable resize"
                          
                            style={{
                                height: 120,
                                resize: 'none',
                            }}
                        />
                    </Flex>

                </div>

                <div>
                    <label htmlFor="cardHolder" className='label'> Amount</label>
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        // placeholder="disable resize"
                        value={paymentInfo.amount}
                        onChange={handleInputChange}
                    />
                </div>
                <label htmlFor="cardNumber" className='label'>Pay Date</label>
                <DatePick />

                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
};

export default Payment;