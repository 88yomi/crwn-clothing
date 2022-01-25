import React from 'react';

import { PaystackButton } from 'react-paystack';

const PaystackCheckoutButton = ({ amount }) => {
	// convert the amount from dollars and store it to amount
	amount = amount * 512 * 100;
	const publicKey = process.env.REACT__APP__API__KEY;

	const onSuccess = (successResponse) => {
		console.log('Success message:', successResponse)
		alert('Payment Successful')
	}

	const onClose = () => {
		alert('Thank you for using that button');
	}
	
	const componentProps = {
		amount,
		publicKey,
		email: "randomemail@gmail.com",
		text: "Pay in ₦",
		onSuccess,
		onClose
	}

	return (
		<PaystackButton {...componentProps}	/>
	)
}

export default PaystackCheckoutButton;