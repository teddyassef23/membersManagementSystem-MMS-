import { useState } from 'react';
import '../components/css/payment.css';
import PaymentElection from '../components/PaymentElection';

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
        <div className='payment-form'>
            <h2 className='pmt-title'>Payment</h2>
            <PaymentElection />
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