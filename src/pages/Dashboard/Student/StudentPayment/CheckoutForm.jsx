import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import useMySelectedClasses from '../../../../hooks/useMySelectedClasses';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({selectedClass}) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate()
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const [ , , refetch] = useMySelectedClasses()


    useEffect(() => {
        if (selectedClass.price > 0) {
            axiosSecure.post('/create-payment-intent', { price: selectedClass.price })
                .then(result => {
                    setClientSecret(result.data.clientSecret);
                })
        }
    },[selectedClass])


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if(confirmError){
            console.log(confirmError);
        }
        setProcessing(false)
        if(paymentIntent.status == 'succeeded'){
            const { classId, className, classImage, classCategory, price, startingDate, instructorName, instructorEmail, studentEmail, } = selectedClass;
            navigate('/dashboard/student/paymentHistory')
            axiosSecure.post(`/student/enrolledClass/${user.email}`, {
                date: new Date(),
                paymentId: paymentIntent.id,
                classId,
                className, 
                classImage, 
                classCategory, 
                price, 
                startingDate, 
                instructorName, 
                instructorEmail, 
                studentEmail
            })
            .then(result => {
                console.log(result.data)
                if(result.data.insertedId){
                    refetch()
                }
            })
        }
        

    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;