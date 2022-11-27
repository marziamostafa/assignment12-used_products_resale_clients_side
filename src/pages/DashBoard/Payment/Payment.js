import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const navigation = useNavigation()
    const data = useLoaderData();
    const { productName, SellingPrice } = data
    console.log(data)



    if (navigation.state === "loading") {
        return <button className="btn loading absolute left-1/2 ">loading</button>
    }
    return (
        <div>
            <h3 className="text-3xl">Payment for {productName}</h3>
            <p className="text-xl">Please pay <strong>${SellingPrice}</strong> to buy this book</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={data}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;