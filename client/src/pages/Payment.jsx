import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; 
import Auth from '../utils/auth';
import '../css/payment.css'

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
        // Perform payment processing logic here
        console.log(paymentInfo);
        // Reset form fields
        setPaymentInfo({
            cardNumber: '',
            cardHolder: '',
            expirationDate: '',
            cvv: ''
        });
    };

    return (
        <div className='payment-form'>
            <h2 className='pmt-title'>Payment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="cardNumber" className='label'>Card Number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={paymentInfo.cardNumber}
                        onChange={handleInputChange}
                    />
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
                <div>
                    <label htmlFor="expirationDate" className='label'>Expiration Date</label>
                    <input
                        type="text"
                        id="expirationDate"
                        name="expirationDate"
                        value={paymentInfo.expirationDate}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="cvv" className='label'>CVV</label>
                    <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={paymentInfo.cvv}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
};

export default Payment;