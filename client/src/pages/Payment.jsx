import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_MEMBER } from '../utils/queries';
import { UPDATE_MEMBER } from '../utils/mutations';
import DatePick from '../components/Date';
import { Flex, Input } from 'antd';

const { TextArea } = Input;

const Payment = () => {
    const [paymentInfo, setPaymentInfo] = useState({
        payFor: '',
        amount: '',
        memberId: '', // New field for member ID
    });

    const [searchedMember, setSearchedMember] = useState(null); // State to hold the searched member data

    const { loading, error, data } = useQuery(GET_MEMBER, {
        variables: { memberId: paymentInfo.memberId },
        skip: !paymentInfo.memberId, // Skip the query if memberId is not provided
    });

    const [savePayment] = useMutation(UPDATE_MEMBER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPaymentInfo({ ...paymentInfo, [name]: value });
    };

    const handleSearchMember = () => {
        // Trigger search for member by ID
        if (paymentInfo.memberId) {
            setSearchedMember(data?.getMember); // Update searched member data
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await savePayment({
                variables: {
                    memberId: paymentInfo.memberId,
                    paymentInput: {
                        payFor: paymentInfo.payFor,
                        amount: parseFloat(paymentInfo.amount),
                    },
                },
            });
            // Reset form fields after successful submission
            setPaymentInfo({
                payFor: '',
                amount: '',
                memberId: '',
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form className='' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="memberId" className='label'>Member ID</label>
                    <input
                        type="text"
                        id="memberId"
                        name="memberId"
                        value={paymentInfo.memberId}
                        onChange={handleInputChange}
                    />
                    <button type="button" onClick={handleSearchMember}>Search</button>
                </div>

                {searchedMember && (
                    <div>
                        <h2>Member Info</h2>
                        <p>Member ID: {searchedMember.memberNumber}</p>
                        <p>First Name: {searchedMember.firstName}</p>
                        <p>Last Name: {searchedMember.lastName}</p>
                        {/* Render other member details here */}
                    </div>
                )}

                {/* Render payment form */}
                <div>
                    <label htmlFor="cardNumber" className='label'>Pay For</label>
                    <Flex vertical gap={32}>
                        <TextArea
                            showCount
                            maxLength={100}
                            id='payFor'
                            placeholder="Disable resize"
                            style={{
                                height: 120,
                                resize: 'none',
                            }}
                            onChange={handleInputChange}
                            value={paymentInfo.payFor}
                        />
                    </Flex>
                </div>
    
                <div>
                    <label htmlFor="cardHolder" className='label'>Amount</label>
                    <input
                        type="text"
                        id="amount"
                        name="amount"
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
